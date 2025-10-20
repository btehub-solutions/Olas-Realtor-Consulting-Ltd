/* ===================================
   WEBSITE ENHANCEMENTS
   Additional features for better UX
   =================================== */

// 1. SCROLL PROGRESS BAR
function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 4px;
        background: linear-gradient(90deg, #00A86B 0%, #C41E3A 100%);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// 2. SCROLL DOWN INDICATOR
function initScrollIndicator() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    const indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.innerHTML = `
        <div style="
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            animation: bounce 2s infinite;
            cursor: pointer;
            z-index: 10;
        ">
            <p style="color: white; font-size: 0.9rem; margin-bottom: 0.5rem; opacity: 0.9;">Scroll Down</p>
            <i class="fas fa-chevron-down" style="color: white; font-size: 1.5rem; opacity: 0.9;"></i>
        </div>
    `;
    hero.appendChild(indicator);

    // Add bounce animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
            40% { transform: translateX(-50%) translateY(-10px); }
            60% { transform: translateX(-50%) translateY(-5px); }
        }
    `;
    document.head.appendChild(style);

    // Smooth scroll on click
    indicator.addEventListener('click', () => {
        const nextSection = hero.nextElementSibling;
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Hide indicator after scrolling
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            indicator.style.opacity = '0';
            indicator.style.pointerEvents = 'none';
        } else {
            indicator.style.opacity = '1';
            indicator.style.pointerEvents = 'auto';
        }
    });
}

// 3. PROPERTY SEARCH/FILTER
function initPropertyFilter() {
    const propertySection = document.querySelector('#available-properties, .property-grid');
    if (!propertySection) return;

    // Create filter bar
    const filterBar = document.createElement('div');
    filterBar.className = 'property-filter-bar';
    filterBar.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
        margin-bottom: 3rem;
    `;
    
    filterBar.innerHTML = `
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
            <input type="text" id="search-location" placeholder="Search by location..." 
                style="padding: 0.875rem; border: 2px solid #E9ECEF; border-radius: 10px; font-size: 1rem;">
            <select id="filter-type" style="padding: 0.875rem; border: 2px solid #E9ECEF; border-radius: 10px; font-size: 1rem;">
                <option value="">All Types</option>
                <option value="house">House</option>
                <option value="apartment">Apartment</option>
                <option value="land">Land</option>
                <option value="commercial">Commercial</option>
            </select>
            <select id="filter-price" style="padding: 0.875rem; border: 2px solid #E9ECEF; border-radius: 10px; font-size: 1rem;">
                <option value="">All Prices</option>
                <option value="0-50">Under ₦50M</option>
                <option value="50-100">₦50M - ₦100M</option>
                <option value="100-200">₦100M - ₦200M</option>
                <option value="200+">Above ₦200M</option>
            </select>
            <button id="reset-filters" style="padding: 0.875rem 1.5rem; background: linear-gradient(135deg, #C41E3A 0%, #E63946 100%); color: white; border: none; border-radius: 10px; font-weight: 600; cursor: pointer;">
                Reset Filters
            </button>
        </div>
        <div id="filter-results" style="color: #6C757D; font-size: 0.95rem;"></div>
    `;

    const container = propertySection.closest('.container');
    if (container) {
        container.insertBefore(filterBar, propertySection);
    }

    // Filter functionality
    const searchInput = document.getElementById('search-location');
    const typeFilter = document.getElementById('filter-type');
    const priceFilter = document.getElementById('filter-price');
    const resetBtn = document.getElementById('reset-filters');
    const resultsDiv = document.getElementById('filter-results');

    function filterProperties() {
        const properties = document.querySelectorAll('.property-card');
        let visibleCount = 0;

        properties.forEach(card => {
            const location = card.querySelector('.property-location')?.textContent.toLowerCase() || '';
            const type = card.dataset.type || '';
            const price = parseInt(card.dataset.price) || 0;

            const searchMatch = location.includes(searchInput.value.toLowerCase());
            const typeMatch = !typeFilter.value || type === typeFilter.value;
            
            let priceMatch = true;
            if (priceFilter.value) {
                const [min, max] = priceFilter.value.split('-').map(v => parseInt(v) || Infinity);
                priceMatch = price >= (min * 1000000) && (max ? price <= (max * 1000000) : true);
            }

            if (searchMatch && typeMatch && priceMatch) {
                card.style.display = '';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });

        resultsDiv.textContent = `Showing ${visibleCount} of ${properties.length} properties`;
    }

    if (searchInput) searchInput.addEventListener('input', filterProperties);
    if (typeFilter) typeFilter.addEventListener('change', filterProperties);
    if (priceFilter) priceFilter.addEventListener('change', filterProperties);
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            if (searchInput) searchInput.value = '';
            if (typeFilter) typeFilter.value = '';
            if (priceFilter) priceFilter.value = '';
            filterProperties();
        });
    }
}

