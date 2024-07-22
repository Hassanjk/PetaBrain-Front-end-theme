export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import Feature  from "@/components/features-planet";
import Card  from "@/components/features-card";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import Zigzag from "@/components/zigzag";
import Testimonial from "@/public/images/testimonial-01.jpg";
import Testimonial02 from "@/public/images/testimonial-02.jpg";
import Testimonial03 from "@/public/images/testimonial-03.jpg";
import Pricing from "@/components/pricing";

export default function Home() {
  const testimonials = [
    { name: 'John Doe', role: 'CEO', quote: 'Great product!', img: Testimonial },
    { name: 'Jane Doe', role: 'CTO', quote: 'Amazing service!', img: Testimonial02 },
    { name: 'Janet Doe', role: 'CFO', quote: 'Loved it!', img: Testimonial03 },
    // add more testimonials as needed
];
  return (
    <>
      <Hero />
      <BusinessCategories />
      <Zigzag />
                {/* Section header */}
          {/* <!-- Sliding Text animation --> */}
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
                <div className=" text-3xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-4xl"
              style={{ backgroundImage:"linear-gradient(179.1deg, #FFFFFF 0.77%, rgba(255, 255, 255, 0) 182.09%)" }}
              data-aos="zoom-y-out"
              data-aos-delay={50}>Trusted by the most innovative minds in <span className="text-indigo-500 inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                    <ul className="block animate-text-slide-5 text-left leading-tight [&_li]:block">
                        <li>Finance</li>
                        <li>Tech</li>
                        <li>AI</li>
                        <li>Crypto</li>
                        <li>eCommerce</li>
                        <li aria-hidden="true">Finance</li>
                    </ul>
                </span></div>
            </div>

            </div>
                {/* <!-- End: Sliding Text animation --> */}
      <section className="grid md:grid-cols-3 gap-6 max-md:max-w-xs mx-auto" data-aos="zoom-y-out"> {/* Add this line */}
        <Card
          label="Label"
          title="Daily Reports"
          description="Building truly great products is both art and science. It's part intuition and part data."
          image="https://cruip-tutorials.vercel.app/cards-hover-effect//card-01.png"
          hoverImage="https://cruip-tutorials.vercel.app/cards-hover-effect//card-01-hover.png"
        />
        <Card
          label="Label"
          title="Daily Reports"
          description="Building truly great products is both art and science. It's part intuition and part data."
          image="https://cruip-tutorials.vercel.app/cards-hover-effect//card-02.png"
          hoverImage="https://cruip-tutorials.vercel.app/cards-hover-effect//card-02-hover.png"
        />
        <Card
          label="Label"
          title="Daily Reports"
          description="Building truly great products is both art and science. It's part intuition and part data."
          image="https://cruip-tutorials.vercel.app/cards-hover-effect//card-03.png"
          hoverImage="https://cruip-tutorials.vercel.app/cards-hover-effect//card-03-hover.png"
        />
      </section> {/* Add this line */}
      <Pricing />
   
    </>
  );
}
