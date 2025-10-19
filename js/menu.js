// ===================================
// MENU FUNCTIONALITY
// Mobile Navigation & Dropdown
// ===================================

(function() {
    'use strict';
    
    // Wait for DOM to be ready
    function initMenu() {
        const mobileToggle = document.getElementById('mobileToggle');
        const navMenu = document.getElementById('navMenu');
        const dropdowns = document.querySelectorAll('.dropdown');
        const navLinks = document.querySelectorAll('.nav-link');
        
        // Mobile menu toggle
        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', function(e) {
                e.stopPropagation();
                navMenu.classList.toggle('active');
                this.classList.toggle('active');
                
                // Animate hamburger
                const hamburgers = this.querySelectorAll('.hamburger');
                hamburgers.forEach((bar, index) => {
                    if (this.classList.contains('active')) {
                        if (index === 0) bar.style.transform = 'rotate(45deg) translateY(8px)';
                        if (index === 1) bar.style.opacity = '0';
                        if (index === 2) bar.style.transform = 'rotate(-45deg) translateY(-8px)';
                    } else {
                        bar.style.transform = '';
                        bar.style.opacity = '';
                    }
                });
            });
        }
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (navMenu && !e.target.closest('.nav-container')) {
                navMenu.classList.remove('active');
                if (mobileToggle) {
                    mobileToggle.classList.remove('active');
                    const hamburgers = mobileToggle.querySelectorAll('.hamburger');
                    hamburgers.forEach(bar => {
                        bar.style.transform = '';
                        bar.style.opacity = '';
                    });
                }
            }
        });
        
        // Close menu when clicking a link (mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768 && !this.closest('.dropdown')) {
                    navMenu.classList.remove('active');
                    if (mobileToggle) {
                        mobileToggle.classList.remove('active');
                        const hamburgers = mobileToggle.querySelectorAll('.hamburger');
                        hamburgers.forEach(bar => {
                            bar.style.transform = '';
                            bar.style.opacity = '';
                        });
                    }
                }
            });
        });
        
        // Dropdown functionality for mobile
        dropdowns.forEach(dropdown => {
            const link = dropdown.querySelector('.nav-link');
            const dropdownMenu = dropdown.querySelector('.dropdown-menu');
            
            if (link && dropdownMenu) {
                link.addEventListener('click', function(e) {
                    if (window.innerWidth <= 768) {
                        e.preventDefault();
                        dropdown.classList.toggle('active');
                    }
                });
            }
        });
        
        // Handle window resize
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (window.innerWidth > 768) {
                    navMenu.classList.remove('active');
                    if (mobileToggle) {
                        mobileToggle.classList.remove('active');
                        const hamburgers = mobileToggle.querySelectorAll('.hamburger');
                        hamburgers.forEach(bar => {
                            bar.style.transform = '';
                            bar.style.opacity = '';
                        });
                    }
                    dropdowns.forEach(dropdown => {
                        dropdown.classList.remove('active');
                    });
                }
            }, 250);
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initMenu);
    } else {
        initMenu();
    }
    
    // Re-initialize after dynamic content load
    window.reinitMenu = initMenu;
    
})();
