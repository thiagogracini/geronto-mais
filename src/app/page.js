import { ContainerGrid } from "../components/container";
import { Hero } from "@components/hero";
import { TreatmentCard } from "../components/treatment-card";
import { TestimonialCard } from "@components/testimonial-card";
import Alzheimer from "@assets/alzheimer.png";
import { Treatments } from "@components/treatments";
import { Testimonial } from "@components/testimonial";
import { About } from "@components/about";

export default function Page() {
  return (
    <>
      <Hero />
      <Treatments />
      <Testimonial />
      <About />
    </>
  );
}
