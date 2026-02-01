const obiady = [
  'pierogi z Żabki',
  'hot-dog klasyk',
  'wrap z kurczakiem',
  'sałatka cezar',
  'pizza mrożona'
];

const desery = [
  'pudding waniliowy',
  'banan premium',
  'drożdżówka z serem',
  'jogurt stracciatella',
  'nutella na łyżkę'
];

function losuj(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const startBtn = document.querySelector('#start');

startBtn.addEventListener('click', () => {
  const obiad = losuj(obiady);
  const deser = losuj(desery);

  document.querySelector('#obiad').textContent = obiad;
  document.querySelector('#deser').textContent = deser;
});
