# Render Prompts - The K-Square

## HERO (night) → `hero-night.jpg`  *(PENDING: currently an interim copy of the dusk render)*

> Cinematic night-time architectural photograph of a four-storey modern Korean lifestyle
> mall on a city corner in Olongapo, Philippines. Dark moody sky, the building glowing
> from within: warm champagne-gold interior lighting through floor-to-ceiling glass, a
> large curved LED media facade playing colorful K-pop visuals, illuminated "THE K-SQUARE"
> signage above the entrance. Wet asphalt reflections, a few silhouetted pedestrians,
> palm trees in shadow. Low-key lighting, deep blacks, gold and amber highlights,
> photorealistic, 35mm, 16:10 aspect ratio, no text overlays, no watermark.

Export ~1900 px wide JPEG and overwrite `assets/hero-night.jpg`. No code changes needed.

---


The homepage (`index.html`) now shows a **photographic interior render** for each of the
four floors instead of the CAD floor plans. Until you supply the real images, warm
placeholder PNGs are in place.

## How to use

1. Generate each image with your preferred text-to-image model (Midjourney, DALL·E,
   Firefly, Imagen, Stable Diffusion, etc.) using the prompts below.
2. Export at **1200 × 900 px (4:3), PNG**.
3. Save into this `assets/` folder, **overwriting** the placeholder with the exact same
   filename. No code changes needed — the slots are already wired.

| Floor | Filename |
|-------|----------|
| 1F — K-Fun & Trend | `floor-1f-interior.jpg` |
| 2F — K-Beauty & Wellness | `floor-2f-interior.jpg` |
| 3F — K-Food & Drama | `floor-3f-interior.jpg` |
| 4F — K-Pop Entertain | `floor-4f-interior.jpg` |

> Live renders are now in place (JPEG). To swap one, overwrite the matching file above.
> If you replace a `.jpg` with a `.png`, also update that `<img src>` extension in `index.html`.

## Shared style direction (append to every prompt)

> Architectural interior visualization, cinematic editorial photography, warm-neutral
> luxury palette (bone, stone, clay/bronze accents, deep walnut), soft natural daylight,
> shallow depth of field, calm and minimal, high-end Korean retail design, photorealistic,
> 35mm, 4:3 aspect ratio, no text, no watermark, no people in focus.

Keep tones aligned with the site's palette: paper `#F4F1EA`, stone `#E7E1D6`,
ink `#1B1916`, clay accent `#A98B68`. Avoid neon, primary K-pop colors, and busy signage.

---

## 1F — K-Fun & Trend  → `floor-1f-interior.png`

> Ground-floor entrance retail hall of a premium Korean lifestyle mall. A bright K-beauty
> hub in the style of Olive Young with clean low display shelving, a sentimental K-photo
> studio booth, claw machines and character-accessory displays kept tasteful and minimal.
> Polished microcement floors, warm oak millwork, soft clay-bronze accent lighting,
> floor-to-ceiling glass at the entrance with daylight pouring in. Inviting, draws the eye
> deeper inside. [+ shared style direction]

## 2F — K-Beauty & Wellness  → `floor-2f-interior.png`

> Second-floor Korean beauty and wellness floor. A serene spa-like interior with a hair
> salon and nail-art stations, massage rooms behind linen curtains, glowing beauty booths,
> a Korean Daiso-style display wall. Stone and travertine surfaces, warm indirect lighting,
> soft textiles, plants, a sense of calm and self-care. Muted bone and clay tones, spa
> ambiance. [+ shared style direction]

## 3F — K-Food & Drama  → `floor-3f-interior.png`

> Third-floor Korean food court styled like a cinematic K-drama street scene. Warm pendant
> lights over a row of food stalls (ramyun, chicken, bibimbap, samgyupsal, jjigae), a
> central beverage bar, communal walnut tables, atmospheric evening lighting with a
> nostalgic Seoul-alley mood. Rich warm tones, steam and glow, inviting and lively yet
> refined. [+ shared style direction]

## 4F — K-Pop Entertain  → `floor-4f-interior.png`

> Fourth-floor entertainment and roof-deck lounge. A sophisticated celebrities' lounge with
> a marble-and-brass bar, plush low seating, private Korean Family KTV karaoke rooms with
> warm backlighting, opening onto a roof-deck terrace at golden hour with views over
> Olongapo. Moody luxe ambiance, deep walnut and bronze, intimate warm lighting. [+ shared
> style direction]
