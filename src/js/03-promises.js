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
    // console.log(createPromise(position, delay));
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      }); 
    delay += step;
  }
}



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
        console.log({ position, delay });
      } else {
        reject({ position, delay });
        console.log({ position, delay });
      }
    }, delay);
  })
}