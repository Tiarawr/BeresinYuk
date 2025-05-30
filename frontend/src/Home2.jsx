import React from "react";

export default function Home2() {
  return (
    <div>
      <div className="min-h-screen bg-[#1b2228] flex flex-col md:flex-row items-center justify-between px-6 md:px-24 py-20 text-white font-['Poppins']">
        {/* Kiri: Judul */}
        <div className="text-left mb-10 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-semibold leading-snug">
            You have <span className="text-pink-400 font-bold">secret</span>
            <br />
            message for your
            <br />
            beloved one?
          </h1>
        </div>

        {/* Kanan: Deskripsi */}
        <div className="text-sm md:text-base text-gray-300 max-w-md">
          <p>
            You don’t have to explain. You don’t have to reveal. This space is
            yours — to whisper what you can’t say out loud.
          </p>
        </div>
      </div>
    </div>
  );
}
