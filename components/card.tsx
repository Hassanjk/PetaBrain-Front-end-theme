import React from 'react';

const Card = ({ imgSrc, title, description }) => (
  <div className="relative h-full bg-slate-800 rounded-3xl p-px">
    <div className="relative h-full bg-slate-900 p-6 pb-8 rounded-[inherit] z-20 overflow-hidden">
      <div className="flex flex-col h-full items-center text-center">
        <div className="relative inline-flex">
          <img className="inline-flex" src={imgSrc} width="200" height="200" alt={title} />
        </div>
        <div className="grow mb-5">
          <h2 className="text-xl text-slate-200 font-bold mb-1">{title}</h2>
          <p className="text-sm text-slate-500">{description}</p>
        </div>
        <a className="inline-flex justify-center items-center whitespace-nowrap rounded-lg bg-slate-800 hover:bg-slate-900 border border-slate-700 px-3 py-1.5 text-sm font-medium text-slate-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href="#0">
          <span>Connect</span>
        </a>
      </div>
    </div>
  </div>
);

export default Card;
