$(function(){
	/*var animal1="Lyam Bear";
	var animal2="Micah Bear";
	//Output animal names
	$('#an1').text(animal1);
	$('#an2').text(animal2);
	//document.getElementById("an1").innerHTML=animal1;
	//document.getElementById("an2").innerHTML=animal2;

	var count =0;
	$('#cats').click(function(){
		console.log('click');
		count++;
		$('#counter1').html(+count);
	});

	$('#dog').click(function(){
		console.log('click');
		count++;
		$('#counter2').html(+count);
	});
	*/
	/*
	var count = [0,0,0,0,0];

	var catNames = [
		"Lyam Bear",
		"Micah Bear",
		"Bird",
		"Butterfly",
		"Monkey"
	];

	var catArray = [
		"images/cat.jpg",
		"images/puppy.jpg",
		"images/birds.jpg",
		"images/butterfly.jpg",
		"images/monkey.jpg"];
	*/


	//Model
	var data = {
		currentCat: null,
		cats:[
			{
				catName: "Lyam Bear",
				clickCount: 0,
				pic: "images/cat.jpg"
			},{
				catName: "Micah Bear",
				clickCount: 0,
				pic: "images/puppy.jpg"
			},{
				catName: "Bird",
				clickCount: 0,
				pic: "images/birds.jpg"
			},{
				catName: "Butterfly",
				clickCount: 0,
				pic: "images/butterfly.jpg"
			},{
				catName: "Monkey",
				clickCount: 0,
				pic: "images/monkey.jpg"
			}
		]
	};

	//Octopus
	var octopus = {
		//Change current cat
		init: function(num) {
			data.currentCat = num;
			return data.cats[num];
		},
		//get cat names
		allCats: function() {
			return data.cats;
		},
		//Load image
		imageLoad: function() {
			var img = data.cats[data.currentCat].pic;
			return img;
		},
		//Load counter
		catCounter: function() {
			var count = data.cats[data.currentCat].clickCount;
			return count;
		},
		//increment counter
		upCounter: function() {
			data.cats[data.currentCat].clickCount = data.cats[data.currentCat].clickCount + 1;
		},
		//get selected cat's name
		displayCat: function() {
			var curCat = data.cats[data.currentCat].catName;
			return curCat;
		}
	};


	//View
	var view ={
		//display list of cats
		init: function(){
			//get cats
			var eachCat = octopus.allCats();
			for (var i=0; i<eachCat.length; i++){
				var cats = eachCat[i].catName;
				var catHome = document.createElement('ul');
				catHome.textContent = cats;
				var list = $('#listCats');
				var select = $('#selectedCat');
				//Add Event Listener
				catHome.addEventListener('click', (function(j) {
					return function(){
						view.renderName(j);
						view.renderPic();
						view.renderCount();
						$('img').click(function(){
							octopus.upCounter();
							view.renderCount();
						});
					};
				})(i));
				list.append(catHome);
			}
		},
		renderName: function(j){
			var nameArea =$("#catName");
			nameArea.html('');
			octopus.init(j);
			var catName = octopus.displayCat;
			nameArea.append(catName);
		},
		renderPic: function(){
			var picArea = $('#catPic');
			picArea.html('');
			var img = document.createElement('img');
			img.src = octopus.imageLoad();
			picArea.append(img);
		},
		renderCount: function(){
			var countArea = $('#catCount');
			countArea.html('');
			var counter = octopus.catCounter();
			var content = document.createTextNode("You have clicked: ");
			countArea.append(content);
			countArea.append(counter);
		}
	};

	view.init();

	/*
	function displayName(names) {
		for (var i=0; i<names.length; i++){
			var animal = names[i];
			console.log(animal);
			//Create DOM element
			var catHome = document.createElement('div');
			catHome.textContent = animal;
			//Add Event Listener
			catHome.addEventListener('click', (function(j) {
				return function(){
					console.log(j);
					selected(j);
					loadImg(j);
					counterStuff(j);
				};
			})(i));
			document.body.appendChild(catHome);
		}
	};
	*/



	/*
	function displayName(names) {
		for (var i=0; i<names.length; i++){
			var animal = names[i];
			console.log(animal);
			//Create DOM element
			var catHome = document.createElement('div');
			catHome.textContent = animal;
			//Add Event Listener
			catHome.addEventListener('click', (function(j) {
				return function(){
					console.log(j);
					selected(j);
					loadImg(j);
					counterStuff(j);
				};
			})(i));
			document.body.appendChild(catHome);
		}
	};

	//Display selected animal name
	function selected(j) {
		document.getElementById("catName").innerHTML='You have selected: '+ catNames[j];
	}

	//Load image of selected animal
	function loadImg(j) {
		var img = document.createElement('img');
		img.src = catArray[j];
		document.getElementById('catList').appendChild(img);
	};

	//Build Counter
	function counterStuff(j){
		$('img').click(function(){
			count[j]++;
			document.getElementById("counter").innerHTML='You have clicked: '+ count[j];
		});
	}

	displayName(catNames);
	*/



});