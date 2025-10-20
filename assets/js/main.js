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
    initScrollToTop();
    initWhatsAppButton();
    initPropertyFilters();
    initModals();
    initNewsletterForm();
});

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
// Moved to enhancements.js to avoid duplication

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
// PRELOADER
// ===================================
function initPreloader() {
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            setTimeout(() => {
                preloader.classList.add('hidden');
                // Remove from DOM after transition
                setTimeout(() => {
                    preloader.remove();
                }, 500);
            }, 800);
        }
    });
}

// ===================================
// SCROLL TO TOP BUTTON
// ===================================
function initScrollToTop() {
    // Create scroll to top button
    const scrollBtn = document.createElement('button');
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(scrollBtn);
    
    // Show/hide on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// WHATSAPP FLOATING BUTTON
// ===================================
function initWhatsAppButton() {
    // Create WhatsApp button
    const whatsappBtn = document.createElement('a');
    whatsappBtn.className = 'whatsapp-float';
    whatsappBtn.href = 'https://wa.me/2348164220387'; // OLA REALTOR WhatsApp
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.setAttribute('aria-label', 'Contact us on WhatsApp');
    document.body.appendChild(whatsappBtn);
}

// ===================================
// PROPERTY FILTERS
// ===================================
function initPropertyFilters() {
    const filterForm = document.getElementById('propertyFilters');
    if (!filterForm) return;
    
    const propertyCards = document.querySelectorAll('.property-card');
    
    filterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const type = document.getElementById('propertyType')?.value || 'all';
        const location = document.getElementById('propertyLocation')?.value.toLowerCase() || '';
        const minPrice = parseInt(document.getElementById('minPrice')?.value) || 0;
        const maxPrice = parseInt(document.getElementById('maxPrice')?.value) || Infinity;
        
        propertyCards.forEach(card => {
            const cardType = card.dataset.type || '';
            const cardLocation = card.dataset.location?.toLowerCase() || '';
            const cardPrice = parseInt(card.dataset.price) || 0;
            
            const typeMatch = type === 'all' || cardType === type;
            const locationMatch = !location || cardLocation.includes(location);
            const priceMatch = cardPrice >= minPrice && cardPrice <= maxPrice;
            
            if (typeMatch && locationMatch && priceMatch) {
                card.style.display = 'block';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
            }
        });
    });
    
    // Reset filters
    const resetBtn = document.getElementById('resetFilters');
    if (resetBtn) {
        resetBtn.addEventListener('click', function() {
            filterForm.reset();
            propertyCards.forEach(card => {
                card.style.display = 'block';
            });
        });
    }
}

// ===================================
// MODAL FUNCTIONALITY
// ===================================
function initModals() {
    // Property detail modals
    const propertyCards = document.querySelectorAll('.property-card');
    
    propertyCards.forEach(card => {
        const viewBtn = card.querySelector('.view-details-btn');
        if (viewBtn) {
            viewBtn.addEventListener('click', function(e) {
                e.preventDefault();
                openPropertyModal(card);
            });
        }
    });
    
    // Form modals (for enrollment, sell property, etc.)
    const formTriggers = document.querySelectorAll('[data-modal-trigger]');
    formTriggers.forEach(trigger => {
        trigger.addEventListener('click', function(e) {
            e.preventDefault();
            const modalId = this.dataset.modalTrigger;
            openModal(modalId);
        });
    });
    
    // Close modals
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal') || e.target.classList.contains('modal-close')) {
            closeAllModals();
        }
    });
    
    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeAllModals();
        }
    });
}

function openPropertyModal(card) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close" aria-label="Close modal">
                <i class="fas fa-times"></i>
            </button>
            <div class="modal-body">
                <div class="modal-header">
                    <h2>${card.querySelector('.property-title')?.textContent || 'Property Details'}</h2>
                    <p class="property-location">${card.querySelector('.property-location')?.innerHTML || ''}</p>
                </div>
                <div class="property-image" style="height: 400px; margin-bottom: 2rem;">
                    ${card.querySelector('.property-image img')?.outerHTML || ''}
                </div>
                <div class="property-details">
                    <h3 style="color: var(--primary-green); margin-bottom: 1rem;">Property Features</h3>
                    <div class="property-features" style="margin-bottom: 2rem;">
                        ${card.querySelector('.property-features')?.innerHTML || ''}
                    </div>
                    <p class="property-price" style="font-size: 2rem; margin-bottom: 2rem;">
                        ${card.querySelector('.property-price')?.textContent || ''}
                    </p>
                    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                        <a href="contact.html" class="btn btn-primary">Contact Agent</a>
                        <a href="https://wa.me/2348164220387" class="btn btn-secondary" target="_blank">
                            <i class="fab fa-whatsapp"></i> WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('active'), 10);
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAllModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.classList.remove('active');
        // Remove dynamically created modals
        if (!modal.id) {
            setTimeout(() => modal.remove(), 300);
        }
    });
    document.body.style.overflow = '';
}

// ===================================
// NEWSLETTER FORM
// ===================================
function initNewsletterForm() {
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            if (validateEmail(email)) {
                alert('Thank you for subscribing to our newsletter!');
                this.reset();
            } else {
                alert('Please enter a valid email address.');
            }
        });
    }
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
