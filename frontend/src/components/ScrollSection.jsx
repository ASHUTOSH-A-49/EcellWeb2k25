import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ScrollSection({ children, bg }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"], 
  });

  // STRONG TAKEOVER: move up aggressively
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-120%"]);

  return (
    <div ref={ref} className="relative h-[160dvh]"> 
      {/* Taller wrapper ensures smooth takeover */}
      
      <motion.div
        style={{ y }}
        className={`sticky top-0 h-dvh min-h-dvh flex items-center justify-center px-6 md:px-12 ${bg}`}
      >
        <div className="w-full max-w-6xl mx-auto">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
