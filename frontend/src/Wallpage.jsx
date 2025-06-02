import React from "react";

export default function wallpage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <div className="relative px-4 pt-12">
        {/* Centered absolutely */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-[700px] h-[75px] bg-zinc-300 rounded-[63.5px] flex items-center px-6">
          <input
            type="text"
            placeholder="Search someone"
            className="w-full h-full bg-transparent outline-none text-zinc-600 text-2xl font-semibold font-['Poppins'] placeholder-zinc-500"
          />
        </div>

        {/* Keep the button wherever you like */}
        <button className="absolute right-4 top-12 w-[75px] h-[75px] bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors">
          <img src="chat.svg" alt="" className="w-[30px] h-[30px]" />
        </button>
      </div>

      {/* GRID OF CARDS */}
      <div className="container mx-auto px-4 py-12 mt-34">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* repeat this Card component for however many you have */}
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div
              key={i}
              className="
                bg-white rounded-[55px] border-4 border-zinc-800
                flex flex-col p-8 space-y-6
              "
            >
              <div className="flex items-center space-x-4">
                <span className="text-zinc-800 text-4xl font-semibold font-['Poppins']">
                  From:
                </span>
                <span className="text-zinc-800 text-4xl font-semibold font-['Poppins']">
                  Someone
                </span>
              </div>
              <hr className="border-neutral-400" />
              <div className="flex items-center space-x-4">
                <span className="text-zinc-800 text-4xl font-semibold font-['Poppins']">
                  To:
                </span>
                <span className="text-zinc-800 text-4xl font-semibold font-['Poppins']">
                  Hermanita
                </span>
              </div>
              <hr className="border-neutral-400" />
              <div className="flex items-center space-x-4">
                <span className="text-black text-4xl font-semibold font-['Poppins']">
                  Message:
                </span>
              </div>
              <p className="text-black text-3xl font-semibold font-['Poppins'] text-justify">
                Mija… I hope you can hear my voice, even if only in your dreams.
                Every soul I claim, every fight I survive — it’s all for you.
                The world is cruel. They feared us, hunted us, used us. But you…
                you are pure.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
