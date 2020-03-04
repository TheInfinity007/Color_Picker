
	var colorArr = [];
	var arr = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
	var preColor = "#eeeeee";
	var lists = document.querySelectorAll("li");
	var copy = document.querySelector(".copy");

	copy.addEventListener("click", function(){
		var text = document.getElementById("colorValue").innerHTML;
		var holdtext = document.querySelector("#holdtext");
		holdtext.value = text;
		holdtext.select();
		holdtext.setSelectionRange(0, 99999);
		document.execCommand("copy");
		
		this.innerText = "Copied text to clipboard";

		this.addEventListener("mouseout", function(){
			this.innerText = "Click to copy";
		});
	});


	
	document.querySelector("button").addEventListener("click", function(){
		changeBackground();		
	});

	function changeBackground(){
		var color = randColor();
		document.body.style.background = color;
		document.getElementById("colorValue").innerHTML = color;
		document.getElementById("btn").style.color = color;

		//for history of colors
		listUpdate(preColor);
		preColor = color;
	}

	function listUpdate(color){
		colorArr.unshift(color);
		if(colorArr.length > lists.length){
			colorArr.pop();
		}
		setupList();
	}

	function setupList(){
		for(var i = 0; i < colorArr.length; i++)
		{
			lists[i].innerHTML = colorArr[i];
			lists[i].classList.add("item");
			lists[i].style.background = colorArr[i];
			lists[i].addEventListener("click", function(){
				document.body.style.background = this.innerHTML;
				document.querySelector("#btn").style.background = "#000";
				document.querySelector("#btn").style.color = this.innerHTML;
				document.getElementById("colorValue").innerHTML = this.innerHTML;
			});
		}
	}

	function randColor(){
		var color = "";
		var y = genColor(color);
		return y;
	}

	function genColor(color){			
		color += arr[ Math.floor(Math.random()*16) ];
		
		if(color.length < 6){
			return(genColor(color));					
		}else if(color.length == 6)
		{
			return '#'+color;
		}
	}
