import { ContainerGrid } from "./container";
import { TestimonialCard } from "./testimonial-card";

export function Testimonial() {
  return (
    <section className="pt-60 pb-60 bg-pink-first">
      <ContainerGrid className="pr-16 pl-16">
        <h2 className="text-white text-center pb-80 text-4xl font-bold">
          O QUE DIZEM OS PACIENTES . . .
        </h2>
        <div className="grid laptop:grid-cols-2 gap-36 justify-center">
          <TestimonialCard
            name="Amanda Pereira"
            firstLetter="A"
            years="1 year"
            text="Dra . Emily , quero te agradecer pelo excelente tratamento que meu esposo fez com você , agradecer pela empatia , carinho, paciência que você teve durante todo o tratamento é nítido seu amor pela profissão não tenho palavras para expressar o quanto você foi maravilhosa !!Tirou todas as nossas dúvidas , achei muito legal você explicando o porque de cada exercício , obrigada e parabéns pela profissional que você é !!Meu esposo está 100% graças ao seu trabalho !!"
            color="bg-[#0097A7]"
          />
          <TestimonialCard
            name="Gilda Amorim"
            firstLetter="G"
            years="2 years"
            text="Foi maravilhoso a fisioterapia que a Emily fez com meu pai. Super indico, ela é atenciosa, pontual e muito profissional."
            color="bg-[#512DA8]"
          />
        </div>
      </ContainerGrid>
    </section>
  );
}
