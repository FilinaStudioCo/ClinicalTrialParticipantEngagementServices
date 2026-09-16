# Kim Antonette — Clinical Trial Participant Engagement Services

A production-ready, static, multi-page website for Kim Antonette, Digital Health & Clinical Research Specialist. Built with plain HTML, CSS, and vanilla JavaScript — no frameworks, no build step.

## Folder structure

```
/
├── index.html
├── about.html
├── digital-health.html
├── contact.html
├── assets/
│   ├── images/
│   │   ├── portrait.jpg
│   │   └── hero-abstract.jpg
│   ├── icons/
│   │   └── favicon.svg
│   └── fonts/
├── styles/
│   └── main.css
└── scripts/
    └── main.js
```

## Preview locally

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

or, with Node installed:

```bash
npx serve .
```

## Replacing the portrait image

1. Prepare a warm-toned, editorial photo of Kim Antonette (portrait orientation, at least 1200 px tall works well).
2. Save it as `assets/images/portrait.jpg` (the folder does not exist yet — create it and add your photo there; the `about.html` file already points to this path).
3. Update the `alt` text in `about.html` only if the photo's framing changes materially.

## Updating contact details

Replace these placeholders across the HTML files (use find-and-replace, since the header/CTA appears on every page):

| Placeholder | Where |
|---|---|
| `hello@REPLACE-WITH-YOUR-DOMAIN.com` | `contact.html` |
| `https://www.linkedin.com/in/REPLACE-WITH-YOUR-LINKEDIN` | `contact.html` |
| `https://calendly.com/REPLACE-WITH-YOUR-LINK` | all pages (nav CTA + buttons) |
| `https://linktr.ee/kimantonettelazaro` | `digital-health.html` (update only if the portfolio link changes) |

## Connecting the contact form (optional)

The form in `contact.html` is fully styled but has no backend by default. Code comments directly above the `<form>` tag explain three options:

- **Formspree** — create a free form at formspree.io, then set the form's `action` to your Formspree endpoint and `method="POST"`.
- **Netlify Forms** — if hosting on Netlify, add `data-netlify="true"` to the `<form>` tag and a hidden `form-name` input.
- **Any other backend** (Getform, Basin, a custom API) — point `action` at that endpoint.

Until connected, submitting the form shows a friendly inline message instead of failing silently (handled in `scripts/main.js`).

## Deploying with GitHub Pages

1. In this repository, go to **Settings → Pages**.
2. Under **Build and deployment**, set **Source** to `Deploy from a branch`.
3. Choose branch `main` and folder `/`, then save.
4. GitHub will publish the site at `https://<your-username>.github.io/<repo-name>/`.

The site uses only relative paths, so it works correctly whether deployed from a repo root or a subpath.

## Deploying with Netlify or Vercel

- **Netlify:** connect this GitHub repo, or drag-and-drop the folder into the dashboard. No build command needed; leave the publish directory as the project root.
- **Vercel:** import the GitHub repo as a project. Framework preset: "Other" / static site. No build command needed.

## Editing content

All page copy lives directly in the HTML files — there is no CMS or templating layer. Shared styling lives in `styles/main.css`; shared behavior (nav toggle, scroll reveal, form handling) lives in `scripts/main.js`.

## Accessibility notes

- Semantic landmarks (`header`, `main`, `nav`, `footer`) and one `<h1>` per page.
- Keyboard-accessible navigation with visible focus states.
- Respects `prefers-reduced-motion` (disables scroll-reveal and ticker animation).
- Touch targets sized at least 44×44 px.
- Alt text included on all meaningful images — update if you change the portrait.

## Content accuracy

Copy throughout the site intentionally avoids naming individual client hospitals, publishing licence numbers, overstating affiliations (e.g. EIT Health, ESNO), or implying ownership/employment relationships with third parties (e.g. James Lind Care). Please review and confirm all professional claims before publishing, and keep this framing if you edit the copy further.
