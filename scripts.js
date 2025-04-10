// this iife updates the copyright year in the footer
(function(){
	let now = new Date();
	let span = $("footer span");
	span.html(now.getFullYear());
})();

// jQuery/Slick Slider Carousel - initialization and settings
$('.carousel').slick({
	// centerMode: true,
	arrows: true,
	// centerPadding: '40px',
	infinite: true
	// slidesToShow: 3,
	// slidesToScroll: 3,
	// dots: true,
	// variableWidth: true,
	// responsive: [
	// 	{
	// 		breakpoint: 1000,
	// 		settings: {
	// 			arrows: true,
	// 			// dots: true,
	// 			// centerMode: true,
	// 			variableWidth: false,
	// 			// centerPadding: '5px',
	// 			// slidesToShow: 3
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 600,
	// 		settings: {
	// 			arrows: true,
	// 			dots: false,
	// 			// centerMode: true,
	// 			variableWidth: false,
	// 			// centerPadding: '20px',
	// 			// slidesToShow: 1
	// 		}
	// 	}
	// ]
});