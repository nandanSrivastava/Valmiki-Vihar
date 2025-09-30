export const destinations = [
  {
    id: 1,
    name: "Valmiki National Park",
    location: "West Champaran, Bihar",
    description:
      "A pristine wilderness sanctuary spread across 899 square kilometers, home to Royal Bengal tigers, leopards, and over 250 bird species.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹4,999",
    duration: "3 Days 2 Nights",
    rating: 4.8,
    features: [
      "Wildlife Safari",
      "Bird Watching",
      "Nature Photography",
      "Jungle Camping",
    ],
  },
  {
    id: 2,
    name: "Gandak River Safari",
    location: "Gandak River, Bihar",
    description:
      "Experience the serene beauty of the Gandak River with boat safaris, fishing, and riverside camping under starlit skies.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹2,999",
    duration: "2 Days 1 Night",
    rating: 4.6,
    features: ["River Safari", "Fishing", "Camping", "Photography"],
  },
  {
    id: 3,
    name: "Bhikhna Thori Border",
    location: "India-Nepal Border",
    description:
      "A unique cross-border experience where you can witness the confluence of two cultures and enjoy the scenic beauty of the border region.",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹3,499",
    duration: "2 Days 1 Night",
    rating: 4.4,
    features: ["Cultural Tour", "Border Visit", "Local Cuisine", "Shopping"],
  },
  {
    id: 4,
    name: "Someshwar Hills",
    location: "West Champaran, Bihar",
    description:
      "Ancient hills with archaeological significance, offering trekking trails, cave exploration, and panoramic views of the surrounding landscape.",
    image:
      "https://images.unsplash.com/photo-1464822759844-d150baec93d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹1,999",
    duration: "1 Day",
    rating: 4.3,
    features: [
      "Trekking",
      "Cave Exploration",
      "Archaeological Sites",
      "Scenic Views",
    ],
  },
  {
    id: 5,
    name: "Bagaha Cultural Heritage",
    location: "Bagaha, West Champaran",
    description:
      "Explore the rich cultural heritage of Bagaha with visits to ancient temples, local markets, and traditional craft workshops.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹1,499",
    duration: "1 Day",
    rating: 4.2,
    features: [
      "Temple Visits",
      "Cultural Tours",
      "Local Crafts",
      "Traditional Food",
    ],
  },
  {
    id: 6,
    name: "Ramnagar Forest",
    location: "Ramnagar, West Champaran",
    description:
      "Dense forest area perfect for eco-tourism, bird watching, and experiencing the raw beauty of nature in its pristine form.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    price: "₹2,499",
    duration: "2 Days 1 Night",
    rating: 4.5,
    features: [
      "Eco Tourism",
      "Bird Watching",
      "Forest Camping",
      "Nature Walks",
    ],
  },
];

export const featuredDestinations = destinations.slice(0, 3);

export const packages = [
  {
    id: 1,
    name: "Valmiki Vihar Grand Tour",
    duration: "7 Days 6 Nights",
    price: "₹14,999",
    originalPrice: "₹18,999",
    destinations: [
      "Valmiki National Park",
      "Gandak River",
      "Someshwar Hills",
      "Bagaha",
    ],
    inclusions: [
      "Accommodation in premium resorts",
      "All meals (breakfast, lunch, dinner)",
      "Transportation (AC vehicle)",
      "Professional guide",
      "All entry fees and permits",
      "Wildlife safari",
      "Boat ride on Gandak River",
    ],
    image:
      "https://images.unsplash.com/photo-1586500036706-41963de24d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Wildlife Explorer Package",
    duration: "4 Days 3 Nights",
    price: "₹8,999",
    originalPrice: "₹11,999",
    destinations: ["Valmiki National Park", "Ramnagar Forest"],
    inclusions: [
      "Forest lodge accommodation",
      "All meals",
      "Jeep safari",
      "Bird watching sessions",
      "Nature photography guidance",
      "Camping equipment",
    ],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "River & Culture Experience",
    duration: "3 Days 2 Nights",
    price: "₹5,999",
    originalPrice: "₹7,999",
    destinations: ["Gandak River", "Bagaha Cultural Sites"],
    inclusions: [
      "Riverside accommodation",
      "Cultural performances",
      "Local cuisine experience",
      "Boat safari",
      "Traditional craft workshops",
      "Temple visits",
    ],
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Hill & Heritage Escape",
    duration: "2 Days 1 Night",
    price: "₹3,199",
    originalPrice: "₹4,299",
    destinations: ["Someshwar Hills", "Bagaha"],
    inclusions: [
      "Comfortable stay",
      "Guided hill trek",
      "Local village visit",
      "Meals included",
    ],
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];
