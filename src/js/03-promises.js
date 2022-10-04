
import Notiflix from 'notiflix';
const form=document.querySelector('.form')

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
    return new Promise((resolve, reject) => {
      setTimeout(() => { if (shouldResolve) {
          resolve({ position, delay });
        } reject
          ({ position, delay })}, delay)
    }
   )} 
 
  const onSubmitClick = event => {
    event.preventDefault();
    const stepValue = Number(document.querySelector('[name="step"]').value);
    const delayValue = Number(document.querySelector('[name="delay"]').value);
    const amount = Number(document.querySelector('[name="amount"]').value)
    let delayOver = delayValue;
    
    for (let i = 0; i < amount; i += 1) {
    const position = i+1 ;
     createPromise(position ,delayOver).then(({ position, delay }) => {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }).catch(({ position, delay }) => {
          Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
     })
   ; delayOver+=stepValue;
    }
} 
  
form.addEventListener('submit', onSubmitClick)







// import Notiflix from 'notiflix';
// const form=document.querySelector('.form')

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//     return new Promise((resolve, reject) => {
//         if (shouldResolve) {
//           resolve({ position, delay });
//         } reject
//           ({ position, delay });
//     }
//    )} 
 
//   const onSubmitClick = event => {
//     event.preventDefault();
//     const stepValue = Number(document.querySelector('[name="step"]').value);
//     const delay = Number(document.querySelector('[name="delay"]').value);
//     const amount = Number(document.querySelector('[name="amount"]').value)
//     let delayOver = delay;
    
//     for (let i = 0; i < amount; i += 1) {
//     const position = i+1 ;
//    setTimeout(() => { createPromise(position ,delay).then(({ position, delay }) => {
//         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       }).catch(({ position, delay }) => {
//           Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//      })
//    }, delayOver); delayOver+= stepValue;
//     }
// } 
  
// form.addEventListener('submit', onSubmitClick)