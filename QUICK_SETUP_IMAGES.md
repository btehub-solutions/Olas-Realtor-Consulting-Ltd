# Quick Setup Guide - Automatic Image Generation

## 🚀 5-Minute Setup

### Step 1: Get API Key (2 minutes)

**Option A: Unsplash (Recommended)**
1. Visit: https://unsplash.com/developers
2. Click "Register as a developer"
3. Create new application
4. Copy your **Access Key**

**Option B: Pexels (Higher free limit)**
1. Visit: https://www.pexels.com/api/
2. Sign up for free
3. Generate API key
4. Copy your **API Key**

---

### Step 2: Configure API Key (1 minute)

Open `js/image-config.js` and replace:

```javascript
// Line 11-12 (Unsplash)
accessKey: 'YOUR_UNSPLASH_ACCESS_KEY',  // ← Paste your key here

// OR Line 17 (Pexels)
apiKey: 'YOUR_PEXELS_API_KEY',  // ← Paste your key here
```

---

### Step 3: Add Scripts to HTML (1 minute)

Add before closing `</body>` tag in **ALL** HTML files:

```html
<!-- Image Generation System -->
<link rel="stylesheet" href="css/image-loader.css">
<script src="js/image-config.js"></script>
<script src="js/image-loader.js"></script>
```

**Files to update:**
- ✅ index.html
- ✅ about.html
- ✅ services.html
- ✅ property-sales.html
- ✅ letting-rentals.html
- ✅ ict-training.html
- ✅ contact.html

---

### Step 4: Test (1 minute)

1. Open `example-auto-images.html` in browser
2. Check if images load
3. Open browser console (F12)
4. Look for any errors

**Success indicators:**
- ✅ Images appear after a few seconds
- ✅ No red errors in console
- ✅ Status shows "Loaded Images: X"

---

## 🎯 Quick Image Conversion

### Convert Existing Images

**Find this:**
```html
<img src="https://images.unsplash.com/photo-123456" alt="Property">
```

**Replace with:**
```html
<img 
    data-auto-image="unique-id-here"
    data-image-type="card"
    data-image-context="properties"
    alt="Property"
    loading="lazy"
>
```

---

## 📋 Image Type Cheat Sheet

| Use Case | `data-image-type` | `data-image-context` |
|----------|-------------------|----------------------|
| Hero banner | `banner` | `hero` |
| Property card | `card` | `residential` or `commercial` |
| Team photo | `content` | `team` |
| Office image | `content` | `office` |
| Testimonial | `profile` | `testimonials` |
| About section | `content` | `company` |

---

## 🔧 Common Issues & Fixes

### Images Not Loading?

**Check 1: API Key**
```javascript
// Open browser console (F12) and run:
console.log(ImageConfig.api.unsplash.accessKey);
// Should NOT show: "YOUR_UNSPLASH_ACCESS_KEY"
```

**Check 2: Scripts Loaded**
```javascript
// In console:
console.log(typeof imageLoader);
// Should show: "object"
```

**Check 3: Network Errors**
- Open DevTools → Network tab
- Look for failed API requests
- Check error messages

### Images Loading Slowly?

**Enable caching** (already enabled by default):
```javascript
// In js/image-config.js
cache: {
    enabled: true,  // ← Make sure this is true
    duration: 7 * 24 * 60 * 60 * 1000
}
```

### Rate Limit Exceeded?

**Unsplash**: 50 requests/hour  
**Pexels**: 200 requests/hour

**Solutions:**
1. Use both APIs (automatic fallback)
2. Increase cache duration
3. Use local images as fallbacks

---

## 📝 Example Implementations

### Home Page Hero
```html
<section class="hero">
    <img 
        data-auto-image="home-hero-1"
        data-image-type="banner"
        data-image-context="hero"
        alt="Modern Nigerian Real Estate Cityscape"
        loading="eager"
    >
    <div class="hero-content">
        <h1>Your Trusted Partner</h1>
    </div>
</section>
```

### Property Card
```html
<div class="property-card">
    <div class="property-image">
        <img 
            data-auto-image="property-lekki-1"
            data-image-type="card"
            data-image-context="residential"
            alt="Luxury 4-Bedroom Duplex in Lekki"
            loading="lazy"
        >
    </div>
    <div class="property-content">
        <h3>Luxury 4-Bedroom Duplex</h3>
        <p>Lekki Phase 1, Lagos</p>
    </div>
</div>
```

### Testimonial
```html
<div class="testimonial-card">
    <div class="author-image">
        <img 
            data-auto-image="testimonial-adebayo"
            data-image-type="profile"
            data-image-context="testimonials"
            alt="Mr. Adebayo Johnson"
            loading="lazy"
        >
    </div>
    <h4>Mr. Adebayo Johnson</h4>
    <p>Property Buyer</p>
</div>
```

### Team Member
```html
<div class="card">
    <div class="card-image">
        <img 
            data-auto-image="team-member-1"
            data-image-type="content"
            data-image-context="team"
            alt="Real Estate Consultant"
            loading="lazy"
        >
    </div>
    <div class="card-content">
        <h3>Our Expert Team</h3>
    </div>
</div>
```

---

## 🎨 Customization

### Change Image Prompts

Edit `js/image-config.js`:

```javascript
prompts: {
    home: {
        hero: [
            'modern nigerian real estate cityscape lagos',
            'YOUR CUSTOM PROMPT HERE',  // ← Add your prompts
            'luxury residential estate nigeria'
        ]
    }
}
```

### Adjust Image Quality

```javascript
quality: {
    banner: { width: 1920, height: 1080 },  // ← Change dimensions
    content: { width: 800, height: 600 },
    profile: { width: 400, height: 400 }
}
```

---

## ✅ Verification Checklist

Before going live:

- [ ] API key configured in `image-config.js`
- [ ] Scripts added to all HTML files
- [ ] Tested on `example-auto-images.html`
- [ ] No console errors
- [ ] Images load on all pages
- [ ] Mobile responsive (test on phone)
- [ ] Cache working (check localStorage)
- [ ] Fallback images work (disable API temporarily)

---

## 🆘 Need Help?

1. **Check Documentation**: `IMAGE_GENERATION_GUIDE.md`
2. **Test Page**: Open `example-auto-images.html`
3. **Console Logs**: Press F12, check for errors
4. **Clear Cache**: Run `imageLoader.clearCache()` in console

---

## 🎉 You're Done!

Your site now has:
- ✅ Automatic Nigeria-relevant images
- ✅ Lazy loading for performance
- ✅ 7-day caching
- ✅ Responsive images
- ✅ Fallback system

**Next Steps:**
1. Convert all existing images
2. Test on all pages
3. Monitor API usage
4. Enjoy automatic images! 🚀

---

**Setup Time**: ~5 minutes  
**Maintenance**: Zero (fully automatic)  
**Cost**: Free (with API limits)
