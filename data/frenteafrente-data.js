// Página principal — as fotos aparecem em ordem aleatória a cada visita.
const randomOrder = true;

const images = [
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_01.jpg",
    full:  "img/2026frenteafrente/full/full_01.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_02.jpg",
    full:  "img/2026frenteafrente/full/full_02.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_03.jpg",
    full:  "img/2026frenteafrente/full/full_03.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_04.jpg",
    full:  "img/2026frenteafrente/full/full_04.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_05.jpg",
    full:  "img/2026frenteafrente/full/full_05.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_06.jpg",
    full:  "img/2026frenteafrente/full/full_06.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_07.jpg",
    full:  "img/2026frenteafrente/full/full_07.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_08.jpg",
    full:  "img/2026frenteafrente/full/full_08.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_09.jpg",
    full:  "img/2026frenteafrente/full/full_09.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_10.jpg",
    full:  "img/2026frenteafrente/full/full_10.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_11.jpg",
    full:  "img/2026frenteafrente/full/full_11.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_12.jpg",
    full:  "img/2026frenteafrente/full/full_12.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_13.jpg",
    full:  "img/2026frenteafrente/full/full_13.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_14.jpg",
    full:  "img/2026frenteafrente/full/full_14.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_15.jpg",
    full:  "img/2026frenteafrente/full/full_15.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_16.jpg",
    full:  "img/2026frenteafrente/full/full_16.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_17.jpg",
    full:  "img/2026frenteafrente/full/full_17.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_18.jpg",
    full:  "img/2026frenteafrente/full/full_18.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_19.jpg",
    full:  "img/2026frenteafrente/full/full_19.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  {
    thumb: "img/2026frenteafrente/thumbs/thumb_20.jpg",
    full:  "img/2026frenteafrente/full/full_20.jpg",
    title: "Frente a Frente, Chapitô — 2026"
  },
  // ... adiciona as tuas fotos de destaque aqui
];