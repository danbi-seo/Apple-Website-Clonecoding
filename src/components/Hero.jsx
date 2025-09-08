import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
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

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero-title", {
      opacity: 1,
      delay: 1.5,
      duration: 2,
    });
    if (window.innerWidth < 760) {
      gsap.to("#cta", {
        y: -50,
        opacity: 1,
        delay: 4,
        stagger: 1,
      });
    } else {
      gsap.to("#cta", {
        y: -50,
        opacity: 1,
        delay: 1.5,
        stagger: 1,
      });
    }
  }, []);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <h1 id="hero-title" className="hero-title">
          iPhone 15 Pro Max
        </h1>
        <div className="md:w-10/12 w-9/12">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            preload="metadata"
            playsInline={true}
            key={videoSrc}
            loop
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>

      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn transition-all">
          Buy
        </a>
        <p>from $199/month or $1199</p>
      </div>
    </section>
  );
};

export default Hero;
