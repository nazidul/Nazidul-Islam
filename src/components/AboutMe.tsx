import React from "react";
import SectionHeading from "./Shared/SectionHeading";
import { PiDotsNine } from "react-icons/pi";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="about-me-section relative overflow-hidden bg-neutral py-12 text-neutral-content lg:py-16"
    >
      <div className="container-center relative z-10 min-h-fit">
        <div className="left-and-right-wrapper items-center justify-between py-6 lg:grid lg:grid-cols-2 lg:gap-5 lg:py-0">
          <div className="left-content image-wrapper hidden lg:block">
            <Image
              src="/ilustrations/using-laptop-two.webp"
              alt="Computer Illustration"
              height={500}
              width={500}
              className="h-[350px] w-[350px] rounded-full object-cover"
            />
          </div>

          <div className="right-content">
            <SectionHeading sectionHeadingProps={{ heading: "About Me" }} />
            <p className="mt-7">
            I am a natural learner and a developer working with some of the
most popular development tools mentioned above and beyond the boundaries.
I am a student for eternity because good study is half done.

Having passion in development has moved me to be a lifelong learner.
Addiction to development and modeling eye

catching designs and user-friendly products may make me a better

Developer. But what matter the most end of the day how the
society will progress through my work.
            </p>
          </div>
        </div>
        <div className="absolute -top-12 right-20 h-56 w-56 rounded-full bg-purple-600 opacity-20 blur-xl"></div>
      </div>

      <div className="bottom-right-dots-wrapper absolute -bottom-5 right-0 z-[1] flex items-center space-x-[-7px] text-4xl text-primary text-opacity-60">
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          {/* <PiDotsNine /> */}
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          {/* <PiDotsNine /> */}
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          {/* <PiDotsNine /> */}
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          {/* <PiDotsNine /> */}
        </div>
      </div>

      <div className="top-left-dots-wrapper absolute -top-5 left-0 z-[1] flex items-center space-x-[-7px] text-4xl text-primary text-opacity-60">
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          {/* <PiDotsNine /> */}
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          {/* <PiDotsNine /> */}
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          {/* <PiDotsNine /> */}
        </div>
        <div className="space-y-[-7px]">
          <PiDotsNine />
          <PiDotsNine />
          {/* <PiDotsNine /> */}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
