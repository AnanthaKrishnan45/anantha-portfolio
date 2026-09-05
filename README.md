# Anantha Krishnan O.S. — Portfolio

A static, dependency-free portfolio site (HTML5, CSS3, vanilla JS) built to host on GitHub Pages.

## Before you deploy

Add two files to the `assets/` folder (see `assets/README.txt`):

- `assets/profile.jpg` — your photo
- `assets/resume.pdf` — your resume

Both are already wired up everywhere in the site (hero photo, all "Download résumé" buttons, the Resume nav link). Nothing else needs to change.

## Deploying to GitHub Pages

1. Create a new GitHub repository (or use an existing one).
2. Push everything in this folder to the repository root:
   ```
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
3. In the repository on GitHub: **Settings → Pages → Build and deployment → Source** → select **Deploy from a branch**, branch **main**, folder **/ (root)** → **Save**.
4. Your site will be live at `https://<your-username>.github.io/<your-repo>/` within a minute or two.

## Structure

```
index.html          All page content and sections
css/style.css        All styling and design tokens
js/script.js          Navigation, scroll reveals, hero animation
assets/               profile.jpg + resume.pdf go here
```

## Editing content

Everything in `index.html` is plain, readable markup with one section per part of the page (About, Experience, Education, Certifications, Skills, Projects, Contact) — edit the text directly there. Colors, type, and spacing are controlled from the CSS variables at the top of `css/style.css` under `:root`.
