import Notiflix from 'notiflix';


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    
  } else {
    
  }
}

const submit = document.querySelector('[type="submit"]');
const form=document.querySelector('.form')
console.log();

const onSubmitClick = event => {
  event.preventDefault();
  
}
submit.addEventListener('click', onSubmitClick )