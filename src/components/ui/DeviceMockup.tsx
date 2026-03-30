import Image from "next/image";

type DeviceMockupProps = {
  src: string;
  alt: string;
  device?: "laptop" | "mobile";
};

export function DeviceMockup({ src, alt, device = "laptop" }: DeviceMockupProps) {
  if (device === "mobile") {
    return (
      <div className="mx-auto w-[230px] rounded-[2.25rem] border border-slate-200 bg-slate-900 p-2.5 shadow-xl shadow-teal-100/70">
        <div className="mb-2 h-1.5 w-14 rounded-full bg-slate-700" />
        <div className="overflow-hidden rounded-[1.8rem] bg-slate-100">
          <Image
            src={src}
            alt={alt}
            width={460}
            height={980}
            className="h-auto w-full object-cover"
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
      <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <Image
          src={src}
          alt={alt}
          width={1600}
          height={900}
          className="h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}
