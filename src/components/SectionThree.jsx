import { motion } from "framer-motion";

export default function SectionThree() {
  return (
    <section className="w-full flex flex-col items-center">
      {/* Top Section */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 w-full max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-20">
            Build a relationship <br /> with your tutor
          </h1>
          <p className="text-gray-500 max-w-md leading-relaxed text-lg">
            Speak Tutor designs a personalized curriculum as unique as you are
            by getting to know you on a deep level.
          </p>
        </div>

        {/* Right Content (GIF or notification card) */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <div className="bg-[#f7f7fc] shadow-md rounded-3xl p-6 w-[350px]">
            <div className="bg-gray-100 p-4 rounded-xl">
              <p className="text-sm text-gray-700">
                📢 Hey Audrey, your trip to Mexico is in 6 days! Let’s practice
                some vocabulary for your trip!
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Middle Button Section */}
      <div className="mt-24 text-center">
        <button className="flex items-center gap-3 px-6 py-3 bg-white text-black rounded-full shadow-md hover:bg-[#25255a] hover:text-white transition duration-300 mx-auto">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="Jessica Park"
            className="w-8 h-8 rounded-full border border-gray-300"
          />
          <span className="font-medium">Jessica Park</span>
        </button>
        <p className="mt-6 text-black-500 text-4xl font-semi-bold max-w-3xl px-4">
          “The first time I used Speak Tutor, I couldn’t believe it wasn’t a
          real person. It feels like it understands my motivations at a deep
          level.”
        </p>
      </div>
    </section>
  );
}
