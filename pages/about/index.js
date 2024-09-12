import Avatar from '../../components/Avatar';
import React, { useState } from 'react';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiRedux,
} from 'react-icons/si';
import { IoLogoTailwindcss } from "react-icons/io";
import MySQLIcon from '../../components/MySQLIcon';
import MongoIcon from '../../components/MongoIcon';
import NodeJsIcon from '../../components/NodeJsIcon';
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <SiFramer key="framer" />,
          <SiRedux key="redux" />,
          <MongoIcon key="mongo"/>,
          <NodeJsIcon/>,
          <MySQLIcon/>
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key="figma" />, <SiAdobexd key="xd" />, <SiAdobephotoshop key="photoshop" />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: ' - ',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: ' - ',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: ' - ',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: ' - ',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: ' - ',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '-',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '-',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '-',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      {/* Avatar */}
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[250px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          {/* Text */}
          <h2 className="h2">
            Captivating <span className="text-accent">stories</span> and bright, magnificent designs.
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
            With over a decade of experience in web development and UI/UX design, I have a passion for creating intuitive and visually stunning user experiences. My journey spans across various industries, where I have honed my skills and earned recognition for my contributions.
          </p>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[380px]">
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                onClick={() => setIndex(itemIndex)}
                key={itemIndex}
                className={`${
                  index === itemIndex &&
                  'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
              >
                {item.title}
              </div>
            ))}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
              >
                {/* Title */}
                <div className="font-light mb-2 md:mb-0">
                  {item.title}
                </div>
                <div className="hidden md:flex"> - </div>
                <div>{item.stage}</div>
                {/* Icons */}
                <div className="flex gap-x-4">
                  {item.icons?.map((icon, iconIndex) => (
                    <div className="text-2xl text-white" key={iconIndex}>
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
