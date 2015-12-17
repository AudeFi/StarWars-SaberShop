var input_research = document.querySelector('.input-research');
var force_nav = document.querySelector('.force-nav');
var force_link = document.querySelector('.force-a');

if (sessionStorage.getItem('nbItem') != undefined) {
	console.log("circle");
	var circleBuy = document.querySelector('.circle-to-basket');
	circleBuy.classList.add('visible');
}


input_research.addEventListener('click',function(){
	var not_available = document.querySelector(".noresearch");
	not_available.classList.add("visible");
	window.setTimeout(function(){
		not_available.classList.remove("visible");
	}, 2000);
});

force_link.addEventListener('mouseover', function(){
	force_nav.classList.add("visible");
});

force_link.addEventListener('click', function(){
	force_nav.classList.add("visible");
});


force_nav.addEventListener('mouseleave', function(){
	force_nav.classList.remove("visible");
});


$(document).ready(function(){
	$(window).scroll(function() {
		var file = document.location.href.substring(document.location.href.lastIndexOf( "/" )+1 );
		if (file.indexOf("index.html") != -1 ){
			var video = document.querySelector('.video-section');
			var header = document.querySelector('.header-section');
			if($(window).scrollTop() > 600){
		        header.classList.remove('bg-header');
		    }
		    else{
		    	header.classList.add('bg-header');
		    }
		}
	});
});


