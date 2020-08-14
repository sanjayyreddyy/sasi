var cycle = 0; 
var allBackgrounds = ["#FFFFFF","#FF0000 ","#00FF00","#0000FF","#FFFF00","#00ff00","#ff0080","#66ffff","#66ff66","#FFFFFF","#FF0000 ","#00FF00","#0000FF","#FFFF00","#00ff00","#ff0080","#66ffff","#66ff66"]; 
var a = ["34","34","34","34","34","34","34","34","34","abba sasi","abba sasi","abba sasi","abba sasi"]; 
var siz=["40px","50px","60px","80px","100px","160px","250px","300px","300px","60px","80px","100px","120px","150px","200px","200px"];

setInterval(function() { 
	if (cycle < 14) { 
		document.body.style.backgroundColor = allBackgrounds[cycle];
 		cycle += 1; 
	} else {  
		cycle = 0; 
	} 
}, 100); 

setInterval(function() { 
	if (cycle < 13) { 
		document.getElementById("abba").innerHTML = a[cycle];
		document.getElementById("abba").style.fontSize = siz[cycle]; 
 		cycle += 1; 
	} else {  
		cycle = 0; 
	} 
}, 1000);
