// ===================================
// CAROUSEL FUNCTIONALITY
// For testimonials and property showcases
// ===================================

class Carousel {
    constructor(element, options = {}) {
        this.carousel = element;
        this.options = {
            autoplay: options.autoplay || false,
            interval: options.interval || 5000,
            loop: options.loop !== false,
            ...options
        };
        
        this.currentIndex = 0;
        this.items = [];
        this.autoplayTimer = null;
        
        this.init();
    }
    
    init() {
        // Get all carousel items
        this.items = Array.from(this.carousel.querySelectorAll('.carousel-item'));
        
        if (this.items.length === 0) return;
        
        // Create carousel structure
        this.createControls();
        this.createIndicators();
        
        // Show first item
        this.showItem(0);
        
        // Start autoplay if enabled
        if (this.options.autoplay) {
            this.startAutoplay();
        }
        
        // Add touch support
        this.addTouchSupport();
    }
    
    createControls() {
        // Previous button
        const prevBtn = document.createElement('button');
        prevBtn.className = 'carousel-control carousel-prev';
        prevBtn.innerHTML = '❮';
        prevBtn.setAttribute('aria-label', 'Previous');
        prevBtn.addEventListener('click', () => this.prev());
        
        // Next button
        const nextBtn = document.createElement('button');
        nextBtn.className = 'carousel-control carousel-next';
        nextBtn.innerHTML = '❯';
        nextBtn.setAttribute('aria-label', 'Next');
        nextBtn.addEventListener('click', () => this.next());
        
        this.carousel.appendChild(prevBtn);
        this.carousel.appendChild(nextBtn);
    }
    
    createIndicators() {
        const indicators = document.createElement('div');
        indicators.className = 'carousel-indicators';
        
        this.items.forEach((_, index) => {
            const indicator = document.createElement('button');
            indicator.className = 'carousel-indicator';
            indicator.setAttribute('aria-label', `Go to slide ${index + 1}`);
            indicator.addEventListener('click', () => this.goTo(index));
            indicators.appendChild(indicator);
        });
        
        this.carousel.appendChild(indicators);
        this.indicators = indicators.querySelectorAll('.carousel-indicator');
    }
    
    showItem(index) {
        // Hide all items
        this.items.forEach(item => {
            item.classList.remove('active');
            item.style.display = 'none';
        });
        
        // Show current item
        this.items[index].classList.add('active');
        this.items[index].style.display = 'block';
        
        // Update indicators
        if (this.indicators) {
            this.indicators.forEach((indicator, i) => {
                indicator.classList.toggle('active', i === index);
            });
        }
        
        this.currentIndex = index;
    }
    
    next() {
        let nextIndex = this.currentIndex + 1;
        
        if (nextIndex >= this.items.length) {
            nextIndex = this.options.loop ? 0 : this.currentIndex;
        }
        
        this.showItem(nextIndex);
        this.resetAutoplay();
    }
    
    prev() {
        let prevIndex = this.currentIndex - 1;
        
        if (prevIndex < 0) {
            prevIndex = this.options.loop ? this.items.length - 1 : 0;
        }
        
        this.showItem(prevIndex);
        this.resetAutoplay();
    }
    
    goTo(index) {
        if (index >= 0 && index < this.items.length) {
            this.showItem(index);
            this.resetAutoplay();
        }
    }
    
    startAutoplay() {
        this.autoplayTimer = setInterval(() => {
            this.next();
        }, this.options.interval);
    }
    
    stopAutoplay() {
        if (this.autoplayTimer) {
            clearInterval(this.autoplayTimer);
            this.autoplayTimer = null;
        }
    }
    
    resetAutoplay() {
        if (this.options.autoplay) {
            this.stopAutoplay();
            this.startAutoplay();
        }
    }
    
    addTouchSupport() {
        let touchStartX = 0;
        let touchEndX = 0;
        
        this.carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        this.carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });
        
        const handleSwipe = () => {
            const swipeThreshold = 50;
            const diff = touchStartX - touchEndX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        };
        
        this.handleSwipe = handleSwipe;
    }
    
    destroy() {
        this.stopAutoplay();
        // Remove event listeners and controls
        const controls = this.carousel.querySelectorAll('.carousel-control, .carousel-indicators');
        controls.forEach(control => control.remove());
    }
}

// Initialize all carousels on page load
document.addEventListener('DOMContentLoaded', function() {
    const carousels = document.querySelectorAll('.carousel');
    
    carousels.forEach(carousel => {
        const autoplay = carousel.dataset.autoplay === 'true';
        const interval = parseInt(carousel.dataset.interval) || 5000;
        
        new Carousel(carousel, {
            autoplay: autoplay,
            interval: interval
        });
    });
    
    // Initialize testimonial carousel
    initTestimonialCarousel();
});

// Testimonial Carousel
function initTestimonialCarousel() {
    const carousel = document.querySelector('.testimonial-carousel');
    if (!carousel) return;
    
    const track = carousel.querySelector('.testimonial-track');
    const cards = carousel.querySelectorAll('.testimonial-card');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    
    if (!track || cards.length === 0) return;
    
    let currentIndex = 0;
    let autoplayInterval;
    
    // Create dots
    cards.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });
    
    const dots = dotsContainer.querySelectorAll('.carousel-dot');
    
    function updateCarousel() {
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
        resetAutoplay();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }
    
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000);
    }
    
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
        }
    }
    
    function resetAutoplay() {
        stopAutoplay();
        startAutoplay();
    }
    
    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoplay();
    });
    
    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoplay();
    });
    
    // Touch support
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoplay();
    });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
        startAutoplay();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    // Pause on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    
    // Start autoplay
    startAutoplay();
    updateCarousel();
}

// Export for use in other scripts
window.Carousel = Carousel;
