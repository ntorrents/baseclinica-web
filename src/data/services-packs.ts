import { FaqItem, ProcessStep, ServicePackCategory } from "@/types/landing";

export type UnlockRow = {
  /** Título de bloque mostrado encima de esta fila (tabla desktop y móvil). */
  sectionTitle?: string;
  feature: string;
  values: [string, string, string];
};

export const servicePackCategories: ServicePackCategory[] = [
  {
    id: "web",
    title: "Web corporativa",
    subtitle:
      "De una presencia básica a una web que evoluciona cada mes con datos y SEO.",
    tiers: [
      {
        name: "Esencial",
        price: "Desde 890 EUR (pago único)",
        priceAnnual: "Desde 890 EUR (pago único)",
        description:
          "Configuración inicial y lanzamiento rápido para empezar a captar pacientes online.",
        features: [
          "Diseño responsive sector salud",
          "Hasta 5 secciones clave (inicio, servicios, equipo, contacto, legal)",
          "Formularios y enlaces a citas / WhatsApp",
          "SEO técnico mínimo (títulos, meta, velocidad base)",
          "1 ronda de revisiones incluida",
        ],
      },
      {
        name: "Crecimiento",
        price: "Desde 1.290 EUR + 15 EUR/mes (mantenimiento)",
        priceAnnual: "Desde 1.290 EUR + 160 EUR/año mant.",
        description:
          "Más alcance orgánico y flexibilidad para actualizar contenido con soporte.",
        features: [
          "Todo lo de Esencial",
          "Optimización SEO on-page ampliada (estructura, keywords clínicas)",
          "Blog o noticias preparado para posicionar",
          "Pack de 12h/año de cambios de texto o imágenes",
          "Integración básica con herramientas de analítica",
        ],
      },
      {
        name: "Profesional",
        price: "Desde 1.790 EUR + 40 EUR/mes",
        priceAnnual: "Desde 1.790 EUR + 430 EUR/año",
        description:
          "Nivel premium: evolución mensual, métricas y mejora continua de conversión.",
        features: [
          "Todo lo de Crecimiento",
          "Cambios mensuales incluidos (horas definidas en contrato)",
          "Informe mensual de tráfico, conversiones y objetivos",
          "A/B tests ligeros en CTAs y secciones hero",
          "Revisión trimestral de copy y jerarquía visual",
          "Prioridad en soporte de contenido",
        ],
        recommended: true,
      },
    ],
  },
  {
    id: "erp",
    title: "App de gestión interna",
    subtitle:
      "Escala usuarios, sedes y automatización según el tamaño de tu práctica.",
    tiers: [
      {
        name: "Starter",
        price: "Desde 49 EUR/mes",
        priceAnnual: "Desde 530 EUR/año",
        description:
          "Para profesionales en solitario o microequipos que centralizan agenda y cobros.",
        features: [
          "1 profesional activo",
          "Agenda y recordatorios",
          "Pacientes y documentación básica",
          "Facturación esencial",
          "Soporte por email",
        ],
      },
      {
        name: "Clinic",
        price: "Desde 89 EUR/mes",
        priceAnnual: "Desde 960 EUR/año",
        description:
          "Clínicas con varios profesionales: desbloqueas módulos clave y puedes ampliar funcionalidades según tu necesidad.",
        features: [
          "Hasta 5 profesionales",
          "Todo lo de Starter",
          "Informes de actividad y ocupación",
          "Roles y permisos de acceso",
          "Desbloqueo de funcionalidades según necesidad",
        ],
        recommended: true,
      },
      {
        name: "Multi-sede",
        price: "Desde 249 EUR/mes",
        priceAnnual: "Desde 2.690 EUR/año",
        description:
          "Desarrollo a medida partiendo de esta base: multi-sede, flujos propios y personalización fuerte.",
        features: [
          "Múltiples centros bajo una cuenta",
          "Todo lo de Clinic",
          "Consolidación de métricas entre sedes",
          "Acompañamiento de implantación ampliado",
          "Canal de soporte dedicado",
        ],
      },
    ],
  },
  {
    id: "integral",
    title: "Pack Integral: Web + App de gestión",
    subtitle:
      "Ahorra en el diseño de tu web al contratar nuestra app de gestión. Una sola implantación, resultados inmediatos.",
    tiers: [
      {
        name: "Integral Base",
        price: "750 EUR (pago único) + 49 EUR/mes",
        priceAnnual: "750 EUR (pago único) + 530 EUR/año",
        priceContext:
          "Cuota mensual: software Starter (49 €/mes). En web Esencial no hay mantenimiento mensual; el pack bonifica el setup web (750 €) frente a contratar web y app por separado (orientativo 890 € en web + 49 €/mes de app).",
        description:
          "Ideal para empezar. Digitaliza tu presencia online y tu gestión diaria con un ahorro directo de 140 € en tu web.",
        features: [
          "Web nivel Esencial (Diseño responsive, 5 secciones)",
          "App plan Starter (1 usuario, agenda, facturación)",
          "Onboarding conjunto: Web y app listos a la vez",
          "Soporte unificado (un solo proveedor para todo)",
        ],
      },
      {
        name: "Integral Plus",
        price: "1.090 EUR (pago único) + 99 EUR/mes",
        priceAnnual: "1.090 EUR (pago único) + 1.070 EUR/año",
        priceContext:
          "Cuota mensual conjunta: software Clinic (89 €) + mantenimiento web Crecimiento (15 €), con descuento por pack frente a sumar ambas líneas por separado (104 €/mes).",
        description:
          "La combinación ganadora para clínicas en crecimiento. Ahorras 200 € en el setup inicial.",
        features: [
          "Web nivel Crecimiento (SEO ampliado, blog)",
          "App plan Clinic (Hasta 5 profesionales, roles)",
          "Roadmap de 90 días post-lanzamiento",
          "Pack de horas incluido para cambios en la web",
        ],
        recommended: true,
      },
      {
        name: "Integral Avanzado",
        price: "1.500 EUR (pago único) + 279 EUR/mes",
        priceAnnual: "1.500 EUR (pago único) + 3.010 EUR/año",
        priceContext:
          "Cuota mensual conjunta: software multi-sede (249 €) + mantenimiento web Profesional (40 €), con descuento por pack frente a sumar ambas líneas por separado (289 €/mes).",
        description:
          "Para clínicas consolidadas o con varias sedes. Solución llave en mano con máxima prioridad.",
        features: [
          "Web nivel Profesional (Evolución mensual, A/B testing)",
          "App plan Multi-sede (Métricas consolidadas)",
          "Reuniones de seguimiento y estrategia",
          "Canal de soporte dedicado y prioritario",
        ],
      },
    ],
  },
];

