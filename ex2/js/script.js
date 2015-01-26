var div_open = false;
function makeCircleWider(){
	if (div_open){

	document.getElementsByTagName("div")[0].className="";
	div_open = false;
		//assign the div a class it didn't have before
	} else {
	
	document.getElementsByTagName("div")[0].className="final_state";
	div_open = true;
	}
	
}	

	document.getElementsByTagName("div")[0].onclick=
	function(){
		makeCircleWider();
	}