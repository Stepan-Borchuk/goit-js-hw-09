
import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]'),
    input: document.querySelector('input'),
    startBtn: document.querySelector('button')
};

const options = {
    enableTime: true,
    // inline: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        // deadLine = new Date(`${selectedDates}`);
        // console.log(deadLine);
        console.log(selectedDates[0]);
        // return selectedDates[0];
    },
};

const fp = flatpickr(refs.input, options);
  
refs.startBtn.addEventListener('click', () => setInterval(timer, 1000));

refs.input.addEventListener('input', () => {
    
    if (new Date(fp.selectedDates) <= Date.now()) {
        Notify.warning('Please choose a date in the futur');
        refs.startBtn.disabled = true
    } else {
      refs.startBtn.disabled = false  
    }
})

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
  
    refs.days.textContent = days;
    refs.hours.textContent = hours;
    refs.minutes.textContent = minutes;
    refs.seconds.textContent = seconds;
//   return { days, hours, minutes, seconds };
    
    function addLeadingZero(value) {
    return String(value).padStart(2, '0');
}

}

function timer() {
    const today = Date.now();
    const deadLine = new Date(fp.selectedDates);
    const ms = deadLine - today;
    convertMs(ms);  
};




