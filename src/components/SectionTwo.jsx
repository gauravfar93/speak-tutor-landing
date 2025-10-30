import { motion } from "framer-motion";

export default function SectionTwo() {
  return (
    <motion.div
      className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 w-full max-w-6xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
    >
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Talk about anything, <br /> anytime, anywhere
        </h1>
        <p className="text-gray-500 max-w-md">
          Speak Tutor is your on-the-go conversational partner. Practice
          speaking on any topic, anytime, anywhere.
        </p>
      </div>

      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="bg-white shadow-lg rounded-3xl p-6 w-[350px]">
          <h3 className="text-gray-400 text-sm mb-3">Create your own</h3>
          <div className="space-y-3">
            <div className="bg-gray-100 p-3 rounded-xl">👤 Tourist</div>
            <div className="bg-gray-100 p-3 rounded-xl">🤖 New friend</div>
            <div className="bg-gray-100 p-3 rounded-xl">
              🗺 Talking about the best places to grab dinner in San Francisco.
            </div>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl font-medium">
            Start chatting
          </button>
        </div>
      </div>
    </motion.div>
  );
}
