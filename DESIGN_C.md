---
name: Envíos DosRuedas - Dynamic & Friendly (Opción C)
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
| Display | `Anton` | `400` | `4rem - 5.5rem` | `1.1` |
| Headline | `Anton` | `400` | `2.5rem - 3.5rem` | `1.15` |
| Title | `Bebas Neue` | `400` | `1.5rem - 2rem` | `1.2` |
| Body | `Inter` | `400/600` | `1.125rem` | `1.5` |
| Label | `Bebas Neue` | `400` | `1rem` | `1.4` |

---

## 4. Spacing & Layout
Defines the grid, margins, and gutter values.

## Layout
- **Desktop Margin**: `40px`
- **Mobile Margin**: `20px`
- **Gutter**: `20px`
- **Corner Radius**: `24px` (Very rounded, approachable and soft)

---

## 5. Components & Patterns
Describes the visual execution of shared UI elements.

## Components

### Buttons
- **Style**: Pill-shaped (fully rounded).
- **Elevation**: Medium. Floating feel.
- **Shadow Specs**: Yellow glow/shadow for Tertiary buttons (`0px 8px 24px -4px rgba(234, 179, 8, 0.4)`).
- **Transitions**: Bouncy, spring-like scale effect on hover.

### Cards
- **Background**: White (`#FFFFFF`) with inner padding very spacious.
- **Border**: None or `2px solid #F8FAFC`.
- **Shadow**: `0 20px 25px -5px rgba(30, 58, 138, 0.1)` (Soft blue-tinted shadow).

### Navigation
- **Placement**: Floating pill-shaped navbar detached from the very top edge.
- **Behavior**: Sticky floating.
