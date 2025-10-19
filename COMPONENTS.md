# Component Library Documentation
## Olas Realtor Consulting Ltd

**Version:** 2.0  
**Last Updated:** 2025-01-19

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Shared Components](#shared-components)
3. [UI Components](#ui-components)
4. [Layout Components](#layout-components)
5. [Usage Guidelines](#usage-guidelines)

---

## Overview

This document catalogs all reusable components in the Olas Realtor website. Components are designed to be modular, accessible, and consistent across all pages.

### Component Philosophy
- **Reusable**: Single source of truth for shared elements
- **Accessible**: WCAG 2.1 AA compliant
- **Responsive**: Mobile-first design approach
- **Maintainable**: Centrally managed, easy to update

---

## Shared Components

### 1. Navbar Component

**Location:** `components/navbar.html`

**Purpose:** Primary navigation across all pages

**Structure:**
```html
<nav class="navbar" id="navbar">
    <div class="nav-container">
        <a href="index.html" class="logo">
            <span class="logo-text">OLAS REALTOR</span>
            <span class="logo-subtitle">CONSULTING LTD</span>
        </a>
        
        <button class="mobile-toggle" id="mobileToggle" aria-label="Toggle menu">
            <span class="hamburger"></span>
            <span class="hamburger"></span>
            <span class="hamburger"></span>
        </button>
        
        <ul class="nav-menu" id="navMenu">
            <li><a href="index.html" class="nav-link">Home</a></li>
            <li><a href="about.html" class="nav-link">About</a></li>
            <li><a href="services.html" class="nav-link">Services</a></li>
            <li><a href="properties.html" class="nav-link">Properties</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
        </ul>
    </div>
</nav>
```

**Features:**
- Sticky positioning
- Scroll-based shadow enhancement
- Mobile hamburger menu
- Active link highlighting
- Dropdown support (services submenu)

**CSS Classes:**
- `.navbar` - Main container
- `.nav-container` - Inner wrapper (max-width)
- `.logo` - Brand logo/text
- `.mobile-toggle` - Hamburger button
- `.nav-menu` - Navigation links container
- `.nav-link` - Individual link
- `.nav-link.active` - Current page indicator

**JavaScript:**
- `menu.js` - Mobile menu toggle
- `main.js` - Active link detection

**Variants:**
- Desktop: Horizontal layout
- Mobile: Slide-in overlay menu

---

### 2. Footer Component

**Location:** `components/footer.html`

**Purpose:** Site-wide footer with links, contact info, and social media

**Structure:**
```html
<footer class="footer">
    <div class="footer-container">
        <div class="footer-section">
            <!-- Company info & social icons -->
        </div>
        <div class="footer-section">
            <!-- Quick links -->
        </div>
        <div class="footer-section">
            <!-- Services links -->
        </div>
        <div class="footer-section">
            <!-- Contact info & newsletter -->
        </div>
    </div>
    <div class="footer-bottom">
        <!-- Copyright -->
    </div>
</footer>
```

**Features:**
- 4-column grid layout (responsive)
- Social media links
- Newsletter subscription form
- Quick navigation links
- Contact information

**CSS Classes:**
- `.footer` - Main container
- `.footer-container` - Grid wrapper
- `.footer-section` - Individual column
- `.footer-logo` - Brand in footer
- `.footer-links` - Link lists
- `.footer-contact` - Contact info
- `.social-icons` - Social media links
- `.footer-bottom` - Copyright bar

---

### 3. Testimonial Component

**Location:** `components/testimonial.html`

**Purpose:** Customer testimonials carousel

**Structure:**
```html
<div class="testimonial-carousel">
    <div class="testimonial-track">
        <div class="testimonial-card">
            <div class="testimonial-content">
                <p class="testimonial-text">...</p>
                <div class="testimonial-author">
                    <div class="author-image">...</div>
                    <div>
                        <h4 class="author-name">...</h4>
                        <p class="author-title">...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <button class="carousel-btn carousel-prev">...</button>
    <button class="carousel-btn carousel-next">...</button>
    <div class="carousel-dots"></div>
</div>
```

**Features:**
- Horizontal scrolling carousel
- Navigation arrows
- Dot indicators
- Auto-play capability
- Touch/swipe support

**JavaScript:**
- `carousel.js` - Carousel functionality

---

## UI Components

### 4. Buttons

**Primary Button**
```html
<button class="btn btn-primary">Click Me</button>
<a href="#" class="btn btn-primary">Link Button</a>
```

**Styles:**
- Background: `var(--horse-blood)`
- Hover: Lift effect + shadow
- Padding: `1rem 2rem`
- Border radius: `5px`

**Secondary Button**
```html
<button class="btn btn-secondary">Click Me</button>
```

**Styles:**
- Background: `var(--white)`
- Border: `2px solid var(--white)`
- Color: `var(--primary-green)`
- Hover: Transparent background

**Usage Guidelines:**
- Primary: Main CTAs, important actions
- Secondary: Alternative actions, less emphasis

---

### 5. Cards

**Standard Card**
```html
<div class="card">
    <div class="card-image">
        <img src="..." alt="...">
    </div>
    <div class="card-content">
        <h3 class="card-title">Title</h3>
        <p class="card-text">Description</p>
        <a href="#" class="card-link">Learn More →</a>
    </div>
</div>
```

**Features:**
- Image container (250px height)
- Content padding
- Hover lift effect
- Shadow enhancement on hover

**Property Card**
```html
<div class="property-card">
    <div class="property-image">
        <img src="..." alt="...">
        <span class="property-badge">For Sale</span>
    </div>
    <div class="property-content">
        <h3 class="property-title">Property Name</h3>
        <p class="property-location">
            <i class="fas fa-map-marker-alt"></i> Location
        </p>
        <div class="property-features">
            <span class="property-feature">
                <i class="fas fa-bed"></i> 4 Beds
            </span>
            <span class="property-feature">
                <i class="fas fa-bath"></i> 3 Baths
            </span>
        </div>
        <p class="property-price">₦85,000,000</p>
        <button class="btn btn-primary">View Details</button>
    </div>
</div>
```

**Features:**
- Badge overlay (For Sale/For Rent)
- Icon-based features
- Price display
- CTA button

---

### 6. Forms

**Form Group**
```html
<div class="form-group">
    <label for="name" class="form-label">Name *</label>
    <input type="text" id="name" class="form-input" required>
</div>
```

**Textarea**
```html
<div class="form-group">
    <label for="message" class="form-label">Message *</label>
    <textarea id="message" class="form-textarea" required></textarea>
</div>
```

**Submit Button**
```html
<button type="submit" class="form-button">Send Message</button>
```

**Features:**
- Consistent styling
- Focus states (green border)
- Required field indicators
- Full-width submit button

---

### 7. Feature Boxes

**Structure:**
```html
<div class="feature-box">
    <div class="feature-icon">
        <i class="fas fa-icon"></i>
    </div>
    <h3 class="feature-title">Title</h3>
    <p class="feature-text">Description</p>
</div>
```

**Usage:**
- "Why Choose Us" sections
- Service highlights
- Value propositions

---

## Layout Components

### 8. Hero Section

**Structure:**
```html
<section class="hero">
    <div class="hero-content">
        <h1>Main Heading</h1>
        <p>Subheading or description</p>
        <div style="display: flex; gap: 1rem; justify-content: center;">
            <a href="#" class="btn btn-primary">Primary CTA</a>
            <a href="#" class="btn btn-secondary">Secondary CTA</a>
        </div>
    </div>
</section>
```

**Features:**
- Gradient background (green)
- Centered content
- Large typography
- Dual CTA buttons

**Variants:**
- Full hero (homepage)
- Page header (internal pages)

---

### 9. Section Container

**Structure:**
```html
<section class="section">
    <div class="container">
        <div class="section-title">
            <h2>Section Heading</h2>
            <p>Section description</p>
        </div>
        <!-- Section content -->
    </div>
</section>
```

**Alternating Background:**
```html
<section class="section section-alt">
    <!-- Off-white background -->
</section>
```

**Features:**
- Consistent padding (80px desktop)
- Max-width container (1200px)
- Centered section titles
- Alternating backgrounds

---

### 10. Grid Layouts

**Card Grid**
```html
<div class="card-grid">
    <div class="card">...</div>
    <div class="card">...</div>
    <div class="card">...</div>
</div>
```

**Features:**
- Auto-fit columns (min 300px)
- 2rem gap
- Responsive (1 column mobile)

**Features Grid**
```html
<div class="features-grid">
    <div class="feature-box">...</div>
    <div class="feature-box">...</div>
    <div class="feature-box">...</div>
</div>
```

**Features:**
- Auto-fit columns (min 250px)
- 2rem gap
- Responsive

---

## Usage Guidelines

### Component Loading

**Method 1: Direct Embed (Current)**
```html
<!-- Navbar directly in HTML -->
<nav class="navbar" id="navbar">...</nav>
```

**Method 2: Dynamic Loading (Optional)**
```html
<!-- Placeholder -->
<div id="navbar-placeholder"></div>

<!-- JavaScript loads component -->
<script>
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar-placeholder').innerHTML = html;
        });
</script>
```

### Active Link Management

Add `.active` class to current page link:
```html
<li><a href="about.html" class="nav-link active">About</a></li>
```

JavaScript auto-detection available in `main.js`.

### Accessibility Checklist

- ✅ All images have `alt` attributes
- ✅ Buttons have `aria-label` (icon-only)
- ✅ Forms have associated `<label>` elements
- ✅ Keyboard navigation supported
- ✅ Focus states visible
- ✅ Semantic HTML structure
- ✅ Skip to main content link

### Responsive Behavior

**Mobile (< 480px):**
- Single column layouts
- Stacked buttons
- Simplified navigation

**Tablet (480px - 768px):**
- 1-2 column layouts
- Hamburger menu
- Adjusted typography

**Desktop (> 768px):**
- Multi-column layouts
- Horizontal navigation
- Full feature set

---

## Component Maintenance

### Adding New Components

1. Create component file in `components/` folder
2. Document structure in this file
3. Add CSS to `style.css` or separate file
4. Add JavaScript if needed
5. Test across all breakpoints
6. Verify accessibility

### Updating Existing Components

1. Update component file
2. Test on all pages using component
3. Update documentation
4. Check for breaking changes
5. Verify responsive behavior

### Deprecating Components

1. Mark as deprecated in documentation
2. Provide migration path
3. Update all instances
4. Remove after transition period

---

## Quick Reference

### File Locations

```
components/
├── navbar.html       # Main navigation
├── footer.html       # Site footer
└── testimonial.html  # Testimonial carousel

css/
├── style.css         # Main styles
├── responsive.css    # Media queries
└── variables.css     # CSS variables (NEW)

js/
├── main.js          # Core functionality
├── menu.js          # Navigation logic
└── carousel.js      # Carousel functionality
```

### CSS Class Naming Convention

- **Component**: `.component-name`
- **Element**: `.component-element`
- **Modifier**: `.component--modifier`
- **State**: `.component.is-active`

### Common Patterns

**Centering Content:**
```css
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}
```

**Responsive Grid:**
```css
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```

**Hover Effect:**
```css
.element {
    transition: all 0.3s ease;
}
.element:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}
```

---

## Support & Questions

For component-related questions:
- Review this documentation
- Check `DESIGN_SYSTEM.md` for design tokens
- Inspect existing implementations
- Test in browser DevTools

---

**Last Updated:** 2025-01-19  
**Maintained By:** Olas Realtor Development Team
