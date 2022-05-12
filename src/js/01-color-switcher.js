const startButton = document.querySelector('button[data-start]')
const stopButton = document.querySelector('button[data-stop]')
const body = document.querySelector('body')

startButton.addEventListener('click', () => {
    startButton.disabled = true
    stopButton.disabled = false
    

    timerId = setInterval(() => {
        body.style.backgroundColor = `${getRandomHexColor()}`
  
  }, 1000);

    console.log('click')
})

stopButton.addEventListener('click', () => {
    
    stopButton.disabled = true
    startButton.disabled = false
    clearInterval(timerId);
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

