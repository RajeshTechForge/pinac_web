"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// image
import appImage from "@/public/assets/img/App Image.svg";

const AppPreview = () => {
  const [bgGlow, setBgGlow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);

  // Set up scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const imageRect = imageRef.current.getBoundingClientRect();
        const imageTopVisible = imageRect.top < window.innerHeight * 0.1; // Adjust this threshold
        const imageBottomVisible = imageRect.bottom > 0; // Ensures the bottom of the image is still visible

        // Scrolling down
        if (window.scrollY > lastScrollY) {
          if (imageTopVisible && imageBottomVisible) {
            setBgGlow(true);
          }
        }
        // Scrolling up
        else {
          // Check if scrolling back above the viewport
          if (imageRect.top > window.innerHeight * 0.25) {
            setBgGlow(false);
          }
        }
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className="w-full flex justify-center items-center z-40"
      ref={imageRef}
    >
      <Image
        alt="app preview"
        src={appImage}
        className={`${
          bgGlow ? "2xl-2:shadow-bgGlow" : ""
        } h-full max-w-[80%] 2xl:rounded-3xl md:rounded-2xl rounded-lg`}
      />
    </div>
  );
};

export default AppPreview;
