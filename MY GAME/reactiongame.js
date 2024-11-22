const message=document.getElementById('message');
const box = document.getElementById('box');
const reactionTime=document.getElementById('reactionTime');
let startTime; 

function getRandomDelay() {
  return Math.random() * 3000 + 1000; 
}

function showBox() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); 
  box.style.backgroundColor = randomColor;
  box.style.display = 'block';
  startTime = new Date().getTime(); 
}

function startGame() {
  box.style.display = 'none'; 
  message.textContent = "Get ready...";
  reactionTimeDisplay.textContent = '-';

  
  setTimeout(() => {
    message.textContent = "Click the box!";
    showBox();
  }, getRandomDelay());
}

box.addEventListener('click', () => {
  const endTime = new Date().getTime(); 
  const reactionTime = endTime - startTime; 
  reactionTimeDisplay.textContent = reactionTime;
  box.style.display = 'none'; 
  message.textContent = "Good job! Click 'Start' to play again.";
});

startButton.addEventListener('click', startGame);