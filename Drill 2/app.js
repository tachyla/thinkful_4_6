let number;

$('#number-chooser').submit(function(event) {
	event.preventDefault();
	//ignore default behavior of the submit button
	number = $("#number-choice").val();
		//console.log("Your input " + number + "times");
		for(i = 0; i < number; i ++) {
			let num = i + 1; 
			if(num % 15 === 0){
				num = "fizzbuzz";
			}
			else if(num % 5 === 0) {
				num = "buzz";
			}
			else if(num % 3 === 0) {
				num = " fizz";
			}


			let html = `<div class='fizz-buzz-item'><span>${num}</span></div>`;
			$(".js-results").append(html);
			console.log(i);
		}

})

