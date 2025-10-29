let age;
	
while (true){
	age = prompt("Enter your AGE: ");

	if (age === null){
		alert("User Cancelled the Input.");
		throw new Error("User Cancelled the Input!"); // Stop Further JS Exeuction and Throw Error in Console
	}
	
	else if ( (age.trim() === "") || isNaN(age) ){
		alert("Invalid Input.");
		continue;
	}
		
	age = Number(age);
	
	else if ((age.toString()).startsWith("-") || age < 10 || age > 66){
		alert("Invaid AGE. Enter Age b/w 10 & 66");
		continue;
	}

	break;
}

if ( age >= 17 && age <= 50){
    alert("You can drive.");
}

else if (age < 17 || age <= 66) {
    alert("Driving is UnSafe for you.");
}

else {
    alert("You could not drive.");
}
