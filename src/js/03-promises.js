import Notiflix from 'notiflix';

const formEl = document.querySelector(".form");

formEl.addEventListener('submit', handleSubmit);


function handleSubmit(e) {
  e.preventDefault();

  let position = 1;
  let delay = parseInt(e.currentTarget.delay.value);
  const step = parseInt(e.currentTarget.step.value);
  const amount = parseInt(e.currentTarget.amount.value);

  for (position; position <= amount; position++) {
    createPromise(position);
    


  }


}



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve(console.log(`// Fulfill`));
      } else {
        reject(console.log(`// Reject`));
      }
    }, timeout);

  })

}