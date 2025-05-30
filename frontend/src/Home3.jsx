import React from "react";

export default function Home3() {
  return (
    <div>
      <div className="min-h-screen flex flex-col justify-center items-center bg-white px-1 py-12">
        <div className="flex flex-col md:flex-row items-center max-w-5xl w-full">
          {/* Gambar */}
          <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
            <img
              src="Group.svg"
              alt="Bear Hug Illustration"
              className="w-72 md:w-96 object-contain"
            />
          </div>
          {/* Teks */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Don’t worry, we’re here for you
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              We know — sometimes your heart needs to speak, but your lips stay
              quiet. Sometimes, you carry thoughts too heavy to say out loud,
              and feelings too fragile to be exposed. You don’t want the whole
              world to know. You don’t even want them to know.
              <br />
              <br />
              You just want to let it out — somewhere safe, somewhere silent,
              somewhere secret. That’s what this space is for.
              <br />
              <br />
              No names. No pressure. No judgment. Just a place where your truth
              can exist without fear. Whether it’s love you couldn’t confess,
              pain you couldn’t share, or words you were never allowed to say —
              you can say them here.
              <br />
              <br />
              We’re not here to fix you. We’re just here to listen. So go ahead.
              Whisper what you’ve been holding in. This space is yours — always.
            </p>
          </div>
        </div>

        {/* Tombol */}
        <div className="mt-12">
          <button className="btn btn-outline bg-gray-900 btn btn-outline text-white px-4 py-5 rounded-full shadow-md hover:shadow-lg hover:bg-gray-800 transition duration-200">
            Send a Message
          </button>
        </div>
      </div>
    </div>
  );
}
