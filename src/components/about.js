import Image from "next/image";
import { ContainerGrid } from "./container";
import Emily from "@assets/fisio-emily-coracao.png";

export function About() {
  return (
    <section className="bg-pink-fifth pt-60 pb-60">
      <ContainerGrid className="laptop:flex laptop:flex-row-reverse laptop:items-center laptop:text-left w-full pr-16 pl-16 text-center laptop:">
        <div>
          <h2 className="font-bold text-4xl text-pink-fourth mb-32">SOBRE</h2>
          <p className="mb-24 w-full laptop:max-w-656 text-lg text-gray-900">
            Graduada em Fisioterapia pela Faculdade de Medicina do ABC. Pós
            Graduada em gerontologia pela Physio Cursos.​   
          </p>
          <p className="w-full laptop:max-w-656 text-lg text-gray-900">
            <strong>Atendimento domiciliar</strong> desde 2021, atendimento
            especializado em síndromes geriátricas, principalmente 
            <strong>AVC</strong> e <strong>Alzheimer</strong>,{" "}
            <strong>prevenção de quedas e terapias manuais</strong>. 
          </p>
        </div>
        <Image
          className="w-full max-w-600 m-auto"
          src={Emily}
          alt="Foto da Dra. Emily"
        />
      </ContainerGrid>
    </section>
  );
}
