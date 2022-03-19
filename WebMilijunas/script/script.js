var n=0
pomoc = []
brojactacnih = 0
value_nagrade = 0


function novaigra(){
	brojactacnih=0
}
function fun() {
		document.getElementById("nestani2").style.display = "block";
		var	ImePrezime = document.getElementById("desno").value;
		var a = "Dobrodosli " + ImePrezime + ", ugodnu igru vam zelimo!";
		document.getElementById("Dobrodosao").innerHTML = a;
		document.getElementById("dugmeime").style.display = "none";
		document.getElementById("slike").style.display = "none";
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}





function pitanje(){
	znak=""
	k=true
	
	while (k==true){
		a = Math.floor((Math.random() * 1000) + 1);	
		b =	Math.floor((Math.random() * 200) + 1);
		zn = Math.floor((Math.random() * 4) + 1);
		if (zn==1){
			if (a%b==0){
				znak = "/";
				rez = a/b;
				k=false
			}
		}
		else if (zn==2){
			znak = "*";
			rez = a*b;
			k=false
		}
		else if (zn==3){
			znak = "+";
			rez = a+b;
			k=false
		}
		else if (zn==4){
			znak = "-";
			rez = a-b;
			k=false
		}
	}
	document.getElementById("odg1").style.backgroundColor = "#13099c";
	document.getElementById("odg2").style.backgroundColor = "#13099c";
	document.getElementById("odg3").style.backgroundColor = "#13099c";
	document.getElementById("odg4").style.backgroundColor = "#13099c";

	document.getElementById("pitanje").innerHTML = a + znak + b;
	return rez;
}

