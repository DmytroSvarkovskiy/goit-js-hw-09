import Notiflix from 'notiflix';

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const start = document.querySelector('[data-start]');
const input = document.querySelector('#datetime-picker');
const daysScr = document.querySelector('[data-days]');
const hoursScr = document.querySelector('[data-hours]');
const minutesScr = document.querySelector('[data-minutes]');
const secondsScr = document.querySelector('[data-seconds]');
start.setAttribute('disabled', null);
let timerId = null;

const options = {
    enableTime: true,
    enabledata: false,
    time_24hr: true,
    defaultDate: Date.now(),
    minuteIncrement: 1,
    onClose(selectedDates) {
      console.log(selectedDates[0]);
      if (selectedDates[0] < Date.now()) {
          start.setAttribute('disabled', null) & Notiflix.Notify.failure("Please choose a date in the future");
      }
        else start.removeAttribute('disabled');  
    }, 
};
const dataPickr = new flatpickr(input, options);

const convertMs=ms=> {
        ms = dataPickr.selectedDates[0] - Date.now();
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
        const days = Math.floor(ms / day);
        const hours = Math.floor((ms % day) / hour);
        const minutes = Math.floor(((ms % day) % hour) / minute);
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
        return { days, hours, minutes, seconds }
};
        
const addLeadingZero=value=> {
        return String(value).padStart(2,0)};
        
const onStartClick=()=>{
        start.setAttribute('disabled', null);
            
        timerId = setInterval(() => {
        const timeTo = convertMs();
        const { days, hours, minutes, seconds } = timeTo;
            if (days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0)
            { clearInterval(timerId) }       
        daysScr.textContent = addLeadingZero(days);
        hoursScr.textContent = addLeadingZero(hours);
        minutesScr.textContent = addLeadingZero(minutes);
        secondsScr.textContent = addLeadingZero(seconds);
        }, 1000);
        };
        start.addEventListener('click', onStartClick);