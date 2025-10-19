// ===================================
// OLA REALTOR CONSULTING LTD
// Main JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initPreloader();
    initNavbar();
    initActiveLinks();
    initScrollEffects();
    initLazyLoading();
    initForms();
    loadComponents();
    initAccessibility();
});

// ===================================
// PRELOADER
// ===================================
function initPreloader() {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        // Hide preloader after page loads
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.classList.add('hidden');
                // Remove from DOM after transition
                setTimeout(function() {
                    preloader.style.display = 'none';
                }, 500);
            }, 300);
        });
    }
}

// ===================================
// NAVBAR FUNCTIONALITY
// ===================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    
    // Scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===================================
// ACTIVE LINK HIGHLIGHTING
// ===================================
function initActiveLinks() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        
        if (linkPage === currentPage || 
            (currentPage === '' && linkPage === 'index.html') ||
            (currentPage === 'property-sales.html' && linkPage === 'services.html') ||
            (currentPage === 'letting-rentals.html' && linkPage === 'services.html') ||
            (currentPage === 'ict-training.html' && linkPage === 'services.html')) {
            link.classList.add('active');
        }
    });
}

// ===================================
// SCROLL EFFECTS WITH STAGGER
// ===================================
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add stagger delay for grouped elements
                setTimeout(() => {
                    entry.target.classList.add('fade-in');
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe cards and sections
    const elements = document.querySelectorAll('.card, .feature-box, .property-card, .service-detail, .testimonial-card');
    elements.forEach(el => observer.observe(el));
}

// ===================================
// LAZY LOADING IMAGES
// ===================================
function initLazyLoading() {
    // Native lazy loading is already implemented via loading="lazy" attribute
    // This provides fallback for older browsers
    if ('loading' in HTMLImageElement.prototype) {
        // Browser supports native lazy loading
        return;
    }
    
    // Fallback for older browsers
    const images = document.querySelectorAll('img[loading="lazy"]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ===================================
// FORM HANDLING
// ===================================
function initForms() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                message: document.getElementById('message').value
            };
            
            // Validate
            if (!formData.name || !formData.email || !formData.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Simulate form submission
            alert('Thank you for contacting us! We will get back to you soon.');
            contactForm.reset();
            
            // In production, you would send this to a server:
            // fetch('/api/contact', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(formData)
            // });
        });
    }
}

// ===================================
// LOAD SHARED COMPONENTS
// ===================================
async function loadComponents() {
    // Load navbar
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        try {
            const response = await fetch('components/navbar.html');
            const html = await response.text();
            navbarPlaceholder.innerHTML = html;
            initMobileMenu(); // Initialize after loading
            initActiveLinks(); // Re-initialize active links
        } catch (error) {
            console.error('Error loading navbar:', error);
        }
    }
    
    // Load footer
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        try {
            const response = await fetch('components/footer.html');
            const html = await response.text();
            footerPlaceholder.innerHTML = html;
        } catch (error) {
            console.error('Error loading footer:', error);
        }
    }
}

// ===================================
// MOBILE MENU
// ===================================
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobileToggle');
    const navMenu = document.getElementById('navMenu');
    const dropdowns = document.querySelectorAll('.dropdown');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.nav-container')) {
                navMenu.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
        
        // Handle dropdown on mobile
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('.nav-link');
            link.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        });
    }
}

// ===================================
// SMOOTH SCROLL
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===================================
// ACCESSIBILITY ENHANCEMENTS
// ===================================
function initAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    skipLink.setAttribute('aria-label', 'Skip to main content');
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Ensure all interactive elements are keyboard accessible
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea');
    interactiveElements.forEach(el => {
        if (!el.hasAttribute('tabindex') && el.tabIndex < 0) {
            el.setAttribute('tabindex', '0');
        }
    });
    
    // Add ARIA labels to icon-only buttons
    const iconButtons = document.querySelectorAll('button:not([aria-label])');
    iconButtons.forEach(btn => {
        if (btn.querySelector('i') && !btn.textContent.trim()) {
            btn.setAttribute('aria-label', 'Menu button');
        }
    });
}

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Format currency for Nigerian Naira
function formatCurrency(amount) {
    return '₦' + amount.toLocaleString('en-NG');
}

// Validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Validate phone (Nigerian format)
function validatePhone(phone) {
    const re = /^(\+234|0)[789][01]\d{8}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// ===================================
// PERFORMANCE MONITORING
// ===================================
if ('PerformanceObserver' in window) {
    // Monitor Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime);
    });
    lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
}
