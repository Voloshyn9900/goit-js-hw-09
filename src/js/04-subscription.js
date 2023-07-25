import '../css/common.css';
// import BSN from 'bootstrap.native';
import { Modal } from 'bootstrap.native';


// const modal = new BSN.Modal("#subscription-modal");
const modal = new Modal('#subscription-modal');
const refs = {
  modal: document.querySelector('#subscription-modal'),
  subscribeBtn: document.querySelector('button[data-subscribe]'),
};

console.log(modal);
modal.show();


















// const PROMPT_DELAY = 1000;
// const MAX_PROMPT_ATTEMPTS = 3;
// let promptCounter = 0;
// let hasSubscribe = false;

// const intervalID = setInterval(() => {
//     if (promptCounter === MAX_PROMPT_ATTEMPTS || hasSubscribe) {
//       console.log('Нужно остановить интервал!');
//       clearInterval(intervalID);
//       return;
//     };

//     console.log("Подпишись на рассылку! -" + Date.now());
//     promptCounter++;
// }, PROMPT_DELAY);
