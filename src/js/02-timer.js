// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

import Notiflix from 'notiflix';


const selector = document.querySelector(`input[type="text"]`);
const startBtn = document.querySelector('[data-start]');


const refsData = {
  days: document.querySelector(`[data-days]`),
  hours: document.querySelector(`[data-hours]`),
  minutes: document.querySelector(`[data-minutes]`),
  seconds: document.querySelector(`[data-seconds]`),
};


let currentDate = null;
let selectedDate = null;

let disabledBtn = true;

let unixDifferenceTime = null;
let objCalculatedDataTime = null;

let intervalID = null;

const defaultMarkup = "00";

startBtn.disabled = disabledBtn;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    currentDate = new Date();
    selectedDate = selectedDates[0];

    checkValidityTime(currentDate, selectedDate);
    unixDifferenceTime = counterDifferenceTime(selectedDate);
    objCalculatedDataTime = convertMs(unixDifferenceTime);
    // GetMarkupTimer(objCalculatedDataTime);
  },
};


flatpickr(selector, options)

function checkValidityTime(currentDate, selectedDate) {
  if (currentDate < selectedDate) {
    Notiflix.Notify.success('Congratulations! Click "Start" to begin');
    startBtn.disabled = !disabledBtn;
  } else {
    Notiflix.Notify.failure('Please choose a date in the future');
    startBtn.disabled = disabledBtn;
  }
}

function counterDifferenceTime(selectedDate) {
  // let differenceTime = null;
  return intervalID = setInterval(() => {
    let differenceTime = selectedDate - new Date();
    // console.log(differenceTime);
    return differenceTime;
  }, 1000);

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

  return { days, hours, minutes, seconds };
}

function addLeadingZero(item) {
  return item.toString().padStart(2, '0');
}

function GetMarkupTimer(objCalculatedDataTime) {
  const { days, hours, minutes, seconds } = objCalculatedDataTime;
  
  if (counterDifferenceTime(currentDate, selectedDate) > 0) {
    refsData.days.textContent = addLeadingZero(days);
    refsData.hours.textContent = addLeadingZero(hours);
    refsData.minutes.textContent = addLeadingZero(minutes);
    refsData.seconds.textContent = addLeadingZero(seconds);
  } else {
    refsData.days.textContent = defaultMarkup;
    refsData.hours.textContent = defaultMarkup;
    refsData.minutes.textContent = defaultMarkup;
    refsData.seconds.textContent = defaultMarkup;
  }

};