import { FaqItem, ProcessStep, ServicePackCategory } from "@/types/landing";

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
        price: "Desde 1.290 EUR + mantenimiento opcional",
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
        price: "Desde 1.790 EUR + fee mensual",
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
    title: "ERP / CRM clínico",
    subtitle:
      "Escala usuarios, sedes y automatización según el tamaño de tu práctica.",
    tiers: [
      {
        name: "Starter",
        price: "Desde 49 EUR/mes",
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
        description:
          "Clínicas con varios profesionales y necesidad de flujos más ordenados.",
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
        description:
          "Para grupos con varias ubicaciones o departamentos que comparten datos.",
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
    title: "Pack Integral: Web + ERP",
    subtitle:
      "Ahorra en el diseño de tu web al contratar nuestro software de gestión. Una sola implantación, resultados inmediatos.",
    tiers: [
      {
        name: "Integral Base",
        price: "750 EUR (pago único) + 49 EUR/mes",
        description:
          "Ideal para empezar. Digitaliza tu presencia online y tu gestión diaria con un ahorro directo de 140 € en tu web.",
        features: [
          "Web nivel Esencial (Diseño responsive, 5 secciones)",
          "ERP plan Starter (1 usuario, agenda, facturación)",
          "Onboarding conjunto: Web y ERP listos a la vez",
          "Soporte unificado (un solo proveedor para todo)",
        ],
      },
      {
        name: "Integral Plus",
        price: "1.090 EUR (pago único) + 89 EUR/mes",
        description:
          "La combinación ganadora para clínicas en crecimiento. Ahorras 200 € en el setup inicial.",
        features: [
          "Web nivel Crecimiento (SEO ampliado, blog)",
          "ERP plan Clinic (Hasta 5 profesionales, roles)",
          "Roadmap de 90 días post-lanzamiento",
          "Pack de horas incluido para cambios en la web",
        ],
        recommended: true,
      },
      {
        name: "Integral Avanzado",
        price: "1.500 EUR (pago único) + 249 EUR/mes",
        description:
          "Para clínicas consolidadas o con varias sedes. Solución llave en mano con máxima prioridad.",
        features: [
          "Web nivel Profesional (Evolución mensual, A/B testing)",
          "ERP plan Multi-sede (Métricas consolidadas)",
          "Reuniones de seguimiento y estrategia",
          "Canal de soporte dedicado y prioritario",
        ],
      },
    ],
  },
];

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
      "Te entregamos el pack recomendado (web, ERP o integral) con plazos y precios claros.",
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
      "Las cifras son orientativas para microclínicas típicas; el presupuesto final depende del alcance (número de secciones, integraciones, sedes ERP). Siempre cerramos propuesta por escrito antes de iniciar.",
  },
  {
    question: "¿Puedo contratar solo la web y añadir el ERP después?",
    answer:
      "Sí. Puedes empezar por la web o por el ERP; el Pack Integral aplica descuento cuando contratas ambos en la misma operación.",
  },
  {
    question: "¿Qué pasa con los datos de salud y el RGPD?",
    answer:
      "Priorizamos buenas prácticas de seguridad y confidencialidad en el ERP; en la web tratamos formularios y textos legales de forma alineada a la normativa. Para casos complejos recomendamos asesoría jurídica especializada.",
  },
  {
    question: "¿Cuánto tarda un lanzamiento típico?",
    answer:
      "Una web Esencial puede estar lista en pocas semanas según entrega de contenidos; combinaciones Integral dependen de la complejidad del ERP y el número de usuarios a formar.",
  },
  {
    question: "¿Hay permanencia en el ERP?",
    answer:
      "Las condiciones contractuales (permanencia, facturación) se definen en cada propuesta; intentamos opciones flexibles alineadas al modelo SaaS.",
  },
];
