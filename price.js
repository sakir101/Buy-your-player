const playerPrice = document.getElementById('player-price');
const playerExpense = document.getElementById('player-expense');
const managerPrice = document.getElementById('manager-price');
const coachPrice = document.getElementById('coach-price');
const totalPrice = document.getElementById('total-price');

let playerPriceValue;
let totalPlayerPrice;

document.getElementById('player-price-cal').addEventListener('click', function () {
    playerPriceValue = parseInt(playerPrice.value);
    if (playerPrice.value == "") {
        alert("Input Number");
        playerPrice.value = "";
        return;
    }

    else {
        totalPlayerPrice = playerPriceValue * 5;
        playerExpense.innerText = totalPlayerPrice;
    }

})

document.getElementById('total-cal').addEventListener('click', function () {
    let managerPriceValue = parseInt(managerPrice.value);
    let coachPriceValue = parseInt(coachPrice.value);

    if (playerPrice.value == "" || managerPrice.value == "" || coachPrice.value == "") {
        alert("Input Number");
        playerPrice.value = "";
        managerPrice.value = "";
        coachPrice.value = "";
        return;
    }

    else {
        if (typeof (totalPlayerPrice) == 'undefined') {
            alert("Please calculculate per player price first");
            return;
        }

        else {
            let totalPriceValue = managerPriceValue + coachPriceValue + totalPlayerPrice;
            totalPrice.innerText = totalPriceValue;
        }


    }

})