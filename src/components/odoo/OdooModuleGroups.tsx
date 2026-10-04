import { moduleGroups } from "@/data/odoo-landing";
import { moduleIconMap } from "@/components/odoo/ModuleIcons";
import { ScribbleUnderline, ScrollArrow } from "@/components/odoo/Decor";

export function OdooModuleGroups() {
  return (
    <section id="modulos" className="relative scroll-mt-28 bg-white py-16 sm:py-24">
      <div className="odoo-rail">
        <h2 className="font-script mx-auto max-w-3xl text-center text-[clamp(2rem,4.5vw,3.25rem)] leading-tight text-[var(--ink)]">
          Una{" "}
          <span className="relative inline-block">
            necesidad
            <ScribbleUnderline />
          </span>
          , una{" "}
          <span className="relative inline-block">
            aplicación
            <ScribbleUnderline className="[&_path]:stroke-[var(--accent)]" />
          </span>
          .
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[var(--muted)]">
          Organizados por el día a día de tu clínica. Activa solo lo que necesitas.
        </p>

        <div className="mt-14 space-y-14">
          {moduleGroups.map((group) => (
            <div key={group.id}>
              <h3 className="font-script text-3xl text-[var(--ink)] sm:text-4xl">{group.title}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {group.modules.map((mod) => {
                  const Icon = moduleIconMap[mod.icon];
                  return (
                    <article
                      key={mod.id}
                      className="flex items-start gap-3 rounded-xl bg-[#f8f9fa] p-4 transition hover:bg-[#f1f3f5]"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-[var(--line)]">
                        <Icon className="h-8 w-8" />
                      </span>
                      <div>
                        <p className="font-semibold text-[var(--ink)]">{mod.name}</p>
                        <p className="mt-0.5 text-sm text-[var(--muted)]">{mod.description}</p>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
        <ScrollArrow className="mx-auto mt-10 block" />
      </div>
    </section>
  );
}
