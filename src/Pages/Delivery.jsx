import React from "react";
import { Link } from "react-router-dom";

export default function Delivery() {
  return (
    <div className="bg-tertiary">
      <div className="container h-home w-full flex justify-center items-center flex-col">
        <i class="fa-solid fa-circle-check text-7xl text-green-500 mb-4"></i>
        <span className="text-xl text-secondary mb-4">
          your message was sent successfully
        </span>
        <Link to="/contact" className="text-secondary ">
          Go back
        </Link>
      </div>
    </div>
  );
}
