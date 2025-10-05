# Fady Eskandr - Personal Website

A cutting-edge personal website showcasing professional experience, projects, and technical skills.

## Features

### Interactive Components
- **Skills Visualization Dashboard**: Interactive radar chart showing technical competencies
- **Project Showcase Carousel**: Dynamic project gallery with filtering capabilities
- **Experience Timeline**: Interactive career progression with expandable details
- **Contact Form**: Professional form with real-time validation

### Technical Stack
- **Frontend**: HTML5, CSS3 (Tailwind CSS), JavaScript (ES6+)
- **Animations**: Anime.js for smooth micro-interactions
- **Charts**: ECharts.js for skills visualization
- **Effects**: p5.js for particle system background
- **Carousel**: Splide.js for project showcase
- **Typography**: Playfair Display (serif) + Inter (sans-serif)

### Design Features
- **Modern Color Palette**: Navy (#1a1d29), Cream (#f8f6f0), Copper (#c17a5b), Teal (#4a9b8e)
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Professional Typography**: Clean, readable font combinations
- **Interactive Elements**: Hover states and micro-interactions

## File Structure
```
/
├── index.html          # Main landing page
├── projects.html       # Portfolio showcase
├── experience.html     # Career timeline
├── contact.html        # Contact form
├── main.js            # JavaScript functionality
├── resources/         # Images and assets
│   ├── hero-workspace.png
│   ├── profile-placeholder.png
│   ├── nomnom-app.png
│   └── medical-ai.png
└── README.md          # This file
```

## Pages Overview

### index.html - Landing Page
- Hero section with typewriter animation
- About section with professional summary
- Interactive skills radar chart
- Featured projects carousel
- Call-to-action sections

### projects.html - Portfolio
- Filterable project grid
- Detailed project descriptions
- Technology stack tags
- Live demo and code links
- Project categorization

### experience.html - Career Timeline
- Interactive timeline interface
- Expandable job details
- Achievement highlights
- Skills evolution visualization
- Professional growth tracking

### contact.html - Contact & Connect
- Professional contact form
- Contact information cards
- Social media links
- Availability status
- Quick facts section

## Deployment Instructions

### Local Development
1. Clone or download all files to a local directory
2. Ensure all files are in the same directory structure
3. Start a local web server:
   ```bash
   python -m http.server 8000
   ```
4. Open browser and navigate to `http://localhost:8000`

### Production Deployment
1. Upload all files to your web server
2. Ensure the directory structure is maintained
3. Configure your web server to serve `index.html` as the default page
4. Test all navigation links and interactive features

### AWS Deployment
1. Create an S3 bucket for static website hosting
2. Upload all files maintaining directory structure
3. Configure bucket for static website hosting
4. Set up CloudFront distribution for better performance
5. Configure custom domain (optional)

## Customization

### Adding Your Photos
1. Replace `profile-placeholder.png` with your professional headshot
2. Update hero images in the `resources` folder
3. Ensure images are optimized for web (recommended: max 1MB each)

### Updating Content
1. Edit HTML files to update text content
2. Modify `main.js` for interactive functionality
3. Update project descriptions and tech stacks in `projects.html`
4. Customize experience timeline in `experience.html`

### Styling Changes
1. Modify CSS variables in the `<style>` sections
2. Update color palette by changing CSS custom properties
3. Adjust animations and transitions in JavaScript
4. Customize responsive breakpoints as needed

## Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations
- Lazy loading for images
- Optimized animations with requestAnimationFrame
- Compressed and optimized assets
- Efficient CSS and JavaScript loading
- Responsive image handling

## Contact Information
- **Email**: fadyeskandr100@gmail.com
- **LinkedIn**: linkedin.com/in/fady-eskandr
- **Location**: Raleigh, NC
- **Availability**: Open to new opportunities

---

© 2025 Fady Eskandr. All rights reserved.