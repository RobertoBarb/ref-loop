import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Image
          src="/loopai_Group_Logo_2022.avif"
          alt="Loop AI Group"
          width={200}
          height={60}
          className="h-12 w-auto object-contain md:h-16"
          priority
        />
      </div>
    </div>
  );
}
