# Implementation Examples
## Culturally Authentic & Performance-Optimized Images

---

## 🏠 Home Page Examples

### Hero Section (Above-the-Fold)
```html
<!-- Hero banner - loads immediately, culturally authentic -->
<section class="hero">
    <div class="image-container image-overlay-green">
        <img 
            data-auto-image="home-hero-1"
            data-image-type="banner"
            data-image-context="hero"
            src="data:image/svg+xml;base64,..."
            alt="Modern Nigerian real estate cityscape showing Lagos Island skyline with tropical lighting and African architecture"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
            style="max-width: 100%; height: auto;"
        >
    </div>
    <div class="hero-content">
        <h1>Your Trusted Partner in Nigerian Real Estate</h1>
        <p>Discover premium properties in Lagos, Abuja, and Abeokuta</p>
    </div>
</section>
```

**Key Points**:
- ✅ `loading="eager"` - Hero loads immediately
- ✅ Specific alt text with location
- ✅ Brand color overlay (green)
- ✅ Responsive styling
- ✅ Width/height attributes prevent layout shift

---

### About Section
```html
<section class="section">
    <div class="container">
        <div class="about-content">
            <div class="about-image">
                <img 
                    data-auto-image="home-about-1"
                    data-image-type="content"
                    data-image-context="about"
                    alt="Happy Nigerian family viewing their new home with African real estate consultant in tropical Lagos setting"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                    style="max-width: 100%; height: auto; object-fit: cover;"
                >
            </div>
            <div class="about-text">
                <h2>About Olas Realtor Consulting Ltd</h2>
                <p>Your trusted partner in Nigerian real estate...</p>
            </div>
        </div>
    </div>
</section>
```

**Key Points**:
- ✅ `loading="lazy"` - Below-the-fold
- ✅ Culturally specific alt text
- ✅ Responsive with object-fit
- ✅ Proper dimensions

---

### Property Cards
```html
<div class="card-grid">
    <!-- Property Card 1 -->
    <div class="property-card">
        <div class="property-image">
            <img 
                data-auto-image="home-property-1"
                data-image-type="card"
                data-image-context="residential"
                alt="Luxury 4-bedroom duplex with gated estate, tropical garden, and red earth landscaping in Lekki Phase 1, Lagos"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                style="max-width: 100%; height: auto;"
            >
            <span class="property-badge">For Sale</span>
        </div>
        <div class="property-content">
            <h3 class="property-title">Luxury 4-Bedroom Duplex</h3>
            <p class="property-location">
                <i class="fas fa-map-marker-alt"></i> Lekki Phase 1, Lagos
            </p>
            <div class="property-features">
                <span><i class="fas fa-bed"></i> 4 Beds</span>
                <span><i class="fas fa-bath"></i> 3 Baths</span>
                <span><i class="fas fa-ruler-combined"></i> 350 sqm</span>
            </div>
            <p class="property-price">₦85,000,000</p>
        </div>
    </div>

    <!-- Property Card 2 - Commercial -->
    <div class="property-card">
        <div class="property-image">
            <img 
                data-auto-image="home-property-2"
                data-image-type="card"
                data-image-context="commercial"
                alt="Modern commercial office building in Ikeja business district Lagos with African architecture and tropical environment"
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                style="max-width: 100%; height: auto;"
            >
            <span class="property-badge">For Sale</span>
        </div>
        <div class="property-content">
            <h3 class="property-title">Commercial Office Space</h3>
            <p class="property-location">
                <i class="fas fa-map-marker-alt"></i> Ikeja GRA, Lagos
            </p>
            <p class="property-price">₦150,000,000</p>
        </div>
    </div>
</div>
```

**Key Points**:
- ✅ Different contexts (residential vs commercial)
- ✅ Location-specific alt text
- ✅ Lazy loading for performance
- ✅ Architectural details in alt text

---

