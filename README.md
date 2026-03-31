# myLink

A cyberpunk-inspired personal link page built with plain HTML and CSS.

This project is a lightweight, static site for sharing your important links from one clean profile page. It includes animated visuals, a typing bio effect (desktop), and a desktop-only QR panel to open the page on mobile.

## Features

- Static and fast (no build tools required)
- Custom profile card layout
- Typing bio animation on desktop screens
- Responsive design for mobile devices
- SVG icons for link buttons
- Optional QR block for desktop visitors

## Project Structure

```text
myLink/
├── index.html        # Main page markup and typing animation script
├── style.css         # Styling, animations, and responsive behavior
├── CNAME             # Custom domain config (for GitHub Pages)
├── README.md         # Project documentation
└── icons/            # SVG icon assets used in link buttons
```

## Run Locally

Because this is a static site, you can run it in several simple ways:

1. Open index.html directly in your browser.
2. Or serve the folder with a local HTTP server:

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

### 4) Icons

Replace or add SVG files in icons/ and update each link button image source in index.html.

### 5) QR Image

The desktop QR panel uses QR.svg. Replace that file if you want a different target or style.

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
- Vanilla JavaScript (inline script for typing effect)

## License

Add a license that matches your intended usage (for example: MIT).
