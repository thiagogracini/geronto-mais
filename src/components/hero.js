import Image from "next/image";
import Link from "next/link";
import { ContainerGrid } from "@components/container";
import Whatsapp from "@assets/whatsapp.svg";
import Instagram from "@assets/instagram.svg";
import Emily from "@assets/fisio-emily-hero.png";

export function Hero() {
  return (
    <section className="bg-pink-sixth">
      <ContainerGrid className="pt-60 pb-60 pl-16 pr-16 laptop:flex laptop:items-center">
        <div className="text-center mb-32 laptop:text-left laptop:pl-24">
          <h2 className="text-lg text-pink-second mb-8">
            DRA. EMILY DOS SANTOS GRACINI
          </h2>
          <h1 className="text-pink-fourth text-2xl font-bold mb-32">
            FISIOTERAPIA DOMICILIAR
          </h1>
          <p className="max-w-594 m-auto text-gray-900 text-base mb-16">
            Trabalho com reabilitação pós-operatório, pacientes com Alzheimer,
            Parkinson, Fibromialgia e também pacientes com risco de queda.
          </p>
          <p className="text-gray-900 text-base mb-32">
            Atendimento especializado em idosos.
          </p>
          <Link
            href="https://wa.me/5511983429156?text=Olá, gostaria de agendar uma consulta de Fisioterapia Domiciliar, poderia me falar um pouco mais sobre como funcionam as sessões? Desde já obrigado!"
            target="_blank"
            className="w-full max-w-410 m-auto laptop:ml-0 mb-32 flex items-center justify-center w-350 h-60 rounded-xl bg-pink-first text-white hover:bg-pink-second transition duration-300 ease-in-out"
          >
            Agendar Consulta
          </Link>
          <div className="flex justify-center laptop:max-w-410">
            <Link
              href="https://www.instagram.com/emilydosantos/"
              target="_blank"
            >
              <Image
                className="mr-16"
                src={Instagram}
                alt="Logo do Instagram"
              />
            </Link>
            <Link
              href="https://wa.me/5511983429156?text=Olá, gostaria de agendar uma consulta de Fisioterapia Domiciliar, poderia me falar um pouco mais sobre como funcionam as sessões? Desde já obrigado!"
              target="_blank"
            >
              <Image src={Whatsapp} alt="Logo do Whatsapp" />
            </Link>
          </div>
        </div>
        <Image
          className="w-332 m-auto laptop:w-492"
          src={Emily}
          alt="Foto da Fisioterapeuta"
        />
      </ContainerGrid>
    </section>
  );
}
