import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      y: 0,
      opacity: 1,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      stagger: 0.25,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h2 id="title" className="section-heading">
            Get the highlights.
          </h2>

          <div className="flex flex-wrap items-end gap-5">
            <a
              href="https://www.youtube.com/watch?v=xqyUdNxWazA&pp=ygUZaXBob25lIDE1IHBybyBtYXggdHJhaWxlcg%3D%3D"
              target="blank"
              className="link"
            >
              Watch the film
              <img src={watchImg} alt="watch" className="ml-2" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=ZiP1l7jlIIA&pp=ygUXaXBob25lIDE1IHBybyBtYXggZXZlbnQ%3D"
              target="blank"
              className="link"
            >
              Watch the event
              <img src={rightImg} alt="watch" className="ml-2" />
            </a>
          </div>
        </div>

        {/* carousel */}

        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
