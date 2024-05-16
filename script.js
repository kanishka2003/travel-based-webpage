let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () =>{
	menu.classList.toggle('fa-times');
	navbar.classList.toggle('active');
	
};
window.onscroll = () =>{
	menu.classList.remove('fa-times');
	navbar.classList.remove('active');
};
var swiper = new Swiper(".home-slider", {
	  loop:true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});
var swiper = new Swiper(".reviews-slider", {
	  loop:true,
	  spaceBetween: 20,
	  autoHeight:true,
	  grabCursor:true,
	   breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
	  
});
const Search = document.querySelector(".search input"),
       images = document.querySelectorAll(".box");

Search.addEventListener("keyup", e =>{
    if(e.key == "Enter"){
		let searcValue = Search.value,
		  value = searcValue.toUpperCase();
		  images.forEach(image =>{
			  if(value === image.dataset.name){
				  return image.style.display = "block"
			  }
			  image.style.display = "none";
		  });
	}
});

Search.addEventListener("keyup", () =>{
	if(Search.value != "") return;
	
	images.forEach(image =>{
		image.style.display = "block";
	})
})	


let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem=3;

loadMoreBtn.onclick = () =>{
	let boxes=[...document.querySelectorAll('.Packages .box-container .box')];
    for(var i=currentItem;i<currentItem+3;i++){
		boxes[i].style.display='inline-block';
	};
	currentItem +=3;
	if(currentItem>=boxes.length){
	 loadMoreBtn.style.display='none';
	}
}






















