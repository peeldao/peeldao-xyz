import Image from "next/image";

export function Logo({ src }: { src: string }) {
  return (
    <Image
      className="inline-block h-14 w-14 rounded-full"
      src={src}
      alt="Juicebox project logo"
      width="56"
      height="56"
    />
  );
}
