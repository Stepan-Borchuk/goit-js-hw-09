
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

    },
};

const fp = flatpickr(refs.input, options);
let timerId;

refs.startBtn.addEventListener('click', () => {
    timerId = setInterval(timer, 1000);
    refs.startBtn.disabled = true
});

refs.startBtn.addEventListener('mouseover', () => {
    veryfyDate()
});
    
refs.input.addEventListener('input', () => {
    veryfyDate()
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

    
    function addLeadingZero(value) {
    return String(value).padStart(2, '0');
    
    }
    
    console.log ((ms - 1000) <= 0)

    if ((ms - 1000) <= 0) {
        clearInterval(timerId);
        refs.startBtn.disabled = false
    }

}



function timer() {
    const today = Date.now();
    const deadLine = new Date(fp.selectedDates);
   const ms = deadLine - today;
    convertMs(ms); 
};

function veryfyDate() {
         if (new Date(fp.selectedDates) <= Date.now()) {
        Notify.warning('Please choose a date in the futur');
        refs.startBtn.disabled = true;
    

    } else {
      refs.startBtn.disabled = false  
    }
   
}



 




