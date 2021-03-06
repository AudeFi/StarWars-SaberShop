// GET THE CURRENT OPTIONS SELECTED
var current_cristal = cristal[0]; 
var current_transmitter = transmitter[0];
var current_lens = lens[0];
// COUNT THE PRICE OF THE OPTIONS SELECTED
var price_options = countPriceOption(); 
// AMOUNT OF SABERS SELECTED
var amount = 1; 
 // NUMBER OF THE PRODUCT SELECTED ON THE CURRENT PAGE
var currentNumber = 1;


var open_button = document.querySelector('.image-infos .open-close');
var amount_number = document.querySelector('.amount .nb');

// CHECK THE PAGE WHERE WE ARE AND THE COLOR
var file = document.location.href.substring(document.location.href.lastIndexOf( "/" )+1 );
var color = file.substring(0, file.length-5); 

// INITALS THE VAR DEPENDING ON THE COLOR PAGE
if (color == "bluesabers"){
	var currentProduct = blue[0];
	var global_price = blue[0].price;
}
else if (color == "redsabers"){
	var currentProduct = red[0];
	var global_price = red[0].price;
	document.querySelector('.container').style.visibility = "hidden"; // THE DEFAULT RED SABER CANNOT BE OPEN
}
else if (color == "greensabers"){
	var currentProduct = green[0];
	var global_price = green[0].price;
}
else if (color == "othersabers"){
	var currentProduct = others[0];
	var global_price = others[0].price;
}
else if (color == "specialoffer"){
	var currentProduct = exclu;
	var global_price = exclu.price;
}


// CHECK WHEN WE CLICK ON THE OPEN-CLOSE SABER BUTTON
if (color != 'basket' && color != 'specialoffer'){
	var anim_input = document.querySelector('.chk');
	anim_input.addEventListener("change", function(){
		if(anim_input.checked == true){
			console.log("check");
			document.querySelector('.open-close').innerHTML = "Fermer";
		}
		else
			document.querySelector('.open-close').innerHTML = "Ouvrir";
	});
}


// INFOS ABOUT THE SABER IN THE DOM
var saber_big_image = document.querySelector('.image-infos img');
var saber_description = document.querySelector('.image-infos .info-text');
var name_saber = document.querySelector('.choose-options .name span');
var price_saber = document.querySelector('.choose-options .var-price');


// LISTEN TO THE CLICKS AND THE CHOICE OF THE DIFFERENT OPTIONS 
if (color != "specialoffer" && color != "basket") {
	var info_cris = document.querySelector('.cristals .info span');
	var cris1 = document.querySelector('.cristals .i1');
	cris1.addEventListener('click', function(){
		changeCristal(1);
	});
	var cris2 = document.querySelector('.cristals .i2');
	cris2.addEventListener('click', function(){
		changeCristal(2);
	});
	var cris3 = document.querySelector('.cristals .i3');
	cris3.addEventListener('click', function(){
		changeCristal(3);
	});
	var cris4 = document.querySelector('.cristals .i4');
	cris4.addEventListener('click', function(){
		changeCristal(4);
	});

	var info_trans = document.querySelector('.transmitter .info span');
	var trans1 = document.querySelector('.transmitter .i1');
	trans1.addEventListener('click', function(){
		changeTransmitter(1);
	});
	var trans2 = document.querySelector('.transmitter .i2');
	trans2.addEventListener('click', function(){
		changeTransmitter(2);
	});
	var trans3 = document.querySelector('.transmitter .i3');
	trans3.addEventListener('click', function(){
		changeTransmitter(3);
	});
	var trans4 = document.querySelector('.transmitter .i4');
	trans4.addEventListener('click', function(){
		changeTransmitter(4);
	});

	var info_lens = document.querySelector('.lens .info span');
	var lens1 = document.querySelector('.lens .i1');
	lens1.addEventListener('click', function(){
		changeLens(1);
	});
	var lens2 = document.querySelector('.lens .i2');
	lens2.addEventListener('click', function(){
		changeLens(2);
	});
	var lens3 = document.querySelector('.lens .i3');
	lens3.addEventListener('click', function(){
		changeLens(3);
	});
	var lens4 = document.querySelector('.lens .i4');
	lens4.addEventListener('click', function(){
		changeLens(4);
	});
}



