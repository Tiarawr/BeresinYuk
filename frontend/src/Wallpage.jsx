import React, { useEffect, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Wallpage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const currentPage = parseInt(searchParams.get("page") || "1");
  const itemsPerPage = 20;

  // Sample data - replace with your actual data
  const [allMessages] = useState(() => {
    // Generate 50 sample messages for demonstration
    return Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      from: `Person ${i + 1}`,
      to: "Hermanita",
      message:
        "Mija… I hope you can hear my voice, even if only in your dreams. Every soul I claim, every fight I survive — it's all for you. The world is cruel. They feared us, hunted us, used us. But you… you are pure.",
    }));
  });

  // Calculate pagination
  const totalPages = Math.ceil(allMessages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMessages = allMessages.slice(startIndex, endIndex);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      navigate(`/feed?page=${newPage}`);
    }
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisiblePages = 5;

    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage < maxVisiblePages - 1) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    // Previous button
    if (currentPage > 1) {
      buttons.push(
        <button
          key="prev"
          onClick={() => handlePageChange(currentPage - 1)}
          className="px-3 py-2 mx-1 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
        >
          ←
        </button>
      );
    }

    // First page
    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => handlePageChange(1)}
          className="px-3 py-2 mx-1 bg-white border-2 border-zinc-800 text-zinc-800 rounded-lg hover:bg-zinc-100 transition-colors"
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(
          <span key="dots1" className="px-2 text-zinc-500">
            ...
          </span>
        );
      }
    }

    // Page numbers
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 mx-1 rounded-lg transition-colors ${
            i === currentPage
              ? "bg-zinc-800 text-white"
              : "bg-white border-2 border-zinc-800 text-zinc-800 hover:bg-zinc-100"
          }`}
        >
          {i}
        </button>
      );
    }

    // Last page
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(
          <span key="dots2" className="px-2 text-zinc-500">
            ...
          </span>
        );
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-2 mx-1 bg-white border-2 border-zinc-800 text-zinc-800 rounded-lg hover:bg-zinc-100 transition-colors"
        >
          {totalPages}
        </button>
      );
    }

    // Next button
    if (currentPage < totalPages) {
      buttons.push(
        <button
          key="next"
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-3 py-2 mx-1 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
        >
          →
        </button>
      );
    }

    return buttons;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen px-4 py-10 bg-white"
    >
      {/* Header */}
      <div className="relative px-4 pt-12">
        {/* Search bar */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-xl h-[60px] bg-zinc-300 rounded-full flex items-center px-4">
          <input
            type="text"
            placeholder="Search someone"
            className="w-full h-full bg-transparent outline-none text-zinc-600 text-base md:text-xl font-semibold font-['Poppins'] placeholder-zinc-500"
          />
        </div>

        {/* Send button */}
        <Link
          to="/send"
          className="absolute right-4 top-12 w-[50px] h-[50px] md:w-[75px] md:h-[75px] bg-zinc-800 rounded-full flex items-center justify-center hover:bg-zinc-700 transition-colors"
        >
          <img
            src="mail_24dp_FFF_FILL1_wght400_GRAD0_opsz24.svg"
            alt="send"
            className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
          />
        </Link>
      </div>

      {/* Page info */}
      <div className="container mx-auto px-4 pt-32 md:pt-40">
        <div className="flex justify-between items-center mb-6">
          <div className="text-zinc-600 font-['Poppins'] text-sm md:text-base">
            Showing {startIndex + 1}-{Math.min(endIndex, allMessages.length)} of{" "}
            {allMessages.length} messages
          </div>
          <div className="text-zinc-600 font-['Poppins'] text-sm md:text-base">
            Page {currentPage} of {totalPages}
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
          {currentMessages.map((message, i) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="bg-white rounded-3xl border-4 border-zinc-800 flex flex-col p-6 md:p-8 space-y-4 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center space-x-2">
                <span className="text-zinc-800 text-lg md:text-2xl font-semibold font-['Poppins']">
                  From:
                </span>
                <span className="text-zinc-800 text-lg md:text-2xl font-semibold font-['Poppins']">
                  {message.from}
                </span>
              </div>
              <hr className="border-neutral-300" />
              <div className="flex items-center space-x-2">
                <span className="text-zinc-800 text-lg md:text-2xl font-semibold font-['Poppins']">
                  To:
                </span>
                <span className="text-zinc-800 text-lg md:text-2xl font-semibold font-['Poppins']">
                  {message.to}
                </span>
              </div>
              <hr className="border-neutral-300" />
              <div>
                <span className="text-black text-lg md:text-2xl font-semibold font-['Poppins']">
                  Message:
                </span>
                <p className="text-black text-base md:text-xl font-normal font-['Poppins'] text-justify mt-2">
                  {message.message}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 pb-10">
            <div className="flex items-center bg-white rounded-2xl border-2 border-zinc-800 p-2">
              {renderPaginationButtons()}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
