//MENU MOBILE

var btnMenu = document.getElementById('btn-menu');

btnMenu.addEventListener('click', function(){

	document.getElementById('menu-mobile').classList.toggle('openMenu');
})


var btnClose = document.getElementById('btn-close');

btnClose.addEventListener('click', function(){

	document.getElementById('menu-mobile').classList.remove('openMenu');
})



// SCROLL SUAVE

var menuItens = document.querySelectorAll('.scroll');

menuItens.forEach(item => {
	item.addEventListener('click' , scrollTopIdOnClick);
})

function scrollTopIdOnClick(event){

	event.preventDefault();

	var element = event.target;
	var id = element.getAttribute('href');
	var to = document.querySelector(id).offsetTop;

	window.scroll({

		top: to - 121,
		behavior: "smooth"
	});
}


// HOVER PARA COLORIR A IMAGEM

var imageItens = document.querySelectorAll('.addColor');

imageItens.forEach(item => {
	item.addEventListener('mouseover' , function(){

		var element = event.target;
		var id = element.getAttribute('id');
		var file = element.getAttribute('src').split('.');

		document.getElementById(id).src=file[0]+"2.png";
	})

	item.addEventListener('mouseout' , function(){
		var element = event.target;
		var id = element.getAttribute('id');
		var file = element.getAttribute('src').split('2');

		document.getElementById(id).src=file[0]+file[1];	
	})

})

// function hover(){
// 	document.getElementById('motta').src="images/motta2.png";
// }

// function hoverout(){
// 	document.getElementById('motta').src="images/motta.png";
// }


