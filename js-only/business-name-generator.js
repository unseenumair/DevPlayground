const n1_1 = "Crazy";
const n1_2 = "Amazing";
const n1_3 = "Fire";

const n2_1 = "Foods";
const n2_2 = "Engines";
const n2_3 = "Burgers";

const n3_1 = "Bros";
const n3_2 = "Limited";
const n3_3 = "Hub";

let random, n1, n2, n3, name;

// n1
random = Math.random();

if (random < 0.33){
	n1 = n1_1;
}

else if (random < 0.66){
	n1 = n1_2;
}

else if (random < 0.99){
	n1 = n1_3;
}

else{
	n1 = "";
}

// n2
random = Math.random();

if (random < 0.33){
	n2 = n2_1;
}
else if (random < 0.66){
	n2 = n2_2;
}

else if (random < 0.99){
	n2 = n2_3;
}

else{
	n2 = "";
}

// n3
random = Math.random();

if (random < 0.33){
	n3 = n3_1;
}

else if (random < 0.66){
	n3 = n3_2;
}

else if (random < 0.99){
	n3 = n3_3;
}

else{
	n3 = "";
}

// Shuffling of name
random = Math.random();

if ((random < 0.55) && (n1 !== "") && (n2 !== "")){
	name = `${n1} ${n2}`;
}

else if ((random < 0.1) && (n2 !== "") && (n3 !== "")){
	name = `${n2} ${n3}`;
}

else{
	name = `${n1} ${n2} ${n3}`
}

// Result
console.log(name.trim());
