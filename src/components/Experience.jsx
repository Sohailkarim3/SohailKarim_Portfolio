import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "linear-gradient(135deg, #1d1836 0%, #2a1f3d 100%)",
        color: "#fff",
        border: "1px solid #3a2f4a",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
      }}
      contentArrowStyle={{ 
        borderRight: "7px solid #3a2f4a",
        filter: "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2))"
      }}
      date={experience.date}
      dateClassName="text-white font-semibold"
      iconStyle={{ 
        background: "linear-gradient(135deg, #915EFF 0%, #3B82F6 100%)",
        boxShadow: "0 4px 16px rgba(145, 94, 255, 0.3)",
        border: "3px solid #1d1836"
      }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[80%] h-[80%] object-contain'
          />
        </div>
      }
    >
      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-gradient-to-r from-[#915EFF] to-blue-400 rounded-full"></div>
          <h3 className='text-white text-[26px] font-bold bg-gradient-to-r from-[#915EFF] to-blue-400 bg-clip-text text-transparent'>
            {experience.title}
          </h3>
        </div>
        <p
          className='text-blue-300 text-[18px] font-semibold mb-6'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>

        <div className="space-y-3">
          {experience.points.map((point, index) => {
            // Check if the point contains a project name (ends with colon)
            const isProjectName = point.includes(':') && point.split(':')[0].length < 50;
            
            if (isProjectName) {
              const [projectName, description] = point.split(':');
              return (
                <div
                  key={`experience-point-${index}`}
                  className="p-4 rounded-lg bg-gradient-to-r from-gray-800/40 to-gray-700/40 hover:from-gray-700/50 hover:to-gray-600/50 transition-all duration-200 border border-gray-600/30"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#915EFF] font-bold text-[18px]">+</span>
                    <h4 className="text-[#915EFF] text-[18px] font-bold bg-gradient-to-r from-[#915EFF] to-blue-400 bg-clip-text text-transparent">
                      {projectName}:
                    </h4>
                  </div>
                  <p className="text-white text-[15px] leading-relaxed font-medium ml-6">
                    {description.trim()}
                  </p>
                </div>
              );
            }
            
            return (
              <div
                key={`experience-point-${index}`}
                className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/30 hover:bg-gray-700/40 transition-colors duration-200"
              >
                <span className="text-[#915EFF] font-bold text-[16px] mt-1">•</span>
                <span className='text-white text-[15px] leading-relaxed font-medium'>
                  {point}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
