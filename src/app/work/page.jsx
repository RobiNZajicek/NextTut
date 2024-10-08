'use client'
import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip"
import Link from "next/link"
import Image from "next/image"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import One from '../../assets/n.png'
import Two from '../../assets/Vit.png'
import Three from '../../assets/Vit2.png'
import WorkSliderBtn from "@/components/WorkSliderBtn"

const projects = [
  {
    num: '01',
    category: 'front-end',
    title: 'project 1',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolorum excepturi fugiat debitis consequuntur aliquid dolor tempora blanditiis culpa, iste eaque officia rerum laboriosam repudiandae, natus asperiores obcaecati reiciendis. Dicta.',
    stack: [
      { name: 'Html 5' },
      { name: 'Css 3' },
      { name: 'Javascript' },
    ],
    image: One,
    live: '',
    github: ''
  },
  {
    num: '02',
    category: 'front-end',
    title: 'project 2',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolorum excepturi fugiat debitis consequuntur aliquid dolor tempora blanditiis culpa, iste eaque officia rerum laboriosam repudiandae, natus asperiores obcaecati reiciendis. Dicta.',
    stack: [
      { name: 'Next.js' },
      { name: 'Tailwind' },
    ],
    image: Two,
    live: '',
    github: ''
  },
  {
    num: '03',
    category: 'front-end',
    title: 'project 3',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum dolorum excepturi fugiat debitis consequuntur aliquid dolor tempora blanditiis culpa, iste eaque officia rerum laboriosam repudiandae, natus asperiores obcaecati reiciendis. Dicta.',
    stack: [
      { name: 'React' },
      { name: 'Scss' },
    ],
    image: Three,
    live: '',
    github: ''
  },
]

const Work = () => {
  const [project, setProject] = useState(projects[0])

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Side: Text Content */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-1">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}{index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>github repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Swiper */}
          <div className="w-full xl:w-[50%] xl:order-2">
            <Swiper
              spaceBetween={0}  // Set spaceBetween to 0 to prevent movement between slides
              slidesPerView={1}
              centeredSlides={true}  // Ensures the current slide is centered
              className="xl:h-[520px] mb-12 flex flex-row"
              onSlideChange={handleSlideChange}
              grabCursor={true}  // Enables better slide interaction
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="w-full relative h-full">
                      <Image src={project.image} fill className="object-cover " alt="Project image" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtn btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all' containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Work
