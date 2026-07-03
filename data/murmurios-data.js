// Página principal — as fotos aparecem em ordem aleatória a cada visita.
const randomOrder = true;

const images = [
  {
    thumb: "img/2026murmurios/thumbs/thumb_01.jpg",
    full:  "img/2026murmurios/full/full_01.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_02.jpg",
    full:  "img/2026murmurios/full/full_02.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_03.jpg",
    full:  "img/2026murmurios/full/full_03.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_04.jpg",
    full:  "img/2026murmurios/full/full_04.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_05.jpg",
    full:  "img/2026murmurios/full/full_05.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_06.jpg",
    full:  "img/2026murmurios/full/full_06.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_07.jpg",
    full:  "img/2026murmurios/full/full_07.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_08.jpg",
    full:  "img/2026murmurios/full/full_08.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_09.jpg",
    full:  "img/2026murmurios/full/full_09.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_10.jpg",
    full:  "img/2026murmurios/full/full_10.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_11.jpg",
    full:  "img/2026murmurios/full/full_11.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_12.jpg",
    full:  "img/2026murmurios/full/full_12.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_13.jpg",
    full:  "img/2026murmurios/full/full_13.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_14.jpg",
    full:  "img/2026murmurios/full/full_14.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_15.jpg",
    full:  "img/2026murmurios/full/full_15.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_16.jpg",
    full:  "img/2026murmurios/full/full_16.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_17.jpg",
    full:  "img/2026murmurios/full/full_17.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_18.jpg",
    full:  "img/2026murmurios/full/full_18.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_19.jpg",
    full:  "img/2026murmurios/full/full_19.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_20.jpg",
    full:  "img/2026murmurios/full/full_20.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_21.jpg",
    full:  "img/2026murmurios/full/full_21.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_22.jpg",
    full:  "img/2026murmurios/full/full_22.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_23.jpg",
    full:  "img/2026murmurios/full/full_23.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_24.jpg",
    full:  "img/2026murmurios/full/full_24.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_25.jpg",
    full:  "img/2026murmurios/full/full_25.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_26.jpg",
    full:  "img/2026murmurios/full/full_26.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_27.jpg",
    full:  "img/2026murmurios/full/full_27.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_28.jpg",
    full:  "img/2026murmurios/full/full_28.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_29.jpg",
    full:  "img/2026murmurios/full/full_29.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_30.jpg",
    full:  "img/2026murmurios/full/full_30.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_31.jpg",
    full:  "img/2026murmurios/full/full_31.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_32.jpg",
    full:  "img/2026murmurios/full/full_32.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_33.jpg",
    full:  "img/2026murmurios/full/full_33.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_34.jpg",
    full:  "img/2026murmurios/full/full_34.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_35.jpg",
    full:  "img/2026murmurios/full/full_35.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_36.jpg",
    full:  "img/2026murmurios/full/full_36.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_37.jpg",
    full:  "img/2026murmurios/full/full_37.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_38.jpg",
    full:  "img/2026murmurios/full/full_38.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_39.jpg",
    full:  "img/2026murmurios/full/full_39.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_40.jpg",
    full:  "img/2026murmurios/full/full_40.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },
  {
    thumb: "img/2026murmurios/thumbs/thumb_41.jpg",
    full:  "img/2026murmurios/full/full_41.jpg",
    title: "Murmúrios, Chapitô — 2026"
  },

  // ... adiciona as tuas fotos de destaque aqui
  
];