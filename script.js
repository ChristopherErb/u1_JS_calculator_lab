/*
*****Whiteboarding*****
Writing all items in plain english for how to complete problem
make a screen
math operators
inputs
decimal optiions
buttons (~20)
use flex/grid to style buttons



*****Pseudocoding*****
Translating whiteboarded goals into pseudocode
addeventliteners to add innertext to screen



*****RubberDucking*****
vocalizing and speaking out bugs and issues to an inanimate object to help
with problem solving


*/
let saveNum = 0;


const zeroBtn = document.querySelector('.zeroBtn')
const oneBtn = document.querySelector('.oneBtn')
const twoBtn = document.querySelector('.twoBtn')
const threeBtn = document.querySelector('.threeBtn')
const fourBtn = document.querySelector('.fourBtn')
const fiveBtn = document.querySelector('.fiveBtn')
const sixBtn = document.querySelector('.sixBtn')
const sevenBtn = document.querySelector('.sevenBtn')
const eightBtn = document.querySelector('.eightBtn')
const nineBtn = document.querySelector('.nineBtn')
const plusBtn = document.querySelector('.plusBtn')
const minusBtn = document.querySelector('.minusBtn')
const multBtn = document.querySelector('.multBtn')
const divBtn = document.querySelector('.divBtn')
const equalsBtn = document.querySelector('.enterBtn')
const decimalBtn = document.querySelector('.decimalBtn')
const clearBtn = document.querySelector('.clearBtn')


const screen = document.querySelector('.screen');

zeroBtn.addEventListener('click', () => {
    screen.innerHTML = "0";
})
// puts all number buttons into an array
const allButtons = document.querySelectorAll('.numBtn')


//Shows the number clicked on the screen
for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', () => {
      screen.innerHTML += allButtons[i].textContent;
    });
  }

//clears the screen

clearBtn.addEventListener('click', () =>
{
    screen.innerHTML = ""
    saveNum = 0;
}
)

plusBtn.addEventListener('click', () => 
{
newNum += parseFloat(screen.innerHTML)
})

equalsBtn.addEventListener('click', () =>
{
    screen.innerHTML = parseFloat(saveNum)
})








