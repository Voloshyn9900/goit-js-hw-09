/*
 * Создание промиса
 *  - Класс Promise
 *  - resolve
 *  - reject
 *  - Promise.prototype.then(onResolve, onReject)
 */

// let data = "тут еще ничего нет";

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
//     }

//     reject('Промис выполнился с ошибкой (отклонён, rejected)');
//   }, 1000);
// });

// console.log(data);

// promise.then(onFulfilled, onRejected);

// console.log(data);

// function onFulfilled(result) {
//   console.log('onFulfilled -> onFulfilled');
//   console.log(`✅ ${result}`);
// }

// function onRejected(error) {
//   console.log('onRejected -> onRejected');
//   console.log(`❌ ${error}`);
// }

//////////////////////////////////////////

/*
 * Цепочки промисов (chaining)
 * Promise.prototype.catch(error)
 * Promise.prototype.finally()
 */

const promise = new Promise((resolve, reject) => {
  const canFulfill = Math.random() > 0.5;

  setTimeout(() => {
    if (canFulfill) {
      resolve('Промис выполнился успешно, с результатом (исполнен, fulfilled)');
    }

    reject('Промис выполнился с ошибкой (отклонён, rejected)');
  }, 1000);
});

// promise
//   .then(onFulfilled, onRejected)
//   .then(x => {
//     console.log(x)
//     throw new Error('ошибка во 2м then');
//     return 10;
//   }, error => { console.log(error) })
//   .then(x => { console.log(x) }, error => {console.log(error)});

promise
  .then(onFulfilled)
  .then(x => {
    console.log(x);
    throw new Error('ошибка во 2м then');
    return 10;
  })
  .then(y => {
    console.log(y);
  })
  .catch(error => console.log(error))
  .finally(()=>{console.log(`Я буду выполнен в любом случае`);});

function onFulfilled(result) {
  console.log('onFulfilled -> onFulfilled');
  console.log(`✅ ${result}`);
}

function onRejected(error) {
  console.log('onRejected -> onRejected');
  console.log(`❌ ${error}`);
}

//////////////////////////////////////////

// const promise = new Promise((resolve, reject) => {
//   const canFulfill = Math.random() > 0.5;
//   setTimeout(() => {
//     if (canFulfill) {
//       resolve('Промис выполнился успешно с результатом (исполнен, Fulfilled)');
//     }
//     reject('Промис выполнился с ошибкой (отклонен, Reject)');
//   }, 3000);
// });

// console.log(promise);

// promise.then(
//   result => {
//   console.log(result);
//   },
//   error => {
//   console.log(error);
// })
