function show(content){
	if (content === " "){
		content = "Space";
	} // Space Key
	
	let element = `<div class="key">${content}</div>`;
	document.querySelector("#keysCont").insertAdjacentHTML("beforeend", element);	
}

document.addEventListener("keydown", (e)=>{
	show(e.key);
});

document.addEventListener("keyup", ()=>{

	document.querySelectorAll(".key").forEach(e=>{
		setTimeout(()=>{
			e.remove();
		}, 700);
	});
});
