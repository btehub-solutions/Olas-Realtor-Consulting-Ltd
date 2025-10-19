# Cultural Authenticity & Performance Guide
## Nigerian Real Estate Imagery Standards

---

## 🎯 Overview

This guide ensures all images on the Olas Realtor website are:
- ✅ **Culturally Authentic** - Genuinely Nigerian people, architecture, and landscapes
- ✅ **Performance Optimized** - Fast loading with WebP/AVIF formats
- ✅ **Responsive** - Perfect on all devices
- ✅ **Accessible** - Descriptive alt text for SEO and accessibility
- ✅ **Brand Consistent** - Deep green and maroon color integration

---

## 🇳🇬 Cultural Authenticity Requirements

### 1. People Representation

#### ✅ MUST INCLUDE
- **Nigerian/African people** in all human imagery
- **West African features** and skin tones
- **Professional Nigerian businesspeople** in corporate settings
- **Nigerian families** in residential contexts
- **Local attire** mixed with professional wear

#### ❌ MUST AVOID
- Western/Caucasian models
- European or Asian models
- Stock photos without African representation
- Generic international imagery

#### Example Prompts
```
✅ "professional nigerian businessman african male suit office portrait"
✅ "happy nigerian family african parents children home"
✅ "nigerian real estate agent african professional showing property"

❌ "businessman in suit" (too generic)
❌ "family at home" (not specific enough)
❌ "real estate agent" (could be any ethnicity)
```

---

### 2. Architecture & Buildings

#### ✅ NIGERIAN ARCHITECTURAL FEATURES
- **Gated estates** with compound walls
- **Red earth** foundations and surroundings
- **Tropical vegetation** - palm trees, lush greenery
- **Modern Nigerian design** - contemporary African architecture
- **Bungalows and duplexes** - common Nigerian residential styles
- **Compound gates** - security features typical in Nigeria
- **Painted walls** - often cream, white, or pastel colors
- **Flat or pitched roofs** - Nigerian building styles

#### ❌ AVOID
- Western suburban homes (American/European styles)
- Snow or cold-climate architecture
- Non-tropical landscaping
- Architecture without cultural context

#### Specific Locations
- **Lagos**: Victoria Island, Lekki, Ikeja, Ikoyi waterfront properties
- **Abuja**: Federal Capital Territory, modern government district
- **Abeokuta**: Ogun State, Yoruba cultural architecture
- **Port Harcourt**: Rivers State, oil industry hub
- **Ibadan**: Oyo State, historic Yoruba city

---

### 3. Environment & Landscape

#### ✅ NIGERIAN ENVIRONMENTAL FEATURES
- **Red/laterite soil** - characteristic Nigerian earth
- **Tropical vegetation** - palm trees, banana plants, lush greenery
- **Sunny/warm lighting** - tropical climate
- **Golden hour** - warm, natural lighting
- **Humid atmosphere** - tropical feel
- **Rainy season** - occasional overcast (but mostly sunny)
- **Urban density** - Lagos/Abuja cityscapes

#### ❌ AVOID
- Temperate climate vegetation
- Snow, autumn leaves, or cold weather
- Desert landscapes (Nigeria is tropical)
- European or American street scenes

---

### 4. Brand Color Integration

