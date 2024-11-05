import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const HeroSection = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      duration: 2,
    });
    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 1.4,
    });
  }, []);
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return window.removeEventListener("resize", handleVideoSrcSet);
  }, []);
  return (
    <section className="w-full nav-height bg-black">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-event-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month ot $999</p>
      </div>
    </section>
  );
};

export default HeroSection;
