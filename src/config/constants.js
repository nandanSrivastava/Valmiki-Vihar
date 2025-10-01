// Centralized UI constants used across sections

export const HERO_STATS = [
  { number: "5000+", label: "Happy Travelers" },
  { number: "15+", label: "Destinations" },
  { number: "10+", label: "Years Experience" },
  { number: "99%", label: "Customer Satisfaction" },
];

export const PACKAGE_FEATURES = [
  {
    title: "Expert Local Guides",
    description:
      "Our experienced guides know every hidden gem and wildlife hotspot in the region.",
    icon: "🗺️",
  },
  {
    title: "All-Inclusive Packages",
    description:
      "No hidden costs - everything from accommodation to meals and activities included.",
    icon: "✅",
  },
  {
    title: "Flexible Itineraries",
    description:
      "Customize your tour based on your interests and travel preferences.",
    icon: "🔄",
  },
];

export const TESTIMONIAL_STATS = [
  { number: "4.9", label: "Average Rating", suffix: "/5" },
  { number: "5000", label: "Happy Customers", suffix: "+" },
  { number: "98", label: "Satisfaction Rate", suffix: "%" },
  { number: "500", label: "5-Star Reviews", suffix: "+" },
];

// Section animation variants and shared UI constants
export const SECTION_VARIANTS = {
  heroText: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },
  heroButton: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  },
  packagesContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  },
  destinationsContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  },
};

export const CAROUSEL_SETTINGS = {
  autoPlay: true,
  carouselInterval: 4500, // ms between destination switches
  imageSwitchInterval: 3000, // ms between images inside a gallery
};

export const CONTACT_INFO = {
  whatsappNumber: "917004734909", // international without + for wa.me
  phones: ["+91 70047 34909", "+91 87654 32109"],
  primaryPhone: "+91 70047 34909",
  emails: ["info@valmikivihar.com", "bookings@valmikivihar.com"],
  address: "Valmiki National Park Road,\nWest Champaran, Bihar - 845302",
  businessHours: {
    weekdays: "Mon - Sat: 9:00 AM - 7:00 PM",
    sunday: "Sunday: 10:00 AM - 6:00 PM",
  },
  emergencyNumber: "+91 7004734909",
  quickResponse: [
    { channel: "Email", time: "Within 2 hours" },
    { channel: "Phone", time: "Immediate response" },
    { channel: "WhatsApp", time: "Within 30 minutes" },
  ],
};

export const ABOUT_FEATURES = [
  "Sustainable and responsible tourism practices",
  "Expert naturalists and cultural historians as guides",
  "Partnerships with local communities and conservation groups",
  "Customizable experiences for all types of travelers",
];

export const GALLERY_CONFIG = {
  itemsPerPage: 12,
  particleCount: 20,
};

// Gallery images (moved from Gallery.js to centralize section constants)
import { VTR_IMAGES } from "./images";

