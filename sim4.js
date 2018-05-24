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
var userInputs = [];
/* var button = document.getElementById('show_button')
button.addEventListener('click',hideshow,false);

function hideshow() {
	document.getElementById('hidden-div').style.display = 'block'; 
	this.style.display = 'none'
}    */
function start(){
	setTime();
	//proceedInput();
}
//proceedInput();
function setTime(){
	var speed = 100; //Change this would change the display speed of each word
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

//function outputname(){
//	var x = document.getElementById("form1");
//	var y = x.elements["name"].value;
//	userInputs.push(y);
//}
//Displaying the words for 2 seconds 


//User puts an input 
function proceedInput(){
	document.getElementById("ask").innerHTML = 'What was the last item for each category?';
	var countryIn = document.createElement("form");
	var colorIn = document.createElement("form");
	var sportsIn = document.createElement("form");
	var clothesIn = document.createElement("form");
	var animalsIn = document.createElement("form");
	//answer1.setAttribute('method', "post");
	//answer1.setAttribute('action', "submit.php
	countryIn.setAttribute('id', 'form1');
	countryIn.setAttribute('action', '#');
	countryIn.setAttribute('name', 'country');
	colorIn.setAttribute('id', 'form2');
	colorIn.setAttribute('action', '#');
	colorIn.setAttribute('name', 'color');
	sportsIn.setAttribute('id', 'form3');
	sportsIn.setAttribute('action', '#');
	sportsIn.setAttribute('name', 'sports');
	clothesIn.setAttribute('id', 'form4');
	clothesIn.setAttribute('action', '#');
	clothesIn.setAttribute('name', 'cloth');
	animalsIn.setAttribute('id', 'form5');
	animalsIn.setAttribute('action', '#');
	animalsIn.setAttribute('name', 'animal');
	
	var i1 = document.createElement("input");
	i1.type = "text";
	i1.name = "user_ans1";
	i1.id = "i1";
	
	
	var s = document.createElement("input");
	s.type = "submit";
	s.value = "Submit";
	
	var c = document.createElement("p");
	c.innerHTML = "Country?";
	
	countryIn.appendChild(c);
	countryIn.appendChild(i1);
	countryIn.appendChild(s);
	
	var i2 = document.createElement("input");
	i2.type = "text";
	i2.name = "user_ans2";
	i2.id = "i2";
	//i2.setAttribute('action', "#");
	
	var s2 = document.createElement("input");
	s2.type = "submit";
	s2.value = "Submit";
	
	c = document.createElement("p");
	c.innerHTML = "Color?";
	
	colorIn.appendChild(c);
	colorIn.appendChild(i2);
	colorIn.appendChild(s2);
	
	var i3 = document.createElement("input");
	i3.type = "text";
	i3.name = "user_ans3";
	i3.id = "i3";
	//i3.setAttribute('action', "#");
	
	var s3 = document.createElement("input");
	s3.type = "submit";
	s3.value = "Submit";
	
	c = document.createElement("p");
	c.innerHTML = "Sports?";
	
	sportsIn.appendChild(c);
	sportsIn.appendChild(i3);
	sportsIn.appendChild(s3);
	
	var i4 = document.createElement("input");
	i4.type = "text";
	i4.name = "user_ans4";
	i4.id = "i4";
	//i4.setAttribute('action', "#");
	
	var s4 = document.createElement("input");
	s4.type = "submit";
	s4.value = "Submit";
	
	c = document.createElement("p");
	c.innerHTML = "Cloth?";
	
	clothesIn.appendChild(c);
	clothesIn.appendChild(i4);
	clothesIn.appendChild(s4);
	
	var i5 = document.createElement("input");
	i5.type = "text";
	i5.name = "user_ans5";
	i5.id = "i5";
	//i5.setAttribute('action', "#");
	
	var s5 = document.createElement("input");
	s5.type = "submit";
	s5.value = "Submit";
	
	c = document.createElement("p");
	c.innerHTML = "Animal?";
	
	animalsIn.appendChild(c);
	animalsIn.appendChild(i5);
	animalsIn.appendChild(s5);
	
	//document.getElementById("i1").innerHTML = 'Country?'; 
	document.getElementsByTagName('body')[0].appendChild(countryIn);
	//document.getElementById("color?").innerHTML = 'Color?'; 
	document.getElementsByTagName('body')[0].appendChild(colorIn);
	//document.getElementById("sports").innerHTML = 'Sports?'; 
	document.getElementsByTagName('body')[0].appendChild(sportsIn);
	//document.getElementById("cloth?").innerHTML = 'Cloth?'; 
	document.getElementsByTagName('body')[0].appendChild(clothesIn);
	//document.getElementById("animal?").innerHTML = 'Animal?'; 
	document.getElementsByTagName('body')[0].appendChild(animalsIn);
	//document.body.appendChild(answer1); //- not dynamic
/* 	var ans1 = document.getElementById("i1");
	var ans2 = document.getElementById("i2");
	var ans3 = document.getElementById("i3");
	var ans4 = document.getElementById("i4");
	var ans5 = document.getElementById("i5");
	
	userInputs.push(ans1.value);
	userInputs.push(ans2.value);
	userInputs.push(ans3.value);
	userInputs.push(ans4.value);
	userInputs.push(ans5.value); */
}	

//function myFunc(){
//	var text = document.getElementById('input').value;
//}
//var answer = window.confirm('Type the answers');