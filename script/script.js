

/* CHECK IF THE BASKET IS EMPTY OR NOT */
if (sessionStorage.getItem('nbItem') != undefined && sessionStorage.getItem('nbItem') != 0) {
	console.log("circle");
	var circleBuy = document.querySelector('.circle-to-basket');
	circleBuy.classList.add('visible');
}


/* SAY THAT THE RESEARCH BAR IS NOT AVAILABLE */
var input_research = document.querySelector('.input-research');
input_research.addEventListener('click',function(){
	var not_available = document.querySelector(".noresearch");
	not_available.classList.add("visible");
	window.setTimeout(function(){
		not_available.classList.remove("visible");
	}, 2000);
});


/* NAVIGATION BAR ON THE HEADER THE APPAER AND DISSAPEAR */
var force_nav = document.querySelector('.force-nav');
var force_link = document.querySelector('.force-a');
force_link.addEventListener('mouseover', function(){
	force_nav.classList.add("visible");
});
force_link.addEventListener('click', function(){
	force_nav.classList.add("visible");
});
force_nav.addEventListener('mouseleave', function(){
	force_nav.classList.remove("visible");
});



/* CHECK THE POSITION OF THE SCROLL BAR IN THE INDEX.HTML PAGE */
var video_section = document.querySelector('.video-section');
$(document).ready(function(){
	$(window).scroll(function() {
		var file = document.location.href.substring(document.location.href.lastIndexOf( "/" )+1 );
		if (file.indexOf("index.html") != -1 ){	
			var header = document.querySelector('.header-section');
			var logo = document.querySelector('.logo');
			if($(window).scrollTop() > video_section.clientHeight-10){
		        header.classList.remove('bg-header');
		    }
		    else{
		    	header.classList.add('bg-header');		    	
		    }
		}
	});
});