### Testimonials
```html
<div class="card-grid">
    <!-- Testimonial 1 -->
    <div class="testimonial-card">
        <div class="testimonial-content">
            <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
            <p class="testimonial-text">
                "Olas Realtor helped us find our dream home in Lekki..."
            </p>
            <div class="testimonial-author">
                <div class="author-image">
                    <img 
                        data-auto-image="home-testimonial-1"
                        data-image-type="profile"
                        data-image-context="testimonials"
                        alt="Mr. Adebayo Johnson, professional Nigerian businessman and satisfied property buyer"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="400"
                        style="max-width: 100%; height: auto; border-radius: 50%;"
                    >
                </div>
                <div>
                    <h4 class="author-name">Mr. Adebayo Johnson</h4>
                    <p class="author-title">Property Buyer</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Testimonial 2 - Female Professional -->
    <div class="testimonial-card">
        <div class="testimonial-content">
            <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
            <p class="testimonial-text">
                "The real estate training program was excellent..."
            </p>
            <div class="testimonial-author">
                <div class="author-image">
                    <img 
                        data-auto-image="home-testimonial-2"
                        data-image-type="profile"
                        data-image-context="testimonials"
                        alt="Miss Chioma Okafor, professional Nigerian businesswoman and real estate training graduate"
                        loading="lazy"
                        decoding="async"
                        width="400"
                        height="400"
                        style="max-width: 100%; height: auto; border-radius: 50%;"
                    >
                </div>
                <div>
                    <h4 class="author-name">Miss Chioma Okafor</h4>
                    <p class="author-title">Training Graduate</p>
                </div>
            </div>
        </div>
    </div>
</div>
```

**Key Points**:
- ✅ Profile type (1:1 aspect ratio)
- ✅ Specific names and roles in alt text
- ✅ Nigerian names for authenticity
- ✅ Border-radius for circular images

---

## 📄 About Page Examples

### Company Overview
```html
<section class="section">
    <div class="container">
        <div class="about-content">
            <div class="about-image">
                <img 
                    data-auto-image="about-company-1"
                    data-image-type="content"
                    data-image-context="company"
                    alt="Modern office interior in Lagos Nigeria with African professionals working in collaborative workspace with tropical lighting"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                    style="max-width: 100%; height: auto;"
                >
            </div>
            <div class="about-text">
                <h2>Who We Are</h2>
                <p>Olas Realtor Consulting Ltd is a premier real estate consulting firm...</p>
            </div>
        </div>
    </div>
</section>
```

---

### Founder Section
```html
<section class="section section-alt">
    <div class="container">
        <div class="section-title">
            <h2>Meet Our Founder</h2>
        </div>
        <div class="about-content">
            <div class="about-image">
                <img 
                    data-auto-image="about-founder-1"
                    data-image-type="content"
                    data-image-context="founder"
                    alt="Mr. Ola Adeyemi, professional Nigerian businessman and CEO of Olas Realtor, executive portrait in formal suit with office background"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                    style="max-width: 100%; height: auto;"
                >
            </div>
            <div class="about-text">
                <h3>Mr. Ola Adeyemi</h3>
                <p>Founder & Chief Executive Officer</p>
                <p>With over 15 years of experience...</p>
            </div>
        </div>
    </div>
</section>
```

---

### Team Section
```html
<section class="section">
    <div class="container">
        <div class="section-title">
            <h2>Our Team & Projects</h2>
        </div>
        <div class="card-grid">
            <div class="card">
                <div class="card-image">
                    <img 
                        data-auto-image="about-team-1"
                        data-image-type="card"
                        data-image-context="team"
                        alt="Nigerian real estate professional team meeting with African agents collaborating in modern Lagos office"
                        loading="lazy"
                        decoding="async"
                        width="800"
                        height="600"
                        style="max-width: 100%; height: auto;"
                    >
                </div>
                <div class="card-content">
                    <h3>Expert Team</h3>
                    <p>Certified professionals with deep market knowledge</p>
                </div>
            </div>
        </div>
    </div>
</section>
```

---

## 🏢 Services Page Examples

### Property Sales Service
```html
<div class="card">
    <div class="card-image">
        <img 
            data-auto-image="services-sales-1"
            data-image-type="card"
            data-image-context="propertySales"
            alt="Nigerian property inspector, African professional surveyor checking documents on construction site with red earth and tropical setting"
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
            style="max-width: 100%; height: auto;"
        >
    </div>
    <div class="card-content">
        <h3><i class="fas fa-home"></i> Property Sales</h3>
        <p>Verified property listings with due diligence...</p>
        <a href="property-sales.html" class="card-link">Learn More</a>
    </div>
</div>
```

