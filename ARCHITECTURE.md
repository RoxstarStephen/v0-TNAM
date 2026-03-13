# TNAM Landing Page - Architecture Guide

**Understanding the structure, data flow, and component hierarchy of the TNAM landing page.**

---

## COMPONENT HIERARCHY

```
app/page.tsx (Main Page)
│
├── <HeroSection>
│   ├── Framer Motion animations
│   ├── CTA button with scroll handler
│   └── Scroll indicator
│
├── <TrustGrid>
│   ├── 3 Card components
│   ├── Icon display
│   └── Hover animations
│
├── Form Section (HTML <section>)
│   └── <ValuationForm>
│       ├── Step indicator (3 dots)
│       ├── Step 1: Car Details
│       │   ├── Car Make select
│       │   ├── Car Model select (dynamic)
│       │   └── Car Year select
│       ├── Step 2: Fuel Type
│       │   └── Radio buttons (4 options)
│       ├── Step 3: Location
│       │   └── District select
│       ├── Result Display
│       │   ├── Price display
│       │   ├── Range display
│       │   └── WhatsApp button
│       └── Navigation buttons
│
├── <TestimonialSection>
│   ├── 3 Testimonial cards
│   ├── Star ratings
│   └── Verified badges
│
├── <FAQSection>
│   ├── Accordion wrapper
│   ├── 5 FAQ items
│   ├── Open/close animations
│   └── Trust badge
│
├── <Footer>
│   ├── About section
│   ├── Quick links
│   ├── Contact information
│   ├── Trust badges
│   └── Copyright
│
└── <WhatsAppButton>
    ├── Fixed position
    ├── Pulsing animation
    └── WhatsApp link handler
```

---

## DATA FLOW

### Static Data Flow

```
/lib/constants.ts
│
├── carMakesAndModels
│   └── Used by: ValuationForm (Step 1)
│
├── tamilNaduDistricts
│   └── Used by: ValuationForm (Step 3)
│
├── baseCarPrices
│   └── Used by: ValuationForm (Mock calculation)
│
├── fuelTypes & fuelAdjustmentFactors
│   └── Used by: ValuationForm (Step 2 + calculation)
│
├── testimonials
│   └── Used by: TestimonialSection
│
├── faqItems
│   └── Used by: FAQSection
│
├── trustGridItems
│   └── Used by: TrustGrid
│
└── Contact variables
    └── Used by: WhatsAppButton, Footer
```

### Form State Flow

```
ValuationForm Component
│
└── formState
    ├── currentStep: 1 | 2 | 3
    ├── carMake: string
    ├── carModel: string
    ├── carYear: number | null
    ├── fuelType: string
    ├── city: string
    ├── showResult: boolean
    └── valuation: { estimatedPrice, priceRange, breakdown }
        │
        ├── User fills Step 1
        ├── User fills Step 2
        ├── User fills Step 3
        ├── User clicks "Get My Quote"
        └── calculateMockValuation() runs
            ├── Lookup base price
            ├── Apply depreciation
            ├── Apply fuel adjustment
            ├── Calculate variance
            └── Set formState.valuation
```

### User Interaction Flow

```
User lands on page
│
├─ Sees hero section
│  └─ Clicks "Get Started" button
│     └─ Smooth scroll to form
│
├─ Fills valuation form
│  ├─ Step 1: Selects car details
│  ├─ Step 2: Selects fuel type
│  ├─ Step 3: Selects location
│  └─ Clicks "Get My Quote"
│
├─ Sees valuation result
│  ├─ Estimated price
│  ├─ Price range
│  └─ Option to:
│     ├─ Schedule inspection (WhatsApp)
│     └─ Try another valuation (reset)
│
├─ Reads trust indicators
│  ├─ TrustGrid (3 differentiators)
│  ├─ Testimonials (3 sellers)
│  ├─ FAQ (5 answers)
│  └─ Footer (trust badges)
│
└─ Can contact at any time
   └─ WhatsAppButton (always visible)
```

---

## COMPONENT SPECIFICATIONS

### HeroSection
```typescript
Props: { onGetStarted?: () => void }
State: None (stateless)
Animations: Text fade-in, scroll indicator bounce
Dependencies: Framer Motion, Lucide icons
Size: 84 lines
```

### ValuationForm (COMPLEX)
```typescript
Props: None
State: FormState (7 fields)
Methods:
  - handleNext(): Navigate to next step or submit
  - handleBack(): Go to previous step
  - handleReset(): Clear form and start over
  - handleWhatsAppClick(): Open WhatsApp URL
  - calculateMockValuation(): Run pricing logic
  - canProceed(): Check if step is valid
Animations: Step transitions, button hover, result entry
Dependencies: Framer Motion, Lucide, All constants
Size: 447 lines (largest component)
```

