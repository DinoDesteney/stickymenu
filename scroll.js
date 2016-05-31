var scrollWaarde;
var scrollPlek = 0;
var menuBalk = $("nav");
var hoogteMenu = menuBalk.outerHeight();

function schuif(){
	scrollWaarde = $(this).scrollTop();
	if(scrollWaarde > scrollPlek){
		//je scroll naar beneden
		// console.log("we scrollen naar beneden"); hiermee testen of dit werkt
		scrollPlek = scrollWaarde;
		menuBalk.css("top", -hoogteMenu + "px");
	}
	else{
		//je scroll naar boven
		// console.log("we scrollen naar boven"); hiermee testen of dit werkt
		scrollPlek = scrollWaarde;
		menuBalk.css("top", "0px");
	}
}

$(window).on("scroll", schuif);