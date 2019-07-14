const  items  = document.querySelectorAll(".item");

const flex = document.querySelector(".flex")


items.forEach( item => 
	item.addEventListener("click", () => {
		console.log(item)
		$(items).hide();
		createBackBtn();
		console.log(item.parentNode)
		if (item.classList.contains("japan")){
			setTimeout(japan, 500)
		}
		else if (item.classList.contains("hawaii")){
			setTimeout(hawaii, 500)
		}
		else  if (item.classList.contains("honk-kong")){
			setTimeout(honk-kong, 500)
		}
		else  if (item.classList.contains("bolivia")){
			setTimeout(bolivia, 500)
		}
		else  if (item.classList.contains("israel")){
			setTimeout(israel, 500)
		}
		else  if (item.classList.contains("thailand")){
			setTimeout(thailand, 500)
		}

	})
)

function hawaii() {
		for(let i=1 ;  i <= 24 ; i++){
		let box = document.createElement("div");
		let img  = document.createElement("img");
		box.classList.add("item");	
		img.classList.add("img-thumbnail");
		img.classList.add("frontImg");
		img.src = `https://res.cloudinary.com/jester070993/image/upload/v1563056098/hawaii16/thumb/${i}.jpg`
		box.appendChild(img);
		img.classList.add("frontImg");
		flex.appendChild(box);
	}
	
}

function japan() {
		for(let i=1 ;  i <= 33 ; i++){
		let box = document.createElement("div");
		let img  = document.createElement("img");
		box.classList.add("item");	
		img.classList.add("img-thumbnail");
		img.classList.add("frontImg");
		img.src = `https://res.cloudinary.com/jester070993/image/upload/v1562979565/Japan%20%2718/thumb/${i}.jpg`
		box.appendChild(img);
		img.classList.add("frontImg");
		flex.appendChild(box);
	}
	
}


function israel() {
		for(let i=1 ;  i <= 25 ; i++){
		let box = document.createElement("div");
		let img  = document.createElement("img");
		box.classList.add("item");	
		img.classList.add("img-thumbnail");
		img.classList.add("frontImg");
		img.src = `https://res.cloudinary.com/jester070993/image/upload/v1563048157/israel18/thumb/${i}.jpg`
		box.appendChild(img);
		img.classList.add("frontImg");
		flex.appendChild(box);
	}
	
}

function bolivia() {
		for(let i=1 ;  i <= 33 ; i++){
		let box = document.createElement("div");
		let img  = document.createElement("img");
		box.classList.add("item");	
		img.classList.add("img-thumbnail");
		img.classList.add("frontImg");
		img.src = `https://res.cloudinary.com/jester070993/image/upload/v1563048967/bolivia19/thumb/${i}.jpg`
		box.appendChild(img);
		img.classList.add("frontImg");
		flex.appendChild(box);
	}
	
}

function thailand() {
		for(let i=1 ;  i <= 33 ; i++){
		let box = document.createElement("div");
		let img  = document.createElement("img");
		box.classList.add("item");	
		img.classList.add("img-thumbnail");
		img.classList.add("frontImg");
		img.src = `https://res.cloudinary.com/jester070993/image/upload/v1563049056/thailand17/thumb/${i}.jpg`
		box.appendChild(img);
		img.classList.add("frontImg");
		flex.appendChild(box);
	}
	
}


function hongkong() {
		for(let i=1 ;  i <= 33 ; i++){
		let box = document.createElement("div");
		let img  = document.createElement("img");
		box.classList.add("item");	
		img.classList.add("img-thumbnail");
		img.classList.add("frontImg");
		img.src = `https://res.cloudinary.com/jester070993/image/upload/v1563055737/hongkong17/thumb/${i}.jpg`
		box.appendChild(img);
		img.classList.add("frontImg");
		flex.appendChild(box);
	}
	
}



function createBackBtn(){
	const btn = document.createElement("button");

	btn.classList.add("btn");
	btn.classList.add("btn-warning");
	btn.textContent = "Back"

	flex.parentNode.insertBefore(btn);

}