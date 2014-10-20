
$(function() {

	// set variables for images and blank arrays to store 'previous image' data
	
	var images = ["hobo1.jpg", "hobo3.jpg", "hobo5.jpg", "hobo6.jpg", "hobo-gun.gif"]
	var previous = []
	var previousImg = []

	//check url to see if there is an existing number
	//load specific plot if there is

	var episode = window.location.pathname
	if (episode === "")

	//store number in the previous episode array to ensure new episode onclick



//onclick run the program the program
	$('div.button').on('click',function(){
//set variables to ensure new image & episode
		var number = Math.floor(Math.random()*episodes.length);
		var imgNumber = Math.floor(Math.random()*images.length);
	//check to see if episode is the same
		while(number === previous[0]) {
			var number = Math.floor(Math.random()*episodes.length);
		}
		//store the number
	// populate data to correct fields
		$('h3.title').text(episodes[number].title);
		$('p.synopsis').text(episodes[number].synopsis);
		$('p.info').text("Season" + " " + episodes[number].season + ", Episode" + " " + episodes[number].episode);
		$('span.airdate').text("First aired: " + episodes[number].airdate)
	//check to see if image is the same
		while(imgNumber === previousImg[0]) {
			var imgNumber = Math.floor(Math.random()*images.length);
			}
		$('img.hobo').attr('src', "images/" + images[		imgNumber]);
		$('p.button').text("See another one!");
	//store random numbers to check against next click
		previous[0] = number;
		previousImg[0] = imgNumber;

	});

	//Music

	//play music

	//stop music

// preload images on desktop, don't on mobile

if ($(window).width() >= 768) {
	function preload(arrayOfImages) {
	    $(arrayOfImages).each(function(){
	        $('<img/>')[0].src = this;
	        // Alternatively you could use:
	        // (new Image()).src = this;
	    });
	};
	// Usage:
	preload([
	    'images/hobo-gun.gif',
	    'images/hobo1.jpg',
	    'images/hobo3.jpg',
	    'images/hobo5.jpg',
	    'images/hobo6.jpg',
	]);
};

//stop everything
});