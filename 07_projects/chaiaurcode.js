// let randomNumber= parseInt(Math.random()*100+1)
let randomNumber=77

const submit=document.querySelector('#subt')
const userInput=document.querySelector('#guessField') 
const guessSlot=document.querySelector('.guesses') 
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 0
let playGame = true

if(playGame){
  subt.addEventListener('click',function(e){
    e.preventDefault()
    const guess= parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please Enter a valid number')
  }
  else if(guess<1){
    alert('Please Enter a valid number more than 1')
  }else if(guess>100){
    alert('Please Enter a valid number less than 100')
  }
  else{
    prevGuess.push(guess)
    if(numGuess===10){
      displayGuess(guess)
      displayMassage(`Game over. Random number was ${randomNumber}`)
      endGame()
    }else{
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMassage(`You Guessed it right`)
    endGame()
  }else if(guess<randomNumber){
    displayMassage(`Number is TOOO Low`)
  }else if(guess>randomNumber){
    displayMassage(`Number is TOOO High`)
  }
}

function displayGuess(guess){
  userInput.value=''
  guessSlot.innerHTML +=`${guess}, `
  numGuess++;
  remaining.innerHTML=  `${10-numGuess}`
}


function displayMassage(massage){
  lowOrHi.innerHTML =`<h2>${massage}</h2>`
}

function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML=`<h2 id="newGame"> Start New</h2>`
  startOver.appendChild(p)
  playGame=false
  newGame()
} 

function newGame(){
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
  randomNumber= parseInt(Math.random()*100+1);
  prevGuess=[];
  numGuess=0;
  guessSlot.innerHTML=``;
  remaining.innerHTML=`${10-numGuess}`;
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
    playGame=true
  })
}

