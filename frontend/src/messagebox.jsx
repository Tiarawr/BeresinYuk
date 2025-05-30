import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MessageBox() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const isTooLong = message.length > 255;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.length > 255) {
      alert("Message cannot exceed 255 characters.");
      return;
    }
    else {
      // Here you would typically send the message to your backend
      console.log("Message sent:", { from, to, message });
      navigate("/post"); // Redirect to the post page after submission
    }
  };
  return (
    <div className="flex flex-col justify-start items-center h-screen bg-white text-center px-4 pt-30">
        <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Send your messages</div>
        <div className="text-gray-600 text-lg max-w-2xl mb-10">
        We know that some messages carry pieces of your heart. That’s why we treat them
        with the care they deserve. Your identity stays hidden. Your words stay yours. Nothing is tracked, nothing is shared.
        Only the message is delivered — quietly, respectfully, privately.
        </div>


    <div className="w-full max-w-md bg-zinc-800 rounded-[55px] mt-10 mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* From */}
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="from"
            className="text-white text-2xl font-semibold font-['Poppins']"
          >
            From:
          </label>
          <input
            id="from"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            type="text"
            placeholder="Your name"
            className="
              w-full h-12
              bg-zinc-300 rounded-[50px]
              px-4
              text-black text-lg font-['Poppins']
              placeholder-zinc-500
              outline-none
            "
          />
        </div>

        {/* To */}
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="to"
            className="text-white text-2xl font-semibold font-['Poppins']"
          >
            To:
          </label>
          <input
            id="to"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            type="text"
            placeholder="For whom is this message?"
            className="
              w-full h-12
              bg-zinc-300 rounded-[50px]
              px-4
              text-black text-lg font-['Poppins']
              placeholder-zinc-500
              outline-none
            "
          />
        </div>

        {/* Message */}
        <div className="flex flex-col space-y-1">
          <label
            htmlFor="message"
            className="text-white text-2xl font-semibold font-['Poppins']"
          >
            Message:
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            rows={6}
            className="
              w-full
              bg-zinc-300 rounded-[40px]
              px-4 py-3
              text-black text-base font-['Poppins']
              placeholder-zinc-500 placeholder:text-lg
              outline-none
              resize-none
            "
          />
        </div>

        {/* Character count & submit */}
    <div className="flex items-center justify-between">
      <span
        className={`
          text-base font-normal font-['Poppins']
          ${isTooLong ? "text-red-500" : "text-neutral-400"}
        `}
      >
        {message.length}/255
      </span>
        </div>
      </form>
    </div>
                    <button
            type="submit"
            className="
            btn btn-wide
             mt-15 items-center
            
              bg-zinc-800 text-white
              px-5 py-2 rounded-full
              text-base font-semibold font-['Poppins']
              hover:bg-zinc-700 transition-colors
            "
          >
            Send the Message
          </button>
    </div>
  );
}