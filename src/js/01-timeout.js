import '../css/common.css';

/*
 * Метод window.setTimeout(callback, delay, args)
 */

// console.log('До вызова setTimeout');

// setTimeout(() => {
//   console.log('Внутри callback для setTimeout');
// }, 2000);

// console.log('После вызова setTimeout');


// const logMessage = (x) => {
//   console.log(x);
//   console.log("Лог при вызове callback-функции через 3 секунды");
// }
// setTimeout(logMessage, 3000, 125);

// console.log('После вызова setTimeout');

// setTimeout((x) => {
//   console.log(x);
//   console.log('Внутри callback для setTimeout');
// }, 4000, 225);

////////////////////////////////////////

/*
 * Очистка таймаута с clearTimeout(timeoutId)
 */

const logger = time => {
  console.log(`Лог через ${time}ms, потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);
const timerId2 = setTimeout(logger, 2000, 2000);

console.log(timerId);
console.log(timerId2);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}
