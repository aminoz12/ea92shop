# EspaceAuto92 Carosserie E-Commerce - Next.js 14 TypeScript

A modern, fully-featured e-commerce frontend for an auto-parts store built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

| Tool | Purpose |
|------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type safety and better DX |
| **Tailwind CSS** | Utility-first styling |
| **Zustand** | Lightweight state management |
| **React Hook Form** | Form validation |
| **Framer Motion** | Smooth animations |
| **Lucide Icons** | Beautiful icon library |
| **Next Image & Fonts** | Optimized assets |

## 📁 Project Structure

```
shop92.1/
├── app/
│   ├── cart/
│   │   └── page.tsx
│   ├── checkout/
│   │   └── page.tsx
│   ├── shop/
│   │   ├── [slug]/
│   │   │   └── page.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── not-found.tsx
│   └── page.tsx
├── components/
│   ├── AddToCartButton.tsx
│   ├── CartDrawer.tsx
│   ├── CategorySection.tsx
│   ├── FilterBar.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   └── ProductCard.tsx
├── data/
│   ├── categories.json
│   └── products.json
├── lib/
│   ├── store/
│   │   └── cartStore.ts
│   └── api.ts
├── types/
│   └── index.ts
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 🎯 Features

### Pages
- **Home (`/`)** - Hero section, featured categories, and products
- **Shop (`/shop`)** - Product grid with filters (category, price)
- **Product Details (`/shop/[slug]`)** - Detailed product view
- **Cart (`/cart`)** - Full cart management
- **Checkout (`/checkout`)** - Multi-step checkout with React Hook Form

### Features
- ✅ Persistent cart state (localStorage via Zustand)
- ✅ Animated cart drawer
- ✅ Product filtering and search
- ✅ Responsive design (mobile-first)
- ✅ Image optimization with Next/Image
- ✅ Type-safe with TypeScript
- ✅ Smooth animations with Framer Motion
- ✅ Form validation with React Hook Form
- ✅ SEO-friendly with Next.js metadata

### Design
- Dark header with red accent colors (#DC2626)
- Clean automotive-themed UI
- Fully responsive (mobile, tablet, desktop)
- Smooth hover effects and transitions

## 🛠️ Local Setup

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm

### Installation

1. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. **Run the development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📦 Mock Data

The project includes mock product data in `data/products.json` with 10 auto parts:
- Pare-chocs (Bumpers)
- Ailes (Fenders)
- Phares LED (LED Lights)
- Rétroviseurs (Mirrors)
- And more...

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```ts
colors: {
  primary: {
    DEFAULT: "#DC2626",  // Red accent
    dark: "#B91C1C",
    light: "#EF4444",
  },
  dark: {
    DEFAULT: "#0F172A",  // Dark header
    lighter: "#1E293B",
    light: "#334155",
  },
}
```

### Fonts
Change fonts in `app/layout.tsx`:
```ts
import { Inter, Poppins } from "next/font/google";
```

## 🔌 Backend Integration

Ready to connect to any backend:
- **Shopify Storefront API**
- **Custom REST/GraphQL API**

Update `lib/api.ts` to fetch from your API instead of mock data.

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚧 Future Enhancements

- [ ] User authentication
- [ ] Product reviews
- [ ] Wishlist functionality
- [ ] Search with autocomplete
- [ ] Multiple image gallery
- [ ] Product comparison
- [ ] Order tracking
- [ ] Admin dashboard

## 📄 License

MIT License - feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ using Next.js 14 and TypeScript

