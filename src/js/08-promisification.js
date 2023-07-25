/*
 * Промисификация:
 * - Поблема доступа к результату промиса с колбеком
 * - Функция которая возвращает промис
 */

///////////////////////////////////////////

// 1 VARIANT

// const makeOrder = (dish, onSuccess, onError) => {
//   const DELAY = 1000;
//   const passed = Math.random() > 0.5;

//   setTimeout(() => {
//     if (passed) {
//       onSuccess(`✅ Вот ваш заказ: ${dish}`);
//     } else {
//       onError('❌ Упс, у нас закончились продукты');
//     }
//   }, DELAY);
// };

// const x = makeOrder('Beer', onMakeOrderSuccess, onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

//////////////////////////////////////////////

// 2 VARIANT

// const makeOrder = (dish) => {
//     const DELAY = 1000;
//     const passed = Math.random() > 0.5;
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//           if (passed) {
//             resolve(`✅ Вот ваш заказ: ${dish}`);
//           }
//             reject('❌ Упс, у нас закончились продукты');

//         }, DELAY);
//     })
//     return promise;
// };

// const p = makeOrder('Beer');
// console.log(p);
// p.then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

////////////////////////////////////////////////////

// 3 VARIANT TOP

// const makeOrder = dish => {
//   const DELAY = 1000;
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;
//     setTimeout(() => {
//       if (passed) {
//         resolve(`✅ Вот ваш заказ: ${dish}`);
//       }
//       reject('❌ Упс, у нас закончились продукты');
//     }, DELAY);
//   });
// };

// makeOrder('Beer').then(onMakeOrderSuccess).catch(onMakeOrderError);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

////////////////////////////////////////////////////
/*
 * Промисификация «синхронных» функций
 * - Promise.resolve()
 * - Promise.reject()
 */

// const makeOrder = (dish) => {
//     return Promise.resolve(`✅ Вот ваш заказ: ${dish}`);
// };

// makeOrder('Beer').then(onMakeOrderSuccess);

// function onMakeOrderSuccess(result) {
//   console.log('onMakeOrderSuccess');
//   console.log(result);
// }

// function onMakeOrderError(error) {
//   console.log('onMakeOrderError');
//   console.log(error);
// }

//////////////////////////////////////////

/*
 * Покемоны с https://pokeapi.co/
 */

/////////////////////////////////////

// function fetchByPokemon(id) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/1${id}`)
//     .then(r => r.json())
//     .then(pokemon => {
//       console.log(pokemon);
//     })
//     .catch(error => {
//       console.log(error);
//       console.log('Не смог достучаться до покемонов, это в блоке catch');
//     });
// }
// fetchByPokemon(2);

//////////////////////////////////////


// function fetchByPokemon(id, onSuccess, onFetchError) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/1${id}`)
//     .then(r => r.json())
//     .then(pokemon => {
//       onSuccess(pokemon);
//     })
//     .catch(error => {
//       onFetchError(error);
//       console.log('Не смог достучаться до покемонов, это в блоке catch');
//     });
// }

// fetchByPokemon(2, onSuccess, onFetchError);

// function onSuccess(pokemon) {
//     console.log(pokemon);
// }

// function onFetchError(error) {
//     console.log('Error это в блоке catch');
//     console.log(error);
// }

//////////////////////////////////////

// function fetchByPokemon(id) {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/1${id}`)
//     .then(r => r.json())
// }

// fetchByPokemon(2).then(onSuccess).catch(onFetchError);

// function onSuccess(pokemon) {
//     console.log(pokemon);
// }

// function onFetchError(error) {
//     console.log('Error это в блоке catch');
//     console.log(error);
// }

/////////////////////////////////////////////////

// const fetchPokemonById = id => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
// };

// fetchPokemonById(1).then(onFetchSuccess).catch(onFetchError);

// fetchPokemonById(2).then(onFetchSuccess).catch(onFetchError);

// fetchPokemonById(3).then(onFetchSuccess).catch(onFetchError);

// function onFetchSuccess(pokemon) {
//   console.log('onFetchSuccess -> onFetchSuccess');
//   console.log(pokemon);
// }

// function onFetchError(error) {
//   console.log('onFetchError -> onFetchError');
//   console.log('Это в блоке catch');
//   console.log(error);
// }

/////////////////////////////////////////////

// makePromise
// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const passed = Math.random() > 0.5;

//     setTimeout(() => {
//       if (passed) {
//         resolve('✅ Куку это resolve');
//       }

//       reject('❌ все пропало это reject');
//     }, 2000);
//   });
// };

// makePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error));

