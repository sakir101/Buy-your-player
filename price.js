const playerPrice = document.getElementById('player-price');

const playerExpense = document.getElementById('player-expense');


const managerPrice = document.getElementById('manager-price');
let managerPriceValue = parseInt (managerPrice.value);
const coachPrice = document.getElementById('coach-price');
let coachPriceValue = parseInt (coachPrice.value);
 const totalPrice = document.getElementById('total-price');
 let totalPriceValue = totalPrice.innerText;

 document.getElementById('player-price-cal').addEventListener('click',function(){
    let playerPriceValue = parseInt (playerPrice.value);
    if(playerPrice.value == ""){
        alert("Input Number");
    }

    else{
        const totalPlayerPrice = playerPriceValue * 5;
        playerExpense.innerText = totalPlayerPrice;
    }
    
 })