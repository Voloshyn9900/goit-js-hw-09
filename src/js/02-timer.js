// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';

const selector = document.querySelector(`input[type="text"]`);
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;

const refsData = {
  days: document.querySelector(`[data-days]`),
  hours: document.querySelector(`[data-hours]`),
  minutes: document.querySelector(`[data-minutes]`),
  seconds: document.querySelector(`[data-seconds]`),
};

let currentDate = null;
let selectedDate = null;
let disabledBtn = true;

let intervalID = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    selectedDate = selectedDates[0];
    checkValidityTime(options.defaultDate, selectedDate);
  },
};

flatpickr(selector, options);

function checkValidityTime(defaultDate, selectedDate) {
  if (defaultDate < selectedDate) {
    Notiflix.Notify.success('Congratulations! Click "Start" to begin');
    startBtn.disabled = !disabledBtn;
  } else {
    Notiflix.Notify.failure('Please choose a date in the future');
    startBtn.disabled = disabledBtn;
  }
}

startBtn.addEventListener('click', startTimer);

function startTimer(params) {
  startBtn.disabled = true;
  selector.disabled = true;
  intervalID = setInterval(() => {
    currentDate = new Date();
    const objStepData = convertMs(selectedDate - currentDate);
    getMarckupData(objStepData, currentDate);

    if (currentDate >= selectedDate) {
      clearInterval(intervalID);
      intervalID = null;
      startBtn.disabled = false;
      selector.disabled = false;
      Notiflix.Notify.warning('Yoohoo, it\'\s time');
    }
  }, 1000);
}

function getMarckupData(objStepData, currentDate) {
  const { days, hours, minutes, seconds } = objStepData;

  if (currentDate < selectedDate) {
    console.log(currentDate.getTime(), selectedDate.getTime());
    refsData.days.textContent = addLeadingZero(days);
    refsData.hours.textContent = addLeadingZero(hours);
    refsData.minutes.textContent = addLeadingZero(minutes);
    refsData.seconds.textContent = addLeadingZero(seconds);
  }
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  console.log({ days, hours, minutes, seconds });
  return { days, hours, minutes, seconds };
}

function addLeadingZero(item) {
  return item.toString().padStart(2, '0');
}
