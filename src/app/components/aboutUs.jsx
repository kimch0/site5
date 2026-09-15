"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
  const aboutUsTitleRef = useRef(null);
  const aboutUsProseRef = useRef(null);

  useEffect(() => {
    if (aboutUsTitleRef.current) {
      gsap.fromTo(
        aboutUsTitleRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutUsTitleRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  useEffect(() => {
    if (aboutUsProseRef.current) {
      gsap.fromTo(
        aboutUsProseRef.current,
        { opacity: 0, x: 100 },
        {
          opacity: 1,
          x: 0,
          duration: 2.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: aboutUsTitleRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  return (
    <div
      id="about-us"
      className="story section"
      aria-labelledby="story-heading"
    >
      <div className="story-layout">
        <div className="" ref={aboutUsTitleRef}>
          <p className="drawingMeta">
            <span>Philosophy</span>
            <span>Sheet B</span>
          </p>
          <h2 className="sectionTitles" style={{ maxWidth: "12ch" }}>
            Quiet timekeeping
          </h2>
        </div>
        <div className="story-prose" ref={aboutUsProseRef}>
          <p>
            AUREN began from a simple refusal: a watch should not shout to be
            taken seriously. Architecture taught the same lesson — proportion
            and material do the speaking when ornament is removed.
          </p>
          <p>
            We build mechanical watches for people who notice the grain of a
            brushed lug, the weight of a winding crown, the way a dial catches
            late afternoon light. Independence is not a slogan; it is the
            freedom to leave a detail unfinished until it is right.
          </p>
          <p>
            Precision without haste. Craft without theater. Design that still
            feels inevitable a decade later.
          </p>
        </div>
      </div>
    </div>
  );
}
