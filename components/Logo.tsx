export function Logo({ src }: { src: string }) {
  return (
    <img className="inline-block h-14 w-14 rounded-full" src={src} alt="" />
  );
}
