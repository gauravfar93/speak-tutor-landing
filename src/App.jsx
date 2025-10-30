import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Each section moves slightly up on scroll
  const y1 = useTransform(scrollYProgress, [0.33, 0.33], ["100%", "0%"]);
  const y2 = useTransform(scrollYProgress, [0.33, 0.66], ["100%", "0%"]);
  const y3 = useTransform(scrollYProgress, [0.66, 1], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="h-[300vh] relative bg-white">
      {/* Section One */}
      <motion.div
        style={{ y: y1 }}
        className="h-screen w-full sticky top-0 flex items-center justify-center bg-white"
      >
        <SectionOne />
      </motion.div>

      {/* Section Two */}
      <motion.div
        style={{ y: y2 }}
        className="h-screen w-full sticky top-0 flex items-center justify-center bg-white"
      >
        <SectionTwo />
      </motion.div>

      {/* Section Three */}
      <motion.div
        style={{ y: y3 }}
        className="h-screen w-full sticky top-0 flex items-center justify-center bg-white"
      >
        <SectionThree />
      </motion.div>
    </div>
  );
}

// ----------------------
