import React, { useEffect, useRef } from "react";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CV = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;

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

    // Animate the CV card
    gsap.fromTo(
      card,
      {
        opacity: 0,
        scale: 0.9,
        y: 50,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section>
      <div>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </div>

      <div ref={containerRef} className="mt-10 flex justify-center">
        <div 
          ref={cardRef}
          className="bg-tertiary p-8 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300 max-w-2xl w-full text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-3 h-3 bg-gradient-to-r from-[#915EFF] to-blue-400 rounded-full"></div>
            <h3 className="text-white text-[24px] font-bold">Download My Resume</h3>
          </div>
          
          <p className="text-gray-300 text-[16px] mb-8 leading-relaxed">
            Get a detailed overview of my experience, skills, and achievements in a professional PDF format.
          </p>

          <div className="space-y-4">
            <a
              href="/cv/Sohail_Karim_Resume.pdf.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#915EFF] to-blue-400 text-white font-bold text-[18px] rounded-lg hover:from-[#7c4dff] hover:to-[#2563eb] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
            
            <div className="text-gray-400 text-[14px]">
              <p>Last updated: {new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(CV, "cv");
