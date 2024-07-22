"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "@/components/ui/footer";
import Cta from "@/components/cta";
import Testimonial from "@/components/testimonials";
import Faq from "@/components/ui/faq";
import Header from "@/components/header";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
 c}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      
      <Header />
      <main className="grow relative  bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1] glow-top-bottom">
      {children}
      <Testimonial />
      <Faq />
   
   
      <Cta />
      <Footer border={true} />
      </main>

    
    </>
  );
}
