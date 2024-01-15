import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - Present</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="Mindgigs IT Park Peshawar - (June 2022 - August 2022)"
            result="Peshawar, Pakistan"
            des="I have worked as a Front-End internee in HTML5, CSS3, Bootstrap and Js in Mindgigs Software House in IT park Peshawar." 
          />
          <ResumeCard
            title="React Developer"
            subTitle="Alright Tech Pvt. Ltd - (Nov 2023 - Feb 2024)"
            result="Rawalpindi, Pakistan"
            des="I have worked as a React Js Internee for three months in Arlight Tech Pvt Ltd. (Nov 2023 - Feb 2024). I can make fully responsive React Js applications with UI framwork like Tailwind, Bootstrap and libraries such as Redux, UI-Material, Framer Motion."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;
