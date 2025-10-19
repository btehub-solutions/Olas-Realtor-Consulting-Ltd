# OLA REALTOR CONSULTING LTD - Website

A professional, responsive, multi-page real estate website built for the Nigerian market.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with green and horse-blood color scheme
- **Multi-Page Structure**: Separate pages for different services and information
- **Interactive Components**: Mobile menu, dropdown navigation, smooth scrolling
- **Modular Architecture**: Reusable components for navbar and footer

## Pages

1. **Home (index.html)**: Landing page with hero section, services overview, and featured properties
2. **About (about.html)**: Company information, mission, vision, and core values
3. **Services (services.html)**: Overview of all services offered
4. **Property Sales (property-sales.html)**: Property listings for sale
5. **Letting & Rentals (letting-rentals.html)**: Rental property listings and management services
6. **ICT Training (ict-training.html)**: Training programs and courses
7. **Contact (contact.html)**: Contact form and company information

## Structure

```
Olas Realtor 1.0/
├── index.html
├── about.html
├── services.html
├── property-sales.html
├── letting-rentals.html
├── ict-training.html
├── contact.html
├── components/
│   ├── navbar.html
│   ├── footer.html
│   └── testimonial.html
├── css/
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── menu.js
│   └── carousel.js
└── README.md
```

## Color Scheme

- **Primary Green**: #2d5016
- **Light Green**: #4a7c2c
- **Horse Blood**: #8b1a1a
- **Light Blood**: #a52a2a
- **White/Off-white**: #ffffff / #f8f9fa

## Technologies Used

- HTML5
- CSS3 (with CSS Grid and Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome 6.4.0 (Modern Icons)
- Unsplash Images (High-Quality Property Photos)
- Responsive Design (Mobile-First Approach)

## Getting Started

1. Open `index.html` in your web browser
2. Navigate through the site using the navigation menu
3. All pages are fully functional and responsive

## Customization

### Update Contact Information

Edit the contact details in:
- Footer section of each HTML page
- `contact.html` page

### Update Images

The website uses Unsplash API for sample images. To use your own:
1. Add images to an `images/` folder
2. Replace Unsplash URLs with your image paths
3. Example: `<img src="images/property1.jpg" alt="Property Name">`

### Modify Colors

Update color variables in `css/style.css`:
```css
:root {
    --primary-green: #2d5016;
    --horse-blood: #8b1a1a;
    /* ... other colors */
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Add actual property images
- Integrate backend for contact form
- Add property search and filter functionality
- Implement user authentication
- Add property comparison feature
- Integrate payment gateway for training enrollment
- Add testimonials carousel
- Implement blog section

## License

© 2024 OLA REALTOR CONSULTING LTD. All rights reserved.

## Contact

For questions or support, contact:
- Email: info@olarealtorconsulting.com
- Phone: +234 XXX XXX XXXX
- Location: Lagos, Nigeria
