import React from "react";

function Work({ position, company, location, type, duration }) {
  return (
    <article className="pt-8 border-b-2 pb-5 border-opacity-20">
      <div className="flex justify-between items-center">
        <h1 className="text-secondary md:text-lg lg:text-xl">{position}</h1>
        <div className="btn bg-greenbg text-green-text text-xs inline-block rounded-3xl px-3 py-1 min-w-fit">
          {type}
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center pr-5 md:mb-0 mb-3">
            <i className="fa-solid fa-building text-secondary mr-1"></i>
            <p className="text-secondary text-xs md:text-sm font-light pl-1">
              {company}
            </p>
          </div>
          <div className="flex items-center">
            <i className="fa-solid fa-location-dot text-secondary mr-1"></i>
            <p className="text-secondary text-xs md:text-sm font-light pl-1">
              {location}
            </p>
          </div>
        </div>
        <p className="text-secondary text-xs md:text-sm font-light pl-1 min-w-fit">
          {duration}
        </p>
      </div>
    </article>
  );
}

export default Work;
