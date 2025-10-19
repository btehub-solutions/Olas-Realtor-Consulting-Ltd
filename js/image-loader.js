/**
 * Automatic Image Loader
 * Handles automatic image generation from Unsplash/Pexels APIs
 * with Nigeria-relevant content, lazy loading, and optimization
 */

class ImageLoader {
    constructor(config) {
        this.config = config || ImageConfig;
        this.cache = this.loadCache();
        this.observer = null;
        this.loadedImages = new Set();
        this.init();
    }

    /**
     * Initialize the image loader
     */
    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupLazyLoading());
        } else {
            this.setupLazyLoading();
        }
    }

    /**
     * Setup Intersection Observer for lazy loading
     */
    setupLazyLoading() {
        if (!('IntersectionObserver' in window)) {
            // Fallback for browsers without IntersectionObserver
            this.loadAllImages();
            return;
        }

        const options = {
            root: null,
            rootMargin: '50px',
            threshold: 0.01
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.loadImage(entry.target);
                    this.observer.unobserve(entry.target);
                }
            });
        }, options);

        // Observe all images with data-auto-image attribute
        document.querySelectorAll('[data-auto-image]').forEach(img => {
            this.observer.observe(img);
        });
    }

    /**
     * Load a single image
     */
    async loadImage(element) {
        const imageId = element.dataset.autoImage;
        const imageType = element.dataset.imageType || 'content';
        const imageContext = element.dataset.imageContext || 'general';
        
        if (this.loadedImages.has(imageId)) return;

        try {
            // Show placeholder
            this.showPlaceholder(element);

            // Try to get from cache first
            const cachedUrl = this.getCachedImage(imageId);
            if (cachedUrl) {
                await this.setImageSource(element, cachedUrl);
                this.loadedImages.add(imageId);
                return;
            }

            // Fetch new image
            const imageUrl = await this.fetchImage(imageContext, imageType);
            
            if (imageUrl) {
                await this.setImageSource(element, imageUrl);
                this.cacheImage(imageId, imageUrl);
                this.loadedImages.add(imageId);
            } else {
                // Use fallback
                const fallbackUrl = this.getFallbackImage(imageType);
                await this.setImageSource(element, fallbackUrl);
            }
        } catch (error) {
            console.error('Error loading image:', error);
            const fallbackUrl = this.getFallbackImage(imageType);
            await this.setImageSource(element, fallbackUrl);
        }
    }

    /**
     * Fetch image from Unsplash API
     */
    async fetchImage(context, type) {
        const query = this.buildSearchQuery(context);
        const dimensions = this.config.quality[type] || this.config.quality.content;

        try {
            // Try Unsplash first
            const unsplashUrl = await this.fetchFromUnsplash(query, dimensions);
            if (unsplashUrl) return unsplashUrl;

            // Fallback to Pexels if Unsplash fails
            const pexelsUrl = await this.fetchFromPexels(query, dimensions);
            if (pexelsUrl) return pexelsUrl;

            return null;
        } catch (error) {
            console.error('Error fetching image:', error);
            return null;
        }
    }

    /**
     * Fetch from Unsplash API
     */
    async fetchFromUnsplash(query, dimensions) {
        const { accessKey, baseUrl, photosEndpoint } = this.config.api.unsplash;
        
        if (!accessKey || accessKey === 'YOUR_UNSPLASH_ACCESS_KEY') {
            console.warn('Unsplash API key not configured. Using fallback images.');
            return null;
        }

        const params = new URLSearchParams({
            query: query,
            orientation: this.getOrientation(dimensions),
            client_id: accessKey,
            w: dimensions.width,
            h: dimensions.height
        });

        try {
            const response = await fetch(`${baseUrl}${photosEndpoint}?${params}`);
            
            if (!response.ok) {
                throw new Error(`Unsplash API error: ${response.status}`);
            }

            const data = await response.json();
            return data.urls.regular || data.urls.full;
        } catch (error) {
            console.error('Unsplash fetch error:', error);
            return null;
        }
    }

    /**
     * Fetch from Pexels API
     */
    async fetchFromPexels(query, dimensions) {
        const { apiKey, baseUrl, searchEndpoint } = this.config.api.pexels;
        
        if (!apiKey || apiKey === 'YOUR_PEXELS_API_KEY') {
            return null;
        }

        const params = new URLSearchParams({
            query: query,
            per_page: 1,
            orientation: this.getOrientation(dimensions)
        });

        try {
            const response = await fetch(`${baseUrl}${searchEndpoint}?${params}`, {
                headers: {
                    'Authorization': apiKey
                }
            });

            if (!response.ok) {
                throw new Error(`Pexels API error: ${response.status}`);
            }

            const data = await response.json();
            if (data.photos && data.photos.length > 0) {
                return data.photos[0].src.large || data.photos[0].src.original;
            }

            return null;
        } catch (error) {
            console.error('Pexels fetch error:', error);
            return null;
        }
    }

    /**
     * Build search query from context
     */
    buildSearchQuery(context) {
        const page = this.getCurrentPage();
        const prompts = this.config.prompts[page]?.[context] || [];
        
        if (prompts.length > 0) {
            // Randomly select a prompt
            return prompts[Math.floor(Math.random() * prompts.length)];
        }

        // Fallback to generic search
        return 'modern real estate nigeria';
    }

    /**
     * Get current page identifier
     */
    getCurrentPage() {
        const path = window.location.pathname;
        if (path.includes('about')) return 'about';
        if (path.includes('services')) return 'services';
        if (path.includes('property') || path.includes('properties')) return 'properties';
        if (path.includes('contact')) return 'contact';
        return 'home';
    }

    /**
     * Get orientation based on dimensions
     */
    getOrientation(dimensions) {
        const ratio = dimensions.width / dimensions.height;
        if (ratio > 1.2) return 'landscape';
        if (ratio < 0.8) return 'portrait';
        return 'squarish';
    }

    /**
     * Set image source with loading animation
     */
    async setImageSource(element, url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            
            img.onload = () => {
                element.src = url;
                element.classList.add('loaded');
                element.classList.remove('loading');
                resolve();
            };

            img.onerror = () => {
                reject(new Error('Failed to load image'));
            };

            img.src = url;
        });
    }

    /**
     * Show placeholder while loading
     */
    showPlaceholder(element) {
        element.classList.add('loading');
        if (!element.src || element.src === '') {
            element.src = this.config.optimization.blurDataURL;
        }
    }

    /**
     * Get fallback image
     */
    getFallbackImage(type) {
        return this.config.fallbacks[type] || this.config.fallbacks.property;
    }

    /**
     * Cache management
     */
    loadCache() {
        if (!this.config.cache.enabled) return {};
        
        try {
            const cached = localStorage.getItem(this.config.cache.storageKey);
            if (cached) {
                const data = JSON.parse(cached);
                // Check if cache is expired
                if (Date.now() - data.timestamp < this.config.cache.duration) {
                    return data.images || {};
                }
            }
        } catch (error) {
            console.error('Error loading cache:', error);
        }
        
        return {};
    }

    getCachedImage(imageId) {
        return this.cache[imageId] || null;
    }

    cacheImage(imageId, url) {
        if (!this.config.cache.enabled) return;
        
        this.cache[imageId] = url;
        
        try {
            localStorage.setItem(this.config.cache.storageKey, JSON.stringify({
                timestamp: Date.now(),
                images: this.cache
            }));
        } catch (error) {
            console.error('Error saving to cache:', error);
        }
    }

    clearCache() {
        this.cache = {};
        try {
            localStorage.removeItem(this.config.cache.storageKey);
        } catch (error) {
            console.error('Error clearing cache:', error);
        }
    }

    /**
     * Load all images immediately (fallback for no IntersectionObserver)
     */
    loadAllImages() {
        document.querySelectorAll('[data-auto-image]').forEach(img => {
            this.loadImage(img);
        });
    }

    /**
     * Manually trigger image load
     */
    loadImageById(imageId) {
        const element = document.querySelector(`[data-auto-image="${imageId}"]`);
        if (element) {
            this.loadImage(element);
        }
    }

    /**
     * Reload all images (useful for testing)
     */
    reloadAllImages() {
        this.clearCache();
        this.loadedImages.clear();
        this.loadAllImages();
    }
}

// Initialize when script loads
let imageLoader;
if (typeof ImageConfig !== 'undefined') {
    imageLoader = new ImageLoader(ImageConfig);
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImageLoader;
}
