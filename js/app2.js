$(function(){
	//Model
	var data = {
		currentCat: null,
		adminButton: false,
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
		},
		//get form contents
		formContents: function(){
			var newName = document.getElementById('formCatName').value;
			var newImg = document.getElementById('formCatImage').value;
			var newClicks = document.getElementById('formCatClicks').value;
			console.log(newName);
			console.log(newImg);
			console.log(newClicks);
		},
		//Empty the form contents
		clearForm: function(){
			$('#formCatName').val('');
			$('#formCatImage').val('');
			$('#formCatClicks').val('');
		},
		//update cat array
		updateCats: function(){
			var newName = document.getElementById('formCatName').value;
			var newImg = document.getElementById('formCatImage').value;
			var newClicks = document.getElementById('formCatClicks').value;
			if (newName!=''){
				data.cats[data.currentCat].catName = newName;
			}
			if (newImg!=''){
				data.cats[data.currentCat].pic = newImg;
			}
			if(newClicks!=''){
				data.cats[data.currentCat].clickCount = newClicks;
			}
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
				/*
				var adminB = $("#adminbut");
				var form = $("#catForm");
				form.hide();
				adminB.hide();
				*/

				//Add Event Listener
				catHome.addEventListener('click', (function(j) {
					return function(){
						/*
						adminB.show();
						adminB.click(function(){
							view.renderAdminArea();
						});
						*/
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
		/*,

		renderAdminArea: function(){
			var form = $("#catForm");
			var cancelB = $("#cancelCat");
			var saveB = $("#saveCat");
			form.show();
			cancelB.click(function(){
				octopus.clearForm();
				form.hide();
				console.log('hide');
			})
			saveB.click(function(){
				console.log('save');
				octopus.formContents();
				octopus.updateCats();
			});
		}
*/



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




});

/*
	//Model
	var data = {
		currentCat: null,
		adminButton: false,
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

	*/