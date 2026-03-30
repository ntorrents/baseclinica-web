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
            Solucion 1: Tu web corporativa
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Diseno web premium para transmitir confianza desde la primera visita
          </h2>
          <p className="mt-5 text-slate-600">{data.description}</p>
          <div className="mt-6 rounded-xl border border-teal-200 bg-teal-50 p-4">
            <p className="text-sm font-medium text-teal-900">
              Caso de exito destacado: {data.name} - {data.category}
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

        <div className="relative aspect-[16/10] w-full max-h-[min(420px,70vw)] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/70 lg:max-h-[460px]">
          <Image
            src={data.image}
            alt={`Preview del proyecto ${data.name}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </SectionContainer>
  );
}