// LISTEN ON THE BUYING BUTTONS
if (color != "specialoffer" && color != "basket") {
	console.log("pas specia");
	var buy_button = document.querySelector('.choose-options .buy');
	buy_button.addEventListener('click', function(){
		if (sessionStorage.getItem('nbItem') != undefined) {
			var nbItem = JSON.parse(sessionStorage.getItem('nbItem'));
			nbItem = nbItem + 1;
		}
		else {
			var nbItem = 1;
		}
		sessionStorage.setItem('nbItem', JSON.stringify(nbItem));
		var a = new item(currentProduct, amount, global_price, current_cristal, current_transmitter, current_lens);
		basketItems(a);
		circleToBasket();
	});
}

if (color == "specialoffer") {
	console.log("specia");
	var aquiere_button = document.querySelector('.choose-options .aquiere');
	aquiere_button.addEventListener('click', function(){
		if (sessionStorage.getItem('nbItem') != undefined) {
			var nbItem = JSON.parse(sessionStorage.getItem('nbItem'));
			nbItem = nbItem + 1;
		}
		else {
			var nbItem = 1;
		}
		sessionStorage.setItem('nbItem', JSON.stringify(nbItem));
		var a = new item(currentProduct, 1, 15000, cristal[0], transmitter[2], lens[0]);
		basketItems(a);
		circleToBasket();
	});
}




// LISTEN ON THE PLUS AND MINUS BOUTTON FOR THE AMOUNT OF SABERS
if (color != "specialoffer" && color != "basket") {
	var plus_button = document.querySelector('.amount .plus');
	plus_button.addEventListener('click', function(){
		amount = amount + 1;
		amount_number.innerHTML = amount;
		changeToProduct(currentNumber);
	});

	var minus_button = document.querySelector('.amount .minus');
	minus_button.addEventListener('click', function(){
		if (amount > 1) {
			amount = amount - 1;
			amount_number.innerHTML = amount;
			changeToProduct(currentNumber);
		}
	});
}


// LISTEN ON THE CHANGE OF THE PRODUCTS
if (color != "specialoffer" && color != "basket") {

	var product1 = document.querySelector('.products .p1 img');
	product1.addEventListener('click', function(){
		changeToProduct(1);
	});
	var product2 = document.querySelector('.products .p2 img');
	product2.addEventListener('click', function(){
		changeToProduct(2);
	});

	if (color != "othersabers") {
		var product3 = document.querySelector('.products .p3 img');
		product3.addEventListener('click', function(){
			changeToProduct(3);
		});
		var product4 = document.querySelector('.products .p4 img');
		product4.addEventListener('click', function(){
			changeToProduct(4);
		});

		if (color == "redsabers") {
			var product5 = document.querySelector('.products .p5 img');
			product5.addEventListener('click', function(){
				changeToProduct(5);
			});
			var product6 = document.querySelector('.products .p6 img');
			product6.addEventListener('click', function(){
				changeToProduct(6);
			});
			var product7 = document.querySelector('.products .p7 img');
			product7.addEventListener('click', function(){
				changeToProduct(7);
			});
			var product8 = document.querySelector('.products .p8 img');
			product8.addEventListener('click', function(){
				changeToProduct(8);
			});
		}
	}
}




/* FONCTIONS */ 


