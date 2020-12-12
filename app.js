let min = 1,
    max = 10,
    correctNum = randomWinningNum(min, max),
    guessLeft = 4;
const submitBtn = document.querySelector('#submit'),
      text = document.querySelector('#text'),
      message = document.querySelector('.paragraph'),
      game = document.querySelector('#game');

submitBtn.addEventListener('click', function(){
  let guess = parseInt(text.value);
  
  if(guess === correctNum){
    message.textContent = `${text.value} is the correct answer. Good Job!`;
    text.disabled = true;
    message.style.color = "green";
    text.style.color = 'green';
    text.style.borderColor = 'green';
    playAgain();


  } else if (isNaN(guess) || guess > max || guess < min){
    message.textContent = 'Please choose a number between 1 and 10!'
    message.style.color = 'red';
    playAgain();


  } else{
    guessLeft -= 1;

      if (guessLeft === 0){
        text.disabled = true;
        message.textContent = `Game Over! The correct answer was ${correctNum}`;
        text.style.color = 'red';
        playAgain();
      } else{
        message.style.color = 'red';
        text.style.borderColor = 'red';
        if (guess > correctNum){
          message.textContent = `Hmh, try a lower number. Guesses Left: ${guessLeft}`
        } else{
          message.textContent = `Hmh, try a higer number. Guesses Left: ${guessLeft}`
        }
      }
  }
});

game.addEventListener('mousedown', function(e){
  if(e.target.className === "play-again"){
    window.location.reload()
  }
})

function randomWinningNum(){
  return Math.floor(Math.random() * (max-min+1) + min);
}

function playAgain(){
  submitBtn.value = 'Play Again';
    submitBtn.className += 'play-again';
}