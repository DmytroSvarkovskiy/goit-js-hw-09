import Notiflix from 'notiflix';
const form=document.querySelector('.form')
const firstDelay = document.querySelector('[name="delay"]');
const step = document.querySelector('[name="step"]');
const amount = document.querySelector('[name="amount"]');

let startStep = 0;


function createPromise(position, delay) {
  position = startStep;
  delay = firstDelay.value;
  const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        if (shouldResolve) {
          resolve({ position, delay });
        } reject
          ({ position, delay });
       }, delay); 
    }
   )} 
 

const onSubmitClick = event => {
  event.preventDefault();
   for (let i = 0; i < amount.value; i += 1) {
      startStep += 1; 
   
    createPromise().then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }).catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
        })
    }
  startStep = 0;
} 
    

form.addEventListener('submit', onSubmitClick)
