// Test to see if javascript is linked
//Able to log information to the console. DONE
console.log("This is my JavaScript file for my website.");

//Declaring global variable.
//Understanding of scope and this.
var d = document;

//print person's name to home page
//Able to declare variables as numbers, strings, arrays, booleans and objects. DONE
var visitorName = prompt("What is your name?");

//created a function to check if name is blank. DONE
//Able to declare a function. DONE
function checkName(name) { 
	
//Able to create logic using if statements.
	
	if(name !== ''){
		//if name is not equal to blank then print name
		//Able to select elements within the DOM and manipulate them. DONE 
		//Able to create elements and insert them within the DOM. DONE

		var newIntro = d.getElementById("intro").innerHTML = "Hello <strong>" + visitorName + "</strong>, vote on your art!";
	} else {
		//if it is blank we ask for their name
		alert('Please Enter Your Name:');
	
		visitorName = prompt("What is your name?");
		
		return d.getElementById("intro").innerHTML = visitorName + ", vote on your art!";	
	}
}

//Able call a function it with arguments. DONE
checkName(visitorName);


//Understanding and demonstration of using data sets built in methods -5
//Able to declare a method and call it with arguments. -5
//Able to create and use for and while loops. - 10
//Able to remove elements from the DOM. - 5


//Able to create elements and insert them within the DOM. +5 DONE
//Able to select elements within the DOM and manipulate them. + 10 
//Able to declare a function and call it with arguments. +5 DONE
//Able to create logic using if and switch statements.  + 10 DONE
//Understanding of scope and this. + 5 DONE
//Able to declare variables as numbers, strings, arrays, booleans and objects. +5 DONE
//Able to log information to the console. +5 DONE
