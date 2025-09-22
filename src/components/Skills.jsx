import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { skills } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    const cards = cardsRef.current;

    // Animate the main container
    gsap.fromTo(
      container,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate skill cards with stagger
    gsap.fromTo(
      cards,
      {
        opacity: 0,
        y: 80,
        scale: 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: container,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate individual skill items within each card
    cards.forEach((card, cardIndex) => {
      if (card) {
        const skillItems = card.querySelectorAll('.skill-item');
        gsap.fromTo(
          skillItems,
          {
            opacity: 0,
            x: -30,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.3 + (cardIndex * 0.2),
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <section>
      <div>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </div>

      <div ref={containerRef} className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, groupIndex) => (
          <div 
            key={group.category} 
            ref={el => cardsRef.current[groupIndex] = el}
            className="bg-tertiary p-6 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-[#915EFF] to-blue-400 rounded-full"></div>
              <h3 className="text-white text-[22px] font-bold">{group.category}</h3>
            </div>
            <div className="grid grid-cols-1 gap-2">
              {group.items.map((item, index) => (
                <div 
                  key={item} 
                  className="skill-item flex items-center gap-3 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200"
                >
                  <span className="text-[#915EFF] font-bold text-[14px]">•</span>
                  <span className="text-white text-[14px] font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Skills, "skills");


