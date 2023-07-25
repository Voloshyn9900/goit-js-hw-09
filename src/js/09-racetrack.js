import '../css/common.css';

// const horses = [
//   'Secretariat',
//   'Eclipse',
//   'West Australian',
//   'Flying Fox',
//   'Seabiscuit',
// ];

// const promises = horses.map(run); Cutter

// const promises = horses.map(horse => run(horse));
// console.log(promises);

// // setTimeout(() => {
// //   console.log(promises);
// // }, 4000);

// // /*
// //  * Promise.race([]) для ожидания первого выполнившегося промиса
// //  */

// Promise.race(promises).then(({ horse, time }) => {
//   console.log(
//     `%c 🎉 Победил ${horse}, финишировав за ${time} времени`,
//     "color: green; font-size: 14px");
// });

// // /*
// //  * Promise.all([]) для ожидания всех промисов
// //  */

// Promise.all(promises).then((horse) => {
//   console.log(horse);
//   console.log('📝 Заезд окончен, принимаются ставки.');
// });

// function run(horse) {
//   return new Promise((resolve) => {
//     const time = getRandomTime(2000, 3500);
//     setTimeout(() => {
//       resolve({ horse, time });
//     }, time);

//   })
// }

// console.log('🤖 Заезд начался, ставки не принимаются!');
// // run("Avrora")
// //   .then(x => console.log(x))
// //   .catch(e => console.log(e));

// function getRandomTime(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

//////////////////////////////////////////////

const horses = [
  'Secretariat',
  'Eclipse',
  'West Australian',
  'Flying Fox',
  'Seabiscuit',
];

let raceCounter = 0;
const refs = {
  startBtn: document.querySelector('.js-start-race'),
  winnerField: document.querySelector('.js-winner'),
  progressField: document.querySelector('.js-progress'),
  tableBody: document.querySelector('.js-results-table > tbody'),
};

refs.startBtn.addEventListener('click', onStart);

function onStart() {
  const promises = horses.map(run);
  console.log(promises);
  updateWinnerField(`🎉`);
  updateProgressField('🤖 Заезд начался, ставки не принимаются!');

  determineWinner(promises);
  waitForAll(promises);

  raceCounter++;
}

function run(horse) {
  return new Promise(resolve => {
    const time = getRandomTime(2000, 3500);
    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`🎉 Победил ${horse}, финишировав за ${time} времени`);
    updateResultTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  Promise.all(horsesP).then(() => {
    updateProgressField('📝 Заезд окончен, принимаются ставки.');
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}
function updateProgressField(message) {
  refs.progressField.textContent = message;
}

function updateResultTable({ horse, time, raceCounter }) {
  const tr = `<tr><td>${raceCounter}</td><td>${horse}</td><td>${time}</td><tr>`;
  refs.tableBody.insertAdjacentHTML('beforeend', tr);
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
