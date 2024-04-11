"use client";

import About from "@/components/About/About";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials/Testimonials";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* <TracingBeam className="px-6"> */}
        <Hero />
        <About />
        <Testimonials />
      {/* </TracingBeam> */}
    </>
  );
}
