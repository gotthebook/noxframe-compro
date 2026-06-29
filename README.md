# Noxframe - Your Vision, Our Obsession

A modern, dark-themed company profile website with minimalist design, built with **HTML**, **Tailwind CSS**, and **JavaScript**.

## 🎨 Features

- ✅ **Dark Theme** - Modern black background with green accents
- ✅ **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- ✅ **Mobile Menu** - Hamburger menu for mobile devices
- ✅ **Smooth Scrolling** - Enhanced navigation with smooth animations
- ✅ **Interactive Elements** - JavaScript interactions and form validation
- ✅ **Brand Color System** - Easy customization via CSS variables
- ✅ **Minimalist Design** - Clean, professional layout
- ✅ **Accessibility** - Focus states and semantic HTML
- ✅ **Performance** - Lightweight and fast-loading

## 📁 Project Structure

```
noxframe-compro/
├── index.html      # Main HTML file with all sections
├── styles.css      # Custom CSS with brand colors and animations
├── script.js       # JavaScript for interactions
└── README.md       # This file
```

## 🎯 Website Sections

1. **Navigation Bar** - Minimalist fixed header with responsive menu
2. **Hero Section** - "Your Vision, Our Obsession" with scroll indicator
3. **Services Section** - 3 core services (User Research, Design, Development)
4. **Works Section** - Featured portfolio projects with carousel navigation
5. **Working Process** - 4-step process (Conceptualization, Design, Development, Deployment)
6. **Contact Section** - Contact form and information
7. **Footer** - Links and copyright

## 🎨 Brand Color Customization

### Change Your Brand Colors

Open `styles.css` and modify the CSS variables at the top:

```css
:root {
    --brand-primary: #000000;      /* Black background */
    --brand-accent: #40c057;       /* Change this to your brand accent color */
    --brand-text: #ffffff;         /* White text */
    --brand-text-secondary: #a1a1a1; /* Gray text */
    --brand-border: #1a1a1a;       /* Dark borders */
}
```

### Example Accent Colors

- **Green**: `#40c057` (current)
- **Cyan**: `#00d9ff`
- **Purple**: `#a78bfa`
- **Blue**: `#3b82f6`
- **Orange**: `#f97316`
- **Pink**: `#ec4899`

### How Brand Colors Are Used

- `.brand-accent` - Accent color for icons, buttons, and highlights
- `.brand-bg` - Background color for accent elements
- `.brand-border` - Border color for accents
- `--brand-primary` - Primary background color
- `--brand-text` - Main text color

## 🚀 Getting Started

1. **Open in Browser** - Simply open `index.html` in your web browser
2. **Live Server** - Use VS Code Live Server extension for development
3. **No Installation** - Tailwind CSS is loaded from CDN

## ✏️ Customization Guide

### Edit Company Information

1. **Company Name** - Replace "Noxframe" throughout the file
2. **Navigation Links** - Modify links in the nav section
3. **Hero Section** - Update headline and description
4. **Services** - Edit the 4 service cards
5. **Team Members** - Add/remove team member cards
6. **Contact Info** - Update address, phone, and email
7. **Social Links** - Add your social media links in footer

### Change Hero Section CTA

```html
<button class="brand-bg text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition">Get Started</button>
```

### Add More Services

Copy and paste a service card:

```html
<div class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center">
    <div class="text-5xl mb-4">🎨</div>
    <h3 class="text-xl font-bold text-gray-900 mb-2">Service Name</h3>
    <p class="text-gray-600">Service description goes here.</p>
</div>
```

### Add More Portfolio Projects

Copy and paste a portfolio card:

```html
<div class="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition">
    <div class="brand-bg h-80 flex items-center justify-center text-white text-2xl font-bold">Project Name</div>
    <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition flex items-center justify-center">
        <div class="text-center text-white opacity-0 group-hover:opacity-100 transition">
            <h3 class="text-2xl font-bold mb-2">Project Name</h3>
            <p class="text-sm">Project description</p>
        </div>
    </div>
</div>
```

## 📱 Responsive Breakpoints

The website uses Tailwind CSS breakpoints:

- **Mobile** - Default (< 640px)
- **Tablet** - `sm:` (640px+), `md:` (768px+)
- **Desktop** - `lg:` (1024px+), `xl:` (1280px+)

## 🔧 JavaScript Features

### 1. Mobile Menu Toggle
Hamburger menu appears on mobile devices and can be toggled.

### 2. Smooth Scrolling
All internal anchor links scroll smoothly to their target sections.

### 3. Fade-in Animations
Sections fade in as they come into view using Intersection Observer API.

### 4. Contact Form Validation
- Validates all required fields
- Checks email format
- Prevents form spam
- Shows success message

### 5. Active Navigation Highlight
Current section is highlighted in the navigation menu as you scroll.

### 6. Navbar Shadow Effect
Navigation gets a shadow effect when scrolling down.

## 🎬 Animation Classes

Available animation utilities:

- `.animate-fade-in-up` - Fade in with upward movement
- `.card-hover` - Card lift effect on hover
- Smooth transitions on all interactive elements

## 📊 Replace Placeholder Content

- **Hero Image** - Replace the blue box with an actual image
- **Project Previews** - Add project screenshots
- **Team Photos** - Add team member photos
- **Icons/Emojis** - Replace placeholder emojis with custom icons

## ♿ Accessibility Features

- Semantic HTML structure
- Focus visible states on all interactive elements
- ARIA labels can be added as needed
- Keyboard navigation support
- High contrast colors

## 🌐 SEO Improvements (Optional)

To enhance SEO, consider adding:

```html
<meta name="description" content="Your company description">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<meta name="author" content="Your Name">
<meta property="og:title" content="Your Company">
<meta property="og:description" content="Company description">
```

## 🚀 Deployment

### Deploy to Netlify
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site is live!

### Deploy to Vercel
1. Create account at [vercel.com](https://vercel.com)
2. Import GitHub repository or drag and drop folder
3. Your site is live!

### Deploy to GitHub Pages
1. Push to GitHub repository
2. Go to Settings → Pages
3. Select branch as deployment source
4. Your site is live at `username.github.io/repository`

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Technologies Used

- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first CSS framework (CDN)
- **CSS3** - Custom properties and animations
- **Vanilla JavaScript** - No frameworks or dependencies
- **Responsive Design** - Mobile-first approach

## 💡 Tips & Tricks

1. **Test on Mobile** - Use browser DevTools device emulation
2. **Use Custom Fonts** - Add Google Fonts in the `<head>`
3. **Add Images** - Use `<img>` tags with `alt` attributes
4. **Form Integration** - Connect contact form to backend service
5. **Analytics** - Add Google Analytics script
6. **Favicon** - Add favicon link in `<head>`

## 🐛 Troubleshooting

### Website looks broken
- Clear browser cache (Ctrl+Shift+Delete)
- Check browser console for errors (F12)
- Ensure all files are in the same directory

### Mobile menu not working
- Check JavaScript file is loaded
- Verify element IDs match in HTML and JS

### Colors not showing correctly
- Check CSS variables are defined
- Verify `.brand-bg` class is applied
- Clear browser cache

## 📞 Support

For questions or improvements, refer to:
- Tailwind CSS docs: https://tailwindcss.com/docs
- MDN Web Docs: https://developer.mozilla.org/
- W3C Standards: https://www.w3.org/

## 📄 License

This project is free to use and modify for personal and commercial projects.

---

**Made with ❤️ for modern web design**
