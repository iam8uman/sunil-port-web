import About from "@/components/About/About";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Testimonials />
    </>
  );
}
