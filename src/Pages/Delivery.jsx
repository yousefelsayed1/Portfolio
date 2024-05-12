import React from "react";
import { Link } from "react-router-dom";

export default function Delivery() {
  return (
    <div className="bg-tertiary">
      <div className="container min-h-screen w-full flex justify-center items-center flex-col">
        <i class="fa-solid fa-circle-check text-7xl text-green-500 mb-4"></i>
        <span className="text-xl text-secondary text-center mb-10 font-primary">
          your message sent successfully
        </span>
        <Link
          to="/contact"
          className="text-white rounded-xl p-3 bg-[#604dee] md:text-lg font-semibold drop-shadow-md "
        >
          Go back
        </Link>
      </div>
    </div>
  );
}
