import Avatar from '../../components/Avatar';
import React, { useState } from 'react';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import {
  RxDesktop,
  RxRocket,
  RxCode,
  RxMobile,
  RxLayers,
  RxGlobe,
} from 'react-icons/rx';

const aboutData = [
  {
    title: 'capabilities',
    info: [
      {
        title: 'Full-Stack Web Apps',
        icons: [<RxDesktop key="web" />],
        desc: 'Frontend to backend, database to deployment',
      },
      {
        title: 'Real-time Systems',
        icons: [<RxLayers key="realtime" />],
        desc: 'Live data, instant updates, multiplayer',
      },
      {
        title: 'Cloud & Infrastructure',
        icons: [<RxRocket key="infra" />],
        desc: 'Containerized, auto-scaled, production-grade',
      },
      {
        title: 'AI & Automation',
        icons: [<RxGlobe key="ai" />],
        desc: 'Intelligent agents and decision pipelines',
      },
    ],
  },
  {
    title: 'philosophy',
    info: [
      {
        title: 'Simple > Complex',
        desc: 'Cut noise, ship clarity',
      },
      {
        title: 'Real users > Perfect code',
        desc: 'Solve problems first',
      },
      {
        title: 'Systems > Features',
        desc: 'Build things that connect',
      },
    ],
  },
  {
    title: 'projects',
    info: [
      {
        title: 'RobinHUD',
        desc: 'Real-time decision support',
      },
      {
        title: 'Testictour',
        desc: 'Tournament platform — AWS EC2',
      },
      {
        title: 'TFT Portfolio',
        desc: 'Player identity & profile system',
      },
      {
        title: 'Netsla',
        desc: 'Gaming café ecosystem',
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
          {/* Label */}
          <span className="label mb-3">Who I am</span>
          {/* Text */}
          <h2 className="h2">
            I build complete products,{' '}
            <span className="text-gradient">independently.</span>
          </h2>
          <p className="max-w-[480px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-[14px]">
            Solo builder who handles everything from frontend to backend,
            infrastructure, and deployment — using AI to move faster.
          </p>
        </div>
        <div className="flex flex-col w-full xl:max-w-[48%] h-[380px]">
          {/* Tabs */}
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => (
              <div
                onClick={() => setIndex(itemIndex)}
                key={itemIndex}
                className={`${
                  index === itemIndex
                    ? 'text-accent after:w-[100%] after:bg-accent'
                    : 'text-white/50 hover:text-white/80'
                } cursor-pointer capitalize text-sm xl:text-base font-medium relative after:w-8 after:h-[2px] after:bg-white/20 after:absolute after:-bottom-1 after:left-0 after:transition-all after:duration-300 transition-colors duration-300`}
              >
                {item.title}
              </div>
            ))}
          </div>
          {/* Content */}
          <div className="py-2 xl:py-6 flex flex-col gap-y-3 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="glass glass-hover px-5 py-3 w-full max-w-[400px] flex items-center gap-x-4"
              >
                {/* Icon */}
                {item.icons && (
                  <div className="flex gap-x-3 text-accent text-xl shrink-0">
                    {item.icons.map((icon, iconIndex) => (
                      <div key={iconIndex}>{icon}</div>
                    ))}
                  </div>
                )}
                {/* Text */}
                <div className="flex flex-col">
                  <div className="text-sm font-medium text-white/90">{item.title}</div>
                  <div className="text-[12px] text-white/40 font-light">{item.desc}</div>
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
