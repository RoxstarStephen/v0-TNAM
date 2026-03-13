# TNAM Landing Page - Quick Reference Guide

**Quick lookup for common tasks and information about the TNAM landing page.**

---

## FILE LOCATIONS

### Components (7 Total)
```
/components/hero-section.tsx          # Hero banner with CTA
/components/trust-grid.tsx            # 3 trust cards
/components/testimonial-section.tsx   # 3 testimonial cards
/components/faq-section.tsx           # FAQ accordion
/components/footer.tsx                # Footer with links
/components/valuation-form.tsx        # 3-step form (LARGEST - 447 lines)
/components/whatsapp-button.tsx       # Floating WhatsApp button
```

### Main Files
```
/app/page.tsx                  # Main landing page
/app/layout.tsx                # Metadata & SEO
/app/globals.css               # Global styles
/lib/constants.ts              # All static data (224 lines)
```

### Documentation
```
EXECUTIVE_SUMMARY.md           # Overview & status
BUILD_SUMMARY.md               # Technical details
DEPLOYMENT_CHECKLIST.md        # Pre-launch checklist
QUICK_REFERENCE.md             # This file
```

---

## UPDATING CONTENT

### Change Contact Information
**File:** `/lib/constants.ts` (Lines 217-224)
```typescript
export const WHATSAPP_NUMBER = '919876543210';      // WhatsApp number
export const WHATSAPP_MESSAGE = 'Hi! I...';        // WhatsApp message
export const CONTACT_EMAIL = 'hello@tnam.app';     // Email
export const CONTACT_PHONE = '+91 98765 43210';    // Phone
```

### Update Car Prices
**File:** `/lib/constants.ts` (Lines 56-104)
```typescript
export const baseCarPrices: Record<string, number> = {
  'Hyundai-Creta': 1200000,  // Update these values
  'Honda-City': 1000000,
  // ... more models
};
```

### Add New Testimonial
**File:** `/lib/constants.ts` (Lines 119-136)
```typescript
export const testimonials = [
  {
    id: '4',  // New ID
    quote: 'New testimonial...',
    author: 'Name',
    city: 'City',
    carModel: 'Model Year',
    verified: true,
    rating: 5,
  },
  // ... existing
];
```

### Update FAQ
**File:** `/lib/constants.ts` (Lines 139-179)
```typescript
export const faqItems = [
  {
    id: '6',  // New ID
    question: 'New question?',
    answer: 'Detailed answer here...',
  },
  // ... existing
];
```

### Change Headline Text
**File:** `/components/hero-section.tsx` (Line 44)
```typescript
The Safest Way to Sell Your Car Anywhere in Tamil Nadu.
```

### Update Section Titles
**File:** Each component (look for `<h2>` tags)
- TrustGrid: `Why Sellers Choose TNAM`
- Testimonial: `Loved by Sellers Across Tamil Nadu`
- FAQ: `Common Concerns & Our Solutions`

---

## STYLING & COLORS

### Primary Colors Used
- **Background (Dark):** `bg-slate-900` (Hero, Footer)
- **Accent (Gold):** `bg-amber-500` (Buttons, badges)
- **Background (Light):** `bg-slate-50` (Sections)
- **Success (Green):** `bg-green-600` (WhatsApp, badges)

### How to Change Colors
1. Update in Tailwind classes (e.g., `bg-blue-600` instead of `bg-amber-500`)
2. Or modify CSS variables in `globals.css` (Lines 4-48)

### Tailwind Responsive Prefixes
```
md:  →  768px breakpoint
lg:  →  1024px breakpoint
sm:  →  640px breakpoint
```

---

## FORM FUNCTIONALITY

### How the Valuation Form Works

**Step 1: Car Details**
- User selects Make → models populate automatically
- User selects Model
- User selects Year (2006-2025)

**Step 2: Fuel Type**
- User chooses: Petrol, Diesel, CNG, or Electric

**Step 3: Location**
- User selects Tamil Nadu district

**Calculation:**
1. Base price lookup: `baseCarPrices[make-model]`
2. Depreciation: `basePrice × (0.94 ^ yearsOld)`
3. Fuel adjustment: `depreciated × fuelAdjustment[fuelType]`
4. Final price with ±10% variance displayed

### Where Form Logic Lives
**File:** `/components/valuation-form.tsx`
- State management: Lines 49-85
- Calculation function: Lines 160-185
- Step rendering: Lines 260-460

---

## ANIMATIONS

### Framer Motion Features Used
- **Entrance animations:** Fade + slide/scale
- **Hover effects:** Scale + shadow
- **Staggered sequences:** 0.1-0.2s delay between items
- **Scroll-triggered:** `whileInView` activation

### Adjusting Animation Speed
```typescript
transition={{ duration: 0.3 }}  // 0.3 = 300ms
// Increase for slower, decrease for faster
```

### Turning Off Animation
Add to globals.css:
```css
* {
  animation: none !important;
  transition: none !important;
}
```

