import { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Banner (replaces previous compact top bar) */}
      <div
        id="site-header"
        className="w-full bg-[#16bcd7] text-black py-3 px-4 md:py-4 md:px-12 overflow-visible sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-2 md:px-4">
          {/* left logo */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 relative">
              <Image
                src="/images/vvlogo.png"
                alt="Valmiki Vihar logo"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>

          {/* centered on small, left-aligned + inline titles on md+ */}
          <div className="flex-1 text-center md:text-left px-2 md:px-6">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-start md:space-x-6">
              <h2 className="text-lg sm:text-xl md:text-3xl font-extrabold text-yellow-300 tracking-wider">
                VALMIKI VIHAR
              </h2>
              <h3 className="mt-1 md:mt-0 text-sm sm:text-lg md:text-xl font-black text-black md:leading-none">
                TOUR AND TRAVELS
              </h3>
            </div>

            <p
              className="mt-1 text-sm sm:text-base md:text-lg font-medium text-black/90"
              style={{ fontFamily: "sans-serif" }}
            >
              "किफायती यात्रा, शानदार अनुभव"
            </p>
            <p className="mt-1 text-xs md:text-sm font-semibold italic tracking-wide">
              PLAN YOUR TRIP WITH US
            </p>
          </div>

          {/* right logo (aeroplane) */}
          <div className="flex-shrink-0">
            <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 relative">
              <Image
                src="/images/aeroplane.png"
                alt="aeroplane"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* removed secondary nav - top banner is the only header */}
    </>
  );
};

export default Header;
