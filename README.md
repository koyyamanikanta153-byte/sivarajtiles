# TileNest Ceramics — GitHub Pages Tiles Website

A lightweight, responsive tiles-business website built with:

- HTML5
- CSS3
- Vanilla JavaScript

No React, Node.js, PHP, database or build process is required.

## 1. Folder structure

```text
tiles-website/
├── index.html
├── style.css
├── script.js
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── favicon.svg
    ├── logo.svg
    ├── tile-hero.svg
    ├── tile-floor.svg
    ├── tile-wall.svg
    ├── tile-bathroom.svg
    ├── tile-kitchen.svg
    ├── tile-outdoor.svg
    ├── tile-commercial.svg
    ├── tile-product-1.svg
    ├── tile-product-2.svg
    └── tile-product-3.svg
```

## 2. What a normal person can edit

Open `index.html` in Notepad or VS Code.

Search for:

- `TileNest Ceramics` → replace with your company name
- `Your City` / `Your State` → replace with your location
- `+91 90000 00000` → replace with your phone
- `hello@yourtilesbusiness.com` → replace with your email
- `YOURHANDLE` / `YOURPAGE` → replace with social links
- Product names, descriptions and sizes
- About-us text
- FAQ answers

The important SEO values are near the top of `index.html` inside the `<head>` section.

## 3. Change colours

Open `style.css`.

At the top, edit the CSS variables:

```css
:root {
  --bg: #f8f7f3;
  --text: #22211f;
  --accent: #b7824f;
  --dark: #22211f;
}
```

You do not need to understand the rest of the CSS to change the main colours.

## 4. Change tile images

The demo uses simple local SVG tile illustrations, so the site works without a photo library.

To use real showroom photos:

1. Put your JPG/PNG images inside `assets/`.
2. Change the image filename in `index.html`.
3. Keep descriptive `alt=""` text for SEO and accessibility.

Example:

```html
<img
  src="assets/white-marble-floor-tiles.jpg"
  alt="White marble-look floor tiles for modern living room"
>
```

## 5. On-page SEO already included

The template includes:

- One clear H1
- Logical H2/H3 headings
- SEO title
- Meta description
- Meta keywords
- Canonical URL
- Robots meta
- Open Graph tags
- Descriptive image alt text
- Semantic HTML sections
- Internal anchor navigation
- LocalBusiness-style structured data (edit the business details)
- `robots.txt`
- `sitemap.xml`
- Mobile responsive layout
- Accessible skip link and labelled form controls

Important: SEO also depends on the real business information, useful content, Google Business Profile, reviews, links and search demand. Do not publish placeholder details.

## 6. GitHub Pages deployment

1. Create a new GitHub repository.
2. Upload every file and the entire `assets` folder.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)`.
6. Save.
7. GitHub will provide your Pages URL.

Then update these URLs in `index.html`, `robots.txt` and `sitemap.xml`:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

## 7. Important note about the enquiry form

This demo uses `mailto:`. That means the visitor's device opens their email app.

For a true online form that sends enquiries without opening email, connect a form service such as Formspree, Netlify Forms or your own backend. You do not need such a service just to deploy the website on GitHub Pages.

## 8. Java vs JavaScript

GitHub Pages can host this website as a static site using HTML, CSS and JavaScript.

Java and JavaScript are different technologies. For this kind of website, you only need JavaScript.
