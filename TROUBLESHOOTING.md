# Troubleshooting Guide

## Fixed: Hydration Errors with Zustand Persist

### Problem
The app was experiencing hydration mismatches because Zustand's `persist` middleware uses localStorage, which is only available on the client side. This caused errors during server-side rendering.

### Solution Applied
Added proper client-side hydration guards to all components that use the cart store:

1. **Navbar.tsx** - Added `mounted` state to prevent cart count from rendering during SSR
2. **CartDrawer.tsx** - Returns null until mounted on client
3. **ProductCard.tsx** - Guards `addItem` calls until mounted
4. **AddToCartButton.tsx** - Guards `addItem` calls until mounted
5. **app/cart/page.tsx** - Shows loading state until mounted
6. **app/checkout/page.tsx** - Shows loading state and handles redirect after mount

### Pattern Used
```tsx
const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);

if (!mounted) {
  return null; // or loading state
}
```

## Common Errors & Fixes

### 1. "Element type is invalid" Error / "CategoryGrid" Error

**Cause**: This specific error was caused by trying to render a component stored in an object property directly (e.g., `<category.icon />`). React couldn't properly handle the dynamic component reference.

**Fix Applied**: Extract the component to a properly capitalized variable before rendering:
```tsx
// ❌ Wrong - causes "Element type is invalid"
<category.icon size={48} />

// ✅ Correct - extract to variable first
const IconComponent = category.icon;
return <IconComponent size={48} />;
```

**General Fixes**:
- Clear Next.js cache: Delete `.next` folder
- Restart dev server
- Check all imports are correct (default vs named exports)
- When rendering dynamic components, always extract to a PascalCase variable

### 2. localStorage is not defined

**Cause**: Trying to access localStorage during SSR

**Fix**: Use the hydration pattern above or check `typeof window !== 'undefined'`

### 3. Hydration Mismatch Warning

**Cause**: Server-rendered HTML doesn't match client-rendered HTML

**Fix**: 
- Use `mounted` state pattern
- Avoid rendering dynamic content (like cart count) on first render
- Use `suppressHydrationWarning` prop if intentional

### 4. Module Not Found

**Fix**:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### 5. Port Already in Use

**Fix**:
```bash
# Windows
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

## Clearing Cache

If you encounter any strange errors:

```bash
# Windows PowerShell
cd C:\Users\hp\Desktop\shop92.1
if (Test-Path .next) { Remove-Item -Recurse -Force .next }
npm run dev
```

## Development Best Practices

1. **Always use "use client" directive** for components that:
   - Use React hooks (useState, useEffect, etc.)
   - Access browser APIs (localStorage, window, etc.)
   - Use event handlers

2. **Server Components** (no "use client"):
   - Can fetch data directly
   - Smaller bundle size
   - Better SEO
   - Use for pages that don't need interactivity

3. **Client Components**:
   - Can use React state and effects
   - Can access browser APIs
   - Use for interactive UI

## Verifying the Fix

1. Start dev server: `npm run dev`
2. Open http://localhost:3000
3. Check browser console for errors
4. Test:
   - Add items to cart
   - Open cart drawer
   - Navigate between pages
   - Refresh page (cart should persist)

## Still Having Issues?

1. Check browser console for specific errors
2. Check terminal for server errors
3. Verify all dependencies are installed: `npm install`
4. Try clearing browser cache and localStorage
5. Test in incognito/private window

## Environment

- Node.js: 18+ required
- npm: Latest version
- Browser: Modern browser with ES6+ support

## Support

If issues persist:
1. Check the error stack trace
2. Search for the specific error message
3. Verify all files match the provided code
4. Check that all imports are correct

