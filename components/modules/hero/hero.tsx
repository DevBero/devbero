"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { AuroraText } from "@/components/ui/aurora-text";
import { ShinyButton } from "@/components/ui/shiny-button";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

const HeroSection = () => {
  // const scrollToProjects = () => {
  //   const el = document.getElementById("projects");
  //   if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  // };

  return (
    <section className="w-full min-h-screen flex items-center">
      <div className="mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 1.7 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm md:text-base"
            >
              {/* <span className="opacity-80">Not your typical</span>
              <span className="font-semibold">Software Engineer</span>
              <span className="opacity-80">— I ship full experiences.</span> */}
              <AnimatedShinyText>
                ✨ Not your typical Software Engineer
              </AnimatedShinyText>
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                className="inline-block"
              >
                Hi, i&apos;m <AuroraText>Berat</AuroraText> 👋🏼
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.5 }}
              className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl"
            >
              I design and build digital products end-to-end — from UX/UI and
              engineering to motion, photo, and video. If you want someone who
              turns ideas into polished experiences, you’re in the right place.”
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 2.7 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <ShinyButton>View my Projects</ShinyButton>

              <InteractiveHoverButton>
                Let&apos;s connect
              </InteractiveHoverButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
            className="relative"
          >
            <div className="relative mx-auto w-[280px] h-[360px] md:w-[360px] md:h-[460px] lg:w-[420px] lg:h-[520px] rounded-3xl overflow-hidden shadow-sm">
              <Image
                src="/berat-uzun.png"
                alt="Berat Uzun - Portfolio"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
