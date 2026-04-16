// src/data/projects.ts
// ============================================================
// FUENTE ÚNICA DE DATOS — Galería de Actividades
// Adaptado de ProjectGallery para mostrar actividades del servicio
// en lugar de proyectos de construcción.
//
// Importado por:
//   - ProjectGallery.astro (página principal → renombrar a ActivityGallery)
//
// TODO: Reemplazar imágenes placeholder con fotos reales de sesiones
// ============================================================

export interface ProjectImage {
  src: string;
  alt: string;
  title: string;
  description: string;
  location?: string;
}

export interface Project {
  category: string;
  images: ProjectImage[];
}

export const categories = [
  { id: 'todos', label: 'Todas' },
  { id: 'vitalidad', label: 'Plan Vitalidad' },
  { id: 'conectado', label: 'Plan Conectado' },
  { id: 'legado', label: 'Plan Legado' },
];

export const projects: Project[] = [
  // ========================
  // PLAN VITALIDAD — Cuerpo en Movimiento
  // ========================
  {
    category: 'vitalidad',
    images: [
      {
        src: '/proyectos/vitalidad/vitalidad-01.webp',
        alt: 'Ejercicio de equilibrio con adulto mayor',
        title: 'Ejercicios de Equilibrio',
        description:
          'Rutina guiada de equilibrio funcional para prevención de caídas, adaptada a las capacidades de cada persona.',
        location: 'Ñuñoa, Santiago',
      },
      {
        src: '/proyectos/vitalidad/vitalidad-02.webp',
        alt: 'Caminata guiada por el barrio',
        title: 'Caminata con Técnica de Marcha Segura',
        description:
          'Salida guiada de 30 minutos con corrección postural y técnica de marcha para mejorar la seguridad al caminar.',
        location: 'Providencia, Santiago',
      },
      {
        src: '/proyectos/vitalidad/vitalidad-03.webp',
        alt: 'Ejercicios de fuerza funcional en casa',
        title: 'Fuerza Funcional en Casa',
        description:
          'Ejercicios de fuerza adaptados con bandas elásticas y peso corporal, enfocados en movimientos de la vida diaria.',
        location: 'Ñuñoa, Santiago',
      },
    ],
  },

  // ========================
  // PLAN CONECTADO — Mente y Social
  // ========================
  {
    category: 'conectado',
    images: [
      {
        src: '/proyectos/conectado/conectado-01.webp',
        alt: 'Clase de uso de WhatsApp',
        title: 'Alfabetización Digital',
        description:
          'Clases paso a paso para dominar WhatsApp, videollamadas y redes sociales, manteniendo la conexión con la familia.',
        location: 'Ñuñoa, Santiago',
      },
      {
        src: '/proyectos/conectado/conectado-02.webp',
        alt: 'Salida recreativa a café del barrio',
        title: 'Rutas de Barrio',
        description:
          'Salidas recreativas a cafés de Barrio Italia, Pocuro o Plaza Ñuñoa para fomentar la socialización y el bienestar emocional.',
        location: 'Barrio Italia, Santiago',
      },
      {
        src: '/proyectos/conectado/conectado-03.webp',
        alt: 'Acompañamiento a supermercado',
        title: 'Salida de Abastecimiento',
        description:
          'Acompañamiento seguro al banco, farmacia o supermercado del barrio con supervisión profesional.',
        location: 'Providencia, Santiago',
      },
    ],
  },

  // ========================
  // PLAN LEGADO — Gimnasia Cerebral
  // ========================
  {
    category: 'legado',
    images: [
      {
        src: '/proyectos/legado/legado-01.webp',
        alt: 'Ejercicios de estimulación cognitiva',
        title: 'Estimulación Cognitiva',
        description:
          'Juegos de agilidad mental, desafíos de memoria y ejercicios de reminiscencia con música y noticias.',
        location: 'Ñuñoa, Santiago',
      },
      {
        src: '/proyectos/legado/legado-02.webp',
        alt: 'Digitalización de álbum de fotos antiguo',
        title: 'Herencia Digital',
        description:
          'Organización y digitalización de álbumes fotográficos antiguos, preservando la historia familiar para las nuevas generaciones.',
        location: 'Providencia, Santiago',
      },
      {
        src: '/proyectos/legado/legado-03.webp',
        alt: 'Redacción de memorias familiares',
        title: 'Memorias y Recetas Familiares',
        description:
          'Sesiones de escritura guiada para preservar recuerdos, anécdotas y recetas que son patrimonio de la familia.',
        location: 'Ñuñoa, Santiago',
      },
    ],
  },
];
