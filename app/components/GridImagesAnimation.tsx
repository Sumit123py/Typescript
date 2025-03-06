"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GridImagesAnimation() {
  const heroRef = useRef(null);

  // Define each image with its selector, custom initial rotation, and custom x/y offsets.
  const images = [
    { selector: ".image1", rotation: 10, x: "-100%", y: -500 },
    { selector: ".image2", rotation: 10, x: "0%", y: "-60%" },
    { selector: ".image3", rotation: -10, x: "100%", y: "-250%" },
    { selector: ".image4", rotation: -6, x: "-30%", y: "-150%" },
    { selector: ".image5", rotation: 10, x: "20%", y: "-40%" },
    { selector: ".image6", rotation: -5, x: "40%", y: "-200%" },
    { selector: ".image7", rotation: 0, x: -50, y: 80 },
    { selector: ".image8", rotation: 0, x: -140, y: 50 },
    { selector: ".image9", rotation: 0, x: 100, y: 90 },
  ];

  useEffect(() => {
    let mm = gsap.matchMedia(); // Match media queries

    interface ImageProps {
      selector: string;
      rotation: number;
      x: string | number;
      y: string | number;
    }

    mm.add("(min-width: 1424px)", () => {
      // Large screens (Desktops)
      const images: ImageProps[] = [
        { selector: ".image1", rotation: 10, x: "-100%", y: -500 },
        { selector: ".image2", rotation: 10, x: "0%", y: "-60%" },
        { selector: ".image3", rotation: -10, x: "100%", y: "-250%" },
        { selector: ".image4", rotation: -6, x: "-30%", y: "-150%" },
        { selector: ".image5", rotation: 10, x: "20%", y: "-40%" },
        { selector: ".image6", rotation: -5, x: "40%", y: "-200%" },
        { selector: ".image7", rotation: 0, x: -50, y: 80 },
        { selector: ".image8", rotation: 0, x: -140, y: 50 },
        { selector: ".image9", rotation: 0, x: 100, y: 90 },
      ];
      animateImages(images);
    });

    mm.add("(min-width: 1024px) and (max-width: 1423px)", () => {
      // Large screens (Desktops)
      const images: ImageProps[] = [
        { selector: ".image1", rotation: 10, x: "-40%", y: -500 },
        { selector: ".image2", rotation: 10, x: "20%", y: "-60%" },
        { selector: ".image3", rotation: -10, x: "60%", y: "-250%" },
        { selector: ".image4", rotation: -6, x: "-0%", y: "-150%" },
        { selector: ".image5", rotation: 10, x: "20%", y: "-40%" },
        { selector: ".image6", rotation: -5, x: "30%", y: "-200%" },
        { selector: ".image7", rotation: 0, x: -50, y: 80 },
        { selector: ".image8", rotation: 0, x: -140, y: 50 },
        { selector: ".image9", rotation: 0, x: 100, y: 90 },
      ];
      animateImages(images);
    });

    

    mm.add("(min-width: 1424px)", () => {
      gsap.to(".images-grid", {
        scale: 0.8,
        duration: 5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top+=200 center",
          end: "+=1300",
          scrub: 1,
          // markers: true,
          pin: true,
        },
      });
    });

    mm.add("(min-width: 1024px) and (max-width: 1423px)", () => {
      gsap.to(".images-grid", {
        scale: 0.6,
        duration: 5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top+=200 center",
          end: "+=1300",
          scrub: 1,
          markers: true,
          pin: true,
        },
      });
    });

    gsap.fromTo(
      ".back-image2",
      { scale: 1.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 4,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".back-image",
          start: "top+=1300 20%",
          end: "bottom-=700 20%",
          scrub: 1,
          //   markers: true,
        },
      }
    );

    gsap.fromTo(
      ".back-image1",
      { scale: 0.4, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".images-grid",
          start: "top+=200 center",
          end: "bottom-=100 20%",
          scrub: 1,
          //   markers: true,
        },
      }
    );

    function animateImages(images: ImageProps[]) {
      images.forEach(({ selector, rotation, x, y }) => {
        const element = document.querySelector<HTMLDivElement>(selector);
        if (element) {
          const opacityAnimSelectors = [
            ".image5",
            ".image7",
            ".image8",
            ".image9",
          ];
          const shouldAnimateOpacity = opacityAnimSelectors.includes(selector);
          // Animate from the custom initial rotation and position (x, y) to the natural state.
          gsap.fromTo(
            element,
            {
              rotation: rotation,
              x: x,
              y: y,
              opacity: shouldAnimateOpacity ? 0 : 1,
              scale: 1,
            },
            {
              scrollTrigger: {
                trigger: ".images-grid", // Use the common grid container as trigger.
                start: "top-=200 top",
                end: "bottom 30%",
                scrub: true,
                // markers: true, // Remove markers in production.
              },
              rotation: 0, // Animate to no rotation.
              x: 0, // Animate to natural horizontal position.
              y: 0, // Animate to natural vertical position.
              opacity: 1,
              ease: "power2.out",
            }
          );
        }
      });
    }
  }, []);

  return (
    <div ref={heroRef} className="w-full h-[120vh] relative">
      <div className="absolute back-image1 left-1/2 top-1/2 gap-1 -translate-x-1/2 -translate-y-1/2 w-[90%] lg:h-[60%] xl:h-[80%]">
        <Image
          src="/images/back1.png"
          fill
          alt="background image"
          className="rounded-lg"
        />
      </div>
      <div className="absolute back-image2 left-80 top-[62%] gap-1 -translate-x-1/2 -translate-y-1/2 z-[100] ">
        <Image
          src="/images/back2.webp"
          width={280}
          height={220}
          alt="background image"
          className="rounded-lg"
        />
      </div>
      <div className="images-grid grid-layout max-w-5xl w-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="image1 rounded-lg shadow-xl">
          <Image
            src="/images/1.webp"
            width={320}
            height={200}
            alt="image 1"
            className="object-cover rounded-lg"
          />
        </div>
        <div className="image2 rounded-lg shadow-xl">
          <Image
            src="/images/2.webp"
            width={320}
            height={200}
            alt="image 2"
            className="rounded-lg"
          />
        </div>
        <div className="image3 rounded-lg shadow-xl">
          <Image
            src="/images/9.webp"
            width={320}
            height={200}
            alt="image 3"
            className="rounded-lg"
          />
        </div>
        <div className="image4 rounded-lg shadow-xl">
          <Image
            src="/images/4.webp"
            width={320}
            height={200}
            alt="image 4"
            className="rounded-lg"
          />
        </div>
        <div className="image5 rounded-lg shadow-xl">
          <Image
            src="/images/5.webp"
            width={320}
            height={200}
            alt="image 5"
            className="rounded-lg"
          />
        </div>
        <div className="image6 rounded-lg shadow-xl">
          <Image
            src="/images/6.webp"
            width={320}
            height={200}
            alt="image 6"
            className="rounded-lg"
          />
        </div>
        <div className="image7 rounded-lg shadow-xl">
          <Image
            src="/images/7.webp"
            width={320}
            height={200}
            alt="image 7"
            className="rounded-lg"
          />
        </div>
        <div className="image8 rounded-lg shadow-xl">
          <Image
            src="/images/8.webp"
            width={320}
            height={200}
            alt="image 8"
            className="rounded-lg"
          />
        </div>
        <div className="image9 rounded-lg shadow-xl">
          <Image
            src="/images/3.webp"
            width={320}
            height={200}
            alt="image 9"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