### TrustGrid
```typescript
Props: None
State: None (stateless)
Data: Uses trustGridItems from constants
Animations: Card scale on hover, staggered entrance
Dependencies: Framer Motion, Lucide, Card UI
Size: 103 lines
```

### TestimonialSection
```typescript
Props: None
State: None (stateless)
Data: Uses testimonials from constants
Animations: Card scale, star rating cascade, badge pop
Dependencies: Framer Motion, Lucide, Card UI
Size: 134 lines
```

### FAQSection
```typescript
Props: None
State: None (Accordion handles internal state)
Data: Uses faqItems from constants
Animations: Accordion open/close
Dependencies: Framer Motion, Lucide, Accordion UI
Size: 103 lines
```

### Footer
```typescript
Props: None
State: None (stateless)
Data: Uses contact constants
Animations: Staggered items, hover effects
Dependencies: Framer Motion, Lucide
Size: 170 lines
```

### WhatsAppButton
```typescript
Props: None
State: None (stateless)
Data: Uses WHATSAPP_NUMBER and WHATSAPP_MESSAGE
Animations: Fade-in on mount, pulse on click
Dependencies: Framer Motion, Lucide
Size: 40 lines
```

---

## STYLING ARCHITECTURE

### CSS Organization

```
globals.css (170 lines)
│
├── Tailwind imports
├── CSS custom variables (design tokens)
├── Theme definitions (light/dark)
├── @theme block (font families, colors)
├── @layer base styles
│   ├── Default element styles
│   ├── Form input styles
│   └── Accessibility rules
└── Reduced motion support

Component Files (use Tailwind classes)
├── Responsive prefixes (md:, lg:)
├── Hover states
├── Focus states
└── Animation triggers
```

### Design Tokens Used

```
Colors:
  - Primary: slate-900 (Deep Navy)
  - Accent: amber-500 (Gold)
  - Light: slate-50
  - Dark: slate-900
  - Success: green-600

Typography:
  - Headings: font-bold, text-balance
  - Body: leading-relaxed
  - Form: font-medium, text-sm

Spacing:
  - Padding: p-4, p-6, p-8 (responsive)
  - Gap: gap-4, gap-8, gap-12
  - Margins: mb-4, mt-8 (responsive)

Shadows:
  - Default: shadow-lg
  - Hover: shadow-xl
  - Accent: shadow-2xl
```

---

## ANIMATION ARCHITECTURE

### Animation Patterns Used

```
1. Entrance Animations
   - opacity: 0 → 1
   - y: 20px → 0px (or scale: 0.95 → 1)
   - duration: 0.3-0.6s
   - Used in: All components

2. Staggered Sequences
   - Initial child delay: 0.1-0.3s
   - Between-child delay: 0.08-0.15s
   - Used in: Grids (TrustGrid, Testimonials, FAQ)

3. Hover Effects
   - scale: 1 → 1.05
   - y: 0 → -8px
   - boxShadow increase
   - duration: 0.3s
   - Used in: Cards, buttons

4. Scroll Triggers
   - whileInView activation
   - viewport: { once: true }
   - Used in: Section titles, grids

5. Floating/Pulsing
   - y: [0, 8, 0] (infinite)
   - scale: [1, 1.4, 0] with opacity
   - duration: 2-2.5s
   - Used in: Scroll indicator, WhatsApp button
```

### Framer Motion Usage

```typescript
// Entrance Animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>

// Staggered Container
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>

// Scroll Trigger
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>

// Hover Effect
<motion.div
  whileHover={{ scale: 1.05, y: -4 }}
>

// Floating Animation
<motion.div
  animate={{ y: [0, 8, 0] }}
  transition={{ duration: 2, repeat: Infinity }}
>
```

---

## FORM CALCULATION ALGORITHM

```
calculateMockValuation(make, model, year, fuelType, city)
│
├── 1. LOOKUP BASE PRICE
│   └── baseCarPrices[`${make}-${model}`] || 1000000
│
├── 2. CALCULATE DEPRECIATION
│   ├── yearsOld = CURRENT_YEAR - year
│   ├── depreciationFactor = 0.94 ^ yearsOld
│   └── depreciated = basePrice × depreciationFactor
│
├── 3. APPLY FUEL ADJUSTMENT
│   ├── fuelAdjustment = fuelAdjustmentFactors[fuelType]
│   └── adjusted = depreciated × fuelAdjustment
│
├── 4. ADD VARIANCE
│   ├── variance = adjusted × 0.10 (±10%)
│   ├── minPrice = adjusted - variance
│   └── maxPrice = adjusted + variance
│
└── 5. FORMAT RESULT
    ├── estimatedPrice (rounded)
    ├── priceRange (formatted string)
    └── breakdown (summary text)
```

---

## DEPENDENCY TREE

