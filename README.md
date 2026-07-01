# The K-Square

Marketing site for **The K-Square** — a four-floor K-culture destination (retail, beauty,
food, and entertainment) in Olongapo City, Zambales, Philippines. Currently in its concept
and pre-construction phase.

Static site (HTML/CSS/JS, no build step). Bilingual **English / 한국어** with a nav toggle.

## Pages
- `index.html` — home (hero, vision, four themed floors, location)
- `leasing.html` — floor plans + leasing inquiry form
- `investing.html` — opportunity overview + investment inquiry form
- `contact.html` — contact form + map

## Hosting (GitHub Pages)
Served directly from the repo root. `.nojekyll` disables Jekyll so files are published as-is.

## Note
The inquiry forms post to a Formspree endpoint. Replace `REPLACE_WITH_FORM_ID` in the three
HTML files with a real form ID (https://formspree.io) for submissions to be delivered;
until then they show a local confirmation.
