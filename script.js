
var $ = function(id) {
			return document.getElementById(id);
		};

var valid = function(){
	var name = $("name").value;
	var email = $("email").value;
	var phone = $("phone").value;
	var isValid = true; 
	var error = "";

	if (name == ""){
		error = "required"; 
		$("name").nextElementSibling.firstChild.nodeValue = error;
		isValid = false;
	}
	if (email == "") {
		isValid = false;
		error = "required"
		$("email").nextElementSibling.firstChild.nodeValue = error;

	}
	if (phone == "") {
		isValid = false;
		error = "required"
		$("phone").nextElementSibling.firstChild.nodeValue = error;
	}  

	if (isValid) {
		$("contact").submit();
	} else {
		alert("Didnt work");
	}

}







var calculate = function() { 
 var cents, quarters, dimes, nickels,  pennies;
 cents = Math.floor(parseInt($("cents").value));

 quarters = cents / 25;
 quarters = Math.floor(quarters);
 cents = cents % 25;

 dimes = cents / 10;
 dimes = Math.floor(dimes);
 cents = cents % 10; 

 nickels = cents / 5;
 nickels = Math.floor(nickels);

 pennies = cents % 5;

if ($("cents").value > 99 ) {
	alert("thats more then a dollar");

};



 $("quarters").value = quarters;
 $("nickels").value = nickels;
 $("dimes").value = dimes;
 $("pennies").value = pennies;
};


var i = 0;
	function move() {
		if (i == 0) {
    		i = 1;
  		var elem = [$("myBar1"), $("myBar2"),$("myBar3")] ;   
  			var width = 0;
  			var id = setInterval(frame, 10);
  			var num = [85, 85, 80];
  			function frame() {
   				 if (width >= 100) {
      				clearInterval(id); //end for
      				i = 0; 
    			} 
    			else {
      				width++; 
      				elem[0].style.width = num[0] + '%'; 
     				elem[0].innerHTML = num[0] * 1  + '%';
     				elem[1].style.width = num[1] + '%'; 
     				elem[1].innerHTML = num[1] * 1  + '%';
     				elem[2].style.width = num[2] + '%'; 
     				elem[2].innerHTML = num[2] * 1  + '%';
     				
     				 
    				}
  				}
			}
		}





window.onLoad = function() {
	
	$("phone").focus();


	
};




