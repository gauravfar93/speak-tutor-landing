import { motion } from "framer-motion";

export default function SectionOne() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 w-full max-w-6xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Left Text Section */}
      <div className="md:w-1/2 space-y-24">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight text-[#121232]">
          Stay motivated and <br /> reach your goals
        </h1>
        <p className="text-gray-500 max-w-md leading-relaxed text-lg">
          Speak Tutor keeps you motivated and accountable to achieve your goals.
          Learning a language is better with someone by your side.
        </p>
      </div>

      {/* Right Card Section */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center relative">
        {/* Outer soft shadow layer (iPhone-like background) */}
        <div className="absolute top-0 left-13 bg-[#f7f8fc] w-[390px] h-[380px] rounded-[2rem] shadow-md -z-10"></div>

        {/* Foreground card */}
        <div className="bg-white shadow-xl rounded-[2rem] p-6 w-[360px] mt-10">
          {/* Small avatar (top left) */}
          <div className="flex items-center space-x-2 mb-5">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712108.png"
              alt="bot avatar"
              className="w-8 h-8 rounded-full bg-[#e6f0ff] p-1"
            />
          </div>

          {/* Two info boxes side by side */}
          <div className="flex gap-3 mb-4">
            <div className="bg-[#ff5c8d] text-white text-sm p-4 rounded-2xl flex-1 leading-snug">
              <p>♡</p>
              <p>You’re interested in traveling and exploring new cultures.</p>
            </div>
            <div className="bg-[#3164ff] text-white text-sm p-4 rounded-2xl flex-1 leading-snug">
              <p>
                We’ve created unique lessons and conversations based on your
                goals.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="mt-2 w-full bg-[#3164ff] text-white py-3 rounded-xl font-medium hover:bg-[#254ddb] transition">
            Get Started
          </button>
        </div>
      </div>
    </motion.div>
  );
}
