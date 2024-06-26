"use client";
import React, { useState } from "react";
import ProjectCard from "./components/projectCard";
import { motion } from "framer-motion";
import {
  PiArrowUpRight,
  PiLinkedinLogoThin,
  PiBehanceLogoThin,
  PiArrowDownThin,
  PiGithubLogoThin,
} from "react-icons/pi";
import SocialIcon from "./components/socialIcon";
import { ImLinkedin } from "react-icons/im";
import { GrGithub } from "react-icons/gr";
import { MdEmail } from "react-icons/md";


import { useTheme } from "next-themes";

import { Tooltip } from "@nextui-org/react";

import Link from "next/link";
import Image from "next/image";
// let Icons = [
//   { name: <PiTwitterLogoThin />, href: "https://twitter.com/Joenaldo" },
//   { name: <PiInstagramLogoThin />, href: "https://instagram.com/Joscriptt " },
//   { name: <PiGithubLogoLight />, href: "https://github.com/Joscriptt" },
// ];

function Homepage() {
  const { theme } = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className=" w-full  px-4 pt-8 max-w-6xl mx-auto">
      <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-5 grid-flow-row-dense">
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="border cursor-pointer z-20 dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg sm:h-40"
        >
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Location</p>
              <p className="text-neutral-500 text-xs ">Venezuela Lara</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <motion.img
            whileHover={{ scale: 3 }}
            className="h-full w-full duration-300 opacity-50 transition-all ease-in-out object-cover"
            src={theme == "dark" ? "/Bqto.png" : "/BqtoWhite.jpeg"}
            alt=""
          />
        </motion.div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl relative rounded-lg sm:h-40  ">
          <div className=" absolute w-full p-2">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Mode</p>
              <div>
                <span>
                  <span className="mr-1.5 flex justify-center h-2 w-2 items-center ">
                    <span
                      className={`absolute flex  w-2 h-2 rounded-full  opacity-75 animation-delay-4000 animate-ping dark:bg-lime-500 bg-yellow-400`}
                    ></span>
                    <span
                      className={`relative inline-flex w-1 h-1 rounded-full dark:bg-lime-500 g-yellow-400`}
                    ></span>
                  </span>
                </span>
              </div>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            <div className="">
              <p className="text-xs font-semibold max-sm:mt-16 sm:mt-4  ">
                Available for freelance <br /> design projects. Hit me up <br />{" "}
                for a collab 🦾
              </p>

              <a target="_blank" href="https://www.linkedin.com/in/pastor-jim%C3%A9nez-887798212/">
                <button className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60  mt-3 rounded-full p-1 px-2 dark:bg-neutral-700/40 sm:w-full">
                  <span>Contact me</span>
                  <PiArrowUpRight />
                </button>
              </a>
              
            </div>
          </div>
        </div>
        <motion.div
          drag
          dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
          dragElastic={1}
          className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60  z-20 cursor-pointer relative shadow-xl rounded-lg  col-span-2 "
        >
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">About</p>
              <p className="text-neutral-500 text-xs ">Pastor Jiménez</p>
            </div>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          <div className="mt-14 px-3 pb-3">
            <p className="text-xs font-semibold   leading-5">
              I am an enthusiastic problem solver with a deep passion for learning. My background in Node.js and backend development has equipped me with valuable experience and a quick grasp of project complexities. I thrive in collaborative team environments, where I contribute effectively and maintain open communication.
            </p>
          </div>
        </motion.div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2 row-span-2 relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Education</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className=" overflow-y-auto h-[340px] overflow-hidden scrollbar-hide scroll-smooth relative ">
            {/* Starts */}
            <div className="flex gap-x-3 mt-16 px-2">
              <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
                2022 -- 2025
              </p>
              <div>
                <h4 className="text-xs font-bold">Bachelor's Degree: Computer Science</h4>
                <p className="text-[11px] text-neutral-500">
                  Bachelor of Science in Computer Science at the Instituto Universitario Jesús Obrero in Lara, Venezuela. Over three years, I explore software engineering, databases, algorithms, web development, and operating systems. My passion for technology drives me forward as I continue to learn and contribute to meaningful projects.
                </p>
              </div>
            </div>
            
            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex gap-x-3 px-2 relative ">
              <p className="dark:text-neutral-400  text-xs w-20 shrink-0  ">
                2016 -- 2021
              </p>
              <div>
                <h4 className="text-xs font-bold">High School Diploma: Technology</h4>
                <p className="text-[11px] text-neutral-500">
                  During my time there, I cultivated a strong foundation in technology. My coursework included practical experience with programming languages, algorithms, and network fundamentals. I am well-versed in the intricacies of technology, and my passion for learning continues to drive me forward.
                </p>
              </div>
            </div>

            <div className="px-2 my-5 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
             
          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </div>

        <div className=" dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60  shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-2 relative ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Projects</p>
            <div className="w-full h-[0.9px] mb-14 dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          
          <ProjectCard
            tittle="eCommerce Web Application"
            description="Implement a transformative eCommerce platform using technologies such as Node.js, TypeScript, React, Git, and SQL"
            image="/eCcmmerceLogo.jpeg"
            link="https://github.com/AndresBlade/my-commerce"
          />

          <ProjectCard
            tittle="Real-Time Chat Application"
            description="Developed a real-time chat application integrated Next.js, TypeScript, Socket.IO, Git, and Redis. "
            image="/chat.png"
            link="https://github.com/Torpass/realtime-chat-application"
          />
        </div>


        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg min-h-[50px] col-span-2  relative">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Get in touch</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>


          <div className="mt-14 mb-4">
            <div className="flex justify-center gap-x-2 px-2">

              <SocialIcon
              link={"https://www.linkedin.com/in/pastor-jim%C3%A9nez-887798212/"}
              content={"Linkedin"}
              RiIcon={ImLinkedin}
              />

              <SocialIcon
              link={"https://github.com/Torpass"}
              content={"Github"}
              RiIcon={GrGithub}
              />

                <SocialIcon
                link={"https://www.gmail.com"}
                content={"Gmail"}
                RiIcon={MdEmail}
                />
              
              
            </div>
          </div>
        </div>

        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 overflow-hidden relative shadow-xl rounded-lg min-h-[50px] col-span-2 row-span-3 md:row-span-2 ">
          <div className=" absolute w-full p-2 z-10">
            <div className="flex justify-between items-center ">
              <p className="text-xs">Latest Work</p>
              <p className="text-neutral-500 text-xs ">ECOMODA</p>
            </div>
            <div className="w-full h-[0.4px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>
          <a target="_blank" href="https://github.com/Torpass/ECOMODA_FINANCIAL_API">
            <Image
              width={900}
              height={300}
              className="h-full duration-300 hover:scale-110 transition-all ease-in-out object-cover"
              src={"/Ecomoda.jpeg"}
              alt="Ecomoda project"
            />
          </a>
        </div>
        <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg col-span-2  relative  overflow-hidden  ">
          <div className=" absolute w-full p-2 z-20">
            <p className="text-xs">Interented in</p>
            <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
          </div>

          {/* Gradient  */}
          <div className=" bg-gradient-to-b  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent   h-20 transition-all ease-in duration-200" />
          {/* gradient ends */}

          <div className=" overflow-y-auto h-[180px] overflow-hidden scrollbar-hide scroll-smooth relative ">
            {/* Starts */}
            <div className="flex gap-x-3 mt-14 px-2  ">
              <p className="dark:text-white  text-xs w-20 shrink-0  ">
                Since 2022
              </p>
              <div>
                <h4 className="text-xs font-bold">Software architecture</h4>
                <p className="text-[11px] text-neutral-500">Learning diseing patterns</p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="flex  gap-x-3 px-2 relative ">
              <p className="text-white  text-xs w-20 shrink-0  ">Since 2020</p>
              <div>
                <h4 className="text-xs font-bold">Finances</h4>
                <p className="text-[11px] text-neutral-500">Build a Startup here in Venezuela</p>
              </div>
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>

            <div className="px-2 my-3 ">
              <div className="w-full h-[0.9px] dark:bg-neutral-800  bg-neutral-400/40 " />
            </div>
          </div>
          {/* Gradient  */}
          <div className=" bg-gradient-to-t  w-full absolute z-10 from-white via-white dark:from-[#1E1E1E] dark:via-[#1E1E1E] to-transparent bottom-0   h-12 transition-all ease-in duration-200" />
          {/* gradient ends */}
        </div>
       
        
        <div className="  rounded-lg  grid grid-cols-2 gap-2 col-span-2 row-span-2 z-40">
          <motion.div
            drag
            dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
            dragElastic={1}
            className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg  h-44 p-2 relative "
          >
            <div className=" absolute w-full p-2 z-20">
              <p className="text-xs">Years of Experience</p>
              <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
            </div>
            <div className="mt-10  w-full flex justify-center items-center">
              <h1 className="text-8xl">2+</h1>
            </div>
          </motion.div>
          <div className="dark:bg-[#1E1E1E] bg-white border dark:border-neutral-600 border-neutral-400/60 shadow-xl rounded-lg h-44 p-2 relative z-40">
            <div>
              <div className=" absolute w-full p-2 z-20">
                <p className="text-xs">CV</p>
                <div className="w-full h-[0.9px] dark:bg-neutral-600 bg-neutral-400/60 mt-1 top-7  " />
              </div>
            </div>
            <div className="mt-24 w-full">
              <a href="https://drive.google.com/file/d/1E1EAedI761_jK_L8ajt7zVTIRZPWYcA-/view?usp=sharing" target="_blank">
                <button className="text-xs flex w-full items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40">
                  <span>View</span>
                  <PiArrowUpRight />
                </button>
              </a>
              <a href="/Pastor Jimenez CV.pdf" download>
                <button className="text-xs flex w-full mt-3 items-center justify-between border dark:border-neutral-600 border-neutral-400/60   rounded-full p-1 px-2 dark:bg-neutral-700/40">
                  <span>Download</span>
                  <PiArrowDownThin />
                </button>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
