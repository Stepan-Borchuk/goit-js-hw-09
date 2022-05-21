import { Notify } from 'notiflix/build/notiflix-notify-aio';

Notify.init({
  width: '280px',
  position: 'center-center', // 'right-top' - 'right-bottom' - 'left-top' - 'left-bottom' - 'center-top' - 'center-bottom' - 'center-center'
  timeout: 10000,
})

const refs = {
  timer: document.querySelector('.timer'),
  delay: document.querySelector('input[name=delay]'),
  step: document.querySelector('input[name=step]'),
  amount: document.querySelector('input[name=amount]'),
  submitBtn: document.querySelector('button')
} 

refs.submitBtn.addEventListener('mouseover', () => {
  if (refs.delay.value <= 0 || refs.amount.value <= 0 || refs.step.value <= 0) {
    Notify.failure("Enter positive Values");
    refs.submitBtn.disabled = true;
    setTimeout(()=>{refs.submitBtn.disabled = false}, 1000)
  }
})



// ---- працюэ без промысу----------


// refs.submitBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const firstDelay = Number(refs.delay.value);
//   const amount = Number(refs.amount.value);
//   const delayStep = Number(refs.step.value);
//   refs.submitBtn.disabled = true;
//   let position = 0;
//   // createDelay
//   let delay = firstDelay;
//   // console.log(firstDelay);
//   // console.log(amount);
//   // console.log(delayStep);
  

//   const interval = setInterval(() => {

//     if (position === amount) {
//       clearInterval(interval);
//       refs.submitBtn.disabled = false;
//       return
//     }
//     // console.log(delay += delayStep);
//     position += 1
//     delay += delayStep;
//     // console.log(position);
//     // console.log(delay);

//     createPromise(position, delay)
    
//   }, delay)
  
// });


// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // console.log('✅ Fulfille');
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

//     // return { position, delay }
//   } else {
//     // console.log('❌ Rejected');
//     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//     // return { position, delay }
//   }
// }

// -------- ^ працюэ без промысу ^ --------------








// ----------- РОБОЧИЙ ЗРАЗОК ------------ //

// function fetchUserFromServer () {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for `);

    
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = Math.random() > 0.3;;

//       if (isSuccess) {
//         resolve(`success value ${position}`);
//       } else {
//         reject(`error ${position}`);
//       }
   
//   });
// };

// let position = 0;
// const interval = setInterval(() => {
//   position += 1;
//   if (position === 12) {
//     clearInterval(interval);
//   }
// fetchUserFromServer(`Mango ${position}`)
//   .then(user => console.log(user))
//   .catch(error => console.error(error));

// }, 2000)
  


// ---------------- варыант 1 ------

// function createPromise() {
//   return new Promise(() => {
//     const shouldResolve = Math.random() > 0.3;
//     if (shouldResolve) {
//       // console.log('✅ Fulfille');
//       // resolve('resolve')
//       Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);

//       // resolve { position, delay }
//     } else {
//       // console.log('❌ Rejected');
//       // reject ('rerject')
//       Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
//     }
//   })
 
// }

// refs.submitBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   const firstDelay = Number(refs.delay.value);
//   const amount = Number(refs.amount.value);
//   const delayStep = Number(refs.step.value);
//   refs.submitBtn.disabled = true;
//   let position = 0;
//   // createDelay
//   let delay = firstDelay;
//   // console.log(firstDelay);
//   // console.log(amount);
//   // console.log(delayStep);
//   // console.log(delay);

//   const interval = setInterval(() => {

//     if (position === amount) {
//       clearInterval(interval);
//       refs.submitBtn.disabled = false;
//       return
//     }
//     // console.log(delay += delayStep);
//     position += 1
//     delay += delayStep;
//     // // console.log(delay);

//     createPromise().then(({ position, delay }) => {
//       console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//     }).catch(({ position, delay }) => {
//       console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//     })
    

//   }, delay)
// });
  


// ---------------- варыант 2 ------


// refs.submitBtn.addEventListener('click', (e) => {
//   e.preventDefault();

// function fetchUserFromServer () {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for `);

    
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = Math.random() > 0.3;;