### External Libraries
```
framer-motion (Animations)
├── Motion primitives for all components
├── AnimatePresence for form steps
├── useEffectEvent for performance
└── Spring physics for natural motion

lucide-react (Icons)
├── Shield, Zap, MapPin (TrustGrid)
├── Star, CheckCircle (Testimonials)
├── ChevronDown (Hero, navigation)
├── MessageCircle (WhatsApp)
└── Phone, Mail, MapPin (Footer)

@radix-ui/react-accordion (Accordion)
└── FAQSection only

shadcn/ui (UI Components)
├── Card (TrustGrid, Testimonials, Form)
├── Button (All sections)
└── Accordion (FAQSection)

tailwindcss (Styling)
└── All responsive design and colors

next (Framework)
├── Image optimization (future)
├── Metadata API
├── Analytics
└── Deployment

vercel/analytics (Monitoring)
└── Auto-tracking
```

---

## DEPLOYMENT ARCHITECTURE

```
Development
  ↓
Git Repository (GitHub)
  ↓
Vercel (Deployment)
  ├── Build Step
  │   ├── Install dependencies (npm install)
  │   ├── Build app (next build)
  │   └── Generate .next folder
  ├── Deploy Step
  │   ├── Upload to Vercel infrastructure
  │   ├── Set environment variables (if any)
  │   └── Configure domains/SSL
  └── Production
      ├── Served globally via CDN
      ├── Analytics enabled
      └── Error tracking ready

Monitoring
  ├── Vercel Dashboard
  ├── Lighthouse scores
  └── User analytics
```

---

## PERFORMANCE CONSIDERATIONS

### Optimization Strategies

```
1. Code Splitting
   ├── Next.js automatic route splitting
   └── Client components for interactivity

2. Asset Optimization
   ├── Tailwind CSS tree-shaking
   ├── Lucide icons (only used ones)
   └── No images in MVP (CSS backgrounds only)

3. Animation Performance
   ├── GPU acceleration (transform, opacity only)
   ├── Will-change sparingly
   └── Prefers-reduced-motion support

4. Bundle Size
   ├── Framer Motion: ~39 KB gzipped
   ├── Lucide React: ~5 KB gzipped
   └── Radix UI: ~10 KB gzipped
   └── Total: ~150-180 KB expected
```

---

## ACCESSIBILITY ARCHITECTURE

### WCAG AA Compliance

```
Keyboard Navigation
├── Tab through all interactive elements
├── Form inputs navigable
├── Buttons operable with Enter/Space
└── Custom components with proper ARIA

Screen Reader Support
├── Semantic HTML structure
├── ARIA labels on icons
├── Alt text for images (if added)
├── Proper heading hierarchy

Color & Contrast
├── WCAG AA compliant ratios
├── Color not only means of communication
└── Test with contrast checker

Focus Management
├── Visible focus indicators
├── Logical tab order
└── Focus trap in modals (form steps)

Animations
├── Respect prefers-reduced-motion
├── No auto-playing videos
└── Transitions smooth but not excessive
```

---

## FUTURE ARCHITECTURE

### Planned Enhancements (v2+)

```
Backend Integration
├── API routes for real valuation
├── Database for user data
├── CRM integration
└── Email notifications

User Features
├── User accounts & authentication
├── Saved valuations
├── Inspection history
└── Notifications

Advanced Forms
├── Multi-step validation with real API
├── File upload (car photos)
├── Document verification
└── Payment integration

Analytics
├── Detailed user tracking
├── Form abandonment analysis
├── Heatmaps & session recording
└── A/B testing framework

Internationalization
├── Multi-language support
├── Regional pricing
└── Localized content
```

---

## CODING STANDARDS

### Component Structure
```typescript
'use client';  // Mark as client component if needed

import { dependencies }

interface Props { ... }
interface State { ... }

export function ComponentName(props: Props) {
  const [state, setState] = useState<State>()
  
  const animationVariants = { ... }
  const handleEvent = () => { ... }
  
  return (
    <motion.div>
      {/* JSX */}
    </motion.div>
  )
}
```

### Naming Conventions
- Files: kebab-case.tsx
- Components: PascalCase
- Variables: camelCase
- Constants: UPPER_SNAKE_CASE
- Handlers: handleEventName

### Type Safety
- All props typed
- All state typed
- All functions return types
- No 'any' types

---

## MAINTENANCE ROADMAP

### Weekly
- Monitor Lighthouse scores
- Check error logs
- Review form submissions

### Monthly
- Update car prices
- Refresh testimonials
- Review FAQ questions

### Quarterly
- Performance audit
- Dependency updates
- Feature assessment

### Annually
- Major version updates
- Full accessibility audit
- Design system refresh

---

**Architecture designed for scalability, performance, and maintainability.**

Last Updated: March 13, 2026
