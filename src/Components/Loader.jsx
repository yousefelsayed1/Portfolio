import React from "react";
import { Triangle } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="h-home flex items-center justify-center bg-tertiary flex-col gap-3 text-secondary">
      <Triangle
        visible={true}
        height="100"
        width="100"
        color="#804dee"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      ></Triangle>

      <p>Loading....</p>
    </div>
  );
}
