function changeBG(color){
	document.body.style.backgroundColor = color;
	let t = document.getElementsByClassName('test');
	if(color == "#000000"){
	  for(let elm of t){
		 elm.style.color = "#ffffff";
	  }
	}
    else{
	  for(let elm of t){
		 elm.style.color = "black";
	  }
	}
}