function kreni(){
	var rezultati=[];
	pomoc = []
	n = pitanje();

	document.getElementById("Pobjeda").style.display= "none";
	document.getElementById("odg1").style.display="inline-block";
	document.getElementById("odg2").style.display="inline-block";
	document.getElementById("odg3").style.display="inline-block";
	document.getElementById("odg4").style.display="inline-block";

	rezultati.push(n);
	po2 = Math.floor(Math.random() * ((n+20) - (n-20))) + (n-20);
	rezultati.push(po2);
	po3 = Math.floor(Math.random() * ((n+20) - (n-20))) + (n-20);
	rezultati.push(po3);
	po4 = Math.floor(Math.random() * ((n+20) - (n-20))) + (n-20);
	rezultati.push(po4);

	pomoc.push(n)
	pomoc.push(n)
	pomoc.push(n)
	pomoc.push(n)
	pomoc.push(n)
	pomoc.push(po3)
	pomoc.push(n)
	pomoc.push(n)
	pomoc.push(po2)
	pomoc.push(n)
	pomoc.push(n)
	pomoc.push(n)

	shuffle(rezultati)

	document.getElementById("odg1").innerHTML = rezultati[0];
	document.getElementById("odg1").value = rezultati[0];
	document.getElementById("odg2").innerHTML = rezultati[1];
	document.getElementById("odg2").value = rezultati[1];
	document.getElementById("odg3").innerHTML = rezultati[2];
	document.getElementById("odg3").value = rezultati[2];
	document.getElementById("odg4").innerHTML = rezultati[3];
	document.getElementById("odg4").value = rezultati[3];

	document.getElementById("dugme").innerHTML = "Slijedece";


	if (brojactacnih==1) {
		value_nagrade=100;
		document.getElementById("n1").style.backgroundColor = "red";
	}
	else if (brojactacnih==2){
		value_nagrade=200;
		document.getElementById("n2").style.backgroundColor = "red";
	}
	else if (brojactacnih==3){
		value_nagrade=300
		document.getElementById("n3").style.backgroundColor = "red";
	}
	else if (brojactacnih==4){
		value_nagrade=500
		document.getElementById("n4").style.backgroundColor = "red";
	}
	else if (brojactacnih==5){
		value_nagrade=1000
		document.getElementById("n5").style.backgroundColor = "red";
		document.getElementById("Pobjeda").style.display= "block";
		document.getElementById("Pobjeda").innerHTML = "Do sada imate 1,000$";
	}
	else if (brojactacnih==6){
		value_nagrade=2000
		document.getElementById("n6").style.backgroundColor = "red";
	}
	else if (brojactacnih==7){
		value_nagrade=4000
		document.getElementById("n7").style.backgroundColor = "red";
	}
	else if (brojactacnih==8){
		value_nagrade=8000
		document.getElementById("n8").style.backgroundColor = "red";
	}
	else if (brojactacnih==9){
		value_nagrade=16000
		document.getElementById("n9").style.backgroundColor = "red";
	}
	else if (brojactacnih==10){
		value_nagrade=32000
		document.getElementById("n10").style.backgroundColor = "red";
		document.getElementById("Pobjeda").style.display= "block";
		document.getElementById("Pobjeda").innerHTML = "Do sada imate 32,000$";
	}
	else if (brojactacnih==11){
		value_nagrade=64000
		document.getElementById("n11").style.backgroundColor = "red";
	}
	else if (brojactacnih==12){
		value_nagrade=125000
		document.getElementById("n12").style.backgroundColor = "red";
	}
	else if (brojactacnih==13){
		value_nagrade=250000
		document.getElementById("n13").style.backgroundColor = "red";
	}
	else if (brojactacnih==14){
		value_nagrade=500000
		document.getElementById("n14").style.backgroundColor = "red";
	}
	else if(brojactacnih==15){
		value_nagrade=1000000
		document.getElementById("n15").style.backgroundColor = "red";
		document.getElementById("kraj").style.display = "block";
		document.getElementById("krajp").innerHTML = "Cestitamo, osvojili ste " + value_nagrade + "$";
	}
}

	function provjera1(){
		a = document.getElementById("odg1").value;
		if (a==n){
			document.getElementById("odg1").style.backgroundColor = "green";
			brojactacnih +=1
		}
		else {
			document.getElementById("odg1").style.backgroundColor = "red";
			document.getElementById("kraj").style.display = "block";
			document.getElementById("pitanje").style.display = "none";
			document.getElementById("krajp").innerHTML = "Cestitamo, osvojili ste " + value_nagrade + "$";
			document.getElementById("dugme").style.display="none";
		}
	}
	function provjera2(){
		a = document.getElementById("odg2").value;
		if (a==n){
			document.getElementById("odg2").style.backgroundColor = "green";
			brojactacnih +=1
		}
		else {
			document.getElementById("odg2").style.backgroundColor = "red";
			document.getElementById("kraj").style.display = "block";
			document.getElementById("pitanje").style.display = "none";
			document.getElementById("krajp").innerHTML = "Cestitamo, osvojili ste " + value_nagrade + "$";
			document.getElementById("dugme").style.display="none";
		}

	}
	function provjera3(){
		a = document.getElementById("odg3").value;
		if (a==n){
			document.getElementById("odg3").style.backgroundColor = "green";
			brojactacnih +=1
		}
		else {
			document.getElementById("odg3").style.backgroundColor = "red";
			document.getElementById("kraj").style.display = "block";
			document.getElementById("pitanje").style.display = "none";
			document.getElementById("krajp").innerHTML = "Cestitamo, osvojili ste " + value_nagrade + "$";
			document.getElementById("dugme").style.display="none";
		}

	}
	function provjera4(){
		a = document.getElementById("odg4").value;
		if (a==n){
			document.getElementById("odg4").style.backgroundColor = "green";
			brojactacnih +=1
		}
		else {
			document.getElementById("odg4").style.backgroundColor = "red";
			document.getElementById("kraj").style.display = "block";
			document.getElementById("pitanje").style.display = "none";
			document.getElementById("krajp").innerHTML = "Cestitamo, osvojili ste " + value_nagrade + "$";
			document.getElementById("dugme").style.display="none";
		}

	}

	function pomocpri(){
		u = Math.floor((Math.random() * 12) + 1);

		document.getElementById("Pobjeda").style.display= "block";
		document.getElementById("Pobjeda").innerHTML = "Najcesci odgovor publike je: " + pomoc[u];
		document.getElementById("pomoc2").style.display = "none"

	}
	k=0
	function polapola(){
		document.getElementById("pomoc1").style.display="none";
		a = document.getElementById("odg1").value
		b = document.getElementById("odg2").value
		c = document.getElementById("odg3").value
		d = document.getElementById("odg4").value
		while (k != 2){
			if (a!=rez){
				document.getElementById("odg1").style.display="none";
				k+=1
			}
			if (d!=rez){
				document.getElementById("odg4").style.display="none";
				k+=1
			}
			if (k<2) {
				if (b!=rez){
					document.getElementById("odg2").style.display="none";
				}
			}
		}
	}