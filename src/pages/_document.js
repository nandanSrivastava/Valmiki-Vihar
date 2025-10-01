import { Html, Head, Main, NextScript } from "next/document";
import { VTR_IMAGES } from "../config/images";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Discover the tiger-inhabited wilderness of Valmiki Tiger Reserve with Valmiki Vihar - wildlife safaris, river adventures and cultural tours."
        />
        <meta
          name="keywords"
          content="Valmiki Tiger Reserve, Valmiki National Park, Bihar tourism, wildlife safari, eco-tourism, travel packages, West Champaran"
        />
        <meta name="author" content="Valmiki Vihar" />

        {/* Open Graph tags */}
        <meta
          property="og:title"
          content="Valmiki Vihar - Valmiki Tiger Reserve Tours & Safaris"
        />
        <meta
          property="og:description"
          content="Join Valmiki Vihar for immersive wildlife safaris and cultural tours in Valmiki Tiger Reserve."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://valmikivihar.com" />
        <meta
          property="og:image"
          content={VTR_IMAGES.vtrSunset || "/images/vtr images/vtr sunset.jpg"}
        />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Valmiki Vihar - Valmiki Tiger Reserve Tours & Safaris"
        />
        <meta
          name="twitter:description"
          content="Join Valmiki Vihar for immersive wildlife safaris and cultural tours in Valmiki Tiger Reserve."
        />
        <meta
          name="twitter:image"
          content={VTR_IMAGES.vtrSunset || "/images/vtr images/vtr sunset.jpg"}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />

        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
