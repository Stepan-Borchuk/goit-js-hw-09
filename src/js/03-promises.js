import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '280px',
  position: 'center-center', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  timeout: 10000,
})

const refs = {
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
  submitBtn: document.querySelector('button')
} 

refs.submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const firstDelay = refs.delay.value;
  const amount = refs.amount.value;
  const delayStep = refs.step.value;
  refs.submitBtn.disabled = true;
  let position = 0;
  // createDelay
  let delay = firstDelay;
  // console.log(firstDelay);
  // console.log(amount);
  // console.log(delayStep);
  // console.log(delay);

  const interval = setInterval(() => {

    if (position == amount) {
      clearInterval(interval);
      refs.submitBtn.disabled = false;
      return
    }
    // console.log(delay += delayStep);
    position += 1
    delay += delayStep;
    // console.log(delay);

    createPromise()

  }, delayStep)

});


function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // console.log('✅ Fulfille');
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

    return { position, delay }
  } else {
    // console.log('❌ Rejected');
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    return { position, delay }
  }
}

// createPromise(2, 1500).then(({ position, delay }) => {
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
// }).catch(({ position, delay }) => {
//   console.log(`❌ Rejected promise ${position} in ${delay}ms`);
// })