// CHANGE THE CURRENT PRODUCT
function changeToProduct(number){
	currentNumber = number; //GET THE NEW NUMBER
	if (color == "bluesabers") {
		currentProduct = blue[number-1]; //GET THE NEW PRODUCT
		saber_big_image.src = "../resources/products/blue/"+number+"/good.png"; //CHANGE THE IMAGE
		saber_description.innerHTML = blue[number-1].text ; //CHANGE THE DESCRIPTION
		name_saber.innerHTML = blue[number-1].name ; //CHANGE THE NAME
		global_price = (blue[number-1].price + price_options) * amount; //CALCULATE THE GLOBAL PRICE
		price_saber.innerHTML = global_price ; //CHANGE THE PRICE
	}
	else if (color == "greensabers") {
		currentProduct = green[number-1];
		saber_big_image.src = "../resources/products/green/"+number+"/good.png";
		saber_description.innerHTML = green[number-1].text ;
		name_saber.innerHTML = green[number-1].name ;
		global_price = (green[number-1].price + price_options) * amount;
		price_saber.innerHTML = global_price;
		if (number == 4){ //THESE ARE THE SABERS THAT CANNOT BE OPENNED WITH THE ANIMATION
			anim_input.checked = false; //TURN OFF THE LIGHT IS IT WAS ON
			anim_input.disabled = true; //DISABLED TO TURN ON AGAIN
			document.querySelector('.container').style.visibility = "hidden"; //HIDE THE BUTTON
		}
		else {
			anim_input.disabled = false;
			document.querySelector('.container').style.visibility = "visible";
			document.querySelector('.open-close').innerHTML = "Ouvrir";
		}
	}
	else if (color == "redsabers") {
		currentProduct = red[number-1];
		saber_big_image.src = "../resources/products/red/"+number+"/good.png";
		saber_description.innerHTML = red[number-1].text ;
		name_saber.innerHTML = red[number-1].name ;
		global_price = (red[number-1].price + price_options) * amount;
		price_saber.innerHTML = global_price ;
		if (number == 1 || number == 5 || number == 7 || number == 8){
			anim_input.checked = false;
			anim_input.disabled = true;
			document.querySelector('.container').style.visibility = "hidden";
		}
		else {
			anim_input.disabled = false;
			document.querySelector('.container').style.visibility = "visible";
			document.querySelector('.open-close').innerHTML = "Ouvrir";
		}
	}
	else if (color == "othersabers") {
		currentProduct = others[number-1];
		saber_big_image.src = "../resources/products/others/"+number+"/good.png";
		saber_description.innerHTML = others[number-1].text ;
		name_saber.innerHTML = others[number-1].name ;
		global_price = (others[number-1].price + price_options) * amount;
		price_saber.innerHTML = global_price ;
		if (number == 2){
			anim_input.checked = false;
			anim_input.disabled = true;
			document.querySelector('.container').style.visibility = "hidden";
		}
		else {
			anim_input.disabled = false;
			document.querySelector('.container').style.visibility = "visible";
			document.querySelector('.open-close').innerHTML = "Ouvrir";
		}
	}

}


// COUNT THE PRICE OF ALL OPTIONS SELECTED
function countPriceOption(){
	var result = current_cristal.price + current_transmitter.price + current_lens.price;
	return result;	
};

//CHANGE THE IMAGE AND DESCRIPTIONS AND DATA WHEN WE CHANGE THE CRISTAL
function changeCristal(number){
	current_cristal = cristal[number-1];
	price_options = countPriceOption();
	info_cris.innerHTML = current_cristal.text;
	changeToProduct(currentNumber);
	for (var i = 1; i < 5; i++){ //CHANGE THE OPACITIES OF THE IMAGES
		if (i == number)
			cristal[i-1].src = "../resources/options/cris"+number+".png";
		else
			cristal[i-1].src = "../resources/options/cris"+i+"-o.png"
	}
	cris1.src = cristal[0].src;
	cris2.src = cristal[1].src;
	cris3.src = cristal[2].src;
	cris4.src = cristal[3].src;
};

//SAME WITH THE TRANSMITTER
function changeTransmitter(number){
	current_transmitter = transmitter[number-1];
	price_options = countPriceOption();
	info_trans.innerHTML = current_transmitter.text;
	changeToProduct(currentNumber);
	for (var i = 1; i < 5; i++){
		if (i == number)
			transmitter[i-1].src = "../resources/options/trans"+number+".png";
		else
			transmitter[i-1].src = "../resources/options/trans"+i+"-o.png"
	}
	trans1.src = transmitter[0].src;
	trans2.src = transmitter[1].src;
	trans3.src = transmitter[2].src;
	trans4.src = transmitter[3].src;
};

//SAME WITH THE LENS
function changeLens(number){
	current_lens = lens[number-1];
	price_options = countPriceOption();
	info_lens.innerHTML = current_lens.text;
	changeToProduct(currentNumber);
	for (var i = 1; i < 5; i++){
		if (i == number)
			lens[i-1].src = "../resources/options/lens"+number+".png";
		else
			lens[i-1].src = "../resources/options/lens"+i+"-o.png"
	}
	lens1.src = lens[0].src;
	lens2.src = lens[1].src;
	lens3.src = lens[2].src;
	lens4.src = lens[3].src;
};


