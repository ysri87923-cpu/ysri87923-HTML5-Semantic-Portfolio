# Semantic HTML5 Portfolio

A four-page, responsive portfolio starter built with semantic HTML5, CSS, and a small amount of JavaScript.

## Pages
- `index.html` — home and featured work
- `about.html` — introduction and skills
- `projects.html` — project details
- `contact.html` — keyboard-accessible contact form

## Run locally
Open `index.html` in a browser, or run a local server from this folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Before publishing
1. Replace **Alex Morgan** and all sample biography/project content with your own details.
2. Replace `https://example.com/` canonical URLs with your real deployed URLs.
3. Add your real social preview image and any additional Open Graph metadata if needed.
4. Connect the contact form to a secure backend or trusted form service. The included form is front-end validation only and does not deliver messages.
5. Test all pages with keyboard-only navigation and a screen reader.
6. Run Lighthouse on the deployed site and fix any reported issues. A perfect score cannot be guaranteed by source code alone; hosting, content, assets, and audit conditions affect results.

## Accessibility features
- `lang` attribute and UTF-8 encoding
- Skip link to the main content
- Semantic `header`, `nav`, `main`, `section`, `article`, and `footer` landmarks
- One descriptive page-level `h1` and logical heading hierarchy
- Visible keyboard focus indicators
- Current navigation item identified with `aria-current`
- Explicit form labels, native input types, required fields, autocomplete, and live status region
- Reduced-motion preference support
- Responsive layout and readable contrast

The pages use native HTML semantics first. ARIA is added only where it improves accessible naming or status announcements; unnecessary ARIA roles are avoided.
