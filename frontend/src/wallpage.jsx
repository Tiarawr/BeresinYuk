import React from 'react'

export default function wallpage() {
  return (
<div className="h-full w-full min-h-screen relative overflow-hidden bg-white">
  {/* Search Bar */}
  <div className="w-[700px] h-[75px] absolute top-[50px] left-[400px] bg-zinc-300 rounded-[63.5px] flex items-center px-6">
    <input
      type="text"
      placeholder="Search someone"
      className="w-full h-full bg-transparent outline-none text-zinc-600 text-2xl font-semibold font-['Poppins'] placeholder-zinc-500"
    />
  </div>

  {/* Clickable Button */}
  <button
    className="w-[75px] h-[75px] absolute right-[50px] top-[50px] bg-zinc-800 rounded-full text-white font-semibold hover:bg-zinc-700 transition-colors"
  >
    
  </button>
</div>
  )
}
