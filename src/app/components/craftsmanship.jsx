"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CraftSection from "./craftSection";

gsap.registerPlugin(ScrollTrigger);

export default function Craftsmanship() {
  const craftRef = useRef(null);

  useEffect(() => {
    if (craftRef.current) {
      gsap.fromTo(
        craftRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: craftRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  return (
    <div id="craftsmanship" className="section">
      <div ref={craftRef} className={`dividerBorder sectionTextContainer`}>
        <h2 className="sectionTitles">Craftsmanship</h2>
        <p className="sectionDescriptions">
          Making is a sequence of measured acts. Each plate records what the
          previous one prepared.
        </p>
      </div>
      <CraftSection
        number="01"
        title="Movement"
        text="Calibre AR-21 is assembled and regulated in-house. Bridges receive côtes de Genève; edges are beveled by hand until light breaks cleanly along every plane."
        image="/auren-movement.png"
        imagePosition="right"
      />
      <CraftSection
        number="02"
        title="Materials"
        text="Cases are milled from 316L steel, then brushed and polished in alternating planes — a quiet contrast that reads only when light moves across the wrist."
        image="/auren-flagship-detail.png"
        imagePosition="left"
      />
      <CraftSection
        number="03"
        title="Hand finishing"
        text="Indices are applied one by one. Screws are blued. The dial’s sunburst is cut under controlled pressure so the champagne tone stays even from center to minute track."
        image="/auren-finishing.png"
        imagePosition="right"
      />
      <CraftSection
        number="04"
        title="Precision"
        text="Each Atelier 40 is timed across positions before leaving the atelier. Tolerance is not a marketing claim; it is a measured sheet pinned beside the bench."
        image="/auren-hero.png"
        imagePosition="left"
      />
    </div>
  );
}
