import { ContainerGrid } from "@components/container";
import Link from "next/link";
import { TreatmentCard } from "./treatment-card";
import Alzheimer from "@assets/alzheimer.png";
import Miofascial from "@assets/miofascial.png";
import Pilates from "@assets/pilates.png";
import Aga from "@assets/aga.png";

export function Treatments() {
  return (
    <section className="pt-60 pb-60">
      <ContainerGrid className="pl-16 pr-16">
        <h2 className="text-center mb-34 text-pink-fourth text-4xl font-bold">
          Tratamentos
        </h2>
        <div className="flex flex-col laptop:grid laptop:grid-cols-2 items-center gap-32 mb-80">
          <TreatmentCard
            thumb={Alzheimer}
            thumb_description="Imagem representando Alzheimer"
            name="Síndromes Geriátricas"
            text="Prevenção de quedas, tratamento de Alzheimer, Parkinson, AVC entre outras..."
          />
          <TreatmentCard
            thumb={Miofascial}
            thumb_description="Imagem representando a liberação miofascial"
            name="Liberação Miofascial"
            text="Técnica que reduz dores musculares, melhora a mobilidade e ajuda na recuperação de lesões."
          />
          <TreatmentCard
            thumb={Pilates}
            thumb_description="Imagem representando o Pilates"
            name="Pilates"
            text="Exercícios personalizados que fortalecem músculos, melhoram a postura e aumentam a flexibilidade, promovendo saúde e bem-estar."
          />
          <TreatmentCard
            thumb={Aga}
            thumb_description="Imagem representando a Avaliação geriátrica Ampla"
            name="Avaliação Geriátrica Ampla - AGA"
            text="A Avaliação Geriátrica Ampla analisa a saúde do idoso, abrangendo aspectos físicos, cognitivos, emocionais e sociais."
          />
        </div>
        <Link
          href="https://wa.me/5511983429156?text=Olá, gostaria de agendar uma consulta de Fisioterapia Domiciliar, poderia me falar um pouco mais sobre como funcionam as sessões? Desde já obrigado!"
          target="_blank"
          className="w-full max-w-410 m-auto mb-32 flex items-center justify-center w-350 h-60 rounded-xl bg-pink-first text-white hover:bg-pink-second transition duration-300 ease-in-out"
        >
          Agendar Consulta
        </Link>
      </ContainerGrid>
    </section>
  );
}
