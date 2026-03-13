# TNAM Landing Page - Deployment Checklist

**Project:** TNAM (Tamil Nadu Auto-Mart) Landing Page  
**Status:** Ready for Vercel Deployment  
**Date:** 2026-03-13

---

## PRE-DEPLOYMENT CHECKLIST

### Code Quality
- [ ] All components follow TypeScript best practices
- [ ] No console.log statements left in production code
- [ ] All imports are correctly resolved
- [ ] No unused variables or imports
- [ ] ESLint passes without warnings

### Performance
- [ ] Lighthouse score > 90 for performance
- [ ] Images optimized (none currently, using CSS backgrounds)
- [ ] Bundle size within acceptable limits
- [ ] CSS-in-JS properly optimized
- [ ] Font loading optimized (Geist already configured)

### Responsiveness
- [ ] Mobile (320px, 375px) - Full functionality
- [ ] Tablet (768px) - Properly scaled layout
- [ ] Desktop (1024px+) - Full feature display
- [ ] No horizontal scroll on any breakpoint
- [ ] Touch targets minimum 44x44px on mobile
- [ ] All form inputs properly sized for mobile

### Accessibility
- [ ] ARIA labels on all interactive elements
- [ ] Keyboard navigation works throughout page
- [ ] Color contrast meets WCAG AA standards
- [ ] Alt text for any images (if added)
- [ ] Focus indicators visible
- [ ] Screen reader tested

### Browser Compatibility
- [ ] Chrome/Edge (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Functionality Testing
- [ ] Hero section loads with animations
- [ ] All buttons are clickable and functional
- [ ] Valuation form step navigation works
- [ ] Form validation prevents invalid submissions
- [ ] Mock valuation calculation correct
- [ ] WhatsApp button opens correct link
- [ ] All links and navigation work
- [ ] Footer links are properly formatted

### Content Verification
- [ ] All copy is correct and spell-checked
- [ ] Contact information updated (WhatsApp, email, phone)
- [ ] All car models and cities in dropdown
- [ ] Base prices are realistic
- [ ] Testimonials are properly formatted
- [ ] FAQ answers are complete

### SEO & Metadata
- [ ] Meta title optimized
- [ ] Meta description under 160 characters
- [ ] Open Graph tags properly configured
- [ ] Twitter Card tags present
- [ ] Canonical URL set
- [ ] Structured data (if applicable)

### Form Data Validation
- [ ] Step 1 validation: Car make, model, year required
- [ ] Step 2 validation: Fuel type required
- [ ] Step 3 validation: City required
- [ ] Submission calculates valuation correctly
- [ ] Result display shows all required information
- [ ] WhatsApp integration working

---

## DEPLOYMENT STEPS (Vercel)

### Step 1: Pre-Deployment
```bash
# Run build to check for errors
npm run build

# Run linter
npm run lint

# Test locally
npm run dev
```

### Step 2: Connect Repository
1. Push code to GitHub repository
2. In Vercel dashboard: "Add new project"
3. Select GitHub repository
4. Import project

### Step 3: Configure Environment Variables
- [ ] No sensitive environment variables needed for MVP
- [ ] Analytics configured (auto with Vercel)
- [ ] WhatsApp number is placeholder - update in `/lib/constants.ts`

### Step 4: Build Settings
- **Framework:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Install Command:** `npm install` (or pnpm)

### Step 5: Deploy
1. Click "Deploy"
2. Wait for build completion
3. Verify deployment at provided URL

### Step 6: Post-Deployment
- [ ] Test all functionality on live site
- [ ] Test mobile responsiveness
- [ ] Verify WhatsApp integration
- [ ] Check page speed (Lighthouse)
- [ ] Monitor for errors in Vercel dashboard

---

## UPDATES NEEDED BEFORE PRODUCTION

### Contact Information (in `/lib/constants.ts`)
```typescript
// Update these with actual TNAM contact details:
export const WHATSAPP_NUMBER = '919876543210'; // Add real WhatsApp number
export const WHATSAPP_MESSAGE = '...'; // Update as needed
export const CONTACT_EMAIL = 'hello@tnam.app'; // Update email
export const CONTACT_PHONE = '+91 98765 43210'; // Update phone
```

### Metadata (in `/app/layout.tsx`)
```typescript
// Update OpenGraph image URL
images: [
  {
    url: 'https://tnam.app/og-image.jpg', // Add actual image
    // ...
  },
],
```

### Base Prices & Models
- Review and update base car prices in `/lib/constants.ts`
- Verify all car models are current
- Adjust depreciation rate if needed (currently 6% per year)

---

## MONITORING & MAINTENANCE

### Post-Launch Monitoring
- [ ] Set up error tracking (Sentry optional)
- [ ] Monitor Lighthouse score weekly
- [ ] Track user interactions with analytics
- [ ] Monitor form submissions

### Regular Updates
- Update testimonials monthly
- Review and update car base prices
- Monitor performance metrics
- Update FAQ based on user questions

### Performance Targets
- Page Load: < 2 seconds
- Lighthouse Performance: > 90
- Lighthouse Accessibility: > 95
- Lighthouse Best Practices: > 90
- Lighthouse SEO: > 90

---

## ROLLBACK PLAN

If issues arise:
1. In Vercel dashboard, navigate to "Deployments"
2. Find previous stable deployment
3. Click "Promote to Production"
4. Verify rollback successful

---

## FINAL SIGN-OFF

- [ ] All tests passing
- [ ] Client approval obtained
- [ ] Contact information verified
- [ ] Analytics configured
- [ ] Backup plan in place

**Ready to Deploy:** ✓

**Deployed By:** [Name]  
**Deployment Date:** [Date]  
**Vercel URL:** [URL]
