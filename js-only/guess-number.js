let Secret_Number = Math.floor(Math.random() * 100) + 1;
let guess;
let guess_number = 0; // Initialize guess counter

do {
    guess = Number(prompt("Guess a Number. It is b/w 1 & 100."));
    guess_number++;
    if (Number.isNaN(guess)){
        alert("Invalid Input. Please enter a number");
    }
    else if (guess > 100 || guess < 0){
        alert("The Secret Number is not greater than 100. It is b/w 1 & 100.");
    }
    else if(guess > Secret_Number){
        alert("It is too high");
    }
    else if(guess < Secret_Number){
        alert("It is too low");
    }
    else {
        alert(`Congratulations! . You have guessed in ${guess_number} tries . It is ${Secret_Number}`);
    }
} while (guess !== Secret_Number);
