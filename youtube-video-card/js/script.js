function main(destination, duration, title, cName, views, old){

	if ( duration.indexOf(":") === -1 ){
		duration += ":00";
	}

	if ( views % 1000 === 0){
	
		if ( views % 10000000 === 0){
			views = views/10000000 + "M"; 
		}
		
		else {
			views = views/1000 + "K"; 
		}
	}

	if ( old < 30 ){
		old += " days";
	}
	
	else if ( old < 365 ){
		old = Math.round(old/30) + " months";
	}

	else {
		old = Math.round(old/365) + " years";
	}

	let card = `<section class="card">
				<div class="thumbnail" aria-label="Invalid URL" style="background: url(${destination}); background-size: cover;">
					<time>${duration}</time>
				</div>
				<div class="info">
					<p>${title}</p>
					<div>
						<span id="channelName">${cName}</span> <span class="dot">.</span> <span id="views">${views} views</span> <span class="dot">.</span> <span id="old">${old} ago</span>
					</div>
				</div>
				<div class="menu-icon">
					<span>...</span>
				</div>
			</section>`
			
	document.querySelector("main").insertAdjacentHTML("beforeend", card);
}

let n;

while (true){
	n = prompt("How Many Cards you wanna See?");

	if (n === null){
		alert("User Cancelled the Input");
		throw new Error("User Cancelled the Input");
	}	

	else if (n.trim() === "" || isNaN(n) || n.startsWith("-")){
		alert("Invalid Input. Please Enter a Number");
		continue
	}
	
	n = Number(n);
	break;
}

for (let i = 0; i < n; i++){
	main("/thumbnail.webp" , "30:00", "JS Video#100 | Sigma MERN Stack Dev Course , Rate it", "CodeWithHarry", "100000", "45");
}

/*
main("https://i.ytimg.com/vi/KtL-SQ20Q0s/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBY2BzrvQvf05RX_uINJMCgcuTKhQ", "6:15", "JS Video#75 | Sigma MERN Stack Dev Course", "ProgrammingWithHarry", "190", "10");
main("/thumbnail.webp" , "30:07", "JS Video#100 | Sigma MERN Stack Dev Course , Rate it", "ProgrammingWithHarry", "100000", "45");
main("https://i.ytimg.com/vi/hu8j0XrpMJY/hqdefault.jpg?sqp=-oaymwEnCOADEI4CSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBrNnRQ8hkmIwm5zkgDppeZrguitQ", "2", "JS Video#5 | Sigma MERN Stack Dev Course", "CodingWithHarry", "1000000000", "366");
main("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8xJr2JcP5kf1UYBEJ_JILRizKx0rW0WlqiQ&s", "2", "JS Video#5 | Sigma MERN Stack Dev Course", "CodingWithHarry", "1000", "770");
*/
