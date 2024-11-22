import React, { useRef, useEffect } from "react";
import { ServiceCard } from "./items/ServiceCard";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Service = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const card1Ref = useRef<HTMLDivElement | null>(null);
  const card2Ref = useRef<HTMLDivElement | null>(null);
  const card3Ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const card1 = card1Ref.current;
    const card2 = card2Ref.current;
    const card3 = card3Ref.current;

    gsap.matchMedia().add("(min-width: 768px)", () => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top+=50px top",
          end: 3800,
          pin: true,
          scrub: true,
          onEnter: () => (document.body.style.backgroundColor = "black")
        },
      });

      gsap.fromTo(
        card2,
        { y: "800px" },
        {
          y: "0px",
          scrollTrigger: {
            trigger: card2,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              gsap.to(card1, {
                scale: 1 - 0.2 * self.progress,
                zIndex: 1,
              });
            },
          },
        }
      );

      gsap.fromTo(
        card3,
        { y: "1360px" },
        {
          y: "0px",
          scrollTrigger: {
            trigger: card3,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              gsap.to(card2, {
                scale: 1 - 0.2 * self.progress,
                zIndex: 1,
              });
            },
          },
        }
      );
    });

    gsap.matchMedia().add("(max-width: 767px)", () => {
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: "top+=20px top",
          end: 2300,
          pin: true,
          scrub: true,
          onEnter: () => (document.body.style.backgroundColor = "black")
        },
      });

      gsap.fromTo(
        card2,
        { y: "650px" },
        {
          y: "0px",
          scrollTrigger: {
            trigger: card2,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              gsap.to(card1, {
                scale: 1 - 0.1 * self.progress,
                zIndex: 1,
              });
            },
          },
        }
      );

      gsap.fromTo(
        card3,
        { y: "1200px" },
        {
          y: "0px",
          scrollTrigger: {
            trigger: card3,
            start: "top bottom",
            end: "top top",
            scrub: true,
            onUpdate: (self) => {
              gsap.to(card2, {
                scale: 1 - 0.1 * self.progress,
                zIndex: 1,
              });
            },
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-custom-1">
      <div className="container overflow-hidden py-16 px-6 lg:py-22 lg:px-24 h-screen lg:h-auto">
        <h3 className="text-4xl font-medium text-black mb-8">Services</h3>
        <div className="relative h-[600px]">
          <div className="absolute z-[1]" ref={card1Ref}>
            <ServiceCard />
          </div>
          <div className="absolute z-[2]" ref={card2Ref}>
            <ServiceCard />
          </div>
          <div className="absolute z-[3]" ref={card3Ref}>
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
};
