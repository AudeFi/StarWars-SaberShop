var input_research = document.querySelector('.input-research');
var force_nav = document.querySelector('.force-nav');
var force_link = document.querySelector('.force-a');

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

force_nav.addEventListener('mouseleave', function(){
	force_nav.classList.remove("visible");
});