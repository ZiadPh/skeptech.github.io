// JavaScript Documenton
function first()
	{
		var x = Math.floor((Math.random() * 10) + 1);
  document.getElementById("first").innerHTML = x;
		
		var y = Math.floor((Math.random() * 10) + 1);
  document.getElementById("second").innerHTML = y;
		
		var z = x + y;
  document.getElementById("third").innerHTML = z;
		
		var a = Math.floor((Math.random() * 10) + 15);
  document.getElementById("fourth").innerHTML = a;

		var b = Math.floor((Math.random() * 10) + 15);
  document.getElementById("fifth").innerHTML = b;
}

function consumption()
{
	alert("With the same energy consumed by such a transaction process you could've fully charged your Tesla 14 times at least.");
}
