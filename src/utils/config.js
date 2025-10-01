import { VTR_IMAGES } from "../config/images";

export const siteConfig = {
  name: "Valmiki Vihar",
  description:
    "Discover the pristine wilderness and rich cultural heritage of Bihar with Valmiki Vihar - Your gateway to unforgettable adventures in Valmiki National Park.",
  url: "https://valmikivihar.com",
  ogImage: VTR_IMAGES.vtrSunset || "/images/vtr images/vtr sunset.jpg",
  links: {
    twitter: "https://twitter.com/valmikivihar",
    facebook: "https://facebook.com/valmikivihar",
    instagram: "https://instagram.com/valmikivihar",
    youtube: "https://youtube.com/@valmikivihar",
  },
  contact: {
    email: "info@valmikivihar.com",
    phone: "+91 70047 34909",
    whatsapp: "+91 70047 34909",
    address: {
      street: "Valmiki National Park Road",
      city: "West Champaran",
      state: "Bihar",
      postalCode: "845302",
      country: "India",
    },
  },
};

export const navConfig = {
  mainNav: [
    { title: "Home", href: "/" },
    { title: "Destinations", href: "/#destinations" },
    { title: "Packages", href: "/#packages" },
    { title: "About", href: "/#about" },
    { title: "Gallery", href: "/#gallery" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/#contact" },
  ],
  footerNav: {
    destinations: [
      { title: "Valmiki National Park", href: "/#destinations" },
      { title: "Gandak River Safari", href: "/#destinations" },
      { title: "Someshwar Hills", href: "/#destinations" },
      { title: "Bagaha Heritage", href: "/#destinations" },
    ],
    company: [
      { title: "About Us", href: "/#about" },
      { title: "Our Team", href: "/#about" },
      { title: "Careers", href: "/careers" },
      { title: "Press", href: "/press" },
    ],
    support: [
      { title: "Help Center", href: "/help" },
      { title: "Safety Guidelines", href: "/safety" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Privacy Policy", href: "/privacy" },
    ],
  },
};

export const seoKeywords = [
  "Valmiki National Park",
  "Bihar tourism",
  "Wildlife safari",
  "Eco-tourism",
  "Travel packages",
  "West Champaran",
  "Nature photography",
  "Bird watching",
  "Adventure travel",
  "Cultural heritage",
  "Sustainable tourism",
  "Tiger reserve",
  "Gandak River",
  "Forest camping",
  "India wildlife",
];
