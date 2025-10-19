# Company Logo Setup Instructions

## ✅ What's Been Done

I've updated the website to use your company logo image in the following locations:

1. **Navbar** - Top navigation bar logo
2. **Footer** - Footer section logo
3. **Meta Tags** - Open Graph and Schema.org references

## 📋 What You Need to Do

**Save the logo image you provided to:**
```
assets/images/company-logo.png
```

### Steps:
1. Right-click on the logo image you uploaded
2. Save it as `company-logo.png`
3. Place it in the `assets/images/` folder

## 🎨 Logo Specifications

The CSS has been configured with:
- **Navbar logo height:** 50px (auto width)
- **Footer logo height:** 60px (auto width)
- **Object-fit:** contain (maintains aspect ratio)

## 📄 Files Updated

- `index.html` - Logo references in navbar and footer
- `assets/css/style.css` - Logo styling added

## 🔍 Alternative Format

If you prefer to save the logo as `.jpg` instead of `.png`, update these references in `index.html`:
- Line 16: Open Graph meta tag
- Line 50: Schema.org logo
- Line 78: Navbar logo src
- Line 377: Footer logo src

Change `company-logo.png` to `company-logo.jpg` in all locations.
