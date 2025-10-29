let number;

while (true){
	let n;
	n = prompt("Enter a NUMBER to check either it is Even or Odd?");

	if (n === null){
		alert("User Cancelled the Input.");
		throw new Error("User Cancelled the Input.");
	}

	else if (n.trim() === "" || isNaN(n) || n.startsWith("-")){
		alert("Invalid Input. Enter a valid Number");
		continue;
	}

	number = Number(n);
	break;
}

if (number % 2 === 0){
	alert(`${number} is an EVEN Number.`);
}

else{
	alert(`${number} is an ODD Number.`);
}
