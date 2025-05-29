import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="h-full w-full min-h-screen relative overflow-hidden bg-white">
      {/* Send Message Button - Bigger and Responsive */}
      <button className="fixed top-4 right-4 sm:top-6 sm:right-6 z-10 bg-gray-800 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full hover:bg-gray-900 font-medium transition-colors">
        <div className="text-white text-sm sm:text-xl font-normal font-['Poppins']">
          Send a Message
        </div>
      </button>

      {/* Mobile Layout */}
      <div className="block lg:hidden px-4 py-8">
        {/* Image for Mobile */}
        <div className="flex justify-center mb-8 mt-16">
          <img src="Frame 21.svg" alt="gambar" className="w-full max-w-xs" />
        </div>

        {/* Text for Mobile */}
        <div className="text-center mb-8">
          <div className="text-black text-3xl sm:text-4xl font-semibold font-['Poppins'] leading-tight">
            Hey,{" "}
            <span style={{ color: "#000", paddingRight: "5px" }}>
              <Typewriter
                words={["How was your day?"]}
                loop={1}
                cursor
                typeSpeed={100}
                deleteSpeed={90}
                delaySpeed={1000}
              />
            </span>
          </div>
        </div>

        {/* GitHub Section for Mobile */}
        <div className="text-center">
          <div className="text-black text-sm font-bold font-['Poppins'] mb-3">
            powered by:
          </div>

          <div className="space-y-2 flex flex-col items-center">
            {/* GitHub Link 1 */}
            <div className="flex items-center justify-center gap-3">
              <img src="github.svg" alt="github" className="w-6 h-6" />
              <span className="text-black text-sm font-semibold font-['Poppins']">
                Github.com/Tiarawr
              </span>
            </div>

            {/* GitHub Link 2 */}
            <div className="flex items-center justify-center gap-3">
              <img src="github.svg" alt="github" className="w-6 h-6" />
              <span className="text-black text-sm font-semibold font-['Poppins']">
                Github.com/Cokecaine
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        {/* Image - Desktop */}
        <div className="absolute left-9 lg:left-60 top-32 lg:top-40">
          <img
            src="Frame 21.svg"
            alt="gambar"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>

        {/* Hey Text - Desktop */}
        <div className="absolute top-48 sm:top-56 md:top-64 lg:top-72 right-4 sm:right-8 lg:right-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl text-right">
          <div className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-semibold font-['Poppins'] leading-tight">
            Hey,{" "}
            <span style={{ color: "#000", paddingRight: "5px" }}>
              <Typewriter
                words={["How was your day?"]}
                loop={1}
                cursor
                typeSpeed={100}
                deleteSpeed={90}
                delaySpeed={1000}
              />
            </span>
          </div>

          {/* GitHub Section - Desktop */}
          <div className="mt-6 sm:mt-8 lg:mt-10 text-left">
            <div className="text-black text-sm font-bold font-['Poppins'] mb-3">
              powered by:
            </div>

            <div className="space-y-2">
              {/* GitHub Link 1 */}
              <div className="flex items-center justify-start gap-3">
                <img
                  src="github.svg"
                  alt="github"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
                <span className="text-black text-sm font-semibold font-['Poppins']">
                  Github.com/Tiarawr
                </span>
              </div>

              {/* GitHub Link 2 */}
              <div className="flex items-center justify-start gap-3">
                <img
                  src="github.svg"
                  alt="github"
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
                <span className="text-black text-sm font-semibold font-['Poppins']">
                  Github.com/Cokecaine
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
