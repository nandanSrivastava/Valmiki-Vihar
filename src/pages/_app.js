import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const router = useRouter();


  return (
    <>
      <Head>
        <title>
          Valmiki Vihar - Discover Wild Beauty of Bihar | Premium Tourism
          Experience
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
        <motion.div
          key={router.route}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default MyApp;
