
# myLink

A compact, cyberpunk-themed personal link page built with plain HTML, CSS, and vanilla JavaScript. It lets you publish a simple profile and a set of links (cards and social icons) with minimal setup.

Why use this
- Static and fast — no build tools required
- Easy to customize via JSON and SVG assets
- Small, responsive layout with an optional typing bio and desktop QR panel

Quick Start
1. Serve the repository root so the JSON files load correctly:

```bash
cd /workspaces/myLink
python3 -m http.server 8000
```

2. Open http://localhost:8000

Customize
- Profile: edit `index.html` to change the page title, name, avatar, and static content.
- Links: update `website.json` (link cards) and `social.json` (social icons).
- Icons: replace or add SVGs in `icons/` and `socialIcons/`.
- Styles: adjust CSS variables in `style.css` under `:root` to change colors and glow intensity.
- Typing bio: the animated text is set via the `data-text` attribute on the element with id `typing-bio`.

Important files
- `index.html` — main markup
- `app.js` — JSON loader and renderer
- `website.json`, `social.json` — data for cards and socials
- `style.css` — styles and animations
- `icons/`, `socialIcons/` — SVG assets

Deployment
- This is ready for any static host: GitHub Pages, Netlify, Vercel, Cloudflare Pages.
- For GitHub Pages with a custom domain, update `CNAME`.

Contributing
- Small, focused changes welcome. Edit JSON, SVGs, or styles and open a PR.

License
- This project is available under the MIT License. See the `LICENSE` file for full terms.

Need it different?
- Tell me if you want a more detailed walkthrough, a shorter README, or a specific tone (casual, technical, or marketing). I can rewrite it accordingly.

