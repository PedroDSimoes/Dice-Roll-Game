const resultEl1 = document.getElementById("result1");
const resultEl2 = document.getElementById("result2");
const totalEl = document.getElementById("total");
const historyEl = document.getElementById("history");
const balanceEl = document.getElementById("balance");
const betAmountEl = document.getElementById("betAmount");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById('dice2');
const rolls = [];

let balance = 100;
balanceEl.innerHTML = balance;

function placeBet() {
    const betAmount = parseInt(betAmountEl.value);
  
    if (betAmount > balance) {
      alert("You don't have enough money for that bet!");
      return;
    }
  
    let roll1 = Math.floor(Math.random() * 6) + 1;
    let roll2 = Math.floor(Math.random() * 6) + 1;
    let totalRoll = roll1 + roll2;
  
    resultEl1.innerHTML = "You rolled a " + roll1 + " on dice number 1!";
    resultEl2.innerHTML = "You rolled a " + roll2 + " on dice number 2!";
    totalEl.innerHTML = "Total: " + totalRoll;
  
    rolls.push(roll1, roll2); // add rolls to the array
    updateHistory(); // update history with the new rolls
  
    if (totalRoll >= 7) {
      alert("You've rolled a " + totalRoll + " and you won $" + betAmount * 2 + "!");
      balance += betAmount;
    } else {
      alert("You'ved rolled a " +totalRoll + " and you lost your bet.");
      balance -= betAmount;
    }
    balanceEl.innerHTML = balance;

    if (roll1 === 1) {
        dice1.innerHTML = "🎲 1️⃣";
    } else if (roll1 === 2) {
        dice1.innerHTML = "🎲 2️⃣";
    } else if (roll1 === 3) {
        dice1.innerHTML = "🎲 3️⃣";
    } else if (roll1 === 4) {
        dice1.innerHTML = "🎲 4️⃣";
    } else if (roll1 === 5) {
        dice1.innerHTML = "🎲 5️⃣";
    } else if (roll1 === 6) {
        dice1.innerHTML = "🎲 6️⃣";
    }

    
    if (roll2 === 1) {
        dice2.innerHTML = "🎲 1️⃣";
    } else if (roll2 === 2) {
        dice2.innerHTML = "🎲 2️⃣";
    } else if (roll2 === 3) {
        dice2.innerHTML = "🎲 3️⃣";
    } else if (roll2 === 4) {
        dice2.innerHTML = "🎲 4️⃣";
    } else if (roll2 === 5) {
        dice2.innerHTML = "🎲 5️⃣";
    } else if (roll2 === 6) {
        dice2.innerHTML = "🎲 6️⃣";
    }

  }

function rollDice1() {
    const result = Math.floor(Math.random() * 6) + 1;
    rolls.push(result);
    resultEl1.innerHTML = "You rolled a " + result + " on dice number 1!";
    updateTotal();
  }
  
  function rollDice2() {
    const result = Math.floor(Math.random() * 6) + 1;
    rolls.push(result);
    resultEl2.innerHTML = "You rolled a " + result + " on dice number 2!";
    updateTotal();
  }
  

function updateTotal() {
  const total = rolls.reduce((acc, curr) => acc + curr, 0);
  totalEl.innerHTML = "Total: " + total;
}

function updateHistory() {
  const roll1 = rolls[rolls.length - 2];
  const roll2 = rolls[rolls.length - 1];
  const total = roll1 + roll2;
  const li = document.createElement("li");
  li.innerHTML = `Roll ${rolls.length / 4}: <br>
   Dice 1: ${roll1}, Dice 2: ${roll2}<br> Total: ${total}`;
  historyEl.appendChild(li);
}
  
  
  
  