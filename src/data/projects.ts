// src/data/projects.ts
// ============================================================
// FUENTE ÚNICA DE DATOS — Galería de Actividades
// Imágenes verificadas en /public/actividades/
//
// TODO: Agregar imágenes faltantes:
//   - caminataTecnica/ (Plan Vitalidad)
//   - rutasBarrios/ (Plan Conectado)
//   - salidaAbastecimiento/ (Plan Conectado)
//   - memoriasRecetasFam/ (Plan Legado)
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
        src: '/actividades/equilibrio/equilibrio.png',
        alt: 'Ejercicio de equilibrio con adulto mayor en casa',
        title: 'Ejercicios de Equilibrio',
        description:
          'Rutina guiada de equilibrio funcional para prevención de caídas, adaptada a las capacidades de cada persona.',
        location: 'Ñuñoa, Santiago',
      },
    ],
  },
  {
    category: 'vitalidad',
    images: [
      {
        src: '/actividades/FuerzaFuncional/fuerzafuncional.png',
        alt: 'Ejercicios de fuerza funcional con adulto mayor',
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
        src: '/actividades/alfabetizacionDigital/alfabetizaciondigital.png',
        alt: 'Clase de uso de smartphone y WhatsApp',
        title: 'Alfabetización Digital',
        description:
          'Clases paso a paso para dominar WhatsApp, videollamadas y redes sociales, manteniendo la conexión con la familia.',
        location: 'Ñuñoa, Santiago',
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
        src: '/actividades/estimulacionCognitiva/estimulacioncognitiva.png',
        alt: 'Ejercicios de estimulación cognitiva con puzzles',
        title: 'Estimulación Cognitiva',
        description:
          'Juegos de agilidad mental, desafíos de memoria y ejercicios de reminiscencia con música y noticias.',
        location: 'Ñuñoa, Santiago',
      },
      {
        src: '/actividades/estimulacionCognitiva/estimulacioncognitiva2.png',
        alt: 'Sesión de estimulación cognitiva grupal',
        title: 'Desafíos de Memoria',
        description:
          'Actividades de reminiscencia que combinan juegos, música y recuerdos para mantener la mente activa.',
        location: 'Ñuñoa, Santiago',
      },
    ],
  },
  {
    category: 'legado',
    images: [
      {
        src: '/actividades/herenciaDigital/herenciadigital.png',
        alt: 'Digitalización de álbum de fotos antiguo',
        title: 'Herencia Digital',
        description:
          'Organización y digitalización de álbumes fotográficos antiguos, preservando la historia familiar para las nuevas generaciones.',
        location: 'Providencia, Santiago',
      },
    ],
  },
];
