# Automatic Image Generation System
## Nigeria-Relevant Property & Lifestyle Images

### Overview
This system automatically generates and loads Nigeria-relevant property and lifestyle images using AI-powered stock photo APIs (Unsplash and Pexels). It includes lazy loading, image optimization, caching, and consistent aspect ratios.

---

## Features

✅ **Automatic Image Generation** - Fetches Nigeria-relevant images from Unsplash/Pexels APIs  
✅ **Lazy Loading** - Images load only when visible in viewport (performance optimization)  
✅ **Smart Caching** - 7-day cache to reduce API calls and improve load times  
✅ **Aspect Ratio Control** - Consistent 16:9 (banners), 4:3 (content), 1:1 (profiles)  
✅ **Nigeria Context** - All images reflect Nigerian architecture, people, and environment  
✅ **Fallback System** - Graceful degradation if APIs fail  
✅ **WebP Support** - Modern image format with JPEG fallback  
✅ **Responsive** - Optimized for all screen sizes  

---

## Setup Instructions

### 1. Get API Keys

#### Unsplash (Recommended)
1. Go to https://unsplash.com/developers
2. Create a free account
3. Create a new application
4. Copy your **Access Key**
5. Free tier: 50 requests/hour

#### Pexels (Alternative/Backup)
1. Go to https://www.pexels.com/api/
2. Create a free account
3. Generate an API key
4. Free tier: 200 requests/hour

### 2. Configure API Keys

Open `js/image-config.js` and replace the placeholder keys:

```javascript
api: {
    unsplash: {
        accessKey: 'YOUR_ACTUAL_UNSPLASH_ACCESS_KEY', // Replace this
        baseUrl: 'https://api.unsplash.com',
        photosEndpoint: '/photos/random'
    },
    pexels: {
        apiKey: 'YOUR_ACTUAL_PEXELS_API_KEY', // Replace this
        baseUrl: 'https://api.pexels.com/v1',
        searchEndpoint: '/search'
    }
}
```

### 3. Add Scripts to HTML

Add these scripts before the closing `</body>` tag in all HTML files:

```html
<!-- Image Generation System -->
<link rel="stylesheet" href="css/image-loader.css">
<script src="js/image-config.js"></script>
<script src="js/image-loader.js"></script>
```

### 4. Update Image Tags

Replace existing `<img>` tags with auto-loading versions:

#### Before:
```html
<img src="https://images.unsplash.com/photo-123456?w=800" alt="Property">
```

#### After:
```html
<img 
    data-auto-image="home-hero-1"
    data-image-type="banner"
    data-image-context="hero"
    src="data:image/svg+xml;base64,..."
    alt="Modern Nigerian Real Estate"
    loading="lazy"
>
```

---

## Image Attributes Explained

### `data-auto-image` (Required)
Unique identifier for the image. Used for caching.
- Format: `{page}-{section}-{number}`
- Example: `home-hero-1`, `about-team-2`, `property-card-5`

### `data-image-type` (Required)
Determines image dimensions and aspect ratio.
- **banner**: 1920x1080 (16:9) - Hero sections
- **content**: 800x600 (4:3) - General content
- **profile**: 400x400 (1:1) - Testimonials, team
- **card**: 800x600 (4:3) - Property cards

### `data-image-context` (Required)
Determines search query for Nigeria-relevant images.
- **hero**: Cityscape, modern architecture
- **properties**: Residential homes, apartments
- **team**: Professional Nigerians, business meetings
- **office**: Corporate offices, workspaces
- **testimonials**: Professional portraits

### `loading="lazy"` (Recommended)
Native browser lazy loading for better performance.

---

## Image Prompts by Page

### Home Page (`index.html`)

#### Hero Section
```html
<img 
    data-auto-image="home-hero-1"
    data-image-type="banner"
    data-image-context="hero"
    alt="Modern Nigerian Real Estate Cityscape"
    loading="lazy"
>
```
**Prompts**: Modern Nigerian real estate cityscape, luxury residential estates, Lagos/Abuja skyline

#### About Section
```html
<img 
    data-auto-image="home-about-1"
    data-image-type="content"
    data-image-context="about"
    alt="Happy Nigerian Family Viewing New Home"
    loading="lazy"
>
```
**Prompts**: Happy Nigerian family, real estate consultant meeting, modern property interior

#### Services Cards
```html
<img 
    data-auto-image="home-service-1"
    data-image-type="card"
    data-image-context="services"
    alt="Nigerian Property Inspection"
    loading="lazy"
>
```
**Prompts**: Property inspection, real estate office, modern apartment building

