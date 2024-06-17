const vegatables = [
  {
    name: 'Avocado',
    description: 'Świeże avocado',
    price: 6.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Bakłażan',
    description: 'Świeży bakłażan',
    price: 3.9,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Bataty',
    description: 'Świeże bataty',
    price: 5.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Bób',
    description: 'Świeży bób',
    price: 28.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Botwinka',
    description: 'Świeża botwinka',
    price: 7.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Brokuł',
    description: 'Świeży brokuł',
    price: 8.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Brukselka',
    description: 'Świeża brukselka',
    price: 14.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Burak',
    description: 'Świeży burak',
    price: 3.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Burak długi',
    description: 'Świeży burak długi',
    price: 2.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Burak worek',
    description: 'Świeży burak w worku',
    price: 5.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Cebula biała',
    description: 'Świeża cebula biała',
    price: 3.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Cebula czerwona',
    description: 'Świeża cebula czerwona',
    price: 6.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Cukinia',
    description: 'Świeża cukinia',
    price: 5.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Czosnek główka',
    description: 'Świeży czosnek główka',
    price: 2.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Dynia',
    description: 'Świeża dynia',
    price: 10.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Fasolka szparagowa',
    description: 'Świeża fasolka szparagowa',
    price: 15.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Imbir',
    description: 'Świeży imbir',
    price: 30.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Jarzynka',
    description: 'Świeża jarzynka',
    price: 5.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Kalafior',
    description: 'Świeży kalafior',
    price: 12.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Kapusta biała',
    description: 'Świeża kapusta biała',
    price: 5.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Kapusta czerwona',
    description: 'Świeża kapusta czerwona',
    price: 7.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Koper',
    description: 'Świeży koper',
    price: 2.7,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Marchew',
    description: 'Świeża marchew',
    price: 4.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Ogórek gruntowy',
    description: 'Świeży ogórek gruntowy',
    price: 6.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Papryka',
    description: 'Świeża papryka',
    price: 18.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Pieczarka',
    description: 'Świeża pieczarka',
    price: 12.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Pomidor malinowy',
    description: 'Świeży pomidor malinowy',
    price: 23.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Pomidor Polski',
    description: 'Świeży pomidor polski',
    price: 15.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Por',
    description: 'Świeży por',
    price: 5.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Rabarbar',
    description: 'Świeży rabarbar',
    price: 12.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Roszponka',
    description: 'Świeża roszponka',
    price: 6.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Rukola',
    description: 'Świeża rukola',
    price: 6.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Rzodkiewka pęczek',
    description: 'Świeża rzodkiewka pęczek',
    price: 3.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Sałata lodowa',
    description: 'Świeża sałata lodowa',
    price: 6.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Sałata masłowa',
    description: 'Świeża sałata masłowa',
    price: 5.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Sałata rzymska',
    description: 'Świeża sałata rzymska',
    price: 7.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Sałata strzępiasta',
    description: 'Świeża sałata strzępiasta',
    price: 5.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Seler korzeń',
    description: 'Świeży seler korzeń',
    price: 6.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Seler naciowy',
    description: 'Świeży seler naciowy',
    price: 6.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Szczypiorek',
    description: 'Świeży szczypiorek',
    price: 2.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Szparagi',
    description: 'Świeże szparagi',
    price: 35.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Szpinak świeży',
    description: 'Świeży szpinak',
    price: 8.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Ziemniak czerwony',
    description: 'Świeży ziemniak czerwony',
    price: 2.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Ziemniak młody Grecja',
    description: 'Świeży ziemniak młody z Grecji',
    price: 6.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Ziemniak worek 15 kg',
    description: 'Świeży ziemniak w worku 15 kg',
    price: 33.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Ziemniak żółty',
    description: 'Świeży ziemniak żółty',
    price: 2.5,
    category: 'warzywa',
    stock_quantity: 100,
  },
  {
    name: 'Ziemniak żółty 5 kg',
    description: 'Świeży ziemniak żółty 5 kg',
    price: 15.0,
    category: 'warzywa',
    stock_quantity: 100,
  },
];

export default vegatables;
