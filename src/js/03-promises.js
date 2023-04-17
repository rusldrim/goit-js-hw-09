import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
const btnEl = document.querySelector('button');

let formData = {};
formEl.addEventListener('input', event => handleAddSubmitLocalStorage(event));
function handleAddSubmitLocalStorage(event) {
  formData[event.target.name] = event.target.value;
}

formEl.addEventListener('submit', event => {
  event.preventDefault();

  if (
    formEl.delay.value !== '' &&
    formEl.step.value != '' &&
    formEl.amount.value != ''
  ) {
    for (
      let i = 0,
        delayArr = Number(formData.delay),
        stepArr = Number(formData.step);
      i < formData.amount;
      i += 1, delayArr += stepArr
    ) {
      const promise = new Promise((resolve, reject) => {
        const shouldResolve = Math.random() > 0.3;
        setTimeout(() => {
          if (shouldResolve) {
            resolve();
          } else {
            reject();
          }
        }, delayArr);
      });

      promise
        .then(() => {
          Notiflix.Notify.success(
            `✅ Fulfilled promise ${i + 1} in ${delayArr}ms`
          );
        })
        .catch(() => {
          Notiflix.Notify.failure(
            `❌ Rejected promise ${i + 1} in ${delayArr}ms`
          );
        });
    }
  }
  formEl.reset();
  formEl.removeEventListener('input', handleAddSubmitLocalStorage);
});