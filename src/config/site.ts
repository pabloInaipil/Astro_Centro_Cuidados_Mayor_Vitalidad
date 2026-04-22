// src/config/site.ts
// ============================================================
// FUENTE ÚNICA DE DATOS — Círculo Vital
// Todos los componentes importan de aquí.
// Última actualización: 2026-04-15
// ============================================================

export interface Service {
  title: string;
  description: string;
  icon: string;
  features?: string[];
  price?: string;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  whatsapp: string;
  whatsappMessage: string;
  address: {
    street: string;
    city: string;
    region: string;
    country: string;
  };
  social: {
    instagram: string;
    facebook: string;
  };
  gtmId: string;
  web3formsKey: string;
  services: Service[];
  businessHours: {
    days: string;
    hours: string;
    note?: string;
  };
  stats: {
    value: string;
    label: string;
  }[];
  heroSlides: {
    image: string;
    title: string;
    subtitle: string;
    cta?: string;
  }[];
  process: {
    step: number;
    title: string;
    description: string;
    icon: string;
  }[];
  pricing: {
    name: string;
    price: string;
    description: string;
    features: string[];
    highlighted?: boolean;
    cta: string;
  }[];
}

export const site: SiteConfig = {
  // ─── Identidad ────────────────────────────────────────────
  name: 'Círculo Vital — Movimiento y Salud',
  shortName: 'Círculo Vital',
  tagline: 'Acompañamiento activo para adultos mayores en casa',
  description:
    'Programa de movimiento guiado, estimulación cognitiva y apoyo tecnológico para adultos mayores en la comodidad de su hogar. Cobertura en Ñuñoa y Providencia, Santiago.',

  // ─── URL ──────────────────────────────────────────────────
  siteUrl: 'https://mayorvitalidad.cl',

  // ─── Contacto ─────────────────────────────────────────────
  // TODO: Reemplazar con datos reales del profesional
  phone: '+56900000000',
  phoneDisplay: '+56 9 0000 0000',
  email: 'profekarin04@gmail.com',
  whatsapp: '56900000000',
  whatsappMessage:
    'Hola, me interesa conocer los planes de acompañamiento para un familiar mayor. ¿Podemos conversar?',

  // ─── Dirección ────────────────────────────────────────────
  address: {
    street: 'Atención a domicilio',
    city: 'Ñuñoa y Providencia, Santiago',
    region: 'Región Metropolitana',
    country: 'CL',
  },

  // ─── Redes Sociales ───────────────────────────────────────
  // TODO: Reemplazar con URLs reales
  social: {
    instagram: 'https://www.instagram.com/circulovital.cl',
    facebook: 'https://www.facebook.com/circulovital.cl',
  },

  // ─── Analytics ────────────────────────────────────────────
  // TODO: Reemplazar con GTM container propio
  gtmId: '',

  // ─── Web3Forms ────────────────────────────────────────────
  // TODO: Crear Access Key en web3forms.com para este cliente
  web3formsKey: 'a557006f-fda0-4bb5-9b00-5f0ce481f872',

  // ─── Servicios (3 Planes) ─────────────────────────────────
  services: [
    {
      title: 'Plan Vitalidad',
      description:
        'Cuerpo en movimiento. Prevención de caídas, fuerza funcional, equilibrio y coordinación con caminata guiada técnica.',
      icon: 'heart-pulse',
      features: [
        'Caminata guiada con técnica de marcha segura (30 min)',
        'Ejercicios de fuerza funcional y equilibrio (30 min)',
        'Asistencia con pagos de cuentas y dispositivos (30 min)',
        'Acompañamiento a banco, farmacia o supermercado',
      ],
    },
    {
      title: 'Plan Conectado',
      description:
        'Mente y social. Alfabetización digital, salidas recreativas al barrio y gestión segura del hogar.',
      icon: 'users',
      features: [
        'Clases de WhatsApp, Facebook, Instagram y YouTube',
        'Videollamadas con familiares paso a paso',
        'Rutas recreativas a cafés y plazas del barrio',
        'Organización de espacios para evitar tropiezos',
      ],
    },
    {
      title: 'Plan Legado',
      description:
        'Gimnasia cerebral. Estimulación cognitiva, preservación de la memoria y digitalización de la historia familiar.',
      icon: 'brain',
      features: [
        'Juegos de agilidad mental y desafíos de memoria (45 min)',
        'Ejercicios de reminiscencia con música y noticias',
        'Digitalización de álbumes de fotos y recuerdos',
        'Redacción de memorias y recetas familiares',
      ],
    },
  ],

  // ─── Estadísticas ─────────────────────────────────────────
  stats: [
    { value: '100%', label: 'Enfoque personalizado' },
    { value: 'Ñuñoa', label: 'y Providencia' },
    { value: '2hrs', label: 'Por sesión' },
    { value: '24hrs', label: 'Reporte a la familia' },
  ],

  // ─── Hero Slides ──────────────────────────────────────────
  // TODO: Reemplazar con fotos reales del profesional y actividades
  heroSlides: [
    {
      image: '/hero/slide-01.webp',
      title: 'Movimiento y Vitalidad en Casa',
      subtitle:
        'Acompañamiento profesional para que tu familiar mayor mantenga su autonomía, seguridad y alegría.',
      cta: 'Conoce Nuestros Planes',
    },
    {
      image: '/hero/slide-02.webp',
      title: 'Prevención de Caídas y Fuerza Funcional',
      subtitle:
        'Ejercicios adaptados por un Profesor de Educación Física especializado en bienestar del adulto mayor.',
      cta: 'Agenda una Sesión',
    },
    {
      image: '/hero/slide-03.webp',
      title: 'Conexión Digital y Social',
      subtitle:
        'Que la distancia no sea un obstáculo. Ayudamos a tu familiar a dominar la tecnología y mantener vínculos.',
      cta: 'Contáctanos',
    },
  ],

  // ─── Proceso (Cómo Funciona) ──────────────────────────────
  process: [
    {
      step: 1,
      title: 'Evaluación Inicial',
      description:
        'Conversamos contigo y tu familiar para conocer sus necesidades, capacidades y objetivos de bienestar.',
      icon: 'clipboard-check',
    },
    {
      step: 2,
      title: 'Plan Personalizado',
      description:
        'Diseñamos un programa adaptado: ejercicio, estimulación cognitiva y/o apoyo tecnológico según lo que más necesite.',
      icon: 'calendar',
    },
    {
      step: 3,
      title: 'Sesiones en Casa',
      description:
        'Visitamos a tu familiar en su hogar, 2 horas por sesión, con actividades guiadas y acompañamiento cercano.',
      icon: 'home',
    },
    {
      step: 4,
      title: 'Reporte a la Familia',
      description:
        'Después de cada sesión enviamos un informe por WhatsApp con fotos, avances y estado de ánimo.',
      icon: 'message-circle',
    },
  ],

  // ─── Precios (Marcha Blanca) ──────────────────────────────
  pricing: [
    {
      name: 'Sesión Individual',
      price: '$35.000',
      description: '2 horas de acompañamiento activo en casa',
      features: [
        'Actividad física guiada (60 min)',
        'Asistencia práctica o digital (30 min)',
        'Salida de abastecimiento o recreación (30 min)',
        'Reporte post-sesión a la familia',
      ],
      cta: 'Agendar Sesión',
    },
    {
      name: 'Pack Mensual',
      price: '$240.000',
      description: '8 visitas al mes (2 por semana)',
      features: [
        'Todo lo del plan individual',
        'Seguimiento semanal de progreso',
        'Programa adaptado y evolutivo',
        'Ahorro de $40.000 vs. sesiones sueltas',
      ],
      highlighted: true,
      cta: 'Elegir Pack Mensual',
    },
    {
      name: 'Plan Personalizado',
      price: 'Consultar',
      description: '3 o más visitas semanales',
      features: [
        'Frecuencia a medida',
        'Combinación de planes Vitalidad + Conectado + Legado',
        'Descuento por volumen',
        'Coordinación con equipo médico si aplica',
      ],
      cta: 'Solicitar Cotización',
    },
  ],

  // ─── Horarios ─────────────────────────────────────────────
  businessHours: {
    days: 'Lunes a Sábado',
    hours: '08:00 — 18:00',
    note: 'Horarios flexibles según necesidad del paciente',
  },
};
