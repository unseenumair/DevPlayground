let number;

while (true){
	let n;
	n = prompt("Enter a Number to Calculate its FACTORIAL");

	if (n === null){
		alert("User Cancelled the Input.");
		throw new Error("User Cancelled the Input.");
	}

	else if (n.trim() === "" || isNaN(n) || n.startsWith("-")){
		alert("Invalid Input. Enter a Valid NUMBER.");
		continue;
	}
	
	else if (Number(n) === 0){
		alert("Can't Calculate Factorial of 0");
		continue;
	}

	number = Number(n);
	break;
}

let arr = [];

for (let i = number; !(i === 0); i--){
	arr.push(i);
}

let factorial = arr.reduce((a,b)=>{
	return a*b;
});

alert(`${number}! = ${factorial}`);
