const  items  = document.querySelectorAll(".item");

const flex = document.querySelector(".flex")




function test(some){
	console.log(some)
}

items.forEach( item => 
	item.addEventListener("click", test())
)




// function japan(){
// 	for(let i=1 ;  i <= 33 ; i++){
// 		let box = `<div class=item><img class="img-thumbnail frontImg" src="https://res.cloudinary.com/jester070993/image/upload/v1563049023/thailand17/full/11.jpg">
// 		</div> `
// 		flex.appendChild(box)
// 	}
// }

function test() {
		let box = `<div class=item><img class="img-thumbnail frontImg" src="https://res.cloudinary.com/jester070993/image/upload/v1563049023/thailand17/full/11.jpg">
		</div> `
		flex.appendChild(box)
}


// https://res.cloudinary.com/jester070993/image/upload/v1562979565/Japan%20%2718/thumb/33.jpg