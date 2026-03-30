import { FaqItem, ProcessStep, ServicePackCategory } from "@/types/landing";

export const servicePackCategories: ServicePackCategory[] = [
  {
    id: "web",
    title: "Web corporativa",
    subtitle:
      "De una presencia basica a una web que evoluciona cada mes con datos y SEO.",
    tiers: [
      {
        name: "Esencial",
        price: "Desde 890 EUR (pago unico)",
        description:
          "Configuracion inicial y lanzamiento rapido para empezar a captar pacientes online.",
        features: [
          "Diseno responsive sector salud",
          "Hasta 5 secciones clave (inicio, servicios, equipo, contacto, legal)",
          "Formularios y enlaces a citas / WhatsApp",
          "SEO tecnico minimo (titulos, meta, velocidad base)",
          "1 ronda de revisiones incluida",
        ],
      },
      {
        name: "Crecimiento",
        price: "Desde 1.490 EUR + mantenimiento opcional",
        description:
          "Mas alcance organico y flexibilidad para actualizar contenido con soporte.",
        features: [
          "Todo lo de Esencial",
          "Optimizacion SEO on-page ampliada (estructura, keywords clinicas)",
          "Blog o noticias preparado para posicionar",
          "Pack de 6h/ano de cambios de texto o imagenes",
          "Integracion basica con herramientas de analitica",
        ],
      },
      {
        name: "Profesional",
        price: "Desde 2.400 EUR + fee mensual",
        description:
          "Nivel premium: evolucion mensual, metricas y mejora continua de conversion.",
        features: [
          "Todo lo de Crecimiento",
          "Cambios mensuales incluidos (horas definidas en contrato)",
          "Informe mensual de trafico, conversiones y objetivos",
          "A/B tests ligeros en CTAs y secciones hero",
          "Revision trimestral de copy y jerarquia visual",
          "Prioridad en soporte de contenido",
        ],
        recommended: true,
      },
    ],
  },
  {
    id: "erp",
    title: "ERP / CRM clinico",
    subtitle:
      "Escala usuarios, sedes y automatizacion segun el tamano de tu practica.",
    tiers: [
      {
        name: "Starter",
        price: "Desde 79 EUR/mes",
        description:
          "Para profesionales en solitario o micro-equipos que centralizan agenda y cobros.",
        features: [
          "1 profesional activo",
          "Agenda y recordatorios",
          "Pacientes y documentacion basica",
          "Facturacion esencial",
          "Soporte por email",
        ],
      },
      {
        name: "Clinic",
        price: "Desde 129 EUR/mes",
        description:
          "Clinicas con varios profesionales y necesidad de flujos mas ordenados.",
        features: [
          "Hasta 5 profesionales",
          "Todo lo de Starter",
          "Informes de actividad y ocupacion",
          "Roles y permisos de acceso",
          "Onboarding guiado + soporte prioritario",
        ],
        recommended: true,
      },
      {
        name: "Multi-sede",
        price: "Desde 249 EUR/mes",
        description:
          "Para grupos con varias ubicaciones o departamentos que comparten datos.",
        features: [
          "Multiples centros bajo una cuenta",
          "Todo lo de Clinic",
          "Consolidacion de metricas entre sedes",
          "Acompanamiento de implantacion ampliado",
          "Canal de soporte dedicado",
        ],
      },
    ],
  },
  {
    id: "integral",
    title: "Pack integral Web + ERP",
    subtitle:
      "Descuento al contratar ambos: una sola fecha de arranque y una sola interlocucion.",
    tiers: [
      {
        name: "Integral Base",
        price: "Desde 2.200 EUR + ERP Starter",
        description:
          "Web Esencial mas ERP Starter para digitalizar marca y operativa al mismo tiempo.",
        features: [
          "Web nivel Esencial",
          "ERP plan Starter con onboarding conjunto",
          "Descuento sobre precios por separado publicados",
          "Sesion unica de alineacion marca-operaciones",
        ],
      },
      {
        name: "Integral Plus",
        price: "Desde 3.600 EUR + ERP Clinic",
        description:
          "La combinacion mas equilibrada: web Crecimiento y ERP Clinic.",
        features: [
          "Web nivel Crecimiento",
          "ERP plan Clinic",
          "Descuento ampliado sobre tarifas individuales",
          "Roadmap de 90 dias post-lanzamiento",
        ],
        recommended: true,
      },
      {
        name: "Integral Enterprise",
        price: "Presupuesto a medida",
        description:
          "Web Profesional, ERP Multi-sede o necesidades legales / integraciones avanzadas.",
        features: [
          "Web nivel Profesional con fee mensual acordado",
          "ERP Multi-sede u opciones custom",
          "Reuniones de seguimiento con tu equipo",
          "Propuesta economica cerrada segun alcance",
        ],
      },
    ],
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Diagnostico",
    description:
      "Revisamos tu situacion actual: agenda, web, cumplimiento y objetivos de negocio.",
  },
  {
    step: "02",
    title: "Propuesta",
    description:
      "Te entregamos el pack recomendado (web, ERP o integral) con plazos y precios claros.",
  },
  {
    step: "03",
    title: "Implementacion",
    description:
      "Construimos web y/o damos de alta el software con formacion practica para tu equipo.",
  },
  {
    step: "04",
    title: "Seguimiento",
    description:
      "Acompañamiento post-lanzamiento segun tu nivel de servicio y revisiones acordadas.",
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "Los precios son fijos o orientativos?",
    answer:
      "Las cifras son orientativas para micro-clinicas tipicas; el presupuesto final depende del alcance (numero de secciones, integraciones, sedes ERP). Siempre cerramos propuesta por escrito antes de iniciar.",
  },
  {
    question: "Puedo contratar solo la web y anadir el ERP despues?",
    answer:
      "Si. Puedes empezar por la web o por el ERP; el Pack Integral aplica descuento cuando contratas ambos en la misma operacion.",
  },
  {
    question: "Que pasa con los datos de salud y el RGPD?",
    answer:
      "Priorizamos buenas practicas de seguridad y confidencialidad en el ERP; en la web tratamos formularios y textos legales de forma alineada a normativa. Para casos complejos recomendamos asesoria juridica especializada.",
  },
  {
    question: "Cuanto tarda un lanzamiento tipico?",
    answer:
      "Una web Esencial puede estar lista en pocas semanas segun entrega de contenidos; combinaciones Integral dependen de la complejidad del ERP y el numero de usuarios a formar.",
  },
  {
    question: "Hay permanencia en el ERP?",
    answer:
      "Las condiciones contractuales (permanencia, facturacion) se definen en cada propuesta; intentamos opciones flexibles alineadas al modelo SaaS.",
  },
];
