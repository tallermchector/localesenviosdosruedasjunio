---
name: Envíos DosRuedas - Minimalist Tech SaaS (Opción B)
---

## 1. Metadata
The file must start with a YAML frontmatter containing the system name.
(Frontmatter already provided above).

---

## 2. Colors
The color system follows a semantic naming convention based on Material Design 3 principles.

- **Primary**: `#1E3A8A`
- **On-Primary**: `#FFFFFF`
- **Secondary**: `#3B82F6`
- **On-Secondary**: `#FFFFFF`
- **Tertiary**: `#EAB308`
- **On-Tertiary**: `#0F172A`
- **Surface**: `#F8FAFC`
- **On-Surface**: `#191C1E`
- **Surface-Variant**: `#E0E3E5`
- **Outline**: `#757682`

---

## 3. Typography
Defines the type scale and font families.

- **Primary Font**: `Anton`
- **Secondary Font**: `Bebas Neue`
- **Body Font**: `Inter`

### Type Scale
| Level | Font | Weight | Size | Line Height |
| :--- | :--- | :--- | :--- | :--- |
| Display | `Anton` | `400` | `3.5rem - 5rem` | `1.15` |
| Headline | `Anton` | `400` | `2rem - 3.5rem` | `1.2` |
| Title | `Bebas Neue` | `400` | `1.25rem - 1.75rem` | `1.25` |
| Body | `Inter` | `400/500` | `0.9rem - 1rem` | `1.65` |
| Label | `Bebas Neue` | `400` | `0.85rem - 0.95rem` | `1.5` |

---

## 4. Spacing & Layout
Defines the grid, margins, and gutter values.

## Layout
- **Desktop Margin**: `48px`
- **Mobile Margin**: `24px`
- **Gutter**: `32px`
- **Corner Radius**: `12px` (Smooth, modern app feel)

---

## 5. Components & Patterns
Describes the visual execution of shared UI elements.

## Components

### Buttons
- **Style**: Rounded, Flat, highly polished.
- **Elevation**: Low.
- **Shadow Specs**: Subtle drop shadow (`0 4px 6px -1px rgba(30, 58, 138, 0.1), 0 2px 4px -1px rgba(30, 58, 138, 0.06)`).
- **Transitions**: Smooth fade (color/opacity) and slight scale up (1.02x) on hover.

### Cards
- **Background**: Surface (`#F8FAFC`)
- **Border**: `1px solid #E0E3E5`
- **Shadow**: Clean, soft blur (`0 10px 15px -3px rgba(0, 0, 0, 0.05)`).

### Navigation
- **Placement**: Top Navbar with subtle glassmorphism or slight transparency.
- **Behavior**: Fixed, blurs background content underneath.
