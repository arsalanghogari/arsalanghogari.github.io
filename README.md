# arsalanghogari.com

Personal portfolio site. One self-contained `index.html` — every image is embedded
directly in the file, so there are no asset folders to manage. Just deploy the folder.

## What's in here

- `index.html` — the entire site (all images embedded as data)
- `resume.pdf` — wired to the "Résumé" button in the hero
- `CNAME` — tells GitHub Pages to serve the site at arsalanghogari.com
- `README.md` — this file

## Deploy (GitHub Pages + Porkbun)

1. **Create a GitHub repo** (e.g. `arsalanghogari.github.io`) and upload everything
   in this folder to the repo root (`index.html`, `resume.pdf`, `CNAME`).
2. **Enable Pages:** repo **Settings → Pages** → Source: `main` branch, `/root`.
   Your site goes live at `https://yourusername.github.io` within a minute.
3. **Custom domain:** in the same Pages settings, set the custom domain to
   `arsalanghogari.com`. (The included `CNAME` file already handles this.)
4. **DNS in Porkbun** → your domain → DNS, add:

   | Type  | Host    | Value                       |
   |-------|---------|-----------------------------|
   | A     | (blank) | 185.199.108.153             |
   | A     | (blank) | 185.199.109.153             |
   | A     | (blank) | 185.199.110.153             |
   | A     | (blank) | 185.199.111.153             |
   | CNAME | www     | yourusername.github.io      |

5. **Enforce HTTPS:** once DNS resolves (minutes to a couple hours), return to
   Pages settings and tick **Enforce HTTPS** for free SSL.

## Editing later

- **Text / links:** open `index.html` and edit in place. Spots that may still need
  your input are marked with `EDIT:` comments.
- **Open item:** the *AI Travel Itinerary Generator* card links to your GitHub
  profile as a placeholder — swap in the repo URL when ready.
- **Swap an image:** images are embedded as `data:` URIs. To replace one, drop a
  file into an `img/` folder and change that element's `src` to e.g. `img/photo.jpg`.
