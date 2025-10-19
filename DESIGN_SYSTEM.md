# Olas Realtor Consulting Ltd - Design System

**Version:** 2.0  
**Last Updated:** 2025-01-19  
**Status:** Initialized for Modernization

---

## 🎨 Brand Identity

### Company Name
**Olas Realtor Consulting Ltd**

### Brand Positioning
Premium real estate consulting firm serving the Nigerian market with professionalism, integrity, and excellence.

### Brand Values
- Trust & Transparency
- Professional Excellence
- Client-Centric Service
- Market Expertise
- Innovation in Real Estate

---

## 🎯 Color Palette

### Primary Colors
```css
--primary-green: #006400;      /* Dark Green - Primary brand color */
--light-green: #228B22;        /* Forest Green - Hover states, accents */
--horse-blood: #5A0001;        /* Deep Red - CTAs, important elements */
--light-blood: #8B0000;        /* Dark Red - Hover states */
```

### Neutral Colors
```css
--white: #ffffff;              /* Pure white - backgrounds */
--off-white: #f8f9fa;          /* Light gray - alternate sections */
--light-gray: #e9ecef;         /* Borders, dividers */
--gray: #6c757d;               /* Body text, secondary content */
--dark-gray: #222222;          /* Headings, primary text */
--black: #000000;              /* Maximum contrast */
```

### Utility Colors
```css
--shadow: rgba(0, 0, 0, 0.1);
--shadow-dark: rgba(0, 0, 0, 0.2);
--overlay: rgba(0, 0, 0, 0.5);
```

### Color Usage Guidelines
- **Primary Green**: Navigation, headings, brand elements
- **Horse Blood**: Call-to-action buttons, badges, important highlights
- **Gray Scale**: Text hierarchy, backgrounds, borders
- **White/Off-white**: Content backgrounds, alternating sections

---

## 📝 Typography

### Font Families
```css
--font-heading: 'Poppins', sans-serif;
--font-body: 'Open Sans', sans-serif;
```

### Font Weights
- **Regular**: 400 (body text)
- **Medium**: 500 (subheadings)
- **Semi-Bold**: 600 (emphasis, labels)
- **Bold**: 700 (headings, strong emphasis)

### Type Scale
```css
/* Desktop */
--h1-size: 3rem;          /* 48px - Hero titles */
--h2-size: 2.5rem;        /* 40px - Section titles */
--h3-size: 1.8rem;        /* 28.8px - Subsection titles */
--h4-size: 1.5rem;        /* 24px - Card titles */
--body-size: 1rem;        /* 16px - Body text */
--small-size: 0.9rem;     /* 14.4px - Captions, labels */

/* Mobile (480px and below) */
--h1-mobile: 1.5rem;      /* 24px */
--h2-mobile: 1.5rem;      /* 24px */
--h3-mobile: 1.25rem;     /* 20px */
```

### Line Heights
- **Headings**: 1.2
- **Body Text**: 1.6-1.8
- **Tight**: 1.4 (buttons, labels)

---

## 📐 Spacing System

### Base Unit: 1rem = 16px

```css
--spacing-xs: 0.5rem;     /* 8px */
--spacing-sm: 1rem;       /* 16px */
--spacing-md: 1.5rem;     /* 24px */
--spacing-lg: 2rem;       /* 32px */
--spacing-xl: 3rem;       /* 48px */
--spacing-2xl: 5rem;      /* 80px */
```

### Section Padding
- **Desktop**: 80px vertical
- **Tablet**: 50px vertical
- **Mobile**: 40px vertical

### Container Max-Width
- **Standard**: 1200px
- **Large Desktop**: 1400px
- **Content**: 800px (forms, text-heavy sections)

---

## 🧩 Component Library

### Buttons

#### Primary Button
```css
.btn-primary {
    background: var(--horse-blood);
    color: var(--white);
    padding: 1rem 2rem;
    border-radius: 5px;
    font-weight: 600;
}
```

#### Secondary Button
```css
.btn-secondary {
    background: var(--white);
    color: var(--primary-green);
    border: 2px solid var(--white);
    padding: 1rem 2rem;
    border-radius: 5px;
}
```

### Cards

#### Standard Card
- **Shadow**: 0 4px 15px rgba(0, 0, 0, 0.1)
- **Border Radius**: 10px
- **Hover Effect**: translateY(-10px), enhanced shadow
- **Image Height**: 250px (desktop), 200px (mobile)

#### Property Card
- **Badge**: Positioned absolute, top-right
- **Price**: Large, bold, horse-blood color
- **Features**: Icon + text layout

### Navigation

#### Desktop
- **Height**: Auto (padding-based)
- **Sticky**: Yes
- **Background**: White with shadow
- **Link Underline**: 2px horse-blood on hover/active

#### Mobile
- **Hamburger Menu**: Animated 3-bar icon
- **Slide-in**: Full-height overlay
- **Dropdown**: Accordion-style expansion

### Forms

#### Input Fields
- **Border**: 2px solid light-gray
- **Focus**: Primary green border
- **Padding**: 0.75rem
- **Border Radius**: 5px

---

## 📱 Responsive Breakpoints

```css
/* Mobile First Approach */
--mobile: 480px;
--tablet: 768px;
--desktop: 1024px;
--large-desktop: 1400px;
```

### Grid Behavior
- **Mobile (< 480px)**: 1 column
- **Tablet (480px - 768px)**: 1-2 columns
- **Desktop (> 768px)**: 2-3 columns (auto-fit)

---

