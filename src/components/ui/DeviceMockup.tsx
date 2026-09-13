import Image from "next/image";

const defaultPad = "#f4f5f7";

type DeviceMockupProps = {
  src: string;
  alt: string;
  device?: "laptop" | "mobile";
  /** Relleno alrededor de la captura (tone de los bordes de la imagen) */
  padColor?: string;
  size?: "default" | "large";
  priority?: boolean;
  className?: string;
};

export function DeviceMockup({
  src,
  alt,
  device = "laptop",
  padColor = defaultPad,
  size = "default",
  priority = false,
  className = "",
}: DeviceMockupProps) {
  const padStyle = { backgroundColor: padColor };

  if (device === "mobile") {
    return (
      <div
        className={`mx-auto w-[min(230px,82vw)] rounded-[2.25rem] border border-[var(--line)] bg-[#1a1d22] p-2.5 shadow-xl shadow-black/10 ${className}`}
      >
        <div className="mb-2 h-1.5 w-14 rounded-full bg-white/20" />
        <div
          className="relative h-[min(520px,62vh)] w-full overflow-hidden rounded-[1.8rem]"
          style={padStyle}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="230px"
            className="object-contain object-center p-1.5"
            priority={priority}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full overflow-hidden rounded-2xl border border-[var(--line)] bg-[#eceff3] p-2.5 sm:p-3 shadow-[0_24px_60px_-28px_rgba(20,24,31,0.35)] ${className}`}
    >
      <div className="mb-2.5 flex items-center gap-1.5 px-1">
        <span className="h-2.5 w-2.5 rounded-full bg-[#d5dae2]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d5dae2]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#d5dae2]" />
        <span className="ml-3 h-5 flex-1 rounded-md bg-white/70" />
      </div>
      <div
        className={`relative w-full overflow-hidden rounded-xl border border-[var(--line)]/80 aspect-[1024/606] ${
          size === "default" ? "max-h-[min(440px,52vh)] lg:max-h-[420px]" : "max-h-none"
        }`}
        style={padStyle}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 70vw"
          className="object-contain object-center"
          priority={priority}
        />
      </div>
    </div>
  );
}
