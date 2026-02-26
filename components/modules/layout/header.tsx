"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Navigation } from "./nav";
import { ShimmerButton } from "@/components/ui/shimmer-button";

const Header = () => {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: 3, // ⏱️ change this delay time
        duration: 0.7,
        ease: "easeOut",
      }}
      className="flex items-center w-full justify-between max-w-7xl mx-auto h-24 fixed"
    >
      <div className="w-[100px] relative aspect-video">
        <Image alt="Berat Uzun - Software Engineer" src="/beyou.svg" fill />
      </div>

      <Navigation />

      <ShimmerButton>Download CV</ShimmerButton>
    </motion.header>
  );
};

export default Header;
