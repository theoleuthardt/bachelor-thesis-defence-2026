import type { LogoProps } from "../types";

export default function Logo({
  src,
  alt,
  position = "top-left",
  width = 150,
}: LogoProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`slide-logo slide-logo-${position}`}
      style={{ width: `${width}px`, height: "auto" }}
      draggable={false}
    />
  );
}
