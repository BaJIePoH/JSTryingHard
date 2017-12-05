var dHa
,	dMa
,	dSa
,	dH
,	dM
,	dDay 
,	exp
,	ans
,	dW = ["sunday", "monday", "tuesday", "wednsday", "thursday", "friday", "saturday"];

var format = function (value) {
	if (value < 10) {
		value = "0" + value;
		return value;
	} else {
		return value;
	}
}

var time = function () {
	var dTime = new Date()
	, 	dS = dTime.getSeconds()
	,	span_1 = document.getElementById("clock")
	,	span_2 = document.getElementById("calen");

	dH = dTime.getHours();
	dM = dTime.getMinutes();
	dDay = dW[dTime.getDay()];

	span_1.innerHTML = format(dH) + " : " + format(dM) + " : " + format(dS);
	span_2.innerHTML = "Today: " + dDay;

}
setInterval(time, 100);

time();

//при нажатии на кнопку появляется модальное окно настройки будильника

var setAlarmTime = function () {
	var div = document.createElement("div")
	,	temp = document.getElementById("template");

	div.className = "modal";
	div.innerHTML = temp.innerHTML;
	document.body.appendChild(div);

	var stop = document.getElementById("cancel")
	,	getAlarm = document.getElementById("ok");

	stop.addEventListener("click", die);
	getAlarm.addEventListener("click", rememberMe);
}

//контролируем время включения будильника
//===========================================================================
//===========================================================================
//===========================================================================
var alarmDays = function (mas) {
	getUp(mas);	

setTimeout(alarmDays, 100);
	function getUp (m) {
		var mas1=m;
		for (let i = 0, len = mas1.length; i < len; i++) {
			if (mas1[i] == dDay && dHa == dH && dMa == dM){
				expCreate();	//создаст уравнение, которое надо решить, чтобы будильник заткнулся
				dropWind();		//появится модальное окно с записью уравнения для решения и падающими цифрами длял ответа
				soundStart();	//врубает музыку, делая ее все громче
			}
		}
	}
}
//===========================================================================
//===========================================================================
//===========================================================================

//забираем значения введенные в модальном окне настройки будильника

var rememberMe = function () {
	if (setHours.value !== 00 && setMinutes.value !== 00) {
		dHa = setHours.value;		//забираем значения введенного времени
		dMa = setMinutes.value;
	}

	var checkDay = dayWind.querySelectorAll("input")	
	,	checked = [];
	
	for (let i = 0, len = checkDay.length; i < len; i++) {		//забираем массив введенных дней
		if (checkDay[i].checked) {
			var clear = checkDay[i].getAttribute("id")
			checked.push(clear);
		}
	}
	
	alarmDays(checked);				//передаем вфункцию для отслеживания совпадения заданного времени и текущего
	setInterval(alarmDays, 100);
	die();							// закрываем модальное окно
}

//закрытие модального окошка
var die = function () {
	var modalDiv = document.body.getElementsByClassName("modal");
	modalDiv[0].remove();
}

//включаем музыку и постепенно увеличиваем громкость
var soundStart = function () {
	var melodica = document.getElementById("alarmSound");

	melodica.autoplay = "true";
	melodica.volume = 0.1;
	
	var volumeUp = function () {
		if (melodica.volume < 0.9) {return melodica.volume +=0.1;}
		else {clearInterval(x)}
	}
	
	volumeUp(melodica);						//постепенно увеличиваем громкость будильника
	var x = setInterval(volumeUp, 20000); 
}

//создаем уравнение

var expCreate = function (){
	var interval = [1,2,3,4]
	,	simbol = [1, -1]
	,	simbol_1 = ["+", "-"]
	,	rand_1 = (Math.round(Math.random() * (4 - 1 + 1)) + 1)
	,	rand_2 = (Math.round(Math.random() * (4 - 1 + 1)) + 1)
	,	simb = Math.round(Math.random())
	,	simb_1 = simbol[simb]
	,	simb_2 = simbol_1[simb];

	if (rand_1 > rand_2) {
		return exp = "Решите выражение: "+ rand_1 + simb_2 + rand_2,
			ans = rand_1  + rand_2* simb_1;
	}	else {expCreate()};
}

// выпадающие цифры
var dropDig = function () {

}

var dropWind = function () {
	var div = document.createElement("div")
	,	div_1 = document.createElement("div");

	div.className = "modal";
	div_1.innerText = i;
	document.body.appendChild(div);

	dropDig()
}

//при верном решении все прекращается
var stopAlarm = function () {
	if ( 1==ans ) {
		var aud = document.getElementById("alarmSound");

		aud.pause();
		aud.currentTime = 0.0;	//остановим воспроизведение 

		die();					//закроем окошко с падающими цифрами
	}
}


//вешаем событие на кнопки
var knock = document.getElementById("setAlarm");

	knock.addEventListener("click", setAlarmTime);