export const categoryUnlockTables: Record<
  ServicePackCategory["id"],
  UnlockRow[]
> = {
  web: [
    {
      feature: "Secciones y diseño responsive",
      values: ["✓", "✓", "✓"],
    },
    {
      feature: "SEO técnico",
      values: ["Base", "Avanzado on-page", "Avanzado + revisión trimestral"],
    },
    {
      feature: "Blog o noticias",
      values: ["—", "✓", "✓"],
    },
    {
      feature: "Pack de horas / cambios de contenido",
      values: ["1 ronda", "12 h/año", "Cambios mensuales"],
    },
    {
      feature: "Analítica e informes",
      values: ["—", "Integración básica", "Informe mensual + objetivos"],
    },
    {
      feature: "Textos legales, cookies y RGPD (páginas legales)",
      values: ["Plantillas base", "Implantación asistida", "Revisiones alineadas al mantenimiento"],
    },
    {
      feature: "Tests A/B en la web",
      values: ["—", "—", "✓"],
    },
  ],
  erp: [
    {
      sectionTitle: "Incluido en el plan básico (Starter)",
      feature: "Dashboard",
      values: ["✓", "✓", "✓"],
    },
    {
      feature: "Clientes / pacientes (núcleo operativo)",
      values: ["Limitado", "Ampliado", "Completo"],
    },
    {
      feature: "Stock",
      values: ["✓", "✓", "✓"],
    },
    {
      feature: "Tratamientos y servicios",
      values: ["✓", "✓", "✓"],
    },
    {
      feature: "Agenda",
      values: ["✓", "✓", "✓"],
    },
    {
      feature: "Finanzas (control diario)",
      values: ["✓", "✓", "✓"],
    },
    {
      sectionTitle: "Alcance del plan (usuarios y sedes)",
      feature: "Profesionales con acceso activo",
      values: ["1", "Hasta 5", "Ampliado a medida (según propuesta)"],
    },
    {
      feature: "Centros o sedes en la misma cuenta",
      values: ["1", "1", "Varias, con vista y métricas consolidadas"],
    },
    {
      sectionTitle: "Desbloqueo en planes superiores (Clinic y Multi-sede)",
      feature: "Funcionalidades extra en la sección de clientes",
      values: ["—", "✓", "✓"],
    },
    {
      feature: "Bonos",
      values: ["—", "✓", "✓"],
    },
    {
      feature: "Documentación (consentimientos, presupuestos, etc.)",
      values: ["—", "✓", "✓"],
    },
    {
      feature: "Fiscalidad (resumen trimestral para presentar a Hacienda)",
      values: ["—", "✓", "✓"],
    },
    {
      feature: "Recordatorios y comunicación con el paciente",
      values: ["Básicos (email)", "Ampliados (plantillas y reglas)", "A medida / multi-canal"],
    },
    {
      feature: "Exportar gastos desde Finanzas (Excel o CSV)",
      values: ["—", "Sí, todos los gastos", "Sí + vistas por sede / consolidado"],
    },
    {
      feature: "Conexión con sistemas externos (contabilidad, otros programas)",
      values: ["—", "Ficheros y listados para importar fuera", "Integraciones a medida (API, automatismos)"],
    },
    {
      sectionTitle: "Cómo escala tu plan",
      feature: "Añadir funcionalidades según necesidad (módulos extra)",
      values: ["—", "✓", "✓"],
    },
    {
      feature: "Enfoque del plan",
      values: ["Producto estándar", "Estándar + ampliaciones", "Desarrollo a medida sobre esta base"],
    },
  ],
  integral: [
    {
      feature: "Web incluida (nivel)",
      values: ["Esencial", "Crecimiento", "Profesional"],
    },
    {
      feature: "App incluida (nivel)",
      values: ["Starter", "Clinic", "Multi-sede"],
    },
    {
      feature: "Onboarding conjunto web + app",
      values: ["✓", "✓", "✓"],
    },
    {
      feature: "Formación del equipo (web y app)",
      values: ["Sesión inicial conjunta", "Sesión ampliada + material de apoyo", "Plan formativo y refrescos"],
    },
    {
      feature: "Roadmap 90 días",
      values: ["—", "✓", "✓"],
    },
    {
      feature: "Horas de cambios web incluidas",
      values: ["—", "✓", "✓"],
    },
    {
      feature: "Seguimiento estratégico / reuniones",
      values: ["—", "—", "✓"],
    },
  ],
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnóstico",
    description:
      "Revisamos tu situación actual: agenda, web, cumplimiento y objetivos de negocio.",
  },
  {
    step: "02",
    title: "Propuesta",
    description:
      "Te entregamos el pack recomendado (web, app de gestión o integral) con plazos y precios claros.",
  },
  {
    step: "03",
    title: "Implementación",
    description:
      "Construimos web y/o damos de alta el software con formación práctica para tu equipo.",
  },
  {
    step: "04",
    title: "Seguimiento",
    description:
      "Acompañamiento post-lanzamiento según tu nivel de servicio y revisiones acordadas.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "¿Los precios son fijos u orientativos?",
    answer:
      "Las cifras son reales para clínicas que se ajustan al estándar. El presupuesto final solo varía si decides añadir módulos específicos o personalizaciones complejas. Siempre cerramos la propuesta por escrito antes de iniciar.",
  },
  {
    question: "¿Puedo contratar solo la web y añadir la app después?",
    answer:
      "Sí, nuestra propuesta es 100% modular. Puedes empezar por la web o por el software de gestión, y añadir el resto de componentes cuando tu clínica lo requiera.",
  },
  {
    question: "¿Qué pasa con los datos de salud y el RGPD?",
    answer:
      "Priorizamos buenas prácticas de seguridad y confidencialidad en el software. Toda la arquitectura está diseñada para proteger la información médica y cumplir con la normativa vigente.",
  },
  {
    question: "¿Cuánto tarda un lanzamiento típico?",
    answer:
      "Una web puede estar lista en pocas semanas si disponemos de todos los contenidos. El software de gestión se implanta de manera ágil, dependiendo principalmente del volumen de datos a cargar y de la formación inicial del equipo.",
  },
  {
    question: "¿Hay permanencia en la app de gestión?",
    answer:
      "Ofrecemos condiciones transparentes desde el primer día. Las condiciones de contratación (que incluyen periodos de prueba y plazos) se detallan por escrito antes de comenzar, sin cláusulas ocultas abusivas.",
  },
  {
    question: "¿Qué incluye el Software de Gestión exactamente?",
    answer:
      "El software se adapta a ti mediante módulos. Como base incluye: Dashboard, Gestión completa de Pacientes, Historias Clínicas, Stock, Agenda, Finanzas y Roles de acceso. Además, puedes sumarle Citas Online Automáticas, Integración con WhatsApp, Firma Biométrica, Portal del Paciente, Gestión de Proveedores y Finanzas Pro.",
  },
  {
    question: "¿La web corporativa y la app de gestión son el mismo producto?",
    answer:
      "No. La web es tu carta de presentación (captación, confianza, SEO). El software de gestión es para la operativa diaria interna de tu clínica. Puedes contratar ambos simultáneamente para ahorrar integraciones, o uno por separado.",
  },
  {
    question: "¿Podéis migrar datos desde mi agenda actual, Excel u otro programa?",
    answer:
      "Depende del origen y del formato. En la mayoría de los casos podemos importar de forma segura tu listado de pacientes, tarifas e historiales básicos. Lo evaluamos en la fase de diagnóstico.",
  },
  {
    question: "¿El mantenimiento web incluye cambios ilimitados?",
    answer:
      "El mantenimiento web premium incluye soporte continuo, optimización técnica y un pack de horas para modificaciones visuales o de texto cada mes. De este modo garantizamos que tu web evoluciona sin que el precio se dispare.",
  },
];