#### Property Cards
```html
<img 
    data-auto-image="home-property-1"
    data-image-type="card"
    data-image-context="properties"
    alt="Luxury Home in Lagos"
    loading="lazy"
>
```
**Prompts**: Luxury homes, modern apartments, residential estates in Nigeria

#### Testimonials
```html
<img 
    data-auto-image="home-testimonial-1"
    data-image-type="profile"
    data-image-context="testimonials"
    alt="Mr. Adebayo Johnson"
    loading="lazy"
>
```
**Prompts**: Professional Nigerian businessman/businesswoman, happy families

---

### About Page (`about.html`)

#### Company Overview
```html
<img 
    data-auto-image="about-company-1"
    data-image-type="content"
    data-image-context="company"
    alt="Olas Realtor Office"
    loading="lazy"
>
```
**Prompts**: Modern office interior, business meeting, corporate office Lagos

#### Founder Section
```html
<img 
    data-auto-image="about-founder-1"
    data-image-type="content"
    data-image-context="founder"
    alt="Founder - Mr. Ola Adeyemi"
    loading="lazy"
>
```
**Prompts**: Professional Nigerian businessman in suit, executive portrait

#### Team Section
```html
<img 
    data-auto-image="about-team-1"
    data-image-type="card"
    data-image-context="team"
    alt="Our Expert Team"
    loading="lazy"
>
```
**Prompts**: Business team meeting, real estate professionals, office collaboration

---

### Services Page (`services.html`)

#### Property Sales
```html
<img 
    data-auto-image="services-sales-1"
    data-image-type="card"
    data-image-context="propertySales"
    alt="Property Sales Services"
    loading="lazy"
>
```
**Prompts**: Property inspection with documents, advisory session, property viewing

#### Property Management
```html
<img 
    data-auto-image="services-management-1"
    data-image-type="card"
    data-image-context="propertyManagement"
    alt="Property Management Services"
    loading="lazy"
>
```
**Prompts**: Property management, building maintenance, tenant services

#### Training Programs
```html
<img 
    data-auto-image="services-training-1"
    data-image-type="card"
    data-image-context="training"
    alt="Real Estate Training"
    loading="lazy"
>
```
**Prompts**: Business training, professional workshop, training session

---

### Properties Page

#### Residential Properties
```html
<img 
    data-auto-image="property-residential-1"
    data-image-type="card"
    data-image-context="residential"
    alt="Luxury 4-Bedroom Duplex"
    loading="lazy"
>
```
**Prompts**: Luxury homes Lagos, modern apartments, residential duplexes, gated estates

#### Commercial Properties
```html
<img 
    data-auto-image="property-commercial-1"
    data-image-type="card"
    data-image-context="commercial"
    alt="Commercial Office Building"
    loading="lazy"
>
```
**Prompts**: Commercial office buildings, retail spaces, business centers

---

### Contact Page (`contact.html`)

#### Hero/Header
```html
<img 
    data-auto-image="contact-hero-1"
    data-image-type="banner"
    data-image-context="hero"
    alt="Contact Olas Realtor"
    loading="lazy"
>
```
**Prompts**: Friendly Nigerian real estate agent, customer service

#### Office Images
```html
<img 
    data-auto-image="contact-office-1"
    data-image-type="content"
    data-image-context="office"
    alt="Our Office"
    loading="lazy"
>
```
**Prompts**: Modern office front, corporate building entrance, professional office

---

## Advanced Configuration

### Customize Image Prompts

Edit `js/image-config.js` to add or modify prompts:

```javascript
prompts: {
    home: {
        hero: [
            'modern nigerian real estate cityscape lagos',
            'luxury residential estate nigeria',
            'YOUR CUSTOM PROMPT HERE'
        ]
    }
}
```

### Adjust Cache Duration

```javascript
cache: {
    enabled: true,
    duration: 7 * 24 * 60 * 60 * 1000, // 7 days (change as needed)
    storageKey: 'olas_realtor_images'
}
```

### Change Image Quality

```javascript
quality: {
    banner: { width: 1920, height: 1080 },  // Adjust dimensions
    content: { width: 800, height: 600 },
    profile: { width: 400, height: 400 },
    card: { width: 800, height: 600 }
}
```

### Add Custom Fallbacks

```javascript
fallbacks: {
    hero: 'https://your-cdn.com/hero-fallback.jpg',
    property: 'https://your-cdn.com/property-fallback.jpg',
    // Add more fallbacks
}
```

---

## Performance Optimization

### 1. Lazy Loading
Images load only when scrolled into view (50px margin).

### 2. Caching
Images cached in localStorage for 7 days to reduce API calls.

### 3. WebP Format
Modern browsers get WebP images (smaller file size).

### 4. Responsive Images
Appropriate sizes served based on viewport.

### 5. Intersection Observer
Efficient viewport detection for lazy loading.

