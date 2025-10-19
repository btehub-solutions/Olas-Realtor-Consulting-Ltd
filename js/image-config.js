/**
 * Image Generation Configuration
 * Nigeria-relevant property and lifestyle images with specific prompts per section
 */

const ImageConfig = {
    // Unsplash API Configuration
    api: {
        unsplash: {
            accessKey: 'YOUR_UNSPLASH_ACCESS_KEY', // Replace with your Unsplash API key
            baseUrl: 'https://api.unsplash.com',
            photosEndpoint: '/photos/random'
        },
        pexels: {
            apiKey: 'YOUR_PEXELS_API_KEY', // Alternative: Pexels API key
            baseUrl: 'https://api.pexels.com/v1',
            searchEndpoint: '/search'
        }
    },

    // Aspect ratio configurations
    aspectRatios: {
        banner: '16:9',      // Hero banners
        content: '4:3',      // Content images
        profile: '1:1',      // Testimonials, team photos
        card: '4:3'          // Property cards
    },

    // Image quality settings
    quality: {
        banner: { width: 1920, height: 1080 },
        content: { width: 800, height: 600 },
        profile: { width: 400, height: 400 },
        card: { width: 800, height: 600 },
        thumbnail: { width: 400, height: 300 }
    },

    // Nigeria-specific image prompts by page and section
    // Culturally authentic prompts emphasizing Nigerian people, architecture, and landscapes
    prompts: {
        home: {
            hero: [
                'modern nigerian cityscape lagos island skyline tropical lighting african architecture',
                'luxury gated estate nigeria red earth tropical vegetation nigerian homes',
                'abuja city center modern buildings nigerian architecture sunny day',
                'lagos victoria island waterfront nigerian skyline sunset golden hour',
                'nigerian residential estate gated community tropical trees red soil'
            ],
            about: [
                'happy nigerian family african people viewing new home real estate agent',
                'nigerian real estate consultant african professional meeting clients modern office',
                'modern nigerian home interior african family tropical design natural lighting',
                'african nigerian couple with real estate agent touring property',
                'nigerian family standing in front of new home tropical setting'
            ],
            services: [
                'nigerian property inspector african professional checking documents on site',
                'real estate office nigeria african professionals working modern workspace',
                'modern apartment building lagos nigerian architecture tropical environment',
                'nigerian real estate agent african professional showing property to clients',
                'property inspection nigeria african surveyor examining building'
            ],
            properties: [
                'luxury nigerian home gated estate tropical landscaping red earth',
                'modern apartment building lagos nigerian architecture palm trees',
                'residential estate nigeria african homes gated community green space',
                'nigerian duplex house tropical garden red soil sunny day',
                'lagos luxury property nigerian architecture waterfront tropical setting'
            ],
            testimonials: [
                'professional nigerian businessman african male suit office portrait',
                'professional nigerian businesswoman african female corporate attire smiling',
                'happy nigerian family african parents children home portrait',
                'nigerian professional african male real estate consultant portrait',
                'nigerian female professional african businesswoman confident portrait'
            ]
        },
        about: {
            hero: [
                'modern office building nigeria lagos african architecture tropical setting',
                'professional nigerian business team african people meeting office'
            ],
            company: [
                'modern office interior nigeria african professionals working collaborative space',
                'business meeting nigeria african team discussing documents conference room',
                'corporate office lagos nigerian professionals african people workspace',
                'nigerian office environment african professionals modern interior tropical light',
                'real estate office nigeria african agents working modern design'
            ],
            founder: [
                'professional nigerian businessman african male executive suit confident portrait',
                'nigerian ceo african male leader office portrait professional attire',
                'african nigerian executive businessman formal portrait office background'
            ],
            team: [
                'business team meeting nigeria african professionals collaborating modern office',
                'real estate professionals nigeria african agents team photo office',
                'office collaboration nigeria african team working together modern workspace',
                'nigerian professional team african people group photo corporate setting',
                'african nigerian business team diverse professionals office environment'
            ]
        },
        services: {
            hero: [
                'real estate services nigeria african agent showing property clients',
                'property consultation nigeria african professional meeting clients office'
            ],
            propertySales: [
                'nigerian property inspection african surveyor documents on site red earth',
                'real estate advisory session nigeria african consultant clients meeting',
                'property viewing nigeria african family with agent touring home',
                'nigerian real estate transaction african professionals signing documents',
                'site inspection nigeria african agent examining property tropical setting'
            ],
            propertyManagement: [
                'property management nigeria african supervisor inspecting building maintenance',
                'building maintenance nigeria african workers servicing property',
                'tenant services nigeria african property manager meeting residents',
                'nigerian property caretaker african professional managing estate',
                'facility management nigeria african team maintaining building'
            ],
            training: [
                'business training nigeria african instructor teaching class workshop',
                'professional workshop lagos african participants learning seminar room',
                'real estate training session nigeria african students classroom',
                'nigerian training program african professionals learning modern classroom',
                'workshop nigeria african people attending professional development'
            ]
        },
        properties: {
            hero: [
                'residential properties nigeria gated estates tropical landscaping african homes',
                'luxury homes lagos nigerian architecture waterfront tropical setting'
            ],
            residential: [
                'luxury home lagos nigeria african architecture gated estate tropical garden',
                'modern apartment nigeria african building design palm trees red soil',
                'residential duplex nigeria african home tropical landscaping sunny day',
                'family home nigeria african architecture gated community green space',
                'gated estate nigeria african residential homes tropical vegetation red earth',
                'nigerian bungalow african architecture tropical garden red soil',
                'lagos waterfront property nigerian home african design tropical setting',
                'abuja residential estate african homes modern architecture tropical trees'
            ],
            commercial: [
                'commercial office building nigeria african architecture lagos business district',
                'retail space lagos nigerian shopping complex african design',
                'business center nigeria african commercial building modern architecture',
                'office complex abuja nigerian architecture african business district',
                'lagos commercial property african building tropical environment',
                'nigerian shopping mall african architecture modern retail space'
            ],
            land: [
                'land property nigeria for sale sign red earth tropical vegetation',
                'residential plot nigeria african landscape red soil tropical trees',
                'development land nigeria african terrain tropical environment for sale',
                'nigerian land for sale red earth tropical setting surveyor',
                'vacant plot nigeria african landscape red soil palm trees'
            ]
        },
        contact: {
            hero: [
                'friendly nigerian real estate agent african professional smiling welcoming',
                'customer service nigeria african agent helping clients office'
            ],
            office: [
                'modern office front nigeria african architecture tropical landscaping signage',
                'corporate building entrance lagos nigerian architecture african design',
                'professional office nigeria african building modern exterior tropical setting',
                'real estate office nigeria african architecture green landscaping',
                'nigerian corporate building african design modern entrance tropical trees'
            ]
        }
    },

    // Brand color integration for image filtering/overlay
    brandColors: {
        primary: '#006B3C',      // Deep green
        secondary: '#8B0000',    // Maroon/horse blood
        accent: '#FFD700',       // Gold accent
        neutral: '#F5F5F5'       // Off-white
    },

    // Cultural authenticity requirements
    culturalRequirements: {
        people: {
            ethnicity: 'african nigerian west african',
            avoidKeywords: ['caucasian', 'western', 'european', 'asian'],
            requiredKeywords: ['african', 'nigerian', 'black', 'west african']
        },
        architecture: {
            style: 'nigerian african tropical modern',
            features: ['red earth', 'tropical vegetation', 'palm trees', 'gated estates', 'compound walls'],
            cities: ['lagos', 'abuja', 'abeokuta', 'port harcourt', 'ibadan']
        },
        environment: {
            lighting: 'tropical natural sunny warm golden hour',
            landscape: 'red soil tropical vegetation palm trees african',
            climate: 'tropical warm sunny humid'
        },
        branding: {
            colors: 'deep green maroon gold accents',
            elements: 'signboards company colors branded materials'
        }
    },

    // Location-specific prompts for authenticity
    locations: {
        lagos: 'lagos nigeria island mainland lekki victoria island ikeja african city',
        abuja: 'abuja nigeria federal capital territory african city modern',
        abeokuta: 'abeokuta ogun state nigeria african city yoruba',
        portHarcourt: 'port harcourt rivers state nigeria african city',
        ibadan: 'ibadan oyo state nigeria african city yoruba'
    },

    // Fallback images (local or CDN URLs)
    fallbacks: {
        hero: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=1080&fit=crop',
        property: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
        profile: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
        office: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
        team: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop'
    },

    // Enhanced search keywords for cultural authenticity
    searchKeywords: {
        nigeria: ['nigeria', 'nigerian', 'lagos', 'abuja', 'abeokuta', 'west africa', 'african'],
        property: ['real estate', 'property', 'house', 'home', 'building', 'apartment', 'estate', 'duplex'],
        people: ['african', 'nigerian', 'black', 'professional', 'business', 'family', 'consultant', 'agent'],
        office: ['office', 'corporate', 'workspace', 'meeting', 'business center', 'african'],
        luxury: ['luxury', 'modern', 'premium', 'executive', 'elegant', 'gated estate'],
        environment: ['tropical', 'red earth', 'palm trees', 'sunny', 'warm', 'natural lighting'],
        architecture: ['nigerian architecture', 'african design', 'tropical building', 'compound', 'gated']
    },

    // Image optimization settings for performance and responsiveness
    optimization: {
        lazyLoad: true,
        compression: 'auto',
        format: 'webp',              // Primary: WebP for modern browsers
        fallbackFormat: 'jpg',       // Fallback: JPEG for older browsers
        avifSupport: true,           // Enable AVIF for even better compression
        placeholder: 'blur',
        blurDataURL: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iI2YwZjBmMCIvPjwvc3ZnPg==',
        responsive: {
            enabled: true,
            breakpoints: {
                mobile: 480,
                tablet: 768,
                desktop: 1024,
                wide: 1920
            },
            sizes: {
                mobile: '100vw',
                tablet: '50vw',
                desktop: '33vw'
            }
        },
        colorGrading: {
            enabled: true,
            warmth: 1.1,             // Slightly warm for tropical feel
            saturation: 1.05,        // Slightly enhanced colors
            contrast: 1.02           // Subtle contrast boost
        }
    },

    // Cache settings
    cache: {
        enabled: true,
        duration: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
        storageKey: 'olas_realtor_images'
    }
};

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ImageConfig;
}
