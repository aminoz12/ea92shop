# 🚀 Quick Setup Guide

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

This will install all required packages:
- next@14.2.5
- react@18.3.1
- typescript@5.5.4
- zustand@4.5.4
- react-hook-form@7.52.1
- framer-motion@11.3.19
- lucide-react@0.414.0
- tailwindcss@3.4.7
- and more...

### 2. Start Development Server
```bash
npm run dev
```

The app will be available at: **http://localhost:3000**

## 📂 Key Files & Folders

### Pages (app/)
- `app/page.tsx` - Home page with hero and featured products
- `app/shop/page.tsx` - Product listing with filters
- `app/shop/[slug]/page.tsx` - Individual product details
- `app/cart/page.tsx` - Shopping cart
- `app/checkout/page.tsx` - Checkout form

### Components (components/)
- `Navbar.tsx` - Top navigation with cart icon
- `Footer.tsx` - Footer with links
- `ProductCard.tsx` - Reusable product card
- `CartDrawer.tsx` - Sliding cart drawer
- `HeroSection.tsx` - Homepage hero
- `CategorySection.tsx` - Category cards
- `FilterBar.tsx` - Product filters
- `AddToCartButton.tsx` - Add to cart button

### Data (data/)
- `products.json` - Mock product data (10 auto parts)
- `categories.json` - Product categories

### State Management (lib/store/)
- `cartStore.ts` - Zustand store for cart (persisted to localStorage)

### Types (types/)
- `index.ts` - TypeScript interfaces (Product, CartItem, etc.)

## 🎨 Customization

### Change Colors
Edit `tailwind.config.ts`:
```ts
colors: {
  primary: {
    DEFAULT: "#DC2626",  // Main red color
    dark: "#B91C1C",
    light: "#EF4444",
  },
}
```

### Add More Products
Edit `data/products.json` and add new items following the schema:
```json
{
  "id": "11",
  "name": "Product Name",
  "slug": "product-name",
  "price": 99.99,
  "category": "carrosserie",
  "description": "Description here",
  "image": "https://images.unsplash.com/...",
  "inStock": true,
  "brand": "Brand Name"
}
```

### Connect to Real Backend
Replace mock data in `lib/api.ts`:
```ts
export async function getProducts(): Promise<Product[]> {
  const response = await fetch('https://your-api.com/products');
  return response.json();
}
```

## 🔧 Available Scripts

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 📱 Test Responsive Design

- **Mobile**: Chrome DevTools (Cmd+Option+I) → Toggle device toolbar
- **Tablet**: Use 768px viewport
- **Desktop**: Use 1440px viewport

## ✅ Features to Test

1. **Cart Functionality**
   - Add products to cart
   - Update quantities
   - Remove items
   - Cart persists on page reload

2. **Filtering**
   - Filter by category
   - Filter by price range
   - Reset filters

3. **Checkout Flow**
   - Fill form with validation
   - Submit order
   - View confirmation

4. **Navigation**
   - Browse all pages
   - Product details
   - Mobile menu

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
```bash
# Generate types
npm run build
```

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- Netlify
- AWS Amplify
- Railway
- Render

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Zustand](https://github.com/pmndrs/zustand)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)

---

Need help? The codebase is fully commented and follows Next.js best practices!

