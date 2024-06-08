import React from "react";
import "./Scroller.css";
import { techScrollDetails } from "../../constants/Data";

export default function Scroller() {
  return (
    <div className="bg-primary">
      <div class="wrapper">
        {techScrollDetails.map((el) => (
          <div class={`item item${el.id}`}>
            <img src={el.icon} alt={el.name} className="w-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
