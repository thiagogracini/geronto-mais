import { ContainerGrid } from "./container";
import Image from "next/image";
import Logo from "@assets/logo-oficial.svg";
import Link from "next/link";

export function Header() {
  return (
    <header className="bg-pink-sixth">
      <ContainerGrid className="flex items-center justify-between p-24">
        <Image className="w-80" src={Logo} alt="Logo da Geronto+" />
        <nav className="hidden text-gray-700 laptop:flex">
          <Link
            className="not-last:mr-24 hover:text-pink-second transition duration-300 ease-in-out"
            href="#tratamentos"
          >
            Tratamentos
          </Link>
          <Link
            className="not-last:mr-24 hover:text-pink-second transition duration-300 ease-in-out"
            href="#depoimentos"
          >
            Depoimentos
          </Link>
          <Link
            className="not-last:mr-24 hover:text-pink-second transition duration-300 ease-in-out"
            href="#sobre"
          >
            Sobre
          </Link>
        </nav>
        <Link
          href="https://wa.me/5511983429156?text=Olá, gostaria de agendar uma consulta de Fisioterapia Domiciliar, poderia me falar um pouco mais sobre como funcionam as sessões? Desde já obrigado!"
          target="_blank"
          className="flex items-center justify-center w-175 desktop:w-250 h-50 rounded-xl bg-pink-first text-white hover:bg-pink-second transition duration-300 ease-in-out"
        >
          Agendar Consulta
        </Link>
      </ContainerGrid>
    </header>
  );
}
