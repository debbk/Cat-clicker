//Model
var data = {
	admin: false,
	currentCat: null,
	adminButton: false,
	cats:[
		{
			catName: "Lyam Bear",
			clickCount: 0,
			pic: 'images/cat.jpg'
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
	//Initialize current cat
	init: function() {
		//set current cat to first one
		data.currentCat = data.cats[0];

		//initialize views
		catListView.init();
		catView.init();
		adminView.init();
	},

	//get current cat
	getCurrentCat: function(){
		return data.currentCat;
	},

	//get cat names
	allCats: function() {
		return data.cats;
	},

	//set current cat
	setCurrentCat: function(catdata) {
		data.currentCat = catdata;
	},

	//increment counter
	catCounter: function() {
		data.currentCat.clickCount++;
		catView.render();
	},

	//open Admin form
	openAdmin: function(){
		data.admin = true;
		adminView.render();
	},

	//close Admin form
	closeAdmin: function(){
		data.admin = false;
		adminView.render();
	},

	//admin status
	adminStatus: function(){
		return data.admin;
	},

	//update cat values
	saveAdmin: function(newname, newimage, newclicks){
		if (newname){
			console.log('name: '+ newname);
			data.currentCat.catName = newname;
		};
		if (newimage){
			console.log('image: '+ newimage);
			data.currentCat.pic = newimage;
		};
		if (newclicks){
			console.log('clicks: '+ newclicks);
			data.currentCat.clickCount = newclicks;
		};
		data.admin = false;
		adminView.render();
		catView.render();
		catListView.render();
	}
};


//View
var catView ={
	init: function(){
		//store DOM elements
		this.selectElem = document.getElementById('selectedCat');
		this.catNameElem = document.getElementById('catName');
		this.catPicElem = document.getElementById('catPic');
		this.catCountElem = document.getElementById('catCount');

		//on Click, increment cat counter
		this.catPicElem.addEventListener('click', function() {
			octopus.catCounter();

		});
		this.render();
	},

	render: function(){
		//update the DOM elements with the values of the current cat
		//get current cat
		var currentCat = octopus.getCurrentCat();
		this.catCountElem.textContent = 'Number of clicks: '+ currentCat.clickCount;
		this.catNameElem.textContent = 'Selected cat: '+ currentCat.catName;
		this.catPicElem.src = currentCat.pic;
	}
};

var catListView ={
	init: function(){
		//store the cat list DOM element
		this.listCatsElem = document.getElementById('listCats');

		//render this view
		this.render();
	},

	render: function(){
		//render the list of cats
		var cats, eachCat, i, catHome;
		//Get the cat array
		eachCat = octopus.allCats();

		//Empty the Cat List DOM Element
		this.listCatsElem.innerHTML='';


		//cycle through the cat array and get each name
		for (i=0; i<eachCat.length; i++){
			cats = eachCat[i];
			//make a new cat list item and set its text
			catHome = document.createElement('ul');
			catHome.textContent = cats.catName;
			//Add Event Listener
			//on click, set current cat
			catHome.addEventListener('click', (function(catdata) {
				return function(){
					octopus.setCurrentCat(catdata);
					catView.render();
				};
			})(cats));
			this.listCatsElem.appendChild(catHome);
		}
	}
};

var adminView ={
	init: function(){
		//Hide form upon load
		this.catFormAdmin = document.getElementById('catForm');
		this.cancelButtonAdmin = document.getElementById('cancelCat');
		this.saveButtonAdmin = document.getElementById('saveCat');
		this.catFormAdmin.style.visibility = 'hidden';
		this.adminB = document.getElementById('adminbut');

		//Store Form Input Values
		var catNameInput, catImageInput, catClickInput;

		//Add event listener to Admin Button
		this.adminB.addEventListener('click', function(){
			octopus.openAdmin();
		});
		//Add event listener to Cancel Button
		this.cancelButtonAdmin.addEventListener('click', function(){
			console.log('close stuff');
			octopus.closeAdmin();
		});
		//Add event listener to Save Button
		this.saveButtonAdmin.addEventListener('click', function(){
			console.log('save stuff');
			catNameInput = document.getElementById('formCatName').value;
			catImageInput = document.getElementById('formCatImage').value;
			catClickInput = document.getElementById('formCatClicks').value;
			octopus.saveAdmin(catNameInput, catImageInput, catClickInput);

		});
	},

	render: function(){
		//reset form values
		this.catFormAdmin = document.getElementById('catForm');
		this.catFormAdmin.reset();
		//open Admin view if the button value is true
		var stat = octopus.adminStatus();
		if (stat){
			this.catFormAdmin.style.visibility = 'visible';
		}else{
			this.catFormAdmin.style.visibility = 'hidden';
		}
	}
};



octopus.init();





