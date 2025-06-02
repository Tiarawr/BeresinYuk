import React from "react";
import { Link } from "react-router-dom";

export default function Message({ message, onClose }) {
  return (
    <div className="min-h-screen bg-white">
      <div className="justify-start text-center text-black text-8xl mt-8 font-semibold font-['Poppins']">
        Send your messages
      </div>
      <div className="mx-auto mt-4 max-w-[1022px] text-center text-black text-xl font-semibold font-['Poppins'] leading-relaxed">
        We know that some messages carry pieces of your heart. That’s why we
        treat them with the care they deserve. Your identity stays hidden. Your
        words stay yours. Nothing is tracked, nothing is shared. Only the
        message is delivered — quietly, respectfully, privately.
      </div>

      <div className="w-[893px] bg-zinc-800 rounded-[55px] mt-10 mx-auto p-8">
        <form className="space-y-8">
          {/* From */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="from"
              className="text-white text-4xl font-semibold font-['Poppins']"
            >
              From:
            </label>
            <input
              id="from"
              type="text"
              placeholder="Your name"
              className="
              w-full h-20
              bg-zinc-300 rounded-[78px]
              px-6
              text-black text-2xl font-['Poppins']
              placeholder-zinc-500
              outline-none
            "
            />
          </div>

          {/* To */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="to"
              className="text-white text-4xl font-semibold font-['Poppins']"
            >
              To:
            </label>
            <input
              id="to"
              type="text"
              placeholder="Who you want to send a message to"
              className="
              w-full h-20
              bg-zinc-300 rounded-[78px]
              px-6
              text-black text-2xl font-['Poppins']
              placeholder-zinc-500
              outline-none
            "
            />
          </div>

          {/* Message */}
          <div className="flex flex-col space-y-2">
            <label
              htmlFor="message"
              className="text-white text-4xl font-semibold font-['Poppins']"
            >
              Message:
            </label>
            <textarea
              id="message"
              placeholder="Write your message here..."
              rows={10}
              className="
              w-full
              bg-zinc-300 rounded-[50px]
              px-6 py-4
              text-black text-xl font-['Poppins']
              placeholder-zinc-500
              placeholder:text-2xl
              outline-none
              resize-none
            "
            />
          </div>

          {/* Character count & submit */}
          <div className="flex items-center justify-between">
            <span className="text-neutral-600 text-2xl font-normal font-['Poppins']">
              0/255
            </span>
            <button
              type="submit"
              className="
              bg-zinc-800 text-white
              px-6 py-3 rounded-full
              text-2xl font-semibold font-['Poppins']
              hover:bg-zinc-700 transition-colors
            "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
