---
name: Aetheric Velocity
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c5d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e90a0'
  outline-variant: '#434654'
  surface-tint: '#b6c4ff'
  primary: '#b6c4ff'
  on-primary: '#002780'
  primary-container: '#305de3'
  on-primary-container: '#e5e8ff'
  inverse-primary: '#2052d8'
  secondary: '#f6adff'
  on-secondary: '#560068'
  secondary-container: '#9004ac'
  on-secondary-container: '#f7b2ff'
  tertiary: '#a0c9ff'
  on-tertiary: '#00325a'
  tertiary-container: '#006bb8'
  on-tertiary-container: '#ddeaff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dce1ff'
  primary-fixed-dim: '#b6c4ff'
  on-primary-fixed: '#001550'
  on-primary-fixed-variant: '#003ab3'
  secondary-fixed: '#fed6ff'
  secondary-fixed-dim: '#f6adff'
  on-secondary-fixed: '#350041'
  on-secondary-fixed-variant: '#7a0092'
  tertiary-fixed: '#d2e4ff'
  tertiary-fixed-dim: '#a0c9ff'
  on-tertiary-fixed: '#001c37'
  on-tertiary-fixed-variant: '#00487f'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: beVietnamPro
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: beVietnamPro
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: beVietnamPro
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: beVietnamPro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: beVietnamPro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: jetbrainsMono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  price-display:
    fontFamily: jetbrainsMono
    fontSize: 20px
    fontWeight: '600'
    lineHeight: '1.0'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  container-max: 1280px
  gutter: 24px
---

## Brand & Style

The design system is engineered for a high-end digital marketplace that bridges the gap between professional commerce and futuristic technology. The brand personality is rooted in **trustworthy precision** and **cutting-edge speed**, targeting tech-savvy users who value efficiency and premium aesthetics.

The visual style is a fusion of **Dark Minimalism** and **Refined Glassmorphism**. It utilizes deep, immersive backgrounds to allow vibrant blue and purple accents to "pop" as if they are light-emitting diodes on a high-tech console. The interface should feel like a sophisticated cockpit: dark, focused, and powerful.

**Key Visual Principles:**
- **Luminosity:** Use color primarily as light sources (glows, gradients, and vibrant borders) rather than solid fills.
- **Translucency:** Depth is created through semi-transparent layers that hint at the content beneath, suggesting a complex but organized digital ecosystem.
- **Precision:** Every element must have sharp alignment and intentional spacing to evoke a sense of professional reliability.

## Colors

The palette is anchored in a dual-tone spectrum of **Cyber Blue** and **Deep Magenta**. 

- **Primary Spectrum:** Transitions from a deep #2023A5 for foundational elements to a vibrant #339BFB for high-action states.
- **Accent Spectrum:** Utilizes #9003AC and #D323EA to highlight "Premium" features, pricing tiers, and special offers.
- **Surface Strategy:** The base is a true black (#050505) to ensure maximum contrast. Overlays and containers use a navy tint (#0A0A1A) with low opacity (approx. 40-60%) to create the glass effect.
- **Semantic Colors:** Success, Warning, and Error states should be desaturated to avoid clashing with the vibrant brand palette, utilizing thin borders rather than heavy fills.

## Typography

The typography system is optimized for **Persian (RTL)** script, prioritizing legibility in dark environments. 

- **Main Font (Persian/Arabic):** Use a high-quality, modern Persian sans-serif (such as Vazirmatn or IRANSansX) for all primary reading. 
- **Secondary Font (Latin/Numbers):** `beVietnamPro` is used for Latin characters to maintain a technical, clean look. 
- **Technical Accents:** `jetbrainsMono` is utilized for prices, SKU codes, and data visualizations to reinforce the "Futuristic Technology" theme.
- **Hierarchy:** Headers should use "Heavy" or "Bold" weights with slightly tighter letter spacing for a compact, professional feel. Body text should maintain a "Regular" weight with generous line height (1.6) to prevent "halo" bleeding on dark backgrounds.

## Layout & Spacing

This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile. 

- **The 8px Rhythm:** All spacing (padding, margins, gaps) must be multiples of 8px.
- **RTL Alignment:** Layouts are mirrored; sidebars appear on the right, and "Next" actions point to the left.
- **Safe Zones:** Use a standard 24px gutter to ensure UI elements do not feel cramped.
- **Responsive Transitions:** 
    - **Desktop (1200px+):** Centered fixed-width container (1280px).
    - **Tablet (768px - 1199px):** Fluid layout with 32px side margins.
    - **Mobile (Under 768px):** Fluid layout with 16px side margins.

## Elevation & Depth

In a dark futuristic system, depth is conveyed through **luminance and blur** rather than traditional black shadows.

1.  **The Base:** Deepest black (#050505).
2.  **Level 1 (Cards/Panels):** Navy-tinted glass (#0A0A1A at 60% opacity) with a `20px` backdrop-blur. 
3.  **Level 2 (Modals/Popovers):** Higher opacity (#0A0A1A at 85%) with a subtle `1px` inner-stroke of #FFFFFF (10% opacity) to catch light on the edges.
4.  **Ambient Glows:** Floating elements (like primary CTA buttons) should project a soft, colored outer-glow using the primary blue (#305DE3) at 20% opacity with a `32px` blur radius.
5.  **Semi-Transparent Borders:** Use linear-gradient borders (Primary to Transparent) to define shapes without closing them in, maintaining an "open" futuristic feel.

## Shapes

The shape language is **"Refined Geometric."** 

- **Standard Elements:** Use `0.5rem` (8px) for buttons, input fields, and small cards. This provides a balance between professional rigidity and modern approachability.
- **Large Containers:** Use `1.5rem` (24px) for main dashboard panels and hero sections to create a "software shell" aesthetic.
- **Interactive Indicators:** Small elements like status tags or notification pips should use pill-shapes (full rounding) to contrast against the geometric grid.

## Components

### Floating Sticky Header
- **Background:** `80%` opacity Navy with `30px` backdrop blur.
- **Border:** `1px` bottom border with a subtle gradient from `#339BFB` to transparent.
- **Layout:** Logo on the right, Navigation in the center, User/Cart on the left (RTL).

### Gradient-Bordered Cards
- **Construction:** Use a `2-layer` approach. The bottom layer is a slightly larger gradient shape (Blue to Purple), and the top layer is the navy glass panel, creating a 1px "glowing edge" effect.
- **Hover State:** Increase the gradient intensity and add a subtle `2px` vertical lift.

### Input Fields & Controls
- **Fields:** Dark fills (#050505) with `1px` semi-transparent borders. On focus, the border transitions to a full solid Primary Blue with a soft outer glow.
- **Checkboxes/Radios:** Use sharp geometric squares with a custom "check" icon in Accent Magenta.

### Data Visualizations (Dashboard)
- **Lines:** Use `2px` glowing neon paths with "Area" fills that fade into the background.
- **Grid Lines:** Extremely subtle (#FFFFFF at 5% opacity).

### Modern Hamburger (Mobile)
- **Animation:** Three lines that morph into a "close" (X) with a staggered motion.
- **Menu Overlay:** Full-screen blur with high-contrast typography.