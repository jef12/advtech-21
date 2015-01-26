
function makeCircle(e){
	e = (e || event);//for older browsers
	//console.log(e);
	//make an html element not on the page yet
	var newc = document.createElement("div")
	newc.style.width="20px"
	newc.style.height="20px"
	newc.style.position = "absolute";
	//its x and y coordinate on the page are its
	//CSS left and top properties
	newc.style.left = e.clientX + "px";
	newc.style.top = e.clientY + "px";
	//add the element to the page
	document.body.appendChild(newc);
}	

	document.onmousemove=
	function(e){
		makeCircle(e);
	}