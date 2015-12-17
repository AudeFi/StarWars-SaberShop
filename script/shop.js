
var current_cristal = cristal[0]; 
var current_transmitter = transmitter[0];
var current_lens = lens[0];

var price_options = countPriceOption();
var amount = 1;
var currentNumber = 1;

var file = document.location.href.substring(document.location.href.lastIndexOf( "/" )+1 );
var color = file.substring(0, file.length-11);

if (color == "blue")
	var currentProduct = blue[0];
else if (color == "red")
	var currentProduct = red[0];
else if (color == "green")
	var currentProduct = green[0];
else if (color == "others")
	var currentProduct = others[0];



/* INFOS ABOUT THE SABER */
var saber_big_image = document.querySelector('.image-infos img');
var saber_description = document.querySelector('.image-infos .info-text');
var name_saber = document.querySelector('.choose-options .name span');
var price_saber = document.querySelector('.choose-options .var-price');




/* INFOS ABOUT THE OPTIONS */ 

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




/* BUTTONS */ 

var buy_button = document.querySelector('.choose-options .buy');
buy_button.addEventListener('click', function(){
	var a = new item(currentProduct, amount, current_cristal, current_transmitter, current_lens);
	basket_items.push(a);
	console.log(basket_items);
});



/*var aquiere_button = document.querySelector('.choose-options .aquiere');
aquiere_button.addEventListener('click', function(){
	var a = new item('exclu', 'exclu', 1, cristal[0], transmitter[2], lens[0]);
	basket_items.push(a);
});*/

var open_button = document.querySelector('.image-infos .open-close');
var amount_number = document.querySelector('.amount .nb');

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

var product1 = document.querySelector('.products .p1 img');
product1.addEventListener('click', function(){
	changeToProduct(1);
});
var product2 = document.querySelector('.products .p2 img');
product2.addEventListener('click', function(){
	changeToProduct(2);
});
var product3 = document.querySelector('.products .p3 img');
product3.addEventListener('click', function(){
	changeToProduct(3);
});
var product4 = document.querySelector('.products .p4 img');
product4.addEventListener('click', function(){
	changeToProduct(4);
});
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




/* FONCTIONS */ 


function changeToProduct(number){
	currentNumber = number;
	if (color == "blue") {
		currentProduct = blue[number-1];
		saber_big_image.src = "../resources/products/blue/"+number+"/good.png";
		saber_description.innerHTML = blue[number-1].text ;
		name_saber.innerHTML = blue[number-1].name ;
		price_saber.innerHTML = (blue[number-1].price + price_options) * amount ;
	}
	else if (color == "green") {
		currentProduct = green[number-1];
		saber_big_image.src = "../resources/products/green/"+number+"/good.png";
		saber_description.innerHTML = green[number-1].text ;
		name_saber.innerHTML = green[number-1].name ;
		price_saber.innerHTML = (green[number-1].price + price_options) * amount;
	}
	else if (color == "red") {
		currentProduct = red[number-1];
		saber_big_image.src = "../resources/products/red/"+number+"/good.png";
		saber_description.innerHTML = red[number-1].text ;
		name_saber.innerHTML = red[number-1].name ;
		price_saber.innerHTML = (red[number-1].price + price_options) * amount ;
	}
	else if (color == "other") {
		currentProduct = others[number-1];
		saber_big_image.src = "../resources/products/others/"+number+"/good.png";
		saber_description.innerHTML = others[number-1].text ;
		name_saber.innerHTML = others[number-1].name ;
		price_saber.innerHTML = (others[number-1].price + price_options) * amount ;
	}

}



function countPriceOption(){
	var result = current_cristal.price + current_transmitter.price + current_lens.price;
	return result;	
};


function changeCristal(number){
	current_cristal = cristal[number-1];
	price_options = countPriceOption();
	info_cris.innerHTML = current_cristal.text;
	changeToProduct(currentNumber);
	for (var i = 1; i < 5; i++){
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