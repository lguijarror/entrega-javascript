function rollDice (maxNum){
    return Math.floor(Math.random() * maxNum) + 1;
}

const roll = rollDice(8);

console.log(roll);