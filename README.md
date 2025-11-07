# SportSphere (Repo: sporti-mania)

A modern, responsive sports-themed static website built with HTML5, CSS3, and vanilla JavaScript.

## Features
- Hero banner with call to action
- Sports categories grid (cards)
- Latest news preview cards
- Athlete spotlight section
- Contact form with simple JS submission alert
- Responsive navigation (hamburger under 860px)
- Lazy-loaded images, favicon, theme color
- Accessible semantic structure

## File Structure
```
index.html
styles.css
script.js
favicon.svg
robots.txt
404.html
README.md
```

## Customize
- Replace placeholder images (`picsum.photos`) with your own.
- Adjust colors in `styles.css` under `:root`.
- Update athlete spotlight and news text directly in `index.html`.

## Run Locally
Open `index.html` in your browser or use a simple static server:
```powershell
# PowerShell: run a lightweight HTTP server on port 8000
powershell -Command "Add-Type -AssemblyName System.Net.HttpListener; $h=new-object System.Net.HttpListener; $h.Prefixes.Add('http://localhost:8000/'); $h.Start(); while($h.IsListening){ $c=$h.GetContext(); $path=Join-Path (Get-Location) ($c.Request.Url.AbsolutePath.TrimStart('/')); if(-not (Test-Path $path)){ $path='index.html' }; $bytes=[System.IO.File]::ReadAllBytes($path); $c.Response.OutputStream.Write($bytes,0,$bytes.Length); $c.Response.OutputStream.Close() }"
```
(Or install the Live Server VS Code extension.)

## Deploy Options
Primary GitHub Pages URL (after enabling Pages):
`https://neshatfahad.github.io/sporti-mania/`
### 1. GitHub Pages
1. Create a new GitHub repository (public).
2. Add all files, commit, and push.
3. In repository Settings → Pages: Select branch `main` and root, save.
4. Your site will appear at `https://<username>.github.io/<repo>/`.

### 2. Netlify (Drag & Drop)
1. Zip the folder or drag the folder onto https://app.netlify.com/drop.
2. Netlify deploys instantly; you get a random subdomain which you can rename.
3. Add `_redirects` file if you need custom routing later.

### 3. Vercel
1. `npm install -g vercel` (Optional for CLI).
2. Run `vercel` in the project folder; accept defaults.
3. Vercel assigns a deploy URL; you can set a custom domain.

### 4. Cloudflare Pages
1. Connect GitHub repo from Cloudflare Pages dashboard.
2. Set build to none (static); root directory is the repo root.

### 5. Static Hosting (S3 + CloudFront)
1. Create S3 bucket (public read for site or use CloudFront).
2. Upload files; enable static website hosting with `index.html` and `404.html`.
3. (Optional) Add CloudFront for CDN + HTTPS.

## Quick PowerShell Deploy via GitHub
```powershell
# Initialize git (if not already)
cd c:\Users\fahad.neshat\Desktop\weba
git init
git add .
git commit -m "Initial SportSphere site"
# Add remote (replace USER and REPO)
git remote add origin https://github.com/USER/REPO.git
git push -u origin main
```
Then enable GitHub Pages.

## SEO & Performance Next Steps
- Add `sitemap.xml` & real `meta` tags per page (only index now).
- Use real images and compress (webp/avif).
- Add Open Graph tags for social sharing.
- Integrate analytics (e.g., Plausible) later.

## License
MIT (add a LICENSE file if desired).

## Future Enhancements
- Dynamic news via API
- Athlete carousel
- Dark/light theme toggle
- Accessibility audit (ARIA landmarks refinement)

Enjoy SportSphere!
