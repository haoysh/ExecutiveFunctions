//List of all elements in 3 categories
var all = [];
//Creating a category of animal (sample)
var animals = ['Tiger', 'Rabbit', 'Elephant', 'Lion'];
var sports = ['Soccer', 'Basketball', 'Baseball', 'Tennis', 'Football'];
var clothes = ['Skirt', 'Belt', 'Jacket', 'Jeans', 'Shoes'];
var colors = ['Yellow', 'Red', 'Blue', 'White', 'Gold', 'Green'];
var countries = ['South Korea', 'India', 'France', 'United States of America', 'China'];
//for(i = 0; i < 4; i++){
function pickAndAdd(arr, list, cat){ //arr = all, cat = category
	for(i = 0; i < 3; i++){
		var ran = Math.floor(Math.random() * list.length)
		arr.push({'name' : list[ran],
				  'category' : cat});
		list.splice(ran, 1);
	}
	//return arr;
}
pickAndAdd(all, animals, 'animal');
pickAndAdd(all, sports, 'sports');
pickAndAdd(all, clothes, 'cloth');
pickAndAdd(all, colors, 'color');
pickAndAdd(all, countries, 'country');			
var aniCount = 0; //Additionally we would need other 4 categories counts
var cloCount = 0;
var colCount = 0;
var spoCount = 0;
var couCount = 0;
var result = [];
function setTime(){
	var speed = 10; //Change this would change the display speed of each word
	var time = setInterval(startTime, speed);
	function startTime(){
		if(aniCount === 3 && cloCount === 3 && colCount === 3 &&
		   spoCount === 3 && couCount === 3){
			clearInterval(time);
			document.getElementById("name").innerHTML = "";
			document.getElementById("Type").innerHTML = '';
			proceedInput();
		} else {
			var rand = Math.floor(Math.random() * all.length);
		  
			document.getElementById("name").innerHTML = all[rand].name;
			document.getElementById("Type").innerHTML = 'Category: ' + all[rand].category;
			
			switch(all[rand].category){
				case 'animal' :
					aniCount++;
					if(aniCount == 3) result.push(all[rand].name);
					break;
				case 'cloth' :
					cloCount++;
					if(cloCount == 3) result.push(all[rand].name);
					break;
				case 'color' :
					colCount++;
					if(colCount == 3) result.push(all[rand].name);
					break;
				case 'country' :
					couCount++;
					if(couCount == 3) result.push(all[rand].name);
					break;
				case 'sports' :
					spoCount++;
					if(spoCount == 3) result.push(all[rand].name);
					break;
			}
			all.splice(rand, 1);
			//console.log(all.toString());
		}
	}
}
//Displaying the words for 2 seconds 
setTime();
//User puts an input 
function proceedInput(){
	document.getElementById("ask").innerHTML = 'What was the last item for each category?';
	var txt = document.createElement("input");
	var answer1 = txt.createElement("button");
	//var answer2 = document.createElement("input");
	//var answer3 = document.createElement("input");
	//var answer4 = document.createElement("input");
	//var answer5 = document.createElement("input");
	button.onclick = function() {
	  //var name = 
	  alert('Hello ' + name + ', nice to see you!');
	}
	document.body.appendChild(answer1) + "asdfn";
	//document.body.appendChild(answer2);
	//document.body.appendChild(answer3);
	//document.body.appendChild(answer4);
	//document.body.appendChild(answer5);
	//var x = answer1.form;
	var button = document.querySelector('button');

	
}
function myFunc(){
	var text = document.getElementById('input').value;
}
//var answer = window.confirm('Type the answers');