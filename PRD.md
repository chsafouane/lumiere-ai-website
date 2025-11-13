# Planning Guide

A professional website for Lumiere AI, a French AI startup that builds autonomous agents for enterprise operations, showcasing their services, technology, and mission with a modern black and white aesthetic.

**Experience Qualities**:
1. **Professional** - The site should convey technical expertise and enterprise credibility through clean layouts and authoritative content presentation
2. **Sophisticated** - A refined black and white palette with elegant typography that reflects the cutting-edge nature of autonomous AI
3. **Trustworthy** - Clear, honest communication about capabilities and limitations, building confidence through transparency

**Complexity Level**: Content Showcase (information-focused)
This is primarily an informational website that presents Lumiere AI's services, approach, technology, and case studies without requiring user accounts or complex application state.

## Essential Features

### Navigation System
- **Functionality**: Sticky navigation bar with smooth scrolling to page sections
- **Purpose**: Enable easy exploration of comprehensive content about the company
- **Trigger**: Page load (navigation visible) and clicking navigation links
- **Progression**: User clicks section link → Smooth scroll animation to section → Section highlights briefly
- **Success criteria**: All sections accessible within one click, navigation remains visible during scroll

### Company Overview Section
- **Functionality**: Hero section introducing Lumiere AI's core mission and differentiation
- **Purpose**: Immediately communicate the company's value proposition
- **Trigger**: Page load
- **Progression**: Logo appears with hover animation → Tagline displays → Brief description of autonomous agents
- **Success criteria**: Visitors understand what Lumiere AI does within 3 seconds

### What We Build Showcase
- **Functionality**: Display case studies and agent capabilities with clear examples
- **Purpose**: Demonstrate real-world applications and past successes
- **Trigger**: User scrolls to section
- **Progression**: Section header appears → Case studies displayed in cards → Each card shows project name and outcome
- **Success criteria**: Visitors can identify 3-5 concrete examples of the company's work

### Approach Methodology Display
- **Functionality**: Three-phase process visualization (Assessment, Build, Optimize)
- **Purpose**: Show potential clients the structured methodology
- **Trigger**: User scrolls to section
- **Progression**: Phase cards appear → Each phase shows steps and deliverables → Clear progression from 1 to 3
- **Success criteria**: Process is immediately understandable without confusion

### Technology Architecture Visualization
- **Functionality**: Display the orchestration system architecture with clear hierarchy
- **Purpose**: Demonstrate technical sophistication to technical decision-makers
- **Trigger**: User scrolls to architecture section
- **Progression**: Architecture diagram appears → Four-layer system displayed (Orchestrator, Supervisor, Judge, Workers) → Technology stack listed below
- **Success criteria**: Technical visitors understand the system architecture

### Contact Section
- **Functionality**: Display contact information clearly
- **Purpose**: Enable potential clients to reach out
- **Trigger**: User scrolls to bottom or clicks contact link
- **Progression**: Contact section displays → Email, website, and location shown clearly
- **Success criteria**: Contact information is copyable and clear

## Edge Case Handling

- **Long Content Sections** - Use collapsible sections or progressive disclosure for detailed information to prevent overwhelming single-page length
- **Mobile Navigation** - Collapse navigation into hamburger menu on mobile devices to preserve screen space
- **Logo Loading** - Display placeholder or company name text if image.png fails to load
- **Smooth Scroll Conflicts** - Ensure smooth scrolling works across all browsers, with fallback to instant scroll
- **External Links** - All external links (email, website) open appropriately without breaking the single-page flow

## Design Direction

The design should feel sophisticated, technical, and trustworthy - reflecting a serious enterprise AI company rather than a flashy startup. The black and white color scheme emphasizes clarity and professionalism, with minimal interface choices that let the content and expertise speak for itself. The aesthetic should communicate "we're builders who know what we're doing" rather than "we're trying to impress you with design tricks."

## Color Selection

**Monochromatic** - Pure black and white with grayscale accents to emphasize content clarity and professional sophistication.

