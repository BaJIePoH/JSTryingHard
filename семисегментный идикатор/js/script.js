var displ = document.getElementById("display")
,	div_segm = displ.getElementsByTagName("div")
,	answer = 99;

var getAnswer = function (x) {
	for (let i = 0, len = x.length; i < len ; i++){
		if ( x[i].classList.contains("a2") & x[i].classList.contains("a3") & x[i].classList.contains("gold")) {
			answer = 1;
		}
		if (x[i].classList.contains("a1") && x[i].classList.contains("a2") && x[i].classList.contains("a4") && x[i].classList.contains("a5") && x[i].classList.contains("a7") && x[i].classList.contains("gold")) {
			answer = 2;
		}
		if (x[i].classList.contains("a1") && x[i].classList.contains("a2") && x[i].classList.contains("a3") && x[i].classList.contains("a4") && x[i].classList.contains("a7")&& x[i].classList.contains("gold")) {
			answer = 3;
		}
		if (x[i].classList.contains("a2") && x[i].classList.contains("a3") && x[i].classList.contains("a6") && x[i].classList.contains("a7")&& x[i].classList.contains("gold")) {
			answer = 4;
		}
		if (x[i].classList.contains("a1") && x[i].classList.contains("a3") && x[i].classList.contains("a4") && x[i].classList.contains("a6") && x[i].classList.contains("a7")&& x[i].classList.contains("gold")) {
			answer = 5;
		}
		if (x[i].classList.contains("a1") && x[i].classList.contains("a3") && x[i].classList.contains("a4") && x[i].classList.contains("a5") && x[i].classList.contains(")(a6") && x[i].classList.contains("a7")&& x[i].classList.contains("gold")) {
			answer = 6;
		}
		if (x[i].classList.contains("a1") && x[i].classList.contains("a2") && x[i].classList.contains("a3")&& x[i].classList.contains("gold")) {
			answer = 7;
		}
		if (x[i].classList.contains("a1") && x[i].classList.contains("a2") && x[i].classList.contains("a3") && x[i].classList.contains("a4") && x[i].classList.contains("a5") && x[i].classList.contains("a6") && x[i].classList.contains("a7")&& x[i].classList.contains("gold")) {
			answer = 8;
		}
		if (x[i].classList.contains("a1") && x[i].classList.contains("a2") && x[i].classList.contains("a3") && x[i].classList.contains("a4") && x[i].classList.contains("a6") && x[i].classList.contains("a7")&& x[i].classList.contains("gold")) {
			answer = 9;
		}
		if (x[i].classList.contains("a1") && x[i].classList.contains("a2") && x[i].classList.contains("a3") && x[i].classList.contains("a4") && x[i].classList.contains("a5") && x[i].classList.contains("a6")&& x[i].classList.contains("gold")) {
			answer = 0;
		}
	}
		console.log(answer);
}

var change_color = function (Event) {
	this.classList.toggle("gold");
	setInterval(getAnswer, 1000, div_segm);
}

for (let i = 0, len = div_segm.length; i < len ; i++) {
	div_segm[i].addEventListener("click", change_color);
}

