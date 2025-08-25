import Image from "next/image";

export function TreatmentCard({ thumb, thumb_description, name, text }) {
  return (
    <div className="flex border border-solid border-gray-400 rounded-xl w-full max-w-350 tablet:max-w-635 h-192 p-14 shadow-md">
      <div className="w-full max-w-164 min-w-100 mr-16 flex items-center">
        <Image
          className="w-100 h-100 tablet:w-164 tablet:h-164"
          src={thumb}
          alt={thumb_description}
        />
      </div>
      <div>
        <h3 className="text-pink-fourth font-bold text-sm pb-5 tablet:text-lg">
          {name}
        </h3>
        <p className="text-gray-900 text-sm tablet:text-lg">{text}</p>
      </div>
    </div>
  );
}