- **Primary Color**: `oklch(0.15 0 0)` (Near Black) - Communicates authority, technical precision, and seriousness; used for primary text and key UI elements
- **Secondary Colors**: `oklch(0.25 0 0)` (Dark Gray) for secondary elements, `oklch(0.85 0 0)` (Light Gray) for subtle backgrounds
- **Accent Color**: `oklch(0.95 0 0)` (Off White) - Subtle highlight for interactive elements and cards without breaking the monochrome aesthetic
- **Foreground/Background Pairings**:
  - Background (Pure White `oklch(1 0 0)`): Black text `oklch(0.15 0 0)` - Ratio 13.8:1 ✓
  - Card (Off White `oklch(0.97 0 0)`): Black text `oklch(0.15 0 0)` - Ratio 13.2:1 ✓
  - Primary (Near Black `oklch(0.15 0 0)`): White text `oklch(1 0 0)` - Ratio 13.8:1 ✓
  - Muted (Light Gray `oklch(0.85 0 0)`): Dark Gray text `oklch(0.25 0 0)` - Ratio 6.8:1 ✓
  - Accent (Dark Gray `oklch(0.25 0 0)`): White text `oklch(1 0 0)` - Ratio 11.2:1 ✓

## Font Selection

Typography should convey technical sophistication and modern professionalism, using clean sans-serif typefaces that are highly legible and reflect the cutting-edge nature of AI technology.

- **Primary Font**: Inter - Modern geometric sans-serif that's designed for screen readability, conveys technical precision
- **Secondary Font**: Space Grotesk - For headings, adds subtle personality while maintaining professional tone

**Typographic Hierarchy**:
- H1 (Page Title): Space Grotesk Bold / 48px / -0.02em letter spacing / Leading 1.1
- H2 (Section Headers): Space Grotesk Bold / 36px / -0.01em letter spacing / Leading 1.2
- H3 (Subsections): Space Grotesk Semibold / 24px / Normal spacing / Leading 1.3
- H4 (Card Titles): Inter Semibold / 20px / Normal spacing / Leading 1.4
- Body (Paragraph): Inter Regular / 16px / Normal spacing / Leading 1.6
- Small (Captions): Inter Regular / 14px / Normal spacing / Leading 1.5

## Animations

Animations should be subtle and purposeful, enhancing the professional feel without distracting from content. The balance leans heavily toward functionality with occasional moments of sophistication.

- **Purposeful Meaning**: Motion communicates technical precision and smooth operation - reflecting the autonomous systems the company builds
- **Hierarchy of Movement**:
  1. Logo rotation on hover (primary brand interaction)
  2. Smooth scroll between sections (functional navigation)
  3. Subtle fade-in for sections on scroll (progressive content revelation)
  4. Gentle hover states on interactive elements (affordance feedback)

## Component Selection

- **Components**: 
  - Navigation: Custom navbar with smooth scroll links (no Shadcn component needed, using simple nav element)
  - Cards: Shadcn Card component for case studies, phases, and architecture elements with border modifications for black/white theme
  - Separator: Shadcn Separator for section divisions
  - Button: Shadcn Button for any potential CTA elements, styled with outline variant for minimal aesthetic
- **Customizations**: 
  - Logo with CSS rotation animation on hover
  - Custom architecture diagram using flexbox/grid layouts with connecting visual elements
  - Section scroll animations using Framer Motion with fade-in-up variants
- **States**: 
  - Navigation links: Default (gray), Hover (black), Active (underline)
  - Cards: Default (white bg, black border), Hover (subtle shadow, slight scale)
  - Logo: Default (static), Hover (smooth 360° rotation over 0.6s)
- **Icon Selection**: 
  - @phosphor-icons/react for minimal iconography where needed
  - EnvelopeSimple for email
  - Globe for website
  - MapPin for location
- **Spacing**: 
  - Section padding: py-20 (large sections) / py-12 (smaller sections)
  - Container max-width: max-w-7xl with mx-auto
  - Card spacing: gap-6 for card grids
  - Text spacing: mb-4 for paragraphs, mb-8 for section breaks
- **Mobile**: 
  - Navigation collapses to hamburger menu below 768px
  - Card grids shift from 3-column to 2-column (tablet) to 1-column (mobile)
  - Typography scales down: H1 to 36px, H2 to 28px on mobile
  - Padding reduces: py-20 becomes py-12 on mobile
  - Logo size reduces proportionally on smaller screens
