# myLink

A cyberpunk-inspired personal link page built with plain HTML and CSS.

This project is a lightweight, static site for sharing your important links from one clean profile page. It includes animated visuals, a typing bio effect (desktop), and a desktop-only QR panel to open the page on mobile.

## Features

- Static and fast (no build tools required)
- Custom profile card layout
- Typing bio animation on desktop screens
- Responsive design for mobile devices
- SVG icons for link buttons
- Desktop QR panel with fixed card layout (hidden on mobile)

## Project Structure

```text
myLink/
├── index.html        # Main page markup and mount points
├── app.js            # JSON loading and DOM rendering
├── social.json       # Social icon data
├── website.json      # Link card data
├── style.css         # Styling, animations, and responsive behavior
├── CNAME             # Custom domain config (for GitHub Pages)
├── README.md         # Project documentation
├── icons/            # SVG icon assets used in link buttons
└── socialIcons/      # SVG icon assets used in social links
```

## Run Locally

Because this is a static site, you can run it in several simple ways:

- Serve the folder with a local HTTP server so the JSON files load correctly:

```bash
cd myLink
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Customize

### 1) Profile Details

Edit in index.html:

- Page title
- Profile image source
- Name and bio text
- External links and button labels

### 2) Bio Typing Text

The typing text comes from the data-text attribute on the element with id typing-bio.

### 3) Theme and Visual Style

Edit CSS variables in style.css under :root to change colors, glow intensity, and panel styling.

### 4) Data and Icons

Edit social.json and website.json to change the rendered social links and cards. Replace or add SVG files in icons/ and socialIcons/ if you want to change the artwork.

### 5) Favicon

The favicon is the small icon that appears in the browser tab. Replace the favicon file referenced in index.html to customize it for your site. Supported formats include .ico, .png, and .svg.

### 6) QR Panel

The desktop QR panel is implemented as a fixed card in CSS with proper padding, border radius, and a readable label. The QR image (QR.svg) displays in a real square container. To customize:

- Replace QR.svg with a new QR code
- Modify the panel visibility in CSS using viewport-width media queries (not hover or touch detection)
- Keep the card layout in CSS rather than using inline positioning overrides

## Deployment

This project is ready for static hosting platforms:

- GitHub Pages
- Netlify
- Vercel (static)
- Cloudflare Pages

If you use GitHub Pages with a custom domain, keep the CNAME file updated with your domain.

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## License

Add a license that matches your intended usage (for example: MIT).
