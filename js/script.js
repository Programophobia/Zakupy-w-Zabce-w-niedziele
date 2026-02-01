// =========================
// OBIADY z cenami
// =========================

const obiady = [
  { name: 'Pierogi z mięsem', price: '12.99 zł' },
  { name: 'Pierogi z kapustą i grzybami', price: '13.49 zł' },
  { name: 'Pierogi ruskie', price: '11.99 zł' },
  { name: 'Hot-dog klasyk', price: '7.99 zł' },
  { name: 'Wrap z kurczakiem', price: '14.99 zł' },
  { name: 'Sałatka cezar', price: '12.49 zł' },
  { name: 'Frytki', price: '6.99 zł' },
  { name: 'Burger wołowy', price: '15.99 zł' },
  { name: 'Burger wegetariański', price: '14.49 zł' },
  { name: 'Burger z kurczakiem', price: '14.99 zł' },

  { name: 'Pizza mrożona', price: '11.99 zł' },
  { name: 'Lasagne bolognese', price: '13.99 zł' },
  { name: 'Lasagne szpinakowa', price: '13.49 zł' },
  { name: 'Pene z kurczakiem i brokułami', price: '14.99 zł' },
  { name: 'Spaghetti bolognese', price: '12.99 zł' },
  { name: 'Penne carbonara', price: '13.49 zł' },
  { name: 'Kurczak curry z ryżem', price: '14.99 zł' },
  { name: 'Kurczak po tajsku', price: '15.49 zł' },
  { name: 'Kurczak słodko kwaśny', price: '14.49 zł' },
  { name: 'Kurczak w sosie pieczarkowym', price: '14.99 zł' },
  { name: 'Klopsiki w sosie pomidorowym', price: '12.99 zł' },
  { name: 'Pulpeciki w sosie koperkowym', price: '12.49 zł' },
  { name: 'Kotlety mielone z ziemniakami i surówką', price: '15.99 zł' },
  { name: 'Pizza pepperoni', price: '12.99 zł' },
  { name: 'Pizza capriciosa', price: '12.99 zł' },
  { name: 'Pizza cztery sery', price: '13.49 zł' },
  { name: 'Pizza margarita', price: '11.99 zł' },
  { name: 'Gulasz wołowy', price: '15.99 zł' },
  { name: 'Bigos', price: '11.99 zł' },
  { name: 'Gołąbki', price: '12.49 zł' },
  { name: 'Kopytka z sosem pieczarkowym', price: '11.99 zł' },
  { name: 'Placki ziemniaczane', price: '10.99 zł' },
  { name: 'Naleśniki z serem', price: '9.99 zł' },
  { name: 'Naleśniki z jabłkami', price: '9.99 zł' },
];


// =========================
// DESERY z cenami
// =========================

const desery = [
  { name: 'Pudding waniliowy', price: '3.49 zł' },
  { name: 'Pudding czekoladowy', price: '3.49 zł' },
  { name: 'Pudding karmelowy', price: '3.49 zł' },
  { name: 'Budyń śmietankowy', price: '2.99 zł' },
  { name: 'Budyń czekoladowy', price: '2.99 zł' },
  { name: 'Jogurt stracciatella', price: '4.99 zł' },
  { name: 'Jogurt malinowy', price: '4.49 zł' },
  { name: 'Jogurt truskawkowy', price: '4.49 zł' },
  { name: 'Jogurt brzoskwiniowy', price: '4.49 zł' },
  { name: 'Jogurt pitny truskawka', price: '4.99 zł' },
  { name: 'Jogurt pitny banan truskawka', price: '4.99 zł' },

  { name: 'Kinder bueno', price: '5.49 zł' },
  { name: 'Kinder bueno white', price: '5.49 zł' },
  { name: 'Kinder country', price: '4.99 zł' },
  { name: 'Kinder czekolada', price: '4.49 zł' },

  { name: 'Milka oreo', price: '6.49 zł' },
  { name: 'Milka truskawkowa', price: '6.49 zł' },
  { name: 'Milka karmelowa', price: '6.49 zł' },

  { name: 'Twix', price: '4.49 zł' },
  { name: 'Snickers', price: '4.49 zł' },
  { name: 'Mars', price: '4.49 zł' },
  { name: 'Kitkat', price: '4.49 zł' },

  { name: 'Princessa kokosowa', price: '3.49 zł' },
  { name: 'Princessa orzechowa', price: '3.49 zł' },
  { name: 'Grześki', price: '3.49 zł' },
  { name: 'Pawełek', price: '3.99 zł' },
  { name: 'Michałki', price: '3.99 zł' },

  { name: 'Drożdżówka z serem', price: '4.99 zł' },
  { name: 'Drożdżówka z budyniem', price: '4.99 zł' },
  { name: 'Drożdżówka z jabłkiem', price: '4.99 zł' },
  { name: 'Drożdżówka z makiem', price: '4.99 zł' },

  { name: 'Ciastko francuskie z jabłkiem', price: '5.49 zł' },
  { name: 'Ciastko francuskie z czekoladą', price: '5.49 zł' },

  { name: 'Oreo klasyczne', price: '4.99 zł' },
  { name: 'Oreo golden', price: '4.99 zł' },

  { name: 'Ciastka hit czekolada', price: '5.49 zł' },
  { name: 'Ciastka hit wanilia', price: '5.49 zł' },

  { name: 'Jeżyki classic', price: '5.99 zł' },
  { name: 'Jeżyki kokos', price: '5.99 zł' },

  { name: 'Delicje pomarańczowe', price: '5.49 zł' },
  { name: 'Delicje malinowe', price: '5.49 zł' },

  { name: 'Ciasteczka owsiane', price: '4.99 zł' },

  { name: 'Lody kaktus', price: '3.99 zł' },
  { name: 'Lody ekipa', price: '4.49 zł' },
  { name: 'Lody magnum classic', price: '8.99 zł' },
  { name: 'Lody magnum almond', price: '8.99 zł' },
  { name: 'Lody cornetto wanilia', price: '6.49 zł' },
  { name: 'Lody cornetto truskawka', price: '6.49 zł' },
  { name: 'Lody big milk', price: '5.49 zł' },

  { name: 'Nutella mała', price: '8.99 zł' },
  { name: 'Nutella średnia', price: '13.99 zł' },
  { name: 'Nutella na łyżkę', price: '1.99 zł' },

  { name: 'Banan premium', price: '2.49 zł' },
  { name: 'Jabłko słodkie', price: '1.99 zł' },
  { name: 'Gruszka konferencja', price: '2.49 zł' },

  { name: 'Milkshake wanilia', price: '6.99 zł' },
];


