---
name: Aetheric Velocity
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
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
  on-secondary: '#50145d'
  secondary-container: '#6a2d76'
  on-secondary-container: '#e39cec'
  tertiary: '#a1c9ff'
  on-tertiary: '#00325a'
  tertiary-container: '#416b9b'
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
  on-secondary-fixed-variant: '#6a2d76'
  tertiary-fixed: '#d2e4ff'
  tertiary-fixed-dim: '#a1c9ff'
  on-tertiary-fixed: '#001c37'
  on-tertiary-fixed-variant: '#194877'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
  cyber-blue-glow: '#339bfb'
  deep-magenta: '#9004ac'
typography:
  display-lg:
    fontFamily: Be Titr
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: Be Titr
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Be Titr
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  price-display:
    fontFamily: JetBrains Mono
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
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

The design system is engineered for a high-end digital marketplace that bridges professional commerce with futuristic technology. The brand personality is rooted in **trustworthy precision** and **cutting-edge speed**, targeting tech-savvy users who value efficiency and premium aesthetics.

The visual style is a fusion of **Dark Minimalism** and **Refined Glassmorphism**. It utilizes deep, immersive backgrounds to allow vibrant tech-blue accents to "pop" like light-emitting diodes on a high-tech console. The interface should feel like a sophisticated cockpit: dark, focused, and powerful.

**Key Visual Principles:**
- **Luminosity:** Use color primarily as light sources (glows, gradients, and vibrant borders) rather than solid fills.
- **Translucency:** Depth is created through semi-transparent layers that hint at the content beneath, suggesting a complex but organized digital ecosystem.
- **Precision:** Every element must have sharp alignment and intentional spacing to evoke professional reliability.

## Colors

The palette is anchored by **Cyber Blue** (#305de3), serving as the high-energy primary driver. While the default mode is **Dark**, the system maintains high legibility and contrast for its Light mode counterpart.

- **Primary Spectrum:** The primary blue is used for high-action states and critical paths.
- **Surface Strategy:** In Dark mode, the base is a deep charcoal-black (#131313). Containers use varying tiers of grey and navy tints with low opacity (40-60%) to facilitate glass effects.
- **Semantic Colors:** Success and Error states are desaturated to avoid clashing with the vibrant brand palette, utilizing thin borders rather than heavy fills.
- **Luminescence:** Use the primary color as a glowing accent for active states to reinforce the futuristic aesthetic.

## Typography

The typography system is optimized for **Persian (RTL)** and Latin scripts, prioritizing impact and legibility in dark environments.

- **Headings & Persian:** **Be Titr** is the authoritative voice of the system. It provides a heavy, technical weight for all headings and Persian text, ensuring a distinctive "editorial-tech" look.
- **Body Copy:** `beVietnamPro` is used for Latin body text and secondary information. Its clean, geometric nature complements the futuristic theme.
- **Technical Accents:** `jetbrainsMono` is utilized for prices, SKU codes, and data visualizations to reinforce the technical nature of the platform.
- **Hierarchy:** Headers should use tight line-heights for a compact, professional feel. Body text maintains a generous 1.6 line-height to prevent "halo" bleeding of white text on dark backgrounds.

## Layout & Spacing

This design system employs a **12-column fluid grid** for desktop and a **4-column grid** for mobile, centered around an **8px rhythm**.

- **RTL Alignment:** Layouts are mirrored for Persian script support; sidebars appear on the right, and "Next" actions/arrows point to the left.
- **Responsive Transitions:** 
    - **Desktop (1200px+):** Centered fixed-width container (1280px).
    - **Tablet (768px - 1199px):** Fluid layout with 32px side margins.
    - **Mobile (Under 768px):** Fluid layout with 16px side margins.
- **The 8px Rhythm:** All padding, margins, and gaps must be strict multiples of 8px to maintain mathematical precision.

## Elevation & Depth

In this futuristic system, depth is conveyed through **luminance and backdrop blurs** rather than traditional black shadows.

1.  **The Base:** Standard surface color (#131313).
2.  **Level 1 (Cards/Panels):** Tonal layers using #201f1f with a `20px` backdrop-blur for a frosted glass effect.
3.  **Level 2 (Modals/Popovers):** Higher surface brightness with a subtle `1px` inner-stroke of white (10% opacity) to simulate light catching the edge of a glass pane.
4.  **Ambient Glows:** Floating interactive elements (like primary CTA buttons) should project a soft outer-glow using the primary blue (#305DE3) at 20% opacity with a `32px` blur radius.
5.  **Outlines:** Use low-contrast outlines for inactive states, transitioning to vibrant, glowing strokes on interaction.

## Shapes

The shape language is **"Refined Geometric,"** balancing professional structure with modern approachability.

- **Standard Elements:** Use **Rounded (0.5rem)** for buttons, input fields, and standard cards to maintain a software-like feel.
- **Large Containers:** Use **Rounded-XL (1.5rem)** for main dashboard panels and hero sections to create a "shell" aesthetic.
- **Interactive Indicators:** Small elements like status tags or notification pips should use pill-shapes (full rounding) to create high visual contrast against the otherwise geometric grid.

## Components

### Buttons
- **Primary:** Solid Primary Blue fill with white text. High-elevation states should include a soft blue drop-shadow (glow).
- **Secondary:** Transparent background with a `1px` stroke of the primary color and a subtle backdrop blur.

### Gradient-Bordered Cards
- **Construction:** Use a 2-layer approach. The bottom layer is a slightly larger gradient shape (Blue to Purple), and the top layer is the dark glass panel, creating a 1px "glowing edge" effect.
- **Hover State:** Increase the gradient intensity and add a `2px` vertical lift.

### Input Fields
- **Fields:** Dark fills with `1px` semi-transparent borders. On focus, the border transitions to a solid Cyber Blue with a soft outer glow. Use `jetbrainsMono` for input text where numerical data is expected.

### Floating Header
- **Background:** 80% opacity surface color with `30px` backdrop blur.
- **Border:** `1px` bottom border with a subtle gradient from Primary Blue to transparent.

### Chips & Tags
- **Style:** Small, pill-shaped with desaturated backgrounds and high-contrast text. Use for categories or status indicators.

### Dashboard Visualizations
- **Charts:** Use 2px glowing neon paths. Grid lines should be extremely subtle (5% opacity white).