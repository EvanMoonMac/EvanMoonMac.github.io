function roll(){
    const numDice = document.getElementById("diceNum").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");  
    const values = [];
    const images = [];

    for(let i = 0; i < numDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png">`);

    }

    diceResult.textContent = `You've rolled: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}


