import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const testimonials = [
    {
      img: 'https://cruip-tutorials.vercel.app/fancy-testimonials-slider/testimonial-01.jpg',
      quote: "This platform has revolutionized our workflow. The intuitive design and user-friendly interface have made it incredibly easy to onboard new team members.",
      name: 'willia J',
      role: 'Acme LTD'
    },
    {
      img: 'https://cruip-tutorials.vercel.app/fancy-testimonials-slider/testimonial-02.jpg',
      quote: "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
      name: 'danie J',
      role: 'Acme LTD'
    },
    {
      img: 'https://cruip-tutorials.vercel.app/fancy-testimonials-slider/testimonial-03.jpg',
      quote: "so easy to use and the support is amazing. I feel like I have a team of people ready to help me at any time.",
      name: 'Jessie J',
      role: 'Acme LTD'
    }
    // ... other testimonials
  ];

  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((active + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [active]);

  return (
    // <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <h3 
              className="mb-8 text-center text-3xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-4xl"
              style={{ backgroundImage:"linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)" }}
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
What people say about us
           </h3>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl mx-auto text-center">
            <div className="relative h-32">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
                <div className="h-32">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} style={{ display: active === index ? 'block' : 'none' }}>
                      <img className="relative top-11 left-1/2 -translate-x-1/2 rounded-full" src={testimonial.img} width="56" height="56" alt={testimonial.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mb-9">
              <div className="relative flex flex-col transition-all duration-150 delay-300 ease-in-out">
                {testimonials.map((testimonial, index) => (
                  <div key={index} style={{ display: active === index ? 'block' : 'none' }}>
                    <div className="text-2xl font-bold text-white text-slate-900 before:content-['\201C'] after:content-['\201D']">{testimonial.quote}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap justify-center -m-1.5">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${active === index ? 'bg-indigo-500 text-white shadow-indigo-950/10' : 'bg-white hover:bg-indigo-100 text-slate-900'}`}
                  onClick={() => setActive(index)}
                >
                  <span>{testimonial.name}</span> <span className={active === index ? 'text-indigo-200' : 'text-slate-300'}>-</span> <span>{testimonial.role}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    // </main>
  );
};

export default Testimonial;
