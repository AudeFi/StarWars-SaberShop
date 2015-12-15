var input_research = document.querySelector('.input-research');
var force_nav = document.querySelector('.force-nav');
var force_link = document.querySelector('.force-a');
var video = document.querySelector('.video-section');
console.log(video.height);

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


$(document).ready(function(){
	$(window).scroll(function() {

    //if I scroll more than 1000px...
    if($(window).scrollTop() > video.height){
         //do whatever
         console.log('scroll');
    }
});
});