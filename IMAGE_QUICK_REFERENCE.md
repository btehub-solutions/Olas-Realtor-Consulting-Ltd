# Image Generation System - Quick Reference Card

## 🎯 One-Page Cheat Sheet

---

## 📦 Files Created

```
js/
├── image-config.js      ← Configuration & prompts
└── image-loader.js      ← Main engine

css/
└── image-loader.css     ← Styling & animations

Documentation/
├── IMAGE_GENERATION_GUIDE.md      ← Full guide
├── QUICK_SETUP_IMAGES.md          ← 5-min setup
├── IMAGE_IMPLEMENTATION_SUMMARY.md ← Overview
├── IMAGE_SYSTEM_CHECKLIST.md      ← Integration checklist
└── IMAGE_QUICK_REFERENCE.md       ← This file

Demo/
└── example-auto-images.html       ← Live examples
```

---

## ⚡ Quick Setup (3 Steps)

### 1️⃣ Get API Key
- **Unsplash**: https://unsplash.com/developers (50/hour)
- **Pexels**: https://www.pexels.com/api/ (200/hour)

### 2️⃣ Configure
```javascript
// js/image-config.js (line 11)
accessKey: 'paste_your_key_here'
```

### 3️⃣ Add Scripts
```html
<!-- Before </body> in ALL HTML files -->
<link rel="stylesheet" href="css/image-loader.css">
<script src="js/image-config.js"></script>
<script src="js/image-loader.js"></script>
```

---

## 🖼️ Image Syntax

### Basic Template
```html
<img 
    data-auto-image="unique-id"
    data-image-type="TYPE"
    data-image-context="CONTEXT"
    alt="Description"
    loading="lazy"
>
```

---

## 📐 Image Types

| Type | Dimensions | Ratio | Use Case |
|------|------------|-------|----------|
| `banner` | 1920×1080 | 16:9 | Hero sections |
| `card` | 800×600 | 4:3 | Property cards |
| `content` | 800×600 | 4:3 | General content |
| `profile` | 400×400 | 1:1 | Testimonials |

---

## 🎨 Image Contexts

| Context | Description | Example Prompts |
|---------|-------------|-----------------|
| `hero` | Cityscapes, banners | Lagos skyline, modern estates |
| `residential` | Homes, apartments | Luxury homes, duplexes |
| `commercial` | Offices, retail | Office buildings, shops |
| `properties` | General property | Mixed property types |
| `team` | Business people | Professionals, meetings |
| `office` | Workspaces | Corporate offices |
| `testimonials` | Portraits | Professional Nigerians |
| `company` | Corporate | Office interiors, meetings |
| `founder` | Executive | Business leader |
| `training` | Education | Workshops, classes |

---

## 📋 Common Examples

### Hero Banner
```html
<img 
    data-auto-image="home-hero-1"
    data-image-type="banner"
    data-image-context="hero"
    alt="Modern Nigerian Real Estate"
    loading="eager"
>
```

### Property Card
```html
<img 
    data-auto-image="property-lekki-1"
    data-image-type="card"
    data-image-context="residential"
    alt="4-Bedroom Duplex in Lekki"
    loading="lazy"
>
```

### Testimonial
```html
<img 
    data-auto-image="testimonial-john"
    data-image-type="profile"
    data-image-context="testimonials"
    alt="Mr. John Doe"
    loading="lazy"
>
```

### Team Member
```html
<img 
    data-auto-image="team-member-1"
    data-image-type="content"
    data-image-context="team"
    alt="Real Estate Agent"
    loading="lazy"
>
```

---

## 🔧 Console Commands

```javascript
// View cache
console.log(imageLoader.cache);

// Clear cache
imageLoader.clearCache();

// Reload all images
imageLoader.reloadAllImages();

// Load specific image
imageLoader.loadImageById('home-hero-1');

// Check loaded images
console.log(imageLoader.loadedImages);
```

---

## 🐛 Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Images not loading | Check API key in `image-config.js` |
| Console errors | Verify scripts are loaded |
| Wrong images | Check `data-image-context` |
| Slow loading | Enable cache, use both APIs |
| Rate limit hit | Clear cache less often |

