function askQuestions() {

	var firstName = prompt ('What is your first name?');
		// this will be stored in the browser memory only!
	var lastName = prompt ('What is your last name?');
	var fullName = firstName + ' ' + lastName;

	console.log(fullName);
		// this is what stores it in the browser's memory

	// var age = prompt('How old are you?');
	// age = parseInt (age);

	// if (age >= 18) {

	// 	console.log('User is an adult');

	// } else if (age>=13) {

		// console.log('User is a teenager');
	 
	// } else {
		// this chains the two things

	// 	console.log('User is a child');

	// }

	if (firstName.toLowerCase() === 'general' && lastName.toLowerCase() !== 'assembly') {
	// converts to lower case so that you don't have the issue of case sensitivity
		alert ('Welcome General!');

	}

}



// when the page has loaded, hey jquery perform a function
$(function() {

	$('img').on('click', askQuestions);

	// hey jquery, when the user clicks on an h3
	$('h3').on('click', function() {

			// (hide the next element .hide), has now become .toggle
			// slide toggle gives the nice effect
			$(this).next().slideToggle(1000);
			// this is an interesting work in javascript... here it means the exact h3 that the user has clicked on, not all of them
			// in brackets is the duration for the effect
	});

});