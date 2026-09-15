"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import styles from "../styles/freaturedWatches.module.css";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

gsap.registerPlugin(ScrollTrigger);

export function FeaturedWatches() {
  const featuredWatchesRef = useRef(null);

  useEffect(() => {
    if (featuredWatchesRef.current) {
      gsap.fromTo(
        featuredWatchesRef.current,
        { opacity: 0, x: -100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredWatchesRef.current,
            start: "top 80%",
          },
        },
      );
    }
  }, []);

  return (
    <div
      id="featured-watches"
      className={`section ${styles.featuredWatchesContainer}`}
    >
      <div
        ref={featuredWatchesRef}
        className="sectionTextContainer dividerBorder"
      >
        <h2 className="sectionTitles">Featured Watches</h2>
        <p className="sectionDescriptions">
          Discover our curated selection of timepieces.
        </p>
        <p className="sectionDescriptions">
          A selection of pieces that embody the essence of AUREN. Designed with
          precision, built to last.
        </p>
      </div>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        speed={1000}
        autoHeight
        roundLengths
        loop
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ padding: "var(--space-5) 0" }}
      >
        <SwiperSlide style={{ height: "370px" }}>
          <Image
            src="/watch1.jpg"
            alt="Watch 1"
            fill
            className={styles.featuredImages}
            style={{ objectPosition: "center 35%" }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "370px" }}>
          <Image
            src="/watch2.jpg"
            alt="Watch 2"
            fill
            className={styles.featuredImages}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "370px" }}>
          <Image
            src="/watch5.jpg"
            alt="Watch 5"
            fill
            className={styles.featuredImages}
          />
        </SwiperSlide>
        <SwiperSlide style={{ height: "370px" }}>
          <Image
            src="/watch6.jpg"
            alt="Watch 6"
            fill
            className={styles.featuredImages}
          />
        </SwiperSlide>
        <div className={`swiper-button-prev ${styles.buttonPrev}`}></div>
        <div className={`swiper-button-next ${styles.buttonNext}`}></div>
      </Swiper>
    </div>
  );
}
