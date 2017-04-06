let number;

$('#number-chooser').submit(function(event) {
//this number selctor picked the number-chooser id
	event.preventDefault();
	//ignore default behavior of the submit button
	number = $("#number-choice").val();
	$(".js-results").html("");
	//this invokes the function with an empty string 
		
		for(i = 0; i < number; i ++) {
			let classesToApply = "";
			//moved the classesToApply into the loop so that the value could be reset to an empty 
			//string each time

			let num = i + 1; 
			if(num % 15 === 0){
				num = "fizzbuzz";
				classesToApply = "fizz buzz";
			}
			else if(num % 5 === 0) {
				num = "buzz";
				classesToApply = "buzz";
			}
			else if(num % 3 === 0) {
				num = " fizz";
				classesToApply = "fizz";
			}


			let html = `<div class='fizz-buzz-item ${classesToApply}'><span>${num}</span></div>`;
			$(".js-results").append(html);
			console.log(i);
			//reset the function 
		}

})
}

