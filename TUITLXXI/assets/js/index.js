
let filter=[
	["none"],
  	["blur(2px)"],
  	["contrast(200%)"],
  	["brightness(200%)"],
  	["grayscale(100%)"],
  	["hue/'-rotate(90deg)"]
  	["invert(100%)"],
  	["opacity(30%)"],
  	["saturate(8)"],
  	["sapia(100%)"]
  ]
let currentFilter="",	output = document.getElementById("output-image"),	imgFilter=document.getElementsByClassName("img-filter"),	root=document.getElementById("root")

function update(event) {
 output.src= URL.createObjectURL(event.target.files[0])
 for(let item in imgFilter){
  imgFilter[item].src = URL.createObjectURL(event.target.files[0])
 }
}

function handsOn(){
 //-------IMAGE ELEMENT--------------------
 for(let i=0; i<filter.length; i++) {
  let img = document.createElement("img");img.id="img_"+i;img.className ="img-filter";img.style.filter=filter[i]
  img.src = output.src;
  root.appendChild(img)
   img.addEventListener("click",function(){
   	output.style.filter = this.style.filter
   })
   }
}



