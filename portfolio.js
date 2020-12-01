// a function for the text animation on the front page

var state = 0; // use a state variable to keep track of the text displayed
// 0 represents the student text
// 1 respresents the intern text

function switchIntro() {
	if (state == 0) {
		// the current text displayed is student
		state = 1;
		document.getElementById("main_intro").innerHTML = "Undergraduate Intern at Amaral Lab";
	} else {
		state = 0; 
		document.getElementById("main_intro").innerHTML = "Student at Northwestern University";
	}
	
}

setInterval(switchIntro, 2000);