---

## Browser Support

✅ Chrome 58+  
✅ Firefox 55+  
✅ Safari 12.1+  
✅ Edge 79+  
⚠️ IE11 (fallback mode - loads all images immediately)  

---

## Troubleshooting

### Images Not Loading

1. **Check API Keys**
   - Open browser console (F12)
   - Look for API errors
   - Verify keys in `image-config.js`

2. **Check Network**
   - Open DevTools → Network tab
   - Filter by "Img"
   - Check for failed requests

3. **Clear Cache**
   - Open browser console
   - Run: `imageLoader.clearCache()`
   - Refresh page

### API Rate Limits Exceeded

**Unsplash**: 50 requests/hour (free tier)
**Pexels**: 200 requests/hour (free tier)

**Solutions**:
- Increase cache duration
- Use both APIs (automatic fallback)
- Upgrade to paid plan
- Use local images as fallbacks

### Images Loading Slowly

1. **Enable Caching**
   ```javascript
   cache: { enabled: true }
   ```

2. **Reduce Image Quality**
   ```javascript
   quality: {
       banner: { width: 1280, height: 720 }  // Lower resolution
   }
   ```

3. **Use CDN for Fallbacks**
   Host fallback images on a CDN for faster delivery.

---

## Testing

### Manual Testing

1. **Test Image Loading**
   ```javascript
   // Open browser console
   imageLoader.loadImageById('home-hero-1');
   ```

2. **Reload All Images**
   ```javascript
   imageLoader.reloadAllImages();
   ```

3. **Check Cache**
   ```javascript
   console.log(imageLoader.cache);
   ```

### Test Different Contexts

Change `data-image-context` to test different prompts:
- `hero`, `properties`, `team`, `office`, `testimonials`

---

## Best Practices

### 1. Unique IDs
Always use unique `data-auto-image` IDs:
```html
✅ data-auto-image="home-hero-1"
✅ data-auto-image="home-hero-2"
❌ data-auto-image="hero" (too generic)
```

### 2. Descriptive Alt Text
```html
✅ alt="Modern 4-Bedroom Duplex in Lekki, Lagos"
❌ alt="Property"
```

### 3. Appropriate Image Types
- **banner**: Hero sections only
- **content**: Main content images
- **profile**: People photos (1:1 ratio)
- **card**: Grid items, property cards

### 4. Context Matching
Match context to content:
```html
<!-- Property card -->
<img data-image-context="properties" alt="Luxury Home">

<!-- Team member -->
<img data-image-context="team" alt="Real Estate Agent">
```

---

## API Costs & Limits

### Unsplash
- **Free**: 50 requests/hour
- **Paid**: Starting at $9/month for 10,000 requests

### Pexels
- **Free**: 200 requests/hour
- **No paid tier** (free forever)

### Recommendations
1. Start with **Pexels** (higher free limit)
2. Add **Unsplash** as backup
3. Enable **caching** (reduces API calls by 90%+)
4. Use **local fallbacks** for critical images

---

## Migration Guide

### From Static Images to Auto-Generated

**Step 1**: Identify all images
```bash
# Search for img tags
grep -r "<img" *.html
```

**Step 2**: Add data attributes
```html
<!-- Before -->
<img src="static-image.jpg" alt="Property">

<!-- After -->
<img 
    data-auto-image="unique-id"
    data-image-type="card"
    data-image-context="properties"
    src="static-image.jpg"
    alt="Property"
    loading="lazy"
>
```

**Step 3**: Test thoroughly
- Check all pages
- Verify images load correctly
- Test on mobile devices

**Step 4**: Remove old images (optional)
Once confirmed working, remove static image files.

---

## Support & Resources

### Documentation
- Unsplash API: https://unsplash.com/documentation
- Pexels API: https://www.pexels.com/api/documentation/
- Intersection Observer: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

### Need Help?
1. Check browser console for errors
2. Review this documentation
3. Test with manual image loading
4. Verify API keys are correct

---

## Changelog

### Version 1.0 (Current)
- ✅ Unsplash & Pexels API integration
- ✅ Lazy loading with Intersection Observer
- ✅ 7-day localStorage caching
- ✅ Nigeria-specific image prompts
- ✅ Automatic fallback system
- ✅ WebP support with JPEG fallback
- ✅ Responsive image optimization

---

## Future Enhancements

- [ ] AI-generated images (DALL-E, Midjourney)
- [ ] Image compression on-the-fly
- [ ] Progressive image loading (blur-up)
- [ ] Admin panel for image management
- [ ] Automatic alt text generation
- [ ] A/B testing for image performance

---

**Last Updated**: October 2025  
**Version**: 1.0  
**Author**: Olas Realtor Development Team