---

## MOBILE OPTIMIZATION

### Responsive Breakpoints
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

### Touch Target Size
- Minimum: 44x44px (Tailwind: `h-10 w-10` = 40px, `p-3` adds padding)
- Applied to buttons, form inputs, WhatsApp button

### Mobile-First Classes
```
p-4 md:p-8        # 16px on mobile, 32px on tablet+
text-lg md:text-xl # Larger text on desktop
grid-cols-1 md:grid-cols-3  # 1 column mobile, 3 desktop
```

---

## PERFORMANCE TIPS

### Current Optimizations
- Client-side form (no API calls)
- Tailwind CSS (no extra CSS)
- Tree-shakeable components
- Minimal dependencies
- Optimized font loading

### Before Adding Features
- Check bundle size: `npm run build`
- Run Lighthouse: DevTools → Lighthouse
- Profile animations: DevTools → Performance

### If Page Slows Down
1. Reduce animation durations
2. Use `will-change` CSS cautiously
3. Optimize images (if added)
4. Lazy-load components
5. Check browser extensions

---

## TESTING CHECKLIST

### Before Deploying
- [ ] Mobile view works (375px)
- [ ] Form calculates valuation
- [ ] WhatsApp link opens
- [ ] All animations smooth
- [ ] No console errors
- [ ] Lighthouse > 90
- [ ] Contact info updated

### Quick Test Commands
```bash
npm run dev              # Local testing
npm run build            # Check build errors
npm run lint             # Code quality
```

---

## DEPLOYMENT

### Deploy to Vercel
1. Push to GitHub
2. Go to vercel.com
3. "Add New Project"
4. Select repository
5. Deploy (auto-configured)

### Update After Deployment
1. Change WHATSAPP_NUMBER in constants.ts
2. Add real OG image URL in layout.tsx
3. Update CONTACT_EMAIL and CONTACT_PHONE
4. Redeploy (2 minutes)

---

## TROUBLESHOOTING

### Form Not Working?
- Check `/lib/constants.ts` for data
- Verify all dropdowns have options
- Check browser console for errors

### Animations Stuttering?
- Clear browser cache
- Disable browser extensions
- Check `globals.css` for reduced-motion support

### Mobile Layout Broken?
- Check viewport meta tag in layout.tsx
- Verify responsive classes (md:, lg:)
- Test on actual mobile device

### Colors Wrong?
- Check Tailwind classes in component files
- Verify CSS variables in globals.css
- Clear Tailwind cache

### WhatsApp Not Opening?
- Verify WHATSAPP_NUMBER format (with country code)
- Check browser popup blocker
- Test on mobile device

---

## KEY STATISTICS

| Metric | Value |
|--------|-------|
| Components | 7 |
| Car Models | 50+ |
| Districts | 38 |
| Testimonials | 3 |
| FAQ Items | 5 |
| Lines of Code | ~750 |
| Bundle Size | ~150-180 KB |
| Mobile Breakpoints | 3 |

---

## COMMON CHANGES

### Change Hero Headline
```
File: hero-section.tsx
Find: "The Safest Way to Sell..."
Replace with: Your new headline
```

### Add Another Testimonial
```
File: constants.ts
Add new object to testimonials array
Update id to '4', '5', etc.
```

### Change Button Colors
```
Current: bg-amber-500 hover:bg-amber-600
Change to: bg-blue-600 hover:bg-blue-700
(Update in component files)
```

### Adjust Form Validation
```
File: valuation-form.tsx
Function: canProceed() (Lines 152-166)
Update logic as needed
```

---

## IMPORTANT NOTES

- ✓ All car prices are mock values for demo
- ✓ Valuation calculation uses 6% depreciation rate
- ✓ Form is client-side only (no backend)
- ✓ WhatsApp link is a placeholder - must be updated
- ✓ All 38 Tamil Nadu districts included
- ✓ Mobile-first design throughout
- ✓ Animations accessible (respects prefers-reduced-motion)

---

## NEED MORE HELP?

### Check These Files First
1. **Technical Questions:** `BUILD_SUMMARY.md`
2. **Deployment Issues:** `DEPLOYMENT_CHECKLIST.md`
3. **Project Overview:** `EXECUTIVE_SUMMARY.md`

### Component Structure
```
page.tsx (Main)
  ├── HeroSection
  ├── TrustGrid
  ├── ValuationForm (Complex - 447 lines)
  ├── TestimonialSection
  ├── FAQSection
  ├── Footer
  └── WhatsAppButton (Fixed)
```

### Data Flow
```
constants.ts → Component imports → Component renders
```

---

## READY TO START?

1. **To update content:** Edit `/lib/constants.ts`
2. **To modify styling:** Edit `/app/globals.css` or component files
3. **To add features:** Follow existing component patterns
4. **To deploy:** Follow `DEPLOYMENT_CHECKLIST.md`

**Status:** ✓ Ready for production

---

Last Updated: March 13, 2026
