let imie = prompt('Write your name ')

let q1 = prompt(imie + ',' + ' First question: Where are you from? 1-Asia, 2-Europe, 3-America')
if (q1 == 1){
	alert('True')
	
	let q2 = prompt(imie + ',' + ' Second question: Which language do you learn? 1-PY, 2-Kotlin, 3-JS')
	if(q2 == 3){
		alert("True")

		let q3 = prompt('What mean name Hamid: 1-Dog, 2-Ham it, 3-Pork dog')
		if (q3 == 3){
			alert('You are win!!!')
		}
		else{
			alert('кет')
		}
	}
	else{
		alert('кет')
	}
}
else{
	alert('кет')
}









// var name = prompt("введите ваше имя")

// var q1 = prompt(name + "," + " кто быстрее?: 1-лошадь 2-собака 3-кошка 4-черепаха")
//     if (q1==1){
//         alert("next")

//         var q2 = prompt(name + "какая марка делает лучшие машины?: 1-ролс 2-бентли 3-ваг 4-lx")
//     if (q2 == 1) {
//         alert("отлично идём дальше")

//         var q3 = prompt("самая узнаваемая компания: 1-xiomi 2-huawei 3-apple 4-samsung")
//         if (q3==3) {
//             alert("exelent work")

//             var q4 = prompt("какой язык для програмиррования легче других из перечисленных: 1-c++ 2-js 3-java 4-c#")
//             if (q4==2) {
//                 alert("Л-логично")

//                 var q5 = prompt(name+ "последний вопрос, какая страна влияет на весь мир: 1-Kg 2-ru 3-uk 4-USA")
//                 if (q5==4) {
//                     alert("поздравляем вы выиграли")
//                 }
//             }
//             else{
//                 alert("кет")
//             }
//         }
//         else{
//             alert("кет")
//         }
//     }
//     else{
//         alert("кет")
//     }
//     }
//     else{
//         alert("кет")
//     }