const RAW_GALLERY_IMAGES = [
  // Main Attractions - Key VTR Images
  {
    id: 1,
    src: VTR_IMAGES.himalayasView || "/images/vtr images/Himalaya's view.jpg",
    alt: "Majestic Himalayan Views from Valmiki National Park",
    category: "Landscape",
  },
  {
    id: 3,
    src:
      VTR_IMAGES.valmikinagarSunset ||
      "/images/vtr images/valmikinagar sunset.jpg",
    alt: "Beautiful Sunset at Valmikinagar",
    category: "Landscape",
  },
  {
    id: 4,
    src: VTR_IMAGES.jungleSafari || "/images/vtr images/jungle safari.jpg",
    alt: "Exciting Jungle Safari Experience",
    category: "Safari",
  },
  {
    id: 5,
    src: VTR_IMAGES.jungleAnimals || "/images/vtr images/jungle animals.jpg",
    alt: "Wild Animals in Natural Habitat",
    category: "Wildlife",
  },
  {
    id: 6,
    src: VTR_IMAGES.tiger || "/images/vtr images/tiger.jpg",
    alt: "Royal Bengal Tiger in Valmiki National Park",
    category: "Wildlife",
  },
  {
    id: 7,
    src: VTR_IMAGES.hiking || "/images/vtr images/hiking.jpg",
    alt: "Hiking and Trekking Adventures",
    category: "Adventure",
  },

  // VTR Documentation & Information
  {
    id: 8,
    src: VTR_IMAGES.png2pdf02 || "/images/vtr images/png2pdf (1)_merged-02.jpg",
    alt: "Valmiki Tiger Reserve Information",
    category: "Information",
  },
  {
    id: 9,
    src: VTR_IMAGES.png2pdf03 || "/images/vtr images/png2pdf (1)_merged-03.jpg",
    alt: "Wildlife Conservation Guidelines",
    category: "Information",
  },
  {
    id: 10,
    src: VTR_IMAGES.png2pdf04 || "/images/vtr images/png2pdf (1)_merged-04.jpg",
    alt: "Safari Booking Information",
    category: "Information",
  },
  {
    id: 11,
    src: VTR_IMAGES.png2pdf05 || "/images/vtr images/png2pdf (1)_merged-05.jpg",
    alt: "Park Rules and Regulations",
    category: "Information",
  },
  {
    id: 12,
    src: VTR_IMAGES.png2pdf06 || "/images/vtr images/png2pdf (1)_merged-06.jpg",
    alt: "River Safari Details",
    category: "Information",
  },
  {
    id: 13,
    src: VTR_IMAGES.png2pdf08 || "/images/vtr images/png2pdf (1)_merged-08.jpg",
    alt: "Tourist Facilities Information",
    category: "Information",
  },
  {
    id: 14,
    src: VTR_IMAGES.png2pdf10 || "/images/vtr images/png2pdf (1)_merged-10.jpg",
    alt: "Wildlife Spotting Guide",
    category: "Information",
  },
  {
    id: 15,
    src: VTR_IMAGES.png2pdf11 || "/images/vtr images/png2pdf (1)_merged-11.jpg",
    alt: "Border Area Tourism Info",
    category: "Information",
  },
  {
    id: 16,
    src: VTR_IMAGES.png2pdf12 || "/images/vtr images/png2pdf (1)_merged-12.jpg",
    alt: "Cultural Heritage Sites",
    category: "Culture",
  },
  {
    id: 17,
    src: VTR_IMAGES.png2pdf13 || "/images/vtr images/png2pdf (1)_merged-13.jpg",
    alt: "Local Communities and Culture",
    category: "Culture",
  },
  {
    id: 18,
    src: VTR_IMAGES.png2pdf14 || "/images/vtr images/png2pdf (1)_merged-14.jpg",
    alt: "Traditional Practices",
    category: "Culture",
  },
  {
    id: 19,
    src: VTR_IMAGES.png2pdf15 || "/images/vtr images/png2pdf (1)_merged-15.jpg",
    alt: "Nature Conservation Efforts",
    category: "Nature",
  },
  {
    id: 20,
    src: VTR_IMAGES.png2pdf16 || "/images/vtr images/png2pdf (1)_merged-16.jpg",
    alt: "Hill Station Views",
    category: "Landscape",
  },
  {
    id: 21,
    src: VTR_IMAGES.png2pdf17 || "/images/vtr images/png2pdf (1)_merged-17.jpg",
    alt: "Archaeological Sites",
    category: "Culture",
  },
  {
    id: 22,
    src: VTR_IMAGES.png2pdf18 || "/images/vtr images/png2pdf (1)_merged-18.jpg",
    alt: "River Ecosystem",
    category: "Nature",
  },
  {
    id: 23,
    src: VTR_IMAGES.png2pdf19 || "/images/vtr images/png2pdf (1)_merged-19.jpg",
    alt: "Forest Biodiversity",
    category: "Nature",
  },
  {
    id: 24,
    src: VTR_IMAGES.png2pdf20 || "/images/vtr images/png2pdf (1)_merged-20.jpg",
    alt: "Cultural Heritage Monuments",
    category: "Culture",
  },
  {
    id: 25,
    src: VTR_IMAGES.png2pdf21 || "/images/vtr images/png2pdf (1)_merged-21.jpg",
    alt: "Traditional Architecture",
    category: "Culture",
  },
  {
    id: 26,
    src: VTR_IMAGES.png2pdf22 || "/images/vtr images/png2pdf (1)_merged-22.jpg",
    alt: "Local Festivals and Events",
    category: "Culture",
  },
  {
    id: 27,
    src: VTR_IMAGES.png2pdf23 || "/images/vtr images/png2pdf (1)_merged-23.jpg",
    alt: "Handicrafts and Local Art",
    category: "Culture",
  },
  {
    id: 28,
    src: VTR_IMAGES.png2pdf24 || "/images/vtr images/png2pdf (1)_merged-24.jpg",
    alt: "Mountain Trekking Routes",
    category: "Adventure",
  },
  {
    id: 29,
    src: VTR_IMAGES.png2pdf25 || "/images/vtr images/png2pdf (1)_merged-25.jpg",
    alt: "Wildlife Photography Tips",
    category: "Safari",
  },
  {
    id: 30,
    src: VTR_IMAGES.png2pdf26 || "/images/vtr images/png2pdf (1)_merged-26.jpg",
    alt: "Bird Watching Opportunities",
    category: "Wildlife",
  },

  // Additional VTR Information and Experiences
  {
    id: 31,
    src: VTR_IMAGES.png2pdf27 || "/images/vtr images/png2pdf (1)_merged-27.jpg",
    alt: "Eco-Tourism Initiatives",
    category: "Nature",
  },
  {
    id: 32,
    src: VTR_IMAGES.png2pdf28 || "/images/vtr images/png2pdf (1)_merged-28.jpg",
    alt: "Community Tourism Programs",
    category: "Culture",
  },
  {
    id: 33,
    src: VTR_IMAGES.png2pdf29 || "/images/vtr images/png2pdf (1)_merged-29.jpg",
    alt: "Accommodation Options",
    category: "Information",
  },
  {
    id: 34,
    src: VTR_IMAGES.png2pdf30 || "/images/vtr images/png2pdf (1)_merged-30.jpg",
    alt: "Transportation and Access",
    category: "Information",
  },
  {
    id: 35,
    src: VTR_IMAGES.png2pdf31 || "/images/vtr images/png2pdf (1)_merged-31.jpg",
    alt: "Seasonal Wildlife Patterns",
    category: "Wildlife",
  },
  {
    id: 36,
    src: VTR_IMAGES.png2pdf32 || "/images/vtr images/png2pdf (1)_merged-32.jpg",
    alt: "Border Tourism Development",
    category: "Information",
  },
  {
    id: 37,
    src: VTR_IMAGES.png2pdf33 || "/images/vtr images/png2pdf (1)_merged-33.jpg",
    alt: "Local Cuisine and Food",
    category: "Culture",
  },
  {
    id: 38,
    src: VTR_IMAGES.png2pdf34 || "/images/vtr images/png2pdf (1)_merged-34.jpg",
    alt: "Forest Research Activities",
    category: "Nature",
  },
  {
    id: 39,
    src: VTR_IMAGES.png2pdf35 || "/images/vtr images/png2pdf (1)_merged-35.jpg",
    alt: "Riverside Activities",
    category: "Adventure",
  },
  {
    id: 40,
    src: VTR_IMAGES.png2pdf36 || "/images/vtr images/png2pdf (1)_merged-36.jpg",
    alt: "Conservation Success Stories",
    category: "Nature",
  },
];

// Export deduped gallery images (preserve order, remove duplicates by src)
export const GALLERY_IMAGES = (() => {
  const seen = new Set();
  const out = [];
  for (const img of RAW_GALLERY_IMAGES) {
    const key = img && img.src ? String(img.src) : JSON.stringify(img);
    if (!seen.has(key)) {
      seen.add(key);
      // assign stable id based on output order
      out.push({ ...img, id: out.length + 1 });
    }
  }
  return out;
})();
