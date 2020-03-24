function langMenuAppear() {
		document.getElementById("Lang-Select-Menu").style.display = "flex";
		setTimeout(function(){		
			document.getElementById("Lang-Select-Menu").style.opacity = "1";
			document.getElementById("Lang-Select-Menu").style.transform = "translate(-50%, -50%)";
		}, 100);
}

function langEng() {
	alert("Possibly make a link like, 'Website.eng.net or Website.kor.net or Website.jap.net' kind of thing");
}