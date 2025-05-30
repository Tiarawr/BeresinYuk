import React from "react";
import { motion } from "framer-motion";


export default function donate() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen px-6 py-10"
    >
      <div className="min-h-screen bg-white flex flex-col justify-start items-center px-1 pt-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Support Our Work
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mb-10">
          This space was created for people who sometimes don’t know how to say
          what they feel. ...
        </p>

        <div className="flex flex-col md:flex-row gap-6">
          <a
            href="https://trakteer.id/namakamu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full shadow-md transition duration-200"
          >
            🍵 Trakteer
          </a>
          <a
            href="https://saweria.co/namakamu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-6 py-3 rounded-full shadow-md transition duration-200"
          >
            💛 Saweria
          </a>
        </div>

        <p className="text-sm text-gray-400 mt-8">
          Thank you for helping us help others ❤️
        </p>
      </div>
    </motion.div>
  );
}