// 4. MORTGAGE CALCULATOR
function initMortgageCalculator() {
    // Check if modal already exists
    if (document.getElementById('mortgage-calculator-modal')) {
        return;
    }
    
    // Create calculator modal
    const calculatorHTML = `
        <div id="mortgage-calculator-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.7); z-index: 10000; align-items: center; justify-content: center;">
            <div style="background: white; padding: 3rem; border-radius: 24px; max-width: 500px; width: 90%; max-height: 90vh; overflow-y: auto;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                    <h2 style="color: #00A86B; margin: 0;">Mortgage Calculator</h2>
                    <button id="close-calculator" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #6C757D;">&times;</button>
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 0.5rem; color: #2D3436; font-weight: 600;">Property Price (₦)</label>
                    <input type="number" id="calc-price" value="50000000" style="width: 100%; padding: 0.875rem; border: 2px solid #E9ECEF; border-radius: 10px; font-size: 1rem;">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 0.5rem; color: #2D3436; font-weight: 600;">Down Payment (%)</label>
                    <input type="number" id="calc-down" value="20" min="0" max="100" style="width: 100%; padding: 0.875rem; border: 2px solid #E9ECEF; border-radius: 10px; font-size: 1rem;">
                </div>
                
                <div style="margin-bottom: 1.5rem;">
                    <label style="display: block; margin-bottom: 0.5rem; color: #2D3436; font-weight: 600;">Interest Rate (%)</label>
                    <input type="number" id="calc-rate" value="15" step="0.1" style="width: 100%; padding: 0.875rem; border: 2px solid #E9ECEF; border-radius: 10px; font-size: 1rem;">
                </div>
                
                <div style="margin-bottom: 2rem;">
                    <label style="display: block; margin-bottom: 0.5rem; color: #2D3436; font-weight: 600;">Loan Term (Years)</label>
                    <input type="number" id="calc-years" value="20" min="1" max="30" style="width: 100%; padding: 0.875rem; border: 2px solid #E9ECEF; border-radius: 10px; font-size: 1rem;">
                </div>
                
                <button id="calculate-btn" style="width: 100%; padding: 1rem; background: linear-gradient(135deg, #C41E3A 0%, #E63946 100%); color: white; border: none; border-radius: 12px; font-size: 1.05rem; font-weight: 600; cursor: pointer; margin-bottom: 1.5rem;">
                    Calculate
                </button>
                
                <div id="calc-results" style="display: none; background: linear-gradient(135deg, #00A86B 0%, #00D084 100%); padding: 2rem; border-radius: 16px; color: white;">
                    <div style="margin-bottom: 1rem;">
                        <p style="font-size: 0.9rem; opacity: 0.9; margin-bottom: 0.25rem;">Monthly Payment</p>
                        <p id="monthly-payment" style="font-size: 2rem; font-weight: 800; margin: 0;"></p>
                    </div>
                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 1.5rem;">
                        <div>
                            <p style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 0.25rem;">Total Interest</p>
                            <p id="total-interest" style="font-size: 1.25rem; font-weight: 700; margin: 0;"></p>
                        </div>
                        <div>
                            <p style="font-size: 0.85rem; opacity: 0.9; margin-bottom: 0.25rem;">Total Payment</p>
                            <p id="total-payment" style="font-size: 1.25rem; font-weight: 700; margin: 0;"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', calculatorHTML);

    // Add calculator button to property cards
    document.querySelectorAll('.property-card').forEach(card => {
        const btnContainer = card.querySelector('.property-content') || card.querySelector('.card-content');
        if (btnContainer && !btnContainer.querySelector('.calc-btn')) {
            const calcBtn = document.createElement('button');
            calcBtn.className = 'calc-btn';
            calcBtn.innerHTML = '<i class="fas fa-calculator"></i> Calculate Mortgage';
            calcBtn.style.cssText = `
                width: 100%;
                padding: 0.875rem;
                background: linear-gradient(135deg, #00A86B 0%, #00D084 100%);
                color: white;
                border: none;
                border-radius: 10px;
                font-weight: 600;
                cursor: pointer;
                margin-top: 0.5rem;
                transition: all 0.3s ease;
            `;
            calcBtn.addEventListener('mouseenter', () => {
                calcBtn.style.transform = 'translateY(-2px)';
                calcBtn.style.boxShadow = '0 8px 20px rgba(0, 168, 107, 0.3)';
            });
            calcBtn.addEventListener('mouseleave', () => {
                calcBtn.style.transform = 'translateY(0)';
                calcBtn.style.boxShadow = 'none';
            });
            calcBtn.addEventListener('click', (e) => {
                e.preventDefault();
                const priceText = card.querySelector('.property-price')?.textContent;
                const price = parseInt(priceText?.replace(/[^0-9]/g, '')) || 50000000;
                document.getElementById('calc-price').value = price;
                document.getElementById('mortgage-calculator-modal').style.display = 'flex';
            });
            btnContainer.appendChild(calcBtn);
        }
    });

    // Calculator functionality
    const modal = document.getElementById('mortgage-calculator-modal');
    const closeBtn = document.getElementById('close-calculator');
    const calculateBtn = document.getElementById('calculate-btn');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    if (calculateBtn) {
        calculateBtn.addEventListener('click', () => {
            const price = parseFloat(document.getElementById('calc-price').value);
            const downPercent = parseFloat(document.getElementById('calc-down').value);
            const rate = parseFloat(document.getElementById('calc-rate').value) / 100 / 12;
            const years = parseFloat(document.getElementById('calc-years').value);
            const months = years * 12;

            const downPayment = price * (downPercent / 100);
            const loanAmount = price - downPayment;
            const monthlyPayment = loanAmount * (rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
            const totalPayment = monthlyPayment * months;
            const totalInterest = totalPayment - loanAmount;

            document.getElementById('monthly-payment').textContent = '₦' + monthlyPayment.toLocaleString('en-NG', { maximumFractionDigits: 0 });
            document.getElementById('total-interest').textContent = '₦' + totalInterest.toLocaleString('en-NG', { maximumFractionDigits: 0 });
            document.getElementById('total-payment').textContent = '₦' + totalPayment.toLocaleString('en-NG', { maximumFractionDigits: 0 });
            document.getElementById('calc-results').style.display = 'block';
        });
    }
}

// 5. TESTIMONIAL STAR RATINGS
function initTestimonialEnhancements() {
    document.querySelectorAll('.testimonial-card').forEach(card => {
        if (!card.querySelector('.star-rating')) {
            const stars = document.createElement('div');
            stars.className = 'star-rating';
            stars.style.cssText = 'color: #FFD700; font-size: 1.2rem; margin-bottom: 1rem;';
            stars.innerHTML = '<i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>';
            
            const text = card.querySelector('.testimonial-text');
            if (text) {
                card.insertBefore(stars, text);
            }
        }
    });
}

// 6. SMOOTH SCROLL FOR ALL LINKS
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            // Only handle valid internal links
            if (href && href !== '#' && href !== '#!' && href.length > 1) {
                try {
                    const target = document.querySelector(href);
                    if (target) {
                        e.preventDefault();
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                } catch (error) {
                    // Invalid selector, skip
                    console.log('Invalid selector:', href);
                }
            }
        });
    });
}

// 7. BACK TO TOP ENHANCEMENT
function enhanceBackToTop() {
    const backToTop = document.querySelector('.scroll-to-top');
    if (backToTop) {
        backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTop.title = 'Back to Top';
    }
}

// Initialize all enhancements when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing website enhancements...');
    
    try {
        initScrollProgress();
        console.log('✓ Scroll progress bar initialized');
    } catch (e) {
        console.log('ℹ️ Scroll progress: Skipped');
    }
    
    try {
        initScrollIndicator();
        console.log('✓ Scroll indicator initialized');
    } catch (e) {
        console.log('ℹ️ Scroll indicator: Skipped (no hero section)');
    }
    
    try {
        initPropertyFilter();
        console.log('✓ Property filter initialized');
    } catch (e) {
        console.log('ℹ️ Property filter: Skipped (no property section)');
    }
    
    try {
        initMortgageCalculator();
        console.log('✓ Mortgage calculator initialized');
    } catch (e) {
        console.log('ℹ️ Mortgage calculator: Skipped');
    }
    
    try {
        initTestimonialEnhancements();
        console.log('✓ Testimonial enhancements initialized');
    } catch (e) {
        console.log('ℹ️ Testimonials: Skipped (no testimonials)');
    }
    
    try {
        initSmoothScroll();
        console.log('✓ Smooth scroll initialized');
    } catch (e) {
        console.log('ℹ️ Smooth scroll: Skipped');
    }
    
    try {
        enhanceBackToTop();
        console.log('✓ Back to top enhanced');
    } catch (e) {
        console.log('ℹ️ Back to top: Skipped (button not found)');
    }
    
    console.log('✅ All enhancements loaded successfully!');
});
