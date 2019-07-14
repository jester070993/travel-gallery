const  items  = document.querySelectorAll(".item");

const flex = document.querySelector(".flex")
const container = document.querySelector(".container-fluid");

items.forEach( item => 
	item.addEventListener("click", () => {

		$(items).hide();

		setTimeout(createBackBtn, 500);

		if (item.classList.contains("japan")){
			setTimeout(japan, 500)
		}
		else if (item.classList.contains("hawaii")){
			setTimeout(hawaii, 500)
		}
		else  if (item.classList.contains("hongkong")){
			setTimeout(hongkong, 500)
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

//correct fucntion code for create dymantic gallery, works with baggete box when clicked, need to turn off filter for hover still  on, whenn
//cliedk
function hawaii() {
		for(let i=1 ;  i <= 24 ; i++){
		baguetteBox.run(".flex")
		let img  = document.createElement("img");

		let a = document.createElement("a");
		a.href = `https://res.cloudinary.com/jester070993/image/upload/v1563056098/hawaii16/full/${i}.jpg`;

		a.classList.add("item");	

		img.classList.add("img-thumbnail");
		img.classList.add("frontImg");
		img.src = `https://res.cloudinary.com/jester070993/image/upload/v1563056098/hawaii16/thumb/${i}.jpg`;

		a.appendChild(img);
		// box.appendChild(a);

		// box.appendChild(img);

		img.classList.add("frontImg");
		flex.appendChild(a);
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
		for(let i=1 ;  i <= 15 ; i++){
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
	const div = document.createElement("div");
	const btn = document.createElement("button");
	btn.classList.add("btn");
	btn.classList.add("btn-primary");
	div.classList.add("center");
	btn.textContent = "Back"
	div.appendChild(btn)

	 container.insertBefore(div, flex);

	 	btn.addEventListener("click", () => {
			show();
			hide();
	})


}


function show(){
	$(items).show();
}




// function hide(){
// 	let allPics = document.querySelectorAll(".item")
// 	console.log(allPics.length)

// 	for (let i = 0 ; i <= allPics.length ; i++ ){

// 		if (allPics[i].className == item)
// 		$(items).hide();
// 	}
	
// }