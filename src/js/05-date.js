// import '../css/common.css';

/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

const date = new Date().getTime();

const dateNow = Date.now();
console.log('dateNow', dateNow);

const date1 = new Date();
const date2 = new Date(1000);

console.log(date1);
console.log(date1.getDay());
console.log(date1.getMonth());
console.log(date1.getFullYear());

// 1970 00 00 Unix time

console.log(date2);

setTimeout(() => {
  const date3 = new Date();
  console.log("date1", date1);
  console.log('date3', date3);

  console.log(date3 - date1);
}, 3000);