---

### Property Management Service
```html
<div class="card">
    <div class="card-image">
        <img 
            data-auto-image="services-management-1"
            data-image-type="card"
            data-image-context="propertyManagement"
            alt="Property management in Nigeria with African supervisor inspecting building maintenance in tropical environment"
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
            style="max-width: 100%; height: auto;"
        >
    </div>
    <div class="card-content">
        <h3><i class="fas fa-building"></i> Property Management</h3>
        <p>Professional tenant management, maintenance...</p>
        <a href="services.html#property-management" class="card-link">Learn More</a>
    </div>
</div>
```

---

### Training Service
```html
<div class="card">
    <div class="card-image">
        <img 
            data-auto-image="services-training-1"
            data-image-type="card"
            data-image-context="training"
            alt="Business training workshop in Lagos Nigeria with African instructor teaching professional development class to Nigerian participants"
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
            style="max-width: 100%; height: auto;"
        >
    </div>
    <div class="card-content">
        <h3><i class="fas fa-graduation-cap"></i> Training & Mentorship</h3>
        <p>Real estate investment workshops...</p>
        <a href="services.html#training" class="card-link">Learn More</a>
    </div>
</div>
```

---

## 🏘️ Properties Page Examples

### Residential Property Listing
```html
<div class="property-card">
    <div class="property-image">
        <img 
            data-auto-image="property-residential-1"
            data-image-type="card"
            data-image-context="residential"
            alt="Luxury 4-bedroom duplex in Lekki Lagos with gated estate, tropical garden, red earth landscaping, and palm trees under sunny Nigerian sky"
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
            style="max-width: 100%; height: auto;"
        >
        <span class="property-badge">For Sale</span>
    </div>
    <div class="property-content">
        <h3>Luxury 4-Bedroom Duplex</h3>
        <p class="property-location">
            <i class="fas fa-map-marker-alt"></i> Lekki Phase 1, Lagos
        </p>
        <div class="property-features">
            <span><i class="fas fa-bed"></i> 4 Beds</span>
            <span><i class="fas fa-bath"></i> 3 Baths</span>
            <span><i class="fas fa-ruler-combined"></i> 350 sqm</span>
        </div>
        <p class="property-price">₦85,000,000</p>
        <button class="btn btn-primary">View Details</button>
    </div>
</div>
```

---

### Commercial Property Listing
```html
<div class="property-card">
    <div class="property-image">
        <img 
            data-auto-image="property-commercial-1"
            data-image-type="card"
            data-image-context="commercial"
            alt="Modern commercial office building in Ikeja business district Lagos with Nigerian African architecture and tropical environment"
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
            style="max-width: 100%; height: auto;"
        >
        <span class="property-badge">For Sale</span>
    </div>
    <div class="property-content">
        <h3>Commercial Office Space</h3>
        <p class="property-location">
            <i class="fas fa-map-marker-alt"></i> Ikeja GRA, Lagos
        </p>
        <div class="property-features">
            <span><i class="fas fa-building"></i> Office</span>
            <span><i class="fas fa-restroom"></i> 4 Restrooms</span>
            <span><i class="fas fa-ruler-combined"></i> 450 sqm</span>
            <span><i class="fas fa-car"></i> 10 Parking</span>
        </div>
        <p class="property-price">₦150,000,000</p>
        <button class="btn btn-primary">View Details</button>
    </div>
</div>
```

---

### Land Property Listing
```html
<div class="property-card">
    <div class="property-image">
        <img 
            data-auto-image="property-land-1"
            data-image-type="card"
            data-image-context="land"
            alt="Residential land plot for sale in Abeokuta with red laterite soil, tropical vegetation, palm trees, and for-sale signboard"
            loading="lazy"
            decoding="async"
            width="800"
            height="600"
            style="max-width: 100%; height: auto;"
        >
        <span class="property-badge">For Sale</span>
    </div>
    <div class="property-content">
        <h3>Residential Land Plot</h3>
        <p class="property-location">
            <i class="fas fa-map-marker-alt"></i> Abeokuta, Ogun State
        </p>
        <div class="property-features">
            <span><i class="fas fa-ruler-combined"></i> 600 sqm</span>
            <span><i class="fas fa-file-alt"></i> C of O</span>
        </div>
        <p class="property-price">₦12,000,000</p>
        <button class="btn btn-primary">View Details</button>
    </div>
</div>
```

