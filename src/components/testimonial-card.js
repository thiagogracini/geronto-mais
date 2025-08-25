import Image from "next/image";
import GoogleLogo from "@assets/google-logo.png";
import Stars from "@assets/stars.png";

export function TestimonialCard({ name, firstLetter, years, text, color }) {
  return (
    <div className="bg-white w-full max-w-635 tablet:h-439 p-24 tablet:p-48 border border-solid rounded-2xl border-gray-600 shadow-md">
      <div className="flex pb-37">
        <div
          className={`flex items-center justify-center w-full max-w-61 tablet:max-w-81 h-61 tablet:h-81 mr-24 tablet:mr-48 ${color} text-white text-4xl font-bold rounded-full`}
        >
          <p>{firstLetter}</p>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h3 className="text-[#618EFF] font-bold text-base tablet:text-2xl">
              {name}
            </h3>
            <Image
              className="w-21 tablet:w-42"
              src={GoogleLogo}
              alt="Logo do Google"
            />
          </div>
          <div className="flex">
            <Image
              className="mr-16 w-80 h-23 tablet:w-160"
              src={Stars}
              alt="Estrelas de avaliação"
            />
            <p className="text-gray-400 text-sm tablet:text-base">
              {years} ago
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm tablet:text-base text-gray-900">{text}</p>
      </div>
    </div>
  );
}
