const randomNum = Math.floor(Math.random() * 100) + 1;
const buttonGuess = document.querySelector('.submit')
const inputBox = document.querySelector('.textbox')
const guessList = document.querySelector('.guessList')
let guess1 = document.querySelector('#guess1')
let guess2 = document.querySelector('#guess2')
let guess3 = document.querySelector('#guess3')
let guess4 = document.querySelector('#guess4')
let guess5 = document.querySelector('#guess5')
let buttonReset = document.querySelector('.resetGame')
let game = document.querySelector('#game')
let gameTitle = document.querySelector('.gameTitle')
let subTitle = document.querySelector('.subTitle')
let count = 0
let tries = 0
let reset = document.querySelector('.hello')
buttonReset.style.display = 'none'

buttonGuess.addEventListener('click', function(){
    count++
    tries++
    if(inputBox.value == NaN || inputBox.value > 100 || inputBox.value < 1){
        gameTitle.textContent = String('Please Enter A Number Between 1-100')
    }else if(count == 5 && inputBox.value != randomNum){
        gameTitle.textContent = String(`Game Over! The number was ${randomNum}. Better luck next try!`)
        subTitle.textContent = String('')
        game.removeChild(inputBox)
        game.removeChild(buttonGuess)
        buttonReset.style.display = 'block'
    }else if(inputBox.value == randomNum){
        gameTitle.textContent = String(`Congratulations You Win! The number was ${randomNum}!`)
        game.removeChild(subTitle)
        game.removeChild(inputBox)
        game.removeChild(buttonGuess)
        buttonReset.textContent = String('Play Again')
        buttonReset.style.display = 'block'
    }else if(inputBox.value - randomNum < 11 & inputBox.value - randomNum > 0){
        gameTitle.textContent = String('You Are Close!')
        subTitle.textContent = String('Guess slightly lower!')
    }else if(randomNum - inputBox.value < 11 & randomNum - inputBox.value > 0){
        gameTitle.textContent = String('You Are Close!')
        subTitle.textContent = String('Guess slightly higher!')    
    } else if(inputBox.value - randomNum < 21 & inputBox.value - randomNum > 0){
        gameTitle.textContent = String('You Are Cold')
        subTitle.textContent = String('Guess lower')
    } else if(randomNum - inputBox.value < 21 & randomNum - inputBox.value > 0){
        gameTitle.textContent = String('You Are Cold')
        subTitle.textContent = String('Guess higher')
    }else if(inputBox.value - randomNum > 20){
        gameTitle.textContent = String('You Are Frozen')
        subTitle.textContent = String('Guess way lower!')
    }else if(randomNum - inputBox.value > 20){
        gameTitle.textContent = String('You Are Frozen')
        subTitle.textContent = String('Guess way higher!')
    }
    
    if(tries == 1 ){
        guess1.textContent = Number(inputBox.value)
    }
    if(tries == 2){
        guess2.textContent = Number(inputBox.value)
    }
    if(tries == 3){
        guess3.textContent = Number(inputBox.value)
    }
    if(tries == 4){
        guess4.textContent = Number(inputBox.value)
    }
    if(tries == 5){
        guess5.textContent = Number(inputBox.value)
    }
})

console.log(randomNum)