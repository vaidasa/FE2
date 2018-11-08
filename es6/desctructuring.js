const amzius = [13, 15, 22];

const namas = {
  ismatavimai: {
    aukstis: 13,
    plotis: 22,
    ilgis: 5,
  },
  spalva: 'raudona',
  gyventojai: [
    'Liudas',
    'Ausra',
    'Tomas',
  ],
};

const { spalva, gyventojai } = namas;
const { ismatavimai: { aukstis, plotis } } = namas;
const [ pirmasGyventojas, antrasGyventojas ] = gyventojai;