// GET THE ITEMS IN THE LOCAL STORAGE TO PUT IN THE BASKET
if (color == "basket") {
	var basket_items = [];
	var nb;
	getBasketItems();
	var global_price = 0;
	var total_price = document.querySelector('.total .global-price');

	//CREATE A NEW COLUMN IN THE BASKET TABLE FOR EACH PRODUCT AND PUT THE RIGHT DATA
	for (var i = 1; i <= basket_items.length; i++) {
		newRow(i);
		var item = document.querySelector('.colums'+i+'tr'),
			item_product = item.querySelector('.product'),
			item_ref = item.querySelector('.ref'),
			item_price = item.querySelector('.price'),
			item_qua = item.querySelector('.qua'),
			item_opt = item.querySelector('.opt');

		item_product.innerHTML = "<img class='product-image' src='../resources/products/"+basket_items[i-1].product.color+"/"+basket_items[i-1].product.number+"/open.png'/>";
		item_ref.innerHTML = basket_items[i-1].product.name;
		item_price.innerHTML = basket_items[i-1].price + '<img class="currency" src="../resources/money2.png" width="8px"/>';
		item_qua.innerHTML = basket_items[i-1].amount;
		item_opt.innerHTML = '<img class="option" src="../resources/options/cris'+ basket_items[i-1].cristal.number+'.png"/><img class="option" src="../resources/options/trans'+ basket_items[i-1].transmitter.number+'.png"/><img class="option" src="../resources/options/lens'+ basket_items[i-1].lens.number+'.png"/>'
		global_price = global_price + basket_items[i-1].price;
	}

	total_price.innerHTML = global_price;

	function newRow(nb){
		var table = document.querySelector('table');
		var row = table.insertRow(i);
		row.setAttribute('class', 'colums'+nb+'tr item');
		var cell1 = row.insertCell(0);
		cell1.setAttribute('class', 'product');
		var cell2 = row.insertCell(1);
		cell2.setAttribute('class', 'ref');
		var cell3 = row.insertCell(2);
		cell3.setAttribute('class', 'opt');
		var cell4 = row.insertCell(3);
		cell4.setAttribute('class', 'qua');
		var cell5 = row.insertCell(4);
		cell5.setAttribute('class', 'price');
		var cell6 = row.insertCell(5);
		cell6.innerHTML = "X";
		cell6.setAttribute('onclick', 'removeItem('+nb+')');
	}
	
	if (basket_items.length == 0) {
		document.querySelector('.total a').style.display = "none";
	}
}


//REMOVE AN ITEM FROM THE TABLE AND THE DATA IN THE STORAGE
function removeItem(nb){
	var table = document.querySelector('table');
	row = table.deleteRow(nb);
	basket_items.splice((nb-1), 1);
	console.log(basket_items);
	sessionStorage.clear();
	sessionStorage.setItem('nbItem', basket_items.length);
	for (var i = 0; i < basket_items.length; i++) {
		var item_save = JSON.stringify(basket_items[i]);
		sessionStorage.setItem('item'+(i+1), item_save);
	}
	window.location.reload();
}


//PUT THE PRODUCT THAT WE WANT TO BUY IN THE BASKET BY PUTTING IT IN THE LOCAL STORAGE
function basketItems(item){
	var nbItem = JSON.parse(sessionStorage.getItem('nbItem'));
	var item_save = JSON.stringify(item);
	sessionStorage.setItem('item'+nbItem, item_save);
}

//GET THE ITEMS THAT WAS PRESENT IN THE LOCAL STORAGE
function getBasketItems(){
	nb = JSON.parse(sessionStorage.getItem('nbItem'));
	for (var i = 1; i <= nb; i++) {
		basket_items.push(JSON.parse(sessionStorage.getItem('item'+i)));
	}	
}

//ANIMATION ON THE BASKET WHEN WE ADD SOMETHING
var circleBuy = document.querySelector('.circle-to-basket');
function circleToBasket(){
	circleBuy.classList.add('visible');
	circleBuy.classList.add('new');
	window.setTimeout(function(){
		circleBuy.classList.remove('new');
	},2000);
};