// =========================
// BROWCE z cenami
// =========================

const browce = [
  { name: 'Harnas', price: '3.29 zł' },
  { name: 'Harnas czteropak', price: '11.99 zł' },
  { name: 'Harnas szesciopak', price: '17.99 zł' },

  { name: 'Tyskie', price: '3.99 zł' },
  { name: 'Tyskie czteropak', price: '13.99 zł' },
  { name: 'Tyskie szesciopak', price: '19.99 zł' },

  { name: 'Lech jasny', price: '4.29 zł' },
  { name: 'Lech free', price: '4.49 zł' },
  { name: 'Lech czteropak', price: '14.49 zł' },
  { name: 'Lech szesciopak', price: '20.49 zł' },

  { name: 'Zywiec', price: '4.49 zł' },
  { name: 'Zywiec czteropak', price: '14.99 zł' },
  { name: 'Zywiec szesciopak', price: '20.99 zł' },

  { name: 'Perla chmielowa', price: '3.79 zł' },
  { name: 'Perla mocna', price: '3.99 zł' },
  { name: 'Perla czteropak', price: '12.99 zł' },
  { name: 'Perla szesciopak', price: '18.99 zł' },

  { name: 'Warka jasna', price: '3.69 zł' },
  { name: 'Warka strong', price: '3.99 zł' },
  { name: 'Warka czteropak', price: '12.49 zł' },
  { name: 'Warka szesciopak', price: '18.49 zł' },

  { name: 'Okocim jasne', price: '3.79 zł' },
  { name: 'Okocim mocne', price: '3.99 zł' },
  { name: 'Okocim czteropak', price: '12.99 zł' },
  { name: 'Okocim szesciopak', price: '18.99 zł' },

  { name: 'Karpackie', price: '2.99 zł' },
  { name: 'Karpackie mocne', price: '3.29 zł' },
  { name: 'Karpackie czteropak', price: '9.99 zł' },
  { name: 'Karpackie szesciopak', price: '14.99 zł' },

  { name: 'Argus strong', price: '2.89 zł' },
  { name: 'Argus czteropak', price: '8.99 zł' },
  { name: 'Argus szesciopak', price: '13.49 zł' },
];


// =========================
// FUNKCJE
// =========================

function parsePrice(priceString) {
  // zamienia "12.99 zł" → 12.99
  return parseFloat(priceString.replace('zł', '').trim());
}

function losuj(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const startBtn = document.querySelector('#start');

startBtn.addEventListener('click', () => {
  const obiad = losuj(obiady);
  const deser = losuj(desery);
  const picko = losuj(browce);

  // wyświetlanie
  document.querySelector('#obiad').textContent = `${obiad.name} - ${obiad.price}`;
  document.querySelector('#deser').textContent = `${deser.name} - ${deser.price}`;
  document.querySelector('#picko').textContent = `${picko.name} - ${picko.price}`;

  // liczenie sumy
  const suma =
    parsePrice(obiad.price) +
    parsePrice(deser.price) +
    parsePrice(picko.price);

  // wyświetlanie sumy
  document.querySelector('#razem').textContent =
    `Razem: ${suma.toFixed(2)} zł`;
});