#### Primary Colors
- **Deep Green (#006B3C)** - Primary brand color
- **Maroon/Horse Blood (#8B0000)** - Secondary accent
- **Gold (#FFD700)** - Accent highlights

#### Implementation
```html
<!-- Brand color overlay on hero images -->
<div class="image-container image-overlay-green">
    <img data-auto-image="home-hero-1" alt="...">
</div>

<!-- Maroon accent overlay -->
<div class="image-container image-overlay-maroon">
    <img data-auto-image="about-hero-1" alt="...">
</div>
```

#### In Scene Props
- **Signboards** with company colors
- **Branded materials** - folders, documents
- **Clothing accents** - ties, shirts in brand colors
- **Office decor** - green and maroon elements

---

## 🚀 Performance Optimization

### 1. Responsive Images

#### CSS Implementation
```css
/* Automatically applied to all images */
img {
    max-width: 100%;
    height: auto;
    display: block;
}

img[data-auto-image] {
    max-width: 100%;
    height: auto;
    object-fit: cover;
}
```

#### HTML Implementation
```html
<!-- Responsive image with proper sizing -->
<img 
    data-auto-image="property-1"
    data-image-type="card"
    data-image-context="residential"
    alt="Luxury 4-Bedroom Duplex in Lekki, Lagos"
    loading="lazy"
    decoding="async"
    style="width: 100%; height: auto;"
>
```

---

### 2. Lazy Loading

#### Above-the-Fold (Hero Images)
```html
<!-- Load immediately - hero section -->
<img 
    data-auto-image="home-hero-1"
    data-image-type="banner"
    data-image-context="hero"
    alt="Modern Nigerian Real Estate Cityscape"
    loading="eager"
    decoding="async"
>
```

#### Below-the-Fold (All Other Images)
```html
<!-- Lazy load - property cards, testimonials, etc. -->
<img 
    data-auto-image="property-1"
    data-image-type="card"
    data-image-context="residential"
    alt="Luxury Home in Lagos"
    loading="lazy"
    decoding="async"
>
```

---

### 3. Next-Gen Formats (WebP/AVIF)

#### Automatic Format Detection
The system automatically serves:
1. **AVIF** - Best compression (if browser supports)
2. **WebP** - Good compression (most modern browsers)
3. **JPEG** - Fallback (older browsers)

#### Configuration
```javascript
// js/image-config.js
optimization: {
    format: 'webp',              // Primary format
    fallbackFormat: 'jpg',       // Fallback
    avifSupport: true,           // Enable AVIF
    compression: 'auto'          // Automatic compression
}
```

#### Manual Implementation (Optional)
```html
<picture>
    <source srcset="image.avif" type="image/avif">
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Fallback">
</picture>
```

---

### 4. Descriptive Alt Text

#### ✅ GOOD Alt Text Examples
```html
<!-- Specific, descriptive, includes location -->
<img alt="Luxury 4-bedroom duplex with tropical garden in Lekki Phase 1, Lagos">

<!-- Describes people and context -->
<img alt="Nigerian real estate consultant meeting with African family in modern Lagos office">

<!-- Includes architectural details -->
<img alt="Modern gated estate with red earth landscaping and palm trees in Abuja">

<!-- Professional portrait with context -->
<img alt="Mr. Adebayo Johnson, Nigerian property buyer and satisfied client">
```

#### ❌ BAD Alt Text Examples
```html
<!-- Too generic -->
<img alt="Property">
<img alt="House">
<img alt="Person">

<!-- Not descriptive -->
<img alt="Image 1">
<img alt="Photo">

<!-- Missing cultural context -->
<img alt="Real estate agent">
<img alt="Office building">
```

#### Alt Text Formula
```
[Property Type] + [Key Features] + [Location] + [Cultural Context]

Examples:
"Modern 3-bedroom apartment with balcony in Victoria Island, Lagos, Nigeria"
"Nigerian family viewing luxury duplex with real estate agent in tropical setting"
"Gated residential estate with red earth and palm trees in Abeokuta, Ogun State"
```

---

## 📋 Implementation Checklist

### For Each Image

- [ ] **Cultural Authenticity**
  - [ ] Features Nigerian/African people (if people are shown)
  - [ ] Shows Nigerian architecture or landscapes
  - [ ] Includes tropical environment (red earth, palm trees)
  - [ ] Reflects Lagos, Abuja, Abeokuta, or other Nigerian cities

- [ ] **Performance**
  - [ ] Has `max-width: 100%; height: auto;` styling
  - [ ] Uses `loading="lazy"` (except hero images)
  - [ ] Has `decoding="async"` attribute
  - [ ] Configured for WebP/AVIF formats

- [ ] **Accessibility**
  - [ ] Has descriptive alt text (10-15 words)
  - [ ] Alt text includes location and context
  - [ ] Alt text mentions Nigerian/African context
  - [ ] No empty alt attributes

- [ ] **Brand Consistency**
  - [ ] Color grading applied (warm tropical tones)
  - [ ] Brand colors visible in scene (optional)
  - [ ] Consistent professional aesthetic

---

## 🎨 Image Prompt Templates

### Residential Properties
```
"luxury [property type] [location] nigeria african architecture gated estate tropical garden red earth palm trees sunny day"

Examples:
- "luxury 4-bedroom duplex lekki lagos nigeria african architecture gated estate tropical garden red earth"
- "modern apartment building victoria island lagos nigerian architecture palm trees waterfront"
- "residential bungalow abeokuta ogun state nigeria african home tropical landscaping"
```

### Commercial Properties
```
"commercial [building type] [location] nigeria african architecture modern design tropical environment"

Examples:
- "commercial office building ikeja lagos nigeria african architecture business district"
- "retail shopping complex abuja nigeria african design modern architecture"
- "business center port harcourt nigeria african commercial building"
```

### People (Professionals)
```
"professional nigerian [role] african [gender] [setting] [attire] [expression]"

Examples:
- "professional nigerian real estate agent african male modern office suit confident smile"
- "professional nigerian businesswoman african female corporate attire office portrait"
- "nigerian family african parents children viewing new home happy tropical setting"
```

### Office/Corporate
```
"[office type] nigeria african professionals [activity] modern interior tropical lighting"

Examples:
- "corporate office lagos nigerian professionals african team meeting modern workspace"
- "real estate office nigeria african agents working collaborative space tropical light"
- "business meeting nigeria african professionals discussing documents conference room"
```

---

## 🌍 Location-Specific Guidelines

### Lagos
- **Features**: Waterfront, island/mainland, traffic, urban density
- **Areas**: Victoria Island, Lekki, Ikeja, Ikoyi, Ajah
- **Architecture**: Modern high-rises, gated estates, waterfront properties
- **Keywords**: "lagos nigeria island mainland lekki victoria island african city"

### Abuja
- **Features**: Modern planned city, government buildings, wide roads
- **Areas**: Central Business District, Maitama, Asokoro, Wuse
- **Architecture**: Contemporary government buildings, planned estates
- **Keywords**: "abuja nigeria federal capital territory african city modern"

### Abeokuta
- **Features**: Yoruba cultural heritage, Olumo Rock, traditional architecture
- **Areas**: Ogun State capital, historic city
- **Architecture**: Mix of traditional and modern, cultural significance
- **Keywords**: "abeokuta ogun state nigeria african city yoruba cultural"

---

## 🔍 Quality Control

### Before Publishing
1. **Visual Check**: Does the image look authentically Nigerian?
2. **People Check**: Are all people shown African/Nigerian?
3. **Environment Check**: Tropical setting with appropriate vegetation?
4. **Architecture Check**: Nigerian building styles and features?
5. **Alt Text Check**: Descriptive and culturally specific?
6. **Performance Check**: Lazy loading enabled? WebP format?
7. **Responsive Check**: Displays correctly on mobile?

### Testing Checklist
```javascript
// Browser console checks
console.log(imageLoader.loadedImages);  // Verify images loaded
console.log(imageLoader.cache);         // Check caching working

// Visual inspection
// - All people are African/Nigerian ✓
// - Architecture is Nigerian style ✓
// - Environment is tropical ✓
// - Alt text is descriptive ✓
// - Images responsive on mobile ✓
```

---

## 📊 Performance Metrics

### Target Metrics
- **Page Load Time**: < 3 seconds
- **Largest Contentful Paint (LCP)**: < 2.5 seconds
- **First Input Delay (FID)**: < 100ms
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Image Format**: 90%+ WebP/AVIF
- **Lazy Loading**: 100% below-the-fold images

### Monitoring
```javascript
// Check performance
performance.getEntriesByType('resource')
    .filter(r => r.initiatorType === 'img')
    .forEach(img => console.log(img.name, img.duration));
```

---

## 🆘 Common Issues & Solutions

### Issue: Images Don't Look Nigerian
**Solution**: 
- Add more specific keywords: "african", "nigerian", "tropical"
- Include location: "lagos", "abuja", "abeokuta"
- Specify environment: "red earth", "palm trees", "gated estate"

### Issue: Wrong Ethnicity in Images
**Solution**:
- Always include "african" and "nigerian" in prompts
- Add "west african" for more specificity
- Avoid generic terms like "professional" alone

### Issue: Architecture Looks Western
**Solution**:
- Add "nigerian architecture", "african design"
- Include "gated estate", "compound walls"
- Specify "tropical building", "red earth foundation"

### Issue: Images Load Slowly
**Solution**:
- Verify lazy loading enabled
- Check WebP/AVIF format configured
- Enable caching (7-day default)
- Reduce image quality if needed

---

## ✅ Success Criteria

Your images meet standards when:
- ✅ All people shown are visibly African/Nigerian
- ✅ Architecture reflects Nigerian building styles
- ✅ Environment shows tropical climate (red earth, palm trees)
- ✅ Alt text is descriptive and culturally specific
- ✅ Images load in WebP/AVIF format
- ✅ Lazy loading works on scroll
- ✅ Responsive on all devices
- ✅ Brand colors integrated subtly
- ✅ Page load time < 3 seconds
- ✅ No layout shift on image load

---

## 📚 Resources

### Image Prompts Reference
- See `js/image-config.js` for all prompts
- 100+ culturally authentic prompts included
- Specific to each page and section

### Performance Tools
- Google PageSpeed Insights
- WebPageTest
- Chrome DevTools Lighthouse

### Accessibility Tools
- WAVE Web Accessibility Evaluator
- axe DevTools
- Screen reader testing

---

**Version**: 1.0  
**Last Updated**: October 2025  
**Status**: Production Standards
