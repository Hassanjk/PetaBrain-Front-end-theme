import React from 'react';

const Card = ({ label, title, description, image, hoverImage }) => (
  <div className="group [background:linear-gradient(theme(colors.slate.900),theme(colors.slate.900))_padding-box,linear-gradient(45deg,theme(colors.slate.800),theme(colors.slate.600/.8),theme(colors.slate.800))_border-box] relative before:absolute before:inset-0 before:bg-[url('https://cruip-tutorials.vercel.app/cards-hover-effect/noise.png')] before:bg-[length:352px_382px] rounded-2xl border border-transparent">
    <div className="relative">
      <div className="px-6 py-5">
        <div className="font-nycd text-lg text-indigo-500 mb-1">{label}</div>
        <div className="text-lg font-bold text-slate-200 mb-1">{title}</div>
        <p className="text-sm text-slate-500">{description}</p>
      </div>
      <div className="relative group-hover:-translate-y-1 transition-transform duration-500 ease-in-out">
        <img className="group-hover:opacity-0 transition-opacity duration-500" src={image} width="350" height="240" alt="Card image" />
        <img className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" src={hoverImage} width="350" height="240" alt="Card image displaying on hover" aria-hidden="true" />
      </div>
    </div>
  </div>
);

export default Card;