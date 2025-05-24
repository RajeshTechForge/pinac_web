"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// image
import appImage from "@/img/App Image.png";

const AppPreview = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [blur, setBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const middle = window.innerHeight / 2;
      setBlur(rect.top <= middle);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full flex justify-center items-center z-40
      ${blur ? "2xl-2:backdrop-blur-xs" : ""}`}
    >
      <div className="light-beam-border h-full w-[90%] p-0.5 md:rounded-xl rounded-lg">
        <Image
          alt="app preview"
          src={appImage}
          className="h-full md:rounded-xl rounded-lg relative z-10"
        />
      </div>
    </div>
  );
};

export default AppPreview;