//       if (isSuccess) {
//         resolve(`success value ${position}`);
//       } else {
//         reject(`error ${position}`);
//       }
   
//   });
// };



//  const firstDelay = Number(refs.delay.value);
//   const amount = Number(refs.amount.value);
//   const delayStep = Number(refs.step.value);
//   // refs.submitBtn.disabled = true;
//   let position = 0;
//   let delay = firstDelay;


// const interval = setInterval(() => {
  
//   if (position === amount) {
//     clearInterval(interval);
//     refs.submitBtn.disabled = false;
//       return
//   }

//   position += 1;
//   delay += delayStep;

//   console.log(delay);

//   fetchUserFromServer(`Mango ${position}`)
//     .then(user => console.log(user))
//     .catch(error => console.error(error));
  

// }, delay)
//   console.log(delay);
// });

// --------- варыант 3 ------



// refs.submitBtn.addEventListener('click', (e) => {
//   e.preventDefault();

  
// const firstDelay = Number(refs.delay.value);
//   const amount = Number(refs.amount.value);
//   const delayStep = Number(refs.step.value);
//   refs.submitBtn.disabled = true;
//   let position = 0;
//   // createDelay
//   let delay = firstDelay;
//   // console.log(firstDelay);
//   // console.log(amount);
//   // console.log(delayStep);
  

//   const interval = setInterval(() => {

//     if (position === amount) {
//       clearInterval(interval);
//       refs.submitBtn.disabled = false;
//       return
//     }
//     // console.log(delay += delayStep);
//     position += 1
//     delay += delayStep;
//     console.log(position);
//     console.log(delay);

//     createPromise(position, delay).then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
//   }).catch(({ position, delay }) => {
//     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
//     })

//   }, delay)

//   // console.log(position);
//   //   console.log(delay);



// })
  
  



// function createPromise() {
//   return new Promise((resolve, reject) => {
//   const isSuccess = Math.random() > 0.3;
//   if (isSuccess) {
//     resolve({ position, delay })
//   } 
//     reject({ position, delay })
//   }
//     );
//   }

// ------- варіант 4 --------------

// const isSuccess = true;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve("Success! Value passed to resolve function");
//     } else {
//       reject("Error! Error passed to reject function");
//     }
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// const delay = 1000;
// // const isSuccess = Math.random() > 0.3;
// let position = 1;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (isSuccess) {
//       resolve({ position, delay });
//     } else {
//       reject({ position, delay });
//     }
//   }, delay);
// });

// createPromise(position, delay).then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
//   }).catch(({ position, delay }) => {
//     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
//   });



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    // setTimeout(() => { 
       if (shouldResolve) {
      resolve({ position, delay });
    } else {
      reject({ position, delay });
    }
    // }, delay)
   })  
}

// console.log(position)
// console.log(delay)
//   let delay = 1000;
// // const isSuccess = Math.random() > 0.3;
// let position = 0;  


// setInterval(() => {

//   console.log(position)
//   console.log (delay)
  
//   position += 1;
//   delay += 1000;

  
//   createPromise(position, delay).then(({ position, delay }) => {
//     Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
//   }).catch(({ position, delay }) => {
//     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
//   });
//  console.log(position)
//   console.log (delay)

// }, delay)
 


refs.submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  
  const firstDelay = Number(refs.delay.value);
  const amount = Number(refs.amount.value);
  const delayStep = Number(refs.step.value);
  refs.submitBtn.disabled = true;
  let position = 0; 
  //   // createDelay
  //   let delay = firstDelay;
  //   // console.log(firstDelay);
  //   // console.log(amount);
  //   // console.log(delayStep);

  setTimeout(() => {
    let delay = firstDelay;
    const interval = setInterval(() => {
        if (position === amount) {
      clearInterval(interval);
      refs.submitBtn.disabled = false;
      return
    }

  console.log(position)
  console.log (delay)
  
  position += 1;
      delay += delayStep;

  
  createPromise(position, delay).then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
  }).catch(({ position, delay }) => {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
  });
 console.log(position)
  console.log (delay)

}, delayStep)

  }, firstDelay)


})