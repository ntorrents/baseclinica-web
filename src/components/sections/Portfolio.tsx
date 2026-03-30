import Image from "next/image";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { PortfolioCase } from "@/types/landing";

type PortfolioProps = {
  data: PortfolioCase;
};

export function Portfolio({ data }: PortfolioProps) {
  return (
    <SectionContainer id="portfolio">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            Solución 1: Tu web corporativa
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Diseño web premium para transmitir confianza desde la primera visita
          </h2>
          <p className="mt-5 text-slate-600">{data.description}</p>
          <div className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-4">
            <p className="text-sm font-medium text-teal-900">
              Caso de éxito destacado: {data.name} – {data.category}
            </p>
            <a
              href={data.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block font-semibold text-teal-700 underline decoration-2 underline-offset-4"
            >
              Ver ejemplo en vivo: www.c3linic.com
            </a>
          </div>
        </div>

        <div
          className="relative aspect-[16/10] w-full max-h-[min(480px,75vw)] overflow-hidden rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/70 lg:max-h-[500px]"
          style={{
            backgroundColor: data.imagePadColor ?? "#fbf9f7",
          }}
        >
          <Image
            src={data.image}
            alt={`Preview del proyecto ${data.name}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain object-center p-2 sm:p-3"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
