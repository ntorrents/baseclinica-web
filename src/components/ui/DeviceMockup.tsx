import Image from "next/image";

const defaultPad = "#f1f5f9";

type DeviceMockupProps = {
  src: string;
  alt: string;
  device?: "laptop" | "mobile";
  /** Relleno alrededor de la captura (tone de los bordes de la imagen) */
  padColor?: string;
};

export function DeviceMockup({
  src,
  alt,
  device = "laptop",
  padColor = defaultPad,
}: DeviceMockupProps) {
  const padStyle = { backgroundColor: padColor };

  if (device === "mobile") {
    return (
      <div className="mx-auto w-[min(230px,82vw)] rounded-[2.25rem] border border-slate-200 bg-slate-900 p-2.5 shadow-xl shadow-teal-100/70">
        <div className="mb-2 h-1.5 w-14 rounded-full bg-slate-700" />
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
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-2xl border border-slate-200 bg-slate-100 p-3 shadow-2xl shadow-cyan-100/70">
      <div className="mb-2 flex gap-1.5 px-1">
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
      </div>
      <div
        className="relative aspect-[16/10] w-full max-h-[min(440px,48vh)] overflow-hidden rounded-xl border border-slate-200 lg:max-h-[400px]"
        style={padStyle}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 66vw"
          className="object-contain object-center p-2"
          priority={false}
        />
      </div>
    </div>
  );
}
