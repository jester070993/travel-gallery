const  items  = document.querySelectorAll(".item");

const flex = document.querySelector(".flex")
const container = document.querySelector(".container-fluid");

let h1 = document.querySelector("h1");

let aboutBTN 

let ul 


items.forEach( item => 
	item.addEventListener("click", () => {

		$(items).fadeOut();


		if (item.classList.contains("japan")){

			setTimeout(createBackBtn, 500);

				setTimeout(createAboutBtn, 500, `<span class="bold">Duration:</span> <span class="text"> 3 weeks </span>`, `<span class="bold">Cites/Prefecture: </span><span class="text"> Tokyo, Osaka, Kagawa, Nagoya, Kyoto </span>`);


			setTimeout(japan, 500)
		}
		else if (item.classList.contains("hawaii")){
			setTimeout(createBackBtn, 500);
			setTimeout(createAboutBtn, 500, `<span class="bold">Duration:</span> <span class="text"> 2 weeks </span>`, `<span class="bold">Islands: </span><span class="text"> Kauai, Oahu </span>`);
			setTimeout(hawaii, 500)
		}
		else  if (item.classList.contains("hongkong")){
			setTimeout(createBackBtn, 500);
			setTimeout(createAboutBtn, 500, `<span class="bold">Duration:</span> <span class="text"> 2 weeks </span>`, `<span class="bold">Areas: </span><span class="text"> Kowloon, Hong Kong Island </span>`);
			setTimeout(hongkong, 500)
		}
		else  if (item.classList.contains("bolivia")){
			setTimeout(createBackBtn, 500);
			setTimeout(createAboutBtn, 500, `<span class="bold">Duration:</span> <span class="text">3 weeks </span>`, `<span class="bold">Cites: </span><span class="text"> La Paz, El Alto, Rurrenabaque, Uyuni </span>`);
			setTimeout(bolivia, 500)
		}
		else  if (item.classList.contains("israel")){
			setTimeout(createBackBtn, 500);
			setTimeout(createAboutBtn, 500, `<span class="bold">Duration:</span> <span class="text">2 weeks </span>`, `<span class="bold">Cites: </span><span class="text">Tel Aviv-Yafo, Jerusalem, Yakneam, Tiberias </span>`);
			setTimeout(israel, 500)
		}
		else  if (item.classList.contains("thailand")){
			setTimeout(createBackBtn, 500);
			setTimeout(createAboutBtn, 500, `<span class="bold">Duration:</span> <span class="text">2 weeks </span>`, `<span class="bold">Cites/Islands: </span><span class="text">Bangkok, Ko Samui, Ko Tao </span>`);
			setTimeout(thailand, 500)
		}

	})
);

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
	
		img.classList.add("frontImg");
		flex.appendChild(a);

		$(h1).fadeOut("fast", () => {
			   h1.textContent = "Hawaii"
			  $(h1).fadeIn("slow")

			   //pure jquery way to change text content, above mixed with vanilla js
			  // $(h1).html("Bolivia").fadeIn("slow");

			});
	}	
}

function japan() {
		for(let i=1 ;  i <= 33 ; i++){
			baguetteBox.run(".flex")
		let img  = document.createElement("img");
		let a = document.createElement("a");

		a.href = `https://res.cloudinary.com/jester070993/image/upload/v1563056098/Japan%20%2718/full/${i}.jpg`;
		a.classList.add("item");

		img.classList.add("img-thumbnail");
		img.classList.add("frontImg");
		img.src = `https://res.cloudinary.com/jester070993/image/upload/v1562979565/Japan%20%2718/thumb/${i}.jpg`;

		a.appendChild(img);

		img.classList.add("frontImg");
		flex.appendChild(a);

		$(h1).fadeOut("fast", () => {
			   h1.textContent = "Japan"
			  $(h1).fadeIn("slow")
			});


	}
	
}


function israel() {
		for(let i=1 ;  i <= 25 ; i++){
			baguetteBox.run(".flex")
		let img  = document.createElement("img");
		let a = document.createElement("a");

		a.href = `https://res.cloudinary.com/jester070993/image/upload/v1563056098/israel18/full/${i}.jpg`;
		a.classList.add("item");

		img.classList.add("img-thumbnail");
		img.classList.add("frontImg");
		img.src = `https://res.cloudinary.com/jester070993/image/upload/v1563048157/israel18/thumb/${i}.jpg`;

		a.appendChild(img);
		img.classList.add("frontImg");
		flex.appendChild(a);

		h1.textContent = "Israel ";

		$(h1).fadeOut("fast", () => {
			   h1.textContent = "Israel"
			  $(h1).fadeIn("slow")
			});

	}
	
}