---

## 📊 Page-Specific IDs

### Home Page (index.html)
```
home-hero-1              (banner, hero)
home-about-1             (content, about)
home-service-1,2,3       (card, services)
home-property-1,2,3      (card, residential)
home-testimonial-1,2,3   (profile, testimonials)
```

### About Page (about.html)
```
about-company-1          (content, company)
about-founder-1          (content, founder)
about-team-1,2,3         (card, team)
```

### Services Page (services.html)
```
services-sales-1         (card, propertySales)
services-letting-1       (card, propertyManagement)
services-training-1      (card, training)
```

### Properties Page
```
property-1,2,3...        (card, residential/commercial)
```

### Contact Page (contact.html)
```
contact-hero-1           (banner, hero)
contact-office-1         (content, office)
```

---

## 🎯 Best Practices

### ✅ DO
- Use unique IDs for each image
- Match context to content
- Add descriptive alt text
- Use `loading="lazy"` (except hero)
- Enable caching

### ❌ DON'T
- Reuse same ID
- Use generic contexts
- Skip alt text
- Load all images eagerly
- Disable cache

---

## 📈 Performance Tips

1. **Enable Caching** (default: 7 days)
2. **Use Lazy Loading** (automatic)
3. **Optimize Quality** (adjust in config)
4. **Use Both APIs** (automatic fallback)
5. **Monitor Usage** (check weekly)

---

## 🔒 API Limits

| Provider | Free Tier | Paid |
|----------|-----------|------|
| Unsplash | 50/hour | $9/mo (10k) |
| Pexels | 200/hour | Free forever |

**With 7-day cache**: ~30 calls/week

---

## 📱 Mobile Optimization

All images are automatically:
- ✅ Responsive
- ✅ Lazy loaded
- ✅ Compressed
- ✅ WebP format (with fallback)

---

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome 58+ | ✅ Full |
| Firefox 55+ | ✅ Full |
| Safari 12.1+ | ✅ Full |
| Edge 79+ | ✅ Full |
| IE11 | ⚠️ Fallback |

---

## 📚 Documentation Files

1. **Full Guide**: `IMAGE_GENERATION_GUIDE.md`
2. **Quick Setup**: `QUICK_SETUP_IMAGES.md`
3. **Summary**: `IMAGE_IMPLEMENTATION_SUMMARY.md`
4. **Checklist**: `IMAGE_SYSTEM_CHECKLIST.md`
5. **This Card**: `IMAGE_QUICK_REFERENCE.md`
6. **Demo**: `example-auto-images.html`

---

## 🆘 Need Help?

1. Check `IMAGE_GENERATION_GUIDE.md`
2. Open `example-auto-images.html`
3. Check browser console (F12)
4. Run: `imageLoader.clearCache()`

---

## ✅ Quick Verification

```javascript
// In browser console:

// 1. Check system loaded
typeof imageLoader  // Should be "object"

// 2. Check config
typeof ImageConfig  // Should be "object"

// 3. View cache
imageLoader.cache   // Should show cached images

// 4. Check API key
ImageConfig.api.unsplash.accessKey  // Should NOT be "YOUR_..."
```

---

## 🎉 Success Indicators

- ✅ Images load automatically
- ✅ Nigeria-relevant content
- ✅ Consistent aspect ratios
- ✅ Fast page loads
- ✅ No console errors
- ✅ Cache working

---

## 📞 Quick Support

**Issue**: Images not loading  
**Fix**: Check API key, clear cache, check console

**Issue**: Wrong images  
**Fix**: Verify `data-image-context`

**Issue**: Slow loading  
**Fix**: Enable cache, check network

**Issue**: Rate limit  
**Fix**: Use both APIs, increase cache duration

---

## 🚀 Ready to Go?

1. ✅ API key configured
2. ✅ Scripts added to HTML
3. ✅ Images converted
4. ✅ Tested on demo page
5. ✅ No console errors

**You're all set!** 🎊

---

**Print this page for quick reference** 📄

**Version**: 1.0 | **Updated**: Oct 2025
