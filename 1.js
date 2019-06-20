

	
window.addEventListener('DOMContentLoaded', function() {
	'user strict';


	var table = document.getElementsByTagName("table")[0],
		td = document.getElementsByTagName("td"),
		button = document.querySelectorAll(".button");

	table.style.cssText = ' color: #6D757E;  ';

	
	
	function tdStyle(){
		for (var i = 0; i < td.length; i++) {
			td[i].style.cssText = 'font-size: 20px; padding:5px 20px;';

		}
	}
	tdStyle();
	function btnStyle(){
		for (var i = 0; i < button.length; i++) {
			button[i].style.cssText = 'padding:5px 15px;color:#fff; background-color: #168F91; border-radius:10%; ';

		}
	}
	btnStyle();
	
	var numberMask = IMask(
  document.getElementById('number'), {
    mask: '0000 0000 0000 0000'
  });
	var termMask = IMask(
  document.getElementById('term'), {
    mask: '00/00'
  });
	var cvvMask = IMask(
  document.getElementById('CVV'), {
    mask: '000'
  });


var priceW = document.querySelectorAll('.priceW');	
	for (var i=0; i<priceW.length; i++){
		var a = priceW[i].innerHTML,
		b = parseInt(a),
		c = Number((a%1).toFixed(2).slice(2));
		r = ['рубль', 'рубля', 'рублей'];
		k = ['копейка', 'копейки', 'копеек']

		var h = b%10,
			z = c%10;

		function Sklonenie(number, txt) {
		    var cases = [2, 0, 1, 1, 1, 2];
		    return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
		}

		if(c == 0){
			priceW[i].innerHTML = (b +' '+ Sklonenie(h,r));
		}else{
			priceW[i].innerHTML = (b +' '+ Sklonenie(h,r) +' '+ c + ' ' + Sklonenie(z,k));
		}

		}


var popup = document.querySelector('.popup');
	popup.style.cssText = 'display: none; ';



	
	for( var i=0;i<button.length;i++){
		button[i].addEventListener('click', function(){
	popup.style.display = 'block';
	popup.style.marginLeft = '30%';
})
	}

var inpt = document.querySelectorAll('.field');
	for( var i=0;i<inpt.length;i++){
		inpt[i].style.width = '100px';
		inpt[i].style.border = '1px solid #C1DBDD';
		inpt[i].style.borderRadius = '2px';
		inpt[i].style.background = '#FDFBFB';
		
	
	
}


		
	
var close = document.getElementById('close'),
	term = document.getElementById('term'),
	cvv = document.getElementById('CVV'),
	number = document.getElementById('number'),
	people = document.getElementById('people');


close.addEventListener('click', function(){
	
		valid = true;
		function FormValid(){
			if (term.value == "") {
				valid = false;
				term.style.border = '1px solid #FF0000';
			}
			if (cvv.value == "") {
				valid = false;
				cvv.style.border = '1px solid #FF0000';
			}
			if (number.value == "") {
				valid = false;
				number.style.border = '1px solid #FF0000';
			}
			if (people.value == "") {
				valid = false;
				people.style.border = '1px solid #FF0000';
			}
			return valid;
		}
	FormValid();
	if (valid == true){
		popup.style.display = 'none';
		FormValid();
		term.style.border = '1px solid #C1DBDD';
		cvv.style.border = '1px solid #C1DBDD';
		number.style.border = '1px solid #C1DBDD';
		people.style.border = '1px solid #C1DBDD';
		arr = [...inpt];
		arr.forEach(function(item){
			item.value = '';

			});
		
	}
})


	
	

	

});

