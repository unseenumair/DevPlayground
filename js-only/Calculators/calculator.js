function give_number(order){
	let n;

	while (true){
		n = prompt(`Enter ${order} NUMBER`).trim();

		if (n === null){
			alert("User Cancelled the Input.");
			throw new Error("User Cancelled the Input.");
		}

		else if (n.trim() === "" || isNaN(n)){
			alert("Invalid Input. Enter a Valid Number.");
			continue;
		}

		n = Number(n);
		break;
	}

	return n;
}

let n1, n2, op, result;
let operators = ["+", "-", "*", "%", "/", "**"];

n1 = give_number("First");
op = prompt("Enter Operator").trim();
n2 = give_number("Second");

switch(op){
	case "+":
		result = n1 + n2;
		break;
	case "-":
		result = n1 - n2;
		break;
	case "*":
		result = n1 * n2;
		break;
	case "%":
		result = n1 % n2;
		break;
	case "**":
		result = n1 ** n2;
		break;
	case "/":
		if (n2 === 0){
			result = "undefined / infinity";
		}
		else{
			result = n1 / n2;
		}
		break;
	default:
		alert(`Operator not Found. Currently, We Just Support these : \n ${operators.join(" , ")}`)
}

alert(`${n1} ${op} ${n2} = ${result}`);
