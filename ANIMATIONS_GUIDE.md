# B&B Burger & Beyond - Scroll Animations Setup

## Changes Made

### 1. **package.json** ✅
- Added `aos` (Animate On Scroll) library v2.3.4

### 2. **src/main.tsx** ✅
- Imported AOS library
- Imported AOS CSS styles
- Initialized AOS with custom settings:
  - **duration**: 800ms (smooth animations)
  - **once**: true (animate only once per element)
  - **offset**: 100px (trigger 100px before element enters viewport)
  - **easing**: ease-out-cubic (smooth deceleration)

### 3. **src/App.tsx** ✅
- **Featured Cards**: Added `data-aos="fade-up"` with staggered delays (0ms, 100ms, 200ms)
- **Menu Cards**: Added `data-aos="fade-up"` with staggered delays based on row position
- **Visit Section**: Added `data-aos="fade-up"` to the entire card

### 4. **src/styles.css** ✅
- Added AOS opacity reset and animation defaults
- Maintains existing animations for page load
- AOS animations trigger on scroll independently

---

## Testing & Deployment

### Local Testing (Before Push)

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open browser and scroll through:
#    - Featured section (3 cards stagger in)
#    - Menu section (cards fade in as you scroll)
#    - Visit section (fade in on scroll)
```

### What You Should See

✨ **On Scroll**:
- Featured cards appear with slight stagger (Fish → Pizza → Chicken)
- Menu cards appear smoothly as you scroll past them
- Visit section fades in when you reach it
- All animations are smooth and not jarring

🎬 **Animation Details**:
- Easing: Smooth deceleration (cubic-bezier)
- Duration: 800ms each
- Offset: Triggers 100px before entering viewport
- Direction: Bottom-to-top fade-in effect

---

## How to Customize Further

### Change Animation Style
In `src/App.tsx`, modify any `data-aos` value:

```jsx
// Current options available:
data-aos="fade-up"           // Bottom-to-top fade
data-aos="fade-left"         // Left-to-right fade
data-aos="fade-right"        // Right-to-left fade
data-aos="zoom-in"           // Scale up while fading
data-aos="flip-left"         // 3D flip effect
```

### Change Animation Timing
In `src/main.tsx`, modify AOS.init():

```javascript
AOS.init({
  duration: 1000,      // Slower (in milliseconds)
  offset: 200,         // Trigger earlier (px before viewport)
  delay: 50,           // Global delay between elements
});
```

### Add Animations to Other Elements
Simply add `data-aos="animation-name"` to any HTML element:

```jsx
<section data-aos="fade-up">
  <h2>Any section here</h2>
</section>
```

---

## File Changes Summary

| File | Change | Lines |
|------|--------|-------|
| package.json | Added aos dependency | +1 |
| src/main.tsx | Import & init AOS | +6 |
| src/App.tsx | Added data-aos attributes | +6 instances |
| src/styles.css | AOS CSS defaults | +9 |

---

## Next Steps

1. **Run**: `npm install`
2. **Test**: `npm run dev` and scroll to see animations
3. **Deploy**: `npm run build` and push to GitHub
4. **Verify**: Check demo-sites-flax.vercel.app for live animations

---

## Performance Notes

✅ AOS is lightweight (~7KB minified)
✅ Only triggers animations when elements enter viewport
✅ Uses CSS transforms (hardware accelerated)
✅ No janky repaints or performance issues
✅ Works on all modern browsers

---

For more AOS options, visit: https://michalsnik.github.io/aos/