function bolivia() {
		for(let i=1 ;  i <= 73 ; i++){
			baguetteBox.run(".flex")
		let img  = document.createElement("img");
		let a = document.createElement("a");

		a.href = `https://res.cloudinary.com/jester070993/image/upload/v1563056098/bolivia19/full/${i}.jpg`;
		a.classList.add("item");

		img.classList.add("img-thumbnail");
		img.classList.add("frontImg");
		img.src = `https://res.cloudinary.com/jester070993/image/upload/v1563048967/bolivia19/thumb/${i}.jpg`;

		a.appendChild(img);
		img.classList.add("frontImg");
		flex.appendChild(a);

		$(h1).fadeOut("fast", () => {
			   h1.textContent = "Bolivia"
			  $(h1).fadeIn("slow")

			});
	}

	
}

function thailand() {
		for(let i=1 ;  i <= 34 ; i++){
			baguetteBox.run(".flex")
		let img  = document.createElement("img");
		let a = document.createElement("a");

		a.href = `https://res.cloudinary.com/jester070993/image/upload/v1563056098/thailand17/full/${i}.jpg`;
		a.classList.add("item");

		img.classList.add("img-thumbnail");
		img.classList.add("frontImg");
		img.src = `https://res.cloudinary.com/jester070993/image/upload/v1563049056/thailand17/thumb/${i}.jpg`;

		a.appendChild(img);
		img.classList.add("frontImg");
		flex.appendChild(a);

		$(h1).fadeOut("fast", () => {
			   h1.textContent = "Thailand"
			  $(h1).fadeIn("slow")
			});
	}
	
}


function hongkong() {
		for(let i=1 ;  i <= 15 ; i++){
			baguetteBox.run(".flex")
		let img  = document.createElement("img");
		let a = document.createElement("a");

		a.href = `https://res.cloudinary.com/jester070993/image/upload/v1563056098/hongkong17/full/${i}.jpg`;
		a.classList.add("item");

		img.classList.add("img-thumbnail");
		img.classList.add("frontImg");
		img.src = `https://res.cloudinary.com/jester070993/image/upload/v1563055737/hongkong17/thumb/${i}.jpg`;

		a.appendChild(img);
		img.classList.add("frontImg");
		flex.appendChild(a);

		$(h1).fadeOut("fast", () => {
			   h1.textContent = "Hong Kong"
			  $(h1).fadeIn("slow")
			});

		// const btn = document.querySelector(".about")
		// btn.addEventListener("click", () => console.log("click test aabout btn"))
	}	
}



function clearText(){
	$(h1).fadeOut("fast", () => {
	h1.textContent = "Countries";
			  $(h1).fadeIn("slow")
			});
}

function show(){
	$(items).show();
}




function createBackBtn(){
	//creates back button to go back to country picker
	//places button above gallery
	const div = document.createElement("div");
	const btn = document.createElement("button");
	btn.classList.add("btn");
	btn.classList.add("btn-primary");
	div.classList.add("center");
	btn.textContent = "Back"
	div.appendChild(btn)
	container.insertBefore(div, flex);
	//adds click listener  to button to back to starting image grid
	 	btn.addEventListener("click", () => {
	 		//show function shows the orignal countries
			show();
			//hides button after clicked
			$(btn).hide();
			$(aboutBTN).hide();
			$(ul).hide();
			//clears h1 text
			clearText();
			//loops thru each dynamically created a (the lightbox gallery) element and sets display to none;
			let a = document.querySelectorAll("a")
			for (let i = 0 ; i <= a.length ; i++ ){
				$(a[i]).hide();
			}
	})
}

function createAboutBtn(param1, param2){
	//creates button and appends it to doc similar to back button with more functionality
	//code for about button
	const div = document.createElement("div");
	aboutBTN = document.createElement("button");

	aboutBTN.classList.add("about");

	aboutBTN.classList.add("btn");
	aboutBTN.classList.add("btn-primary");
	div.classList.add("center");
	aboutBTN.textContent = "More Info";
	aboutBTN.style.marginTop = "10px";

	div.appendChild(aboutBTN)
	container.insertBefore(div, flex);
	//code for ul that gets shows on screen when about button is clicked;
	  	    ul = document.createElement("ul")
			ul.style.display = "none"
			ul.style.maxWidth = "1000px";
			ul.style.margin = "0 auto";
			ul.style.padding = "0 ";
			ul.style.listStyle = "none";
			//creates list items to put on the ul
 		const li1 = document.createElement("li");
		const li2 = document.createElement("li");
			//listen items take html of what was passed into function
			//li act as details that are show with click
			li1.innerHTML =  param1;
			li2.innerHTML =  param2;
			//append listen items to list then to div on page
			ul.appendChild(li1)
			ul.appendChild(li2)
			div.appendChild(ul)
			container.insertBefore(div, flex); 
			//click listener toggles slide up or down for more info
	 		aboutBTN.addEventListener("click", () => {
			 	$(ul).slideToggle();
	})
}


