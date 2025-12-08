


// import { motion, useScroll, useTransform } from "motion/react";
// import { useRef } from "react";
// import React from "react";
// import HomeEvent from "../HomeEvent";
// import { ArrowRight, Sparkles } from "lucide-react";
// import HomeAbout from "./HomeAbout";
// import HomeGallery from "./HomeGallery";
// import ScrollSection from "./ScrollSection";
// // import AboutSliding from "./AboutSliding";

// export default function Hero() {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

//   return (
//     <div>
      
//     <section
//       id="home"
//       ref={ref}
//       className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28"
//     >
//       {/* 🔵 Glowing Background Blobs */}
//       <div className="pointer-events-none absolute inset-0 -z-10">
//         <div className="absolute -top-40 left-10 h-80 w-80 bg-ecell-primary/40 rounded-full blur-3xl" />
//         <div className="absolute top-20 right-0 h-96 w-96 bg-ecell-secondary/30 rounded-full blur-[110px]" />
//         <div className="absolute bottom-[-4rem] left-1/2 h-72 w-72 -translate-x-1/2 bg-ecell-accent/20 rounded-full blur-3xl" />
//       </div>

//       {/* 📝 Main Content */}
//       <motion.div style={{ opacity, y }} className="max-w-3xl text-center">
//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1, duration: 0.6 }}
//           className="uppercase tracking-[0.25em] text-ecell-secondary text-sm mb-4"
//         >
//           <Sparkles className="inline-block h-4 w-4 mr-1" />
//           Empower • Innovate • Build
//         </motion.p>

//         {/* 🌈 Gradient Heading */}
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="
//             text-4xl md:text-6xl font-extrabold 
//             bg-linear-to-r from-ecell-primary via-ecell-secondary to-ecell-accent 
//             bg-clip-text text-transparent leading-tight
//           "
//         >
//           Transforming Ideas Into Reality
//         </motion.h1>

//         {/* 💬 Subheading */}
//         <motion.p
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3, duration: 0.6 }}
//           className="text-gray-300 mt-4 max-w-xl mx-auto text-sm md:text-base"
//         >
//           E-Cell NIT Raipur fosters entrepreneurship by helping innovators
//           build, launch, and scale impactful ventures.
//         </motion.p>

//         {/* 🚀 Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.45, duration: 0.6 }}
//           className="mt-8 flex justify-center gap-4"
//         >
//           <button
//             className="
//               px-6 py-3 rounded-xl font-medium
//               bg-ecell-primary text-white
//               shadow-ecell-glow 
//               hover:opacity-90 transition
//               flex items-center gap-2
//             "
//           >
//             Get Started <ArrowRight size={18} />
//           </button>

//           <button
//             className="
//               px-6 py-3 rounded-xl font-medium border border-white/20
//               text-gray-200 hover:bg-white/10 transition
//             "
//           >
//             Explore Events
//           </button>
//         </motion.div>
//       </motion.div>
//     </section>
//     <HomeAbout/>
//     {/* <AboutSliding/> */}
//     <HomeEvent />
//     <HomeGallery/>
//     </div>
//   );
// }

import { 
  motion, 
  useScroll, 
  useTransform, 
  useVelocity, 
  useSpring 
} from "motion/react";
import { useRef } from "react";
import React from "react";
import HomeEvent from "../HomeEvent";
import { ArrowRight, Sparkles, Rocket, Lightbulb, LineChart, IndianRupee } from "lucide-react";
import HomeGallery from "./HomeGallery";
import HomeAbout from "./HomeAbout";

export default function Hero() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // HERO diminishing
  const heroOpacity = useTransform(scrollYProgress, [0, 0.9], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.88]);

  // PARALLAX SPEED ENGINE  
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, { damping: 45, stiffness: 120 });

  // Background blobs → normal movement
  const blobY = useTransform(smoothVelocity, [-2000, 2000], ["-6%", "6%"]);

  // Decorative objects → slower movement (deep) 
  const decoY = useTransform(smoothVelocity, [-2000, 2000], ["-3%", "3%"]);

  // Main heading → slightly slower
  const headingY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <div ref={containerRef}>

      {/* HERO SECTION */}
      <motion.section
        id="home"
        style={{ opacity: heroOpacity, y: heroY, scale: heroScale }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28"
      >
        {/* 🔵 Background Blobs (normal parallax) */}
        <motion.div style={{ y: blobY }} className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-40 left-10 h-80 w-80 bg-ecell-primary/40 rounded-full blur-3xl" />
          <div className="absolute top-20 right-0 h-96 w-96 bg-ecell-secondary/30 rounded-full blur-[110px]" />
          <div className="absolute bottom-[-4rem] left-1/2 h-72 w-72 -translate-x-1/2 bg-ecell-accent/20 rounded-full blur-3xl" />
        </motion.div>

        {/* ⭐ ECELL DECORATIVE FLOATING OBJECTS */}
        <motion.div
          style={{ y: decoY }}
          className="absolute inset-0 pointer-events-none -z-[5]"
        >
          <Rocket className="absolute top-32 left-10 text-ecell-primary/60 h-12 w-12 animate-float-slow" />
          <Lightbulb className="absolute bottom-24 left-1/4 text-yellow-400/70 h-10 w-10 animate-float" />
          <LineChart className="absolute top-44 right-16 text-ecell-secondary/60 h-12 w-12 animate-float-fast" />
          <IndianRupee className="absolute bottom-32 right-1/4 text-green-400/70 h-10 w-10 animate-float-slow" />
        </motion.div>

        {/* 📝 MAIN HERO CONTENT */}
        <div className="max-w-4xl text-center">
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="uppercase tracking-[0.25em] text-ecell-secondary text-sm mb-4"
          >
            <Sparkles className="inline-block h-4 w-4 mr-1" />
            Empower • Innovate • Build
          </motion.p>

          {/* 🌈 Main Heading (moves slower for depth) */}
          <motion.h1
            style={{ y: headingY }}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="
              text-4xl md:text-6xl font-extrabold 
              bg-linear-to-r from-ecell-primary via-ecell-secondary to-ecell-accent 
              bg-clip-text text-transparent leading-tight
            "
          >
            Transforming Ideas Into Reality
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            className="text-gray-300 mt-4 max-w-xl mx-auto text-sm md:text-base"
          >
            E-Cell NIT Raipur fosters entrepreneurship by helping innovators
            build, launch, and scale impactful ventures.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-8 flex justify-center gap-4"
          >
            <button className="
              px-6 py-3 rounded-xl font-medium
              bg-ecell-primary text-white shadow-ecell-glow 
              hover:opacity-90 transition flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </button>

            <button className="
              px-6 py-3 rounded-xl font-medium border border-white/20
              text-gray-200 hover:bg-white/10 transition
            ">
              Explore Events
            </button>
          </motion.div>
        </div>
      </motion.section>

      {/* ⭐ ABOUT SECTION (foreground parallax – moves faster) */}
      <motion.div
        style={{
          y: useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]),
        }}
        className="relative z-20"
      >
        {/* Fast-moving decorative ECELL elements */}
        <div className="absolute top-10 left-10 opacity-30">
          <Rocket className="h-8 w-8 text-ecell-primary animate-float-fast" />
        </div>

        <div className="absolute bottom-10 right-10 opacity-30">
          <Lightbulb className="h-10 w-10 text-yellow-400 animate-float-fast" />
        </div>

        <HomeAbout />
      </motion.div>

      <HomeEvent />
      <HomeGallery />
    </div>
  );
}