## ♿ Accessibility Standards

### WCAG 2.1 Level AA Compliance

#### Color Contrast
- **Normal Text**: Minimum 4.5:1
- **Large Text**: Minimum 3:1
- **UI Components**: Minimum 3:1

#### Focus States
- **Outline**: 3px solid primary-green
- **Offset**: 2px
- **Visible**: All interactive elements

#### Keyboard Navigation
- **Tab Order**: Logical flow
- **Skip Links**: "Skip to main content"
- **ARIA Labels**: All icon-only buttons

#### Motion Preferences
- **Reduced Motion**: Respect prefers-reduced-motion
- **Animations**: Can be disabled

---

## 🎭 Animation & Transitions

### Standard Transitions
```css
transition: all 0.3s ease;
```

### Hover Effects
- **Buttons**: translateY(-2px) + shadow
- **Cards**: translateY(-10px) + enhanced shadow
- **Links**: Color change + underline animation

### Scroll Animations
- **Fade In**: Opacity 0 → 1, translateY(20px) → 0
- **Stagger**: 100ms delay between grouped elements
- **Threshold**: 0.1 intersection ratio

---

## 📄 Page Structure

### Multi-Page Architecture

#### Core Pages
1. **Home** (`index.html`) - Landing, hero, services overview, featured properties
2. **About** (`about.html`) - Company info, mission, vision, values, team
3. **Services** (`services.html`) - Service overview hub
4. **Property Sales** (`property-sales.html`) - Sales listings
5. **Letting & Rentals** (`letting-rentals.html`) - Rental listings
6. **ICT Training** (`ict-training.html`) - Training programs
7. **Contact** (`contact.html`) - Contact form, location, info

#### Shared Components
- **Navbar** (`components/navbar.html`) - Reusable navigation
- **Footer** (`components/footer.html`) - Reusable footer
- **Testimonial** (`components/testimonial.html`) - Testimonial carousel

### Page Template Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <!-- Fonts: Poppins, Open Sans -->
    <!-- Font Awesome 6.4.0 -->
    <!-- Stylesheets: style.css, responsive.css -->
</head>
<body>
    <!-- Preloader (optional) -->
    <!-- Navbar -->
    <main id="main-content">
        <!-- Page Content -->
    </main>
    <!-- Footer -->
    <!-- Scripts: menu.js, carousel.js, main.js -->
</body>
</html>
```

---

## 🔧 Technical Standards

### HTML
- **Semantic HTML5**: Use appropriate tags
- **Accessibility**: ARIA labels, alt text, semantic structure
- **SEO**: Meta tags, Open Graph, Schema.org markup

### CSS
- **Mobile-First**: Base styles for mobile, media queries for larger screens
- **CSS Variables**: Centralized theming
- **BEM Methodology**: Consider for new components
- **Grid & Flexbox**: Modern layout techniques

### JavaScript
- **Vanilla JS**: No framework dependencies
- **ES6+**: Modern JavaScript features
- **Progressive Enhancement**: Core functionality without JS
- **Performance**: Lazy loading, intersection observers

---

## 📊 Performance Guidelines

### Image Optimization
- **Format**: WebP with fallbacks
- **Lazy Loading**: `loading="lazy"` attribute
- **Responsive Images**: srcset for different sizes
- **Compression**: Optimize before upload

### Loading Strategy
- **Critical CSS**: Inline above-the-fold styles
- **Font Loading**: Preconnect to Google Fonts
- **Script Loading**: Defer non-critical JavaScript
- **Preloader**: Optional loading animation

### Core Web Vitals Targets
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## 🚀 Design Update Roadmap

### Phase 1: Foundation (Current)
- ✅ Audit existing structure
- ✅ Document design system
- 🔄 Standardize CSS variables
- 🔄 Create component documentation

### Phase 2: Visual Modernization
- 🔜 Update color palette (if needed)
- 🔜 Refine typography scale
- 🔜 Enhance button styles
- 🔜 Modernize card designs

### Phase 3: Component Refinement
- 🔜 Standardize all shared components
- 🔜 Create reusable utility classes
- 🔜 Implement consistent spacing
- 🔜 Enhance mobile experience

### Phase 4: Polish & Optimization
- 🔜 Animation refinements
- 🔜 Accessibility audit
- 🔜 Performance optimization
- 🔜 Cross-browser testing

---

## 📝 Notes for Developers

### Current State Analysis

#### ✅ Strengths
- Clean, semantic HTML structure
- Mobile-first responsive design
- Modular component architecture
- Good accessibility foundation
- Performance-conscious (lazy loading, observers)

#### ⚠️ Areas for Improvement
- **Inconsistent CSS paths**: Some pages use `css/`, others use `assets/css/`
- **Duplicate navigation**: Navbar embedded in pages + separate component file
- **Color palette discrepancy**: README shows different colors than actual CSS
- **Missing properties page**: Referenced but not present
- **Component loading**: Not all pages use component system

#### 🎯 Immediate Actions Required
1. Standardize asset paths across all pages
2. Implement consistent component loading
3. Update color documentation to match implementation
4. Create missing properties.html page
5. Centralize all reusable components

---

## 📞 Contact & Support

For design system questions or updates:
- **Project Lead**: Olas Realtor Consulting Ltd
- **Email**: olasarealtor@gmail.com
- **Documentation**: This file (DESIGN_SYSTEM.md)

---

**Legend:**
- ✅ Completed
- 🔄 In Progress
- 🔜 Planned
- ⚠️ Needs Attention