---

## 📞 Contact Page Examples

### Hero Section
```html
<section class="hero" style="padding: 80px 20px;">
    <div class="hero-content">
        <img 
            data-auto-image="contact-hero-1"
            data-image-type="banner"
            data-image-context="hero"
            alt="Friendly Nigerian real estate agent, African professional smiling and welcoming clients in modern Lagos office"
            loading="eager"
            decoding="async"
            width="1920"
            height="1080"
            style="max-width: 100%; height: auto;"
        >
        <h1>Contact Us</h1>
        <p>We're Here to Help You Achieve Your Goals</p>
    </div>
</section>
```

---

### Office Image
```html
<div class="contact-info">
    <img 
        data-auto-image="contact-office-1"
        data-image-type="content"
        data-image-context="office"
        alt="Modern office front of Olas Realtor in Lagos Nigeria with African architecture, tropical landscaping, and company signage"
        loading="lazy"
        decoding="async"
        width="800"
        height="600"
        style="max-width: 100%; height: auto; border-radius: 10px;"
    >
    <h3>Visit Our Office</h3>
    <p><i class="fas fa-map-marker-alt"></i> Lagos, Nigeria</p>
</div>
```

---

## 🎨 Brand Color Overlay Examples

### Green Overlay (Primary Brand Color)
```html
<div class="image-container image-overlay-green" style="position: relative;">
    <img 
        data-auto-image="hero-1"
        data-image-type="banner"
        data-image-context="hero"
        alt="..."
        loading="eager"
        style="max-width: 100%; height: auto;"
    >
    <!-- Overlay automatically applied via CSS -->
</div>
```

### Maroon Overlay (Secondary Brand Color)
```html
<div class="image-container image-overlay-maroon" style="position: relative;">
    <img 
        data-auto-image="about-1"
        data-image-type="content"
        data-image-context="company"
        alt="..."
        loading="lazy"
        style="max-width: 100%; height: auto;"
    >
    <!-- Overlay automatically applied via CSS -->
</div>
```

### Tropical Color Grading
```html
<img 
    data-auto-image="property-1"
    data-image-type="card"
    data-image-context="residential"
    alt="..."
    loading="lazy"
    class="tropical-grading"
    style="max-width: 100%; height: auto;"
>
<!-- Applies warm, saturated tropical color grading -->
```

---

## ✅ Complete Implementation Checklist

For each image, ensure:

### HTML Attributes
- [ ] `data-auto-image="unique-id"` - Unique identifier
- [ ] `data-image-type="banner|card|content|profile"` - Correct type
- [ ] `data-image-context="..."` - Culturally specific context
- [ ] `alt="..."` - Descriptive alt text (10-15 words)
- [ ] `loading="lazy"` or `loading="eager"` - Appropriate loading
- [ ] `decoding="async"` - Async decoding
- [ ] `width="..."` and `height="..."` - Prevent layout shift
- [ ] `style="max-width: 100%; height: auto;"` - Responsive

### Alt Text Requirements
- [ ] Includes property/person type
- [ ] Mentions specific location (Lagos, Abuja, etc.)
- [ ] References Nigerian/African context
- [ ] Describes key features
- [ ] 10-15 words minimum

### Cultural Authenticity
- [ ] Prompt includes "nigerian" or "african"
- [ ] Specifies location (Lagos, Abuja, Abeokuta)
- [ ] Mentions tropical environment
- [ ] References red earth, palm trees (if applicable)
- [ ] Avoids Western/non-African references

### Performance
- [ ] Lazy loading for below-the-fold
- [ ] Eager loading for hero only
- [ ] WebP/AVIF format configured
- [ ] Responsive styling applied
- [ ] No layout shift on load

---

**Version**: 1.0  
**Last Updated**: October 2025  
**Ready for Production**: ✅
