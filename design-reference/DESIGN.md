---
name: Sizzle & Smolder
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#5b403f'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#8f6f6e'
  outline-variant: '#e4bebc'
  surface-tint: '#bb152c'
  primary: '#b7102a'
  on-primary: '#ffffff'
  primary-container: '#db313f'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb3b1'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5a5c5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#737575'
  on-tertiary-container: '#fcfcfc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad8'
  primary-fixed-dim: '#ffb3b1'
  on-primary-fixed: '#410007'
  on-primary-fixed-variant: '#92001c'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c7'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#454747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-xl:
    fontFamily: Bebas Neue
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 100px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bebas Neue
    fontSize: 64px
    fontWeight: '400'
    lineHeight: 60px
    letterSpacing: 0.02em
  headline-md:
    fontFamily: Bebas Neue
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
  headline-lg-mobile:
    fontFamily: Bebas Neue
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 44px
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-bold:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 16px
  label-mono:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 14px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  asymmetric-offset: 32px
---

## Brand & Style

This design system embodies the raw, energetic spirit of a modern urban smash-burger joint. It blends **Retro-Modernism** with an **Indie Magazine** aesthetic, prioritizing high-impact visuals and an unconventional, gritty charm. The brand personality is unapologetic, high-quality, and "cool without trying."

The visual language is characterized by:
- **Asymmetrical Layouts:** Breaking the traditional grid to create a sense of movement and "street" energy.
- **High-Impact Shadows:** Utilizing hard-edged, deep black shadows to ground elements and provide a tactile, cutout feel.
- **Indie Editorial Influence:** Heavy use of bold typography, overlapping elements, and large-scale imagery that feels like a curated zine.
- **Urban Rawness:** A balance of clean digital execution with the grit of physical signage and vintage diner culture.

## Colors

The palette is high-contrast and high-energy, designed to stimulate appetite and command attention.

- **Vibrant Red (#E63946):** The primary driver. Used for CTAs, key accents, and primary brand markers. It evokes the classic diner heat and modern urgency.
- **Deep Black (#1A1A1A):** Used for typography and "Hard Shadows." It provides the structural weight necessary for an urban, indie look.
- **Pure White (#FFFFFF):** The primary background color to ensure the red pops and the layout feels clean despite the asymmetrical chaos.
- **Subtle Grey (#F4F4F4):** Used sparingly for secondary containers to provide depth without breaking the high-contrast aesthetic.

## Typography

The typography system mirrors vintage street signage and modern editorial design.

- **Headlines:** `Bebas Neue` provides the "tall and loud" aesthetic of a menu board. Headlines should often be used in "All Caps" to maintain the brand's impactful voice.
- **Body:** `Work Sans` offers a clean, legible contrast to the expressive headers, ensuring menu descriptions remain functional.
- **Labels:** `Space Grotesk` adds a subtle technical/modernist edge to small metadata like pricing or nutritional tags.

**Styling Note:** For high-impact sections, headers should overlap images or container edges to reinforce the indie magazine vibe.

## Layout & Spacing

This design system utilizes a **Modified Fluid Grid** that intentionally incorporates "errors" or offsets to achieve an asymmetrical look.

- **The "Tilt" Rule:** Occasional elements (images, badges) should be rotated by 1-2 degrees to break the digital perfection.
- **Overlap:** Use negative margins to allow images to bleed into text sections or extend beyond their container boundaries.
- **Rhythm:** A base-8 spacing system is used for consistency, but the horizontal placement of items should feel "staggered." For example, a two-column layout might have the left column starting 32px higher than the right.
- **Breakpoints:**
  - **Mobile (<768px):** Single column, reduced horizontal margins (16px), stacked typography.
  - **Desktop (>768px):** Multi-column, wide margins (64px), heavy use of white space and large-scale photography.

## Elevation & Depth

Hierarchy is achieved through physical metaphor rather than digital softness.

- **Hard Shadows:** Instead of soft blurs, use "Hard Shadows" — solid offsets of Deep Black (#1A1A1A) usually at `4px 4px` or `8px 8px`. This makes elements look like paper cutouts stacked on top of each other.
- **Tonal Layers:** High-priority cards use the primary Red background with White text, while secondary items use White backgrounds with Black hard shadows.
- **Zero Blur:** Avoid CSS blur values. Depth is purely a matter of X/Y offset and solid color blocks.

## Shapes

The shape language balances "raw" and "friendly." 

- **Containers:** All cards and primary containers use a 0.5rem (8px) corner radius to soften the aggressive high-contrast palette.
- **Buttons:** Use higher roundedness (up to 1.5rem) to make them feel "squishy" and interactive, contrasting with the rigid structural elements.
- **Stickers/Badges:** Promotional items (e.g., "New," "Spicy") should use a "burst" or jagged shape, reminiscent of classic price stickers found in the reference images.

## Components

- **Buttons:** Rectangular with high roundedness. Primary buttons are Red with White text and a 4px solid Black offset shadow. On hover, the shadow disappears as the button "pushes" into the page.
- **Menu Cards:** Asymmetrical images that bleed off the top of the card. Use bold `Bebas Neue` for the item name and `Space Grotesk` for the price, styled like a vintage punch-label.
- **Chips/Badges:** Small, high-contrast pills. For example, a "SMASHED" badge in Black with White text, placed at a slight angle on top of a burger image.
- **Input Fields:** Thick 2px Black borders with sharp corners, contrasting the roundedness of buttons. No shadows on resting state; Red 2px border on focus.
- **Lists:** Clean, tight spacing using `Work Sans`. Use Red bullet points or small geometric icons (squares/triangles) to denote list items.
- **Price Tags:** Star-burst shapes in Red with White text, placed over the corner of images to simulate a fast-food environment.