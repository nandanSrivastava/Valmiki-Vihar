# Valmiki Vihar - Tourism Website

A premium tourism website showcasing the natural beauty and cultural heritage of Bihar, specifically focusing on Valmiki National Park and surrounding areas. Built with Next.js, Tailwind CSS, and Framer Motion for an exceptional user experience.

## 🌟 Features

- **Responsive Design**: Fully responsive website that works perfectly on all devices
- **Modern UI/UX**: Clean, modern design with smooth animations and interactions
- **Performance Optimized**: Fast loading times with optimized images and code splitting
- **SEO Friendly**: Proper meta tags, structured data, and semantic HTML
- **Interactive Elements**: Smooth animations, hover effects, and interactive components
- **Contact Forms**: Functional contact forms with validation
- **Dynamic Content**: Easy-to-manage content structure for destinations and packages

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.4
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: JavaScript/React
- **Package Manager**: npm

## 📁 Project Structure

```
valmiki-vihar/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.js
│   │   │   └── Footer.js
│   │   ├── sections/
│   │   │   ├── Hero.js
│   │   │   ├── Destinations.js
│   │   │   ├── Packages.js
│   │   │   ├── About.js
│   │   │   ├── Testimonials.js
│   │   │   └── Contact.js
│   │   └── ui/
│   │       ├── Button.js
│   │       ├── DestinationCard.js
│   │       └── PackageCard.js
│   ├── data/
│   │   ├── destinations.js
│   │   └── content.js
│   ├── hooks/
│   │   └── useScrollspy.js
│   ├── pages/
│   │   ├── api/
│   │   │   ├── destinations.js
│   │   │   ├── packages.js
│   │   │   ├── contact.js
│   │   │   └── hello.js
│   │   ├── _app.js
│   │   ├── _document.js
│   │   └── index.js
│   ├── styles/
│   │   └── globals.css
│   └── utils/
│       └── helpers.js
├── public/
│   └── images/
└── package.json
```

## 🛠️ Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Destinations

1. Open `src/data/destinations.js`
2. Add a new destination object to the `destinations` array
3. Include required fields: id, name, location, description, image, price, duration, rating, features

### Modifying Styles

1. Global styles: Edit `src/styles/globals.css`
2. Component styles: Use Tailwind CSS classes directly in components
3. Custom colors and themes can be modified in the CSS variables section

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Mobile phones** (320px and up)
- **Tablets** (768px and up)
- **Desktops** (1024px and up)
- **Large screens** (1440px and up)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📞 Contact & Support

For any questions or support regarding this project:

- **Email**: info@valmikivihar.com
- **Phone**: +91 98765 43210
- **Website**: https://valmikivihar.com

---

**Built with ❤️ for sustainable tourism in Bihar**
