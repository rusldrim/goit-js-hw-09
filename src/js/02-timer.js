import Notiflix from 'notiflix';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const ref = {
  input: document.querySelector('#datetime-picker'),
  button: document.querySelector('button[data-start'),
  days: document.querySelector('span[data-days]'),
  hours: document.querySelector('span[data-hours]'),
  minutes: document.querySelector('span[data-minutes]'),
  seconds: document.querySelector('span[data-seconds]'),
  divTimer: document.querySelector('.timer'),
  divField: document.querySelectorAll('.field'),
};

ref.button.disabled = true;
let eventTime = 0;
let differenceTime = 0;

flatpickr(ref.input, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,

  onClose(selectedDates) {
    eventTime = selectedDates[0];
    differenceTime = eventTime.getTime() - new Date().getTime();

    if (differenceTime <= 0) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    }
    ref.button.disabled = false;
  },
});

ref.button.addEventListener('click', () => handleTimer());

function handleTimer() {
  const timerId = setInterval(() => changeTime(timerId), 1000);
  ref.button.disabled = true;
}

function changeTime(timerId) {
  let currentTime = new Date();
  let distance = eventTime - currentTime;

  if (distance < 0) {
    clearInterval(timerId);
    return;
  }

  const components = convertMs(distance);
  ref.days.textContent = components.days;
  ref.hours.textContent = components.hours;
  ref.minutes.textContent = components.minutes;
  ref.seconds.textContent = components.seconds;
}


function convertMs(ms) {
 
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = pad(Math.floor(ms / day));
  
  const hours = pad(Math.floor((ms % day) / hour));
  
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
 
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, '0');
}