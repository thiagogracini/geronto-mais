import Image from "next/image";
import { ContainerGrid } from "./container";
import Logo from "@assets/logo-oficial.svg";

export function Footer() {
  return (
    <footer className="pt-48 pb-48">
      <ContainerGrid className="tablet:flex tablet:justify-between w-full pl-16 pr-16 text-center text-lg text-gray-900">
        <Image
          className="m-auto tablet:m-0 mb-42"
          src={Logo}
          alt="Logo da Geronto+"
        />
        <div className="tablet:m-auto">
          <p className="mb-8">Santo André - SP</p>
          <p className="mb-8">
            All rights reserved by Emily dos Santos Gracini
          </p>
          <p className="text-gray-700">Made with ❤️ by Thiago Gracini</p>
        </div>
      </ContainerGrid>
    </footer>
  );
}
