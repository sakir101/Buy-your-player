const playerOne = document.getElementById('player-One');
const playerTwo = document.getElementById('player-Two');
const playerThree = document.getElementById('player-Three');
const playerFour = document.getElementById('player-Four');
const playerFive = document.getElementById('player-Five');
const playerSix = document.getElementById('player-Six');
const playerSeven = document.getElementById('player-Seven');
const playerEight = document.getElementById('player-Eight');
const playerNine = document.getElementById('player-Nine');
const playerList = document.getElementById('player-list');

let playerOneName = playerOne.innerText;
let playerTwoName = playerTwo.innerText;
let playerThreeName = playerThree.innerText;
let playerFourName = playerFour.innerText;
let playeFiveName = playerFive.innerText;
let playerSixName = playerSix.innerText;
let playerSevenName = playerSeven.innerText;
let playerEightName = playerEight.innerText;
let playerNineName = playerNine.innerText;


function playerNumMax() {
    alert("Choose Only Five Players")
}

function btnDisable(btn){
    btn.setAttribute('disabled', true);
    btn.style.backgroundColor = 'gray';
}

    document.getElementById('player-one-btn').addEventListener('click', function (event) {
        
        if (playerList.childElementCount < 5) {
            const li = document.createElement('li');
            li.innerText = playerOneName;
            playerList.appendChild(li);
            btnDisable(event.target);
            
        }
        else {
            playerNumMax();
        }  
    })
    document.getElementById('player-two-btn').addEventListener('click', function (event) {
        if (playerList.childElementCount < 5) {
            const li = document.createElement('li');
            li.innerText = playerTwoName;
            playerList.appendChild(li);
            btnDisable(event.target);
        }
        else {
            playerNumMax();
        }  
    })
    document.getElementById('player-three-btn').addEventListener('click', function (event) {
        if (playerList.childElementCount < 5) {
            const li = document.createElement('li');
            li.innerText = playerThreeName;
            playerList.appendChild(li);
            btnDisable(event.target);
        }
        else {
            playerNumMax();
        }  
    })
    document.getElementById('player-four-btn').addEventListener('click', function (event) {
        if (playerList.childElementCount < 5) {
            const li = document.createElement('li');
            li.innerText = playerFourName;
            playerList.appendChild(li);
            btnDisable(event.target);
        }
        else {
            playerNumMax();
        }  
    })
    document.getElementById('player-five-btn').addEventListener('click', function (event) {
        if (playerList.childElementCount < 5) {
            const li = document.createElement('li');
            li.innerText = playeFiveName;
            playerList.appendChild(li);
            btnDisable(event.target);
        }
        else {
            playerNumMax();
        }  
    })
    document.getElementById('player-six-btn').addEventListener('click', function (event) {
        if (playerList.childElementCount < 5) {
            const li = document.createElement('li');
            li.innerText = playerSixName;
            playerList.appendChild(li);
            btnDisable(event.target);
        }
        else {
            playerNumMax();
        }  
    })
    document.getElementById('player-seven-btn').addEventListener('click', function (event) {
        if (playerList.childElementCount < 5) {
            const li = document.createElement('li');
            li.innerText = playerSevenName;
            playerList.appendChild(li);
            btnDisable(event.target);
        }
        else {
            playerNumMax();
        }  
    })
    document.getElementById('player-eight-btn').addEventListener('click', function (event) {
        if (playerList.childElementCount < 5) {
            const li = document.createElement('li');
            li.innerText = playerEightName;
            playerList.appendChild(li);
            btnDisable(event.target);
        }
        else {
            playerNumMax();
        }  
    })
    document.getElementById('player-nine-btn').addEventListener('click', function (event) {
        if (playerList.childElementCount < 5) {
            const li = document.createElement('li');
            li.innerText = playerNineName;
            playerList.appendChild(li);
            btnDisable(event.target);
        }
        else {
            playerNumMax();
        }  
    })






