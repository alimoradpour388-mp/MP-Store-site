---
name: Aetheric Cobalt
colors:
  surface: '#11131b'
  surface-dim: '#11131b'
  surface-bright: '#373941'
  surface-container-lowest: '#0c0e15'
  surface-container-low: '#1a1b23'
  surface-container: '#1e1f27'
  surface-container-high: '#282a32'
  surface-container-highest: '#33343d'
  on-surface: '#e2e1ed'
  on-surface-variant: '#c4c5d7'
  inverse-surface: '#e2e1ed'
  inverse-on-surface: '#2e3039'
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
  background: '#11131b'
  on-background: '#e2e1ed'
  surface-variant: '#33343d'
  neon-purple: '#D323EA'
  deep-void: '#050505'
  glass-surface: rgba(10, 10, 26, 0.6)
  electric-blue: '#b6c4ff'
typography:
  display-lg:
    fontFamily: Vazirmatn
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  display-lg-mobile:
    fontFamily: Vazirmatn
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Vazirmatn
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Vazirmatn
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Vazirmatn
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
  xs: 4px
  base: 8px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

The design system is a high-fidelity interface engineered for futuristic technology platforms and advanced digital marketplaces. The brand personality is **technical, immersive, and high-performance**, targeting users who require a sophisticated, focused environment. 

The visual style is **Futuristic Glassmorphism** set against a deep, dark canvas. It utilizes the "Cockpit UI" philosophy: critical information is surfaced through glowing accents and translucent layers, while the background recedes into an infinite dark void. The aesthetic is defined by its use of light as a functional material—gradients and glows aren't just decorative; they indicate interactive potential and hierarchy.

**Key Visual Principles:**
- **Atmospheric Depth:** Layers are defined by varying levels of transparency and backdrop blurs rather than flat color changes.
- **Luminous Interactive States:** Components "power on" when hovered or active, shifting from muted tones to vibrant blue and purple neon states.
- **Structural Precision:** A rigid geometric layout contrasted with soft, glowing light sources to create a sense of advanced engineering.

## Colors

The palette is optimized for a **Dark Mode** primary experience, centered around a high-contrast relationship between deep space blacks and neon-infused accents.

- **Primary & Tertiary:** A spectrum of blues from the foundational `#305DE3` to the high-vibrancy `#339BFB`. These are used for primary actions, progress indicators, and "active" system states.
- **Secondary & Accents:** A purple-to-magenta bridge (`#9004AC` to `#D323EA`) reserved for premium features, alerts, and high-energy focal points.
- **Surface Strategy:** The "Deep Void" (`#050505`) serves as the base. Containers utilize a navy-tinted glass (`rgba(10, 10, 26, 0.6)`) to maintain legibility while allowing background gradients to bleed through subtly.
- **Functional Gradients:** Use linear gradients (Primary to Secondary) for high-impact components like hero buttons and progress bars to reinforce the futuristic theme.

## Typography

This design system uses **Vazirmatn** as the unified typeface for all primary content, ensuring seamless support for both RTL (Persian/Arabic) and LTR (Latin) scripts with a modern, clean, and technical aesthetic.

- **Main Body & Headings:** Vazirmatn is used across all weights. Bold weights are reserved for structural headings to anchor the eye, while Regular weights are used for body text with an increased line-height (1.6) to prevent eye strain in high-contrast dark environments.
- **Technical Mono:** `jetbrainsMono` is used as a secondary functional font for data-heavy elements such as SKU numbers, code snippets, and pricing to reinforce the "tech" narrative.
- **RTL Optimization:** The typography system is designed with a right-to-left priority. Ensure that line-heights are sufficient to accommodate Persian diacritics without clipping.

## Layout & Spacing

The layout is governed by an **8px grid system**, ensuring mathematical harmony across all screen sizes.

- **Grid Model:** A 12-column fluid grid for Desktop and a 4-column grid for Mobile. 
- **RTL Orientation:** The layout is mirrored. Navigation menus and sidebars are anchored to the right, and the natural flow of information proceeds to the left.
- **Breakpoints:**
  - **Desktop (1200px+):** Fixed-width content container (1280px) with 48px margins.
  - **Tablet (768px - 1199px):** Fluid width with 32px gutters and margins.
  - **Mobile (Under 768px):** Fluid width with 16px margins to maximize screen real estate.

## Elevation & Depth

Depth in this system is created through **luminance and light-scattering** rather than shadow-casting.

- **Stacking Logic:** 
  - **Level 0 (Base):** Solid `#050505`.
  - **Level 1 (Cards):** Semi-transparent `glass-surface` with `24px` backdrop-blur. 
  - **Level 2 (Modals/Dropdowns):** Increased opacity (85%) with a subtle `1px` inner-border (white at 10% opacity) to simulate a light-catching edge.
- **Glow Effects:** Primary interactive elements (buttons, active toggles) utilize a soft outer-glow (`0px 0px 20px rgba(48, 93, 227, 0.3)`) to appear as though they are floating above the surface.
- **Visual Separation:** Use vertical and horizontal "light-leaks" (gradient lines) to divide content sections instead of solid dividers.

## Shapes

The shape language is **"Geometric-Soft,"** balancing the coldness of futuristic tech with user-friendly ergonomics.

- **Standard Radius:** `0.5rem` (8px) is the default for buttons, inputs, and standard UI cards.
- **High-Level Containers:** Use `1.5rem` (24px) for main dashboard panels to create a "hardware housing" look.
- **Technical Elements:** Progress bars and status pips use full rounding (pill-shape) to distinguish them from structural layout components.

## Components

### Action Buttons
- **Primary:** Gradient fill (`primary` to `secondary`) with white text. On hover, the gradient shifts and the outer glow intensifies.
- **Ghost:** `1px` gradient border with no fill. Fill appears at 10% opacity on hover.

### Form Inputs
- **Base:** Deep black fill with a `1px` subtle stroke (`outline-variant`).
- **Focus State:** The border glows with `tertiary` blue and a `4px` soft outer shadow. Label text shifts to the accent color.

### Cyber-Cards
- **Appearance:** Navy-glass background, `24px` backdrop blur, and a `1px` top-edge "highlight" to catch the simulated light.
- **Interactive:** On hover, the border transitions from a static gray to a Blue-to-Purple gradient.

### Lists & Navigation
- **Active State:** Instead of a full-row highlight, use a vertical glowing "power bar" on the right edge of the item (RTL) and a subtle blue tint to the text.

### Progress & Data
- **Gauges:** Use glowing neon strokes with trailing shadows.
- **Chips:** Small, high-contrast pills with `label-caps` typography and secondary color backgrounds at 20% opacity.