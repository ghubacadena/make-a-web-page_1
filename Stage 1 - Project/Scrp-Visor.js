function LoadLesson (nLes) {
	LecActiva = nLes;
	switch (nLes) {
		case 1:
			document.getElementById("mL1").innerHTML = "Definitions";
			document.getElementById("mL2").innerHTML = "How Web Works";
			document.getElementById("mL3").innerHTML = "HTML Story (1)";
			document.getElementById("mL4").innerHTML = "HTML Story (2)";
			document.getElementById("mL5").innerHTML = "HTML Story (3)";
			document.getElementById("mL6").innerHTML = "HTML Story (4)";
			document.getElementById("mL1").style.display="block";
			document.getElementById("mL2").style.display="block";
			document.getElementById("mL3").style.display="block";
			document.getElementById("mL4").style.display="block";
			document.getElementById("mL5").style.display="block";
			document.getElementById("mL6").style.display="none";
			document.getElementById("mL7").style.display="none";
			document.getElementById("mL8").style.display="none";
			document.getElementById("mL9").style.display="none";
			break;
		case 2:
			document.getElementById("mL1").innerHTML = "Web Site Components";
			document.getElementById("mL2").innerHTML = "Page Struture";
			document.getElementById("mL3").innerHTML = "DOM";
			document.getElementById("mL1").style.display="block";
			document.getElementById("mL2").style.display="block";
			document.getElementById("mL3").style.display="block";
			document.getElementById("mL4").style.display="none";
			document.getElementById("mL5").style.display="none";
			document.getElementById("mL6").style.display="none";
			document.getElementById("mL7").style.display="none";
			document.getElementById("mL8").style.display="none";
			document.getElementById("mL9").style.display="none";
			break;
		case 3:
			document.getElementById("mL1").innerHTML = "Undestanding CSS";
			document.getElementById("mL2").innerHTML = "CSS Selectors";
			document.getElementById("mL3").innerHTML = "Box Model";
			document.getElementById("mL1").style.display="block";
			document.getElementById("mL2").style.display="block";
			document.getElementById("mL3").style.display="block";
			document.getElementById("mL4").style.display="none";
			document.getElementById("mL5").style.display="none";		
			document.getElementById("mL6").style.display="none";
			document.getElementById("mL7").style.display="none";
			document.getElementById("mL8").style.display="none";
			document.getElementById("mL9").style.display="none";
			break;		
	}
}
/*** THE NEXT FUNCTIONS ARE USED TO LOAD THE LESSON NOTES ***/

function NoteL1 () {
	var NtaL1;
	var NtaL2;
	var NtaL3;
	var NtaL4;
	var NtaL5;
	var NtaL6;
	var NtaL7;
	var NtaL8;
	var NtaL9;

/* Inicializacion: Quitar todos los videos activos
document.getElementById("v1").style.display="none";
document.getElementById("v2").style.display="none";
document.getElementById("v3").style.display="none";
document.getElementById("v4").style.display="none";
document.getElementById("v5").style.display="none";
document.getElementById("v6").style.display="none";
document.getElementById("v7").style.display="none";
*/
/*Segun el numero de leccion activa se obtienen las notas asociadas*/
	switch (LecActiva) {
		case 1:
			document.getElementById("Tit").innerHTML="Definitions";
			NtaL1 = document.getElementById("N1L1L1").innerHTML;
			NtaL2 = document.getElementById("N1L2L1").innerHTML;
			NtaL3 = document.getElementById("N1L3L1").innerHTML;
			NtaL4 = document.getElementById("N1L4L1").innerHTML;
			NtaL5 = document.getElementById("N1L5L1").innerHTML;
			NtaL6 = document.getElementById("N1L6L1").innerHTML;
			NtaL7 = document.getElementById("N1L7L1").innerHTML;
			NtaL8 = document.getElementById("N1L8L1").innerHTML;
			NtaL9 = document.getElementById("N1L9L1").innerHTML;
			
			break;
		case 2:
			document.getElementById("Tit").innerHTML="Web Site Components";
			NtaL1 = document.getElementById("N1L1L2").innerHTML;
			NtaL2 = document.getElementById("N1L2L2").innerHTML;
			NtaL3 = document.getElementById("N1L3L2").innerHTML;
			NtaL4 = document.getElementById("N1L4L2").innerHTML;
			NtaL5 = document.getElementById("N1L5L2").innerHTML;
			NtaL6 = document.getElementById("N1L6L2").innerHTML;
			NtaL7 = document.getElementById("N1L7L2").innerHTML;
			NtaL8 = document.getElementById("N1L8L2").innerHTML;
			NtaL9 = document.getElementById("N1L9L2").innerHTML;
			/*document.getElementById("v2").style.display="inline";*/
			document.getElementById("vidname").innerHTML="Video Lesson 2: 04 - The First Step.mp4";
			break;
		case 3:
			document.getElementById("Tit").innerHTML="Undestanding CSS";
			NtaL1 = document.getElementById("N1L1L3").innerHTML;
			NtaL2 = document.getElementById("N1L2L3").innerHTML;
			NtaL3 = document.getElementById("N1L3L3").innerHTML;
			NtaL4 = document.getElementById("N1L4L3").innerHTML;
			NtaL5 = document.getElementById("N1L5L3").innerHTML;
			NtaL6 = document.getElementById("N1L6L3").innerHTML;
			NtaL7 = document.getElementById("N1L7L3").innerHTML;
			NtaL8 = document.getElementById("N1L8L3").innerHTML;
			NtaL9 = document.getElementById("N1L9L3").innerHTML;
			/*document.getElementById("v5").style.display="inline";*/
			document.getElementById("vidname").innerHTML="Video Lesson 3:04 - Understanding CSS.mp4";
			break;
	}

	document.getElementById("Ln01").innerHTML = NtaL1;
	document.getElementById("Ln02").innerHTML = NtaL2;
	document.getElementById("Ln03").innerHTML = NtaL3;
	document.getElementById("Ln04").innerHTML = NtaL4;
	document.getElementById("Ln05").innerHTML = NtaL5;
	document.getElementById("Ln06").innerHTML = NtaL6;
	document.getElementById("Ln07").innerHTML = NtaL7;
	document.getElementById("Ln08").innerHTML = NtaL8;
	document.getElementById("Ln09").innerHTML = NtaL9;
}

function NoteL2 () {
	var NtaL1;
	var NtaL2;
	var NtaL3;
	var NtaL4;
	var NtaL5;
	var NtaL6;
	var NtaL7;
	var NtaL8;
	var NtaL9;

/* Inicializacion: Quitar todos los videos activos
document.getElementById("v1").style.display="none";
document.getElementById("v2").style.display="none";
document.getElementById("v3").style.display="none";
document.getElementById("v4").style.display="none";
document.getElementById("v5").style.display="none";
document.getElementById("v6").style.display="none";
document.getElementById("v7").style.display="none";
*/
/*Segun el numero de leccion activa se obtienen las notas asociadas*/
	switch (LecActiva) {
		case 1:
			document.getElementById("Tit").innerHTML="How the Web works?";
			NtaL1 = document.getElementById("N2L1L1").innerHTML;
			NtaL2 = document.getElementById("N2L2L1").innerHTML;
			NtaL3 = document.getElementById("N2L3L1").innerHTML;
			NtaL4 = document.getElementById("N2L4L1").innerHTML;
			NtaL5 = document.getElementById("N2L5L1").innerHTML;
			NtaL6 = document.getElementById("N2L6L1").innerHTML;
			NtaL7 = document.getElementById("N2L7L1").innerHTML;
			NtaL8 = document.getElementById("N2L8L1").innerHTML;
			NtaL9 = document.getElementById("N2L9L1").innerHTML;
			/*document.getElementById("v1").style.display="inline";*/
			document.getElementById("vidname").innerHTML="Video Lesson 1: 06 - Components of the Web.mp4";
			break;
		case 2:
			document.getElementById("Tit").innerHTML="Web Page Structure";
			NtaL1 = document.getElementById("N2L1L2").innerHTML;
			NtaL2 = document.getElementById("N2L2L2").innerHTML;
			NtaL3 = document.getElementById("N2L3L2").innerHTML;
			NtaL4 = document.getElementById("N2L4L2").innerHTML;
			NtaL5 = document.getElementById("N2L5L2").innerHTML;
			NtaL6 = document.getElementById("N2L6L2").innerHTML;
			NtaL7 = document.getElementById("N2L7L2").innerHTML;
			NtaL8 = document.getElementById("N2L8L2").innerHTML;
			NtaL9 = document.getElementById("N2L9L2").innerHTML;
			/*document.getElementById("v3").style.display="inline";*/
			document.getElementById("vidname").innerHTML="Video Lesson 2: 07 - Page Structure.mp4";

			break;
		case 3:
			document.getElementById("Tit").innerHTML="CSS Selectors";
			NtaL1 = document.getElementById("N2L1L3").innerHTML;
			NtaL2 = document.getElementById("N2L2L3").innerHTML;
			NtaL3 = document.getElementById("N2L3L3").innerHTML;
			NtaL4 = document.getElementById("N2L4L3").innerHTML;
			NtaL5 = document.getElementById("N2L5L3").innerHTML;
			NtaL6 = document.getElementById("N2L6L3").innerHTML;
			NtaL7 = document.getElementById("N2L7L3").innerHTML;
			NtaL8 = document.getElementById("N2L8L3").innerHTML;
			NtaL9 = document.getElementById("N2L9L3").innerHTML;
			/*document.getElementById("v6").style.display="inline";*/
			document.getElementById("vidname").innerHTML="Video Lesson 3: 05 - Styling Up.mp4";
			break;
	}

	document.getElementById("Ln01").innerHTML = NtaL1;
	document.getElementById("Ln02").innerHTML = NtaL2;
	document.getElementById("Ln03").innerHTML = NtaL3;
	document.getElementById("Ln04").innerHTML = NtaL4;
	document.getElementById("Ln05").innerHTML = NtaL5;
	document.getElementById("Ln06").innerHTML = NtaL6;
	document.getElementById("Ln07").innerHTML = NtaL7;
	document.getElementById("Ln08").innerHTML = NtaL8;
	document.getElementById("Ln09").innerHTML = NtaL9;
}

function NoteL3 () {
	var NtaL1;
	var NtaL2;
	var NtaL3;
	var NtaL4;
	var NtaL5;
	var NtaL6;
	var NtaL7;
	var NtaL8;
	var NtaL9;

/* Inicializacion: Quitar todos los videos activos
document.getElementById("v1").style.display="none";
document.getElementById("v2").style.display="none";
document.getElementById("v3").style.display="none";
document.getElementById("v4").style.display="none";
document.getElementById("v5").style.display="none";
document.getElementById("v6").style.display="none";
document.getElementById("v7").style.display="none";
*/
/*Segun el numero de leccion activa se obtienen las notas asociadas*/
	switch (LecActiva) {
		case 1:
			document.getElementById("Tit").innerHTML="My own story about HTML (1)";
			NtaL1 = document.getElementById("N3L1L1").innerHTML;
			NtaL2 = document.getElementById("N3L2L1").innerHTML;
			NtaL3 = document.getElementById("N3L3L1").innerHTML;
			NtaL4 = document.getElementById("N3L4L1").innerHTML;
			NtaL5 = document.getElementById("N3L5L1").innerHTML;
			NtaL6 = document.getElementById("N3L6L1").innerHTML;
			NtaL7 = document.getElementById("N3L7L1").innerHTML;
			NtaL8 = document.getElementById("N3L8L1").innerHTML;
			NtaL9 = document.getElementById("N3L9L1").innerHTML;
			
			break;
		case 2:
			document.getElementById("Tit").innerHTML="Document Object Model";
			NtaL1 = document.getElementById("N3L1L2").innerHTML;
			NtaL2 = document.getElementById("N3L2L2").innerHTML;
			NtaL3 = document.getElementById("N3L3L2").innerHTML;
			NtaL4 = document.getElementById("N3L4L2").innerHTML;
			NtaL5 = document.getElementById("N3L5L2").innerHTML;
			NtaL6 = document.getElementById("N3L6L2").innerHTML;
			NtaL7 = document.getElementById("N3L7L2").innerHTML;
			NtaL8 = document.getElementById("N3L8L2").innerHTML;
			NtaL9 = document.getElementById("N3L9L2").innerHTML;
			/*document.getElementById("v4").style.display="inline";*/
			document.getElementById("vidname").innerHTML="Video Lesson 2: 11 - HTML-CSS-DOM.mp4";
			break;
		case 3:
			document.getElementById("Tit").innerHTML="The Box Model";
			NtaL1 = document.getElementById("N3L1L3").innerHTML;
			NtaL2 = document.getElementById("N3L2L3").innerHTML;
			NtaL3 = document.getElementById("N3L3L3").innerHTML;
			NtaL4 = document.getElementById("N3L4L3").innerHTML;
			NtaL5 = document.getElementById("N3L5L3").innerHTML;
			NtaL6 = document.getElementById("N3L6L3").innerHTML;
			NtaL7 = document.getElementById("N3L7L3").innerHTML;
			NtaL8 = document.getElementById("N3L8L3").innerHTML;
			NtaL9 = document.getElementById("N3L9L3").innerHTML;
			/*document.getElementById("v7").style.display="inline";*/
			document.getElementById("vidname").innerHTML="Video Lesson 3: 09 - The Box Revisited.mp4";
			break;
	}

	document.getElementById("Ln01").innerHTML = NtaL1;
	document.getElementById("Ln02").innerHTML = NtaL2;
	document.getElementById("Ln03").innerHTML = NtaL3;
	document.getElementById("Ln04").innerHTML = NtaL4;
	document.getElementById("Ln05").innerHTML = NtaL5;
	document.getElementById("Ln06").innerHTML = NtaL6;
	document.getElementById("Ln07").innerHTML = NtaL7;
	document.getElementById("Ln08").innerHTML = NtaL8;
	document.getElementById("Ln09").innerHTML = NtaL9;
}

function NoteL4 () {
	var NtaL1;
	var NtaL2;
	var NtaL3;
	var NtaL4;
	var NtaL5;
	var NtaL6;
	var NtaL7;
	var NtaL8;
	var NtaL9;

/* Inicializacion: Quitar todos los videos activos
document.getElementById("v1").style.display="none";
document.getElementById("v2").style.display="none";
document.getElementById("v3").style.display="none";
document.getElementById("v4").style.display="none";
document.getElementById("v5").style.display="none";
document.getElementById("v6").style.display="none";
document.getElementById("v7").style.display="none";
*/
/*Segun el numero de leccion activa se obtienen las notas asociadas*/
	switch (LecActiva) {
		case 1:
			document.getElementById("Tit").innerHTML="My own story about HTML (2)";
			NtaL1 = document.getElementById("N4L1L1").innerHTML;
			NtaL2 = document.getElementById("N4L2L1").innerHTML;
			NtaL3 = document.getElementById("N4L3L1").innerHTML;
			NtaL4 = document.getElementById("N4L4L1").innerHTML;
			NtaL5 = document.getElementById("N4L5L1").innerHTML;
			NtaL6 = document.getElementById("N4L6L1").innerHTML;
			NtaL7 = document.getElementById("N4L7L1").innerHTML;
			NtaL8 = document.getElementById("N4L8L1").innerHTML;
			NtaL9 = document.getElementById("N4L9L1").innerHTML;
			
			break;
		case 2:
			break;
		case 3:
			break;
	}

	document.getElementById("Ln01").innerHTML = NtaL1;
	document.getElementById("Ln02").innerHTML = NtaL2;
	document.getElementById("Ln03").innerHTML = NtaL3;
	document.getElementById("Ln04").innerHTML = NtaL4;
	document.getElementById("Ln05").innerHTML = NtaL5;
	document.getElementById("Ln06").innerHTML = NtaL6;
	document.getElementById("Ln07").innerHTML = NtaL7;
	document.getElementById("Ln08").innerHTML = NtaL8;
	document.getElementById("Ln09").innerHTML = NtaL9;
}

function NoteL5 () {
	var NtaL1;
	var NtaL2;
	var NtaL3;
	var NtaL4;
	var NtaL5;
	var NtaL6;
	var NtaL7;
	var NtaL8;
	var NtaL9;

/* Inicializacion: Quitar todos los videos activos
document.getElementById("v1").style.display="none";
document.getElementById("v2").style.display="none";
document.getElementById("v3").style.display="none";
document.getElementById("v4").style.display="none";
document.getElementById("v5").style.display="none";
document.getElementById("v6").style.display="none";
document.getElementById("v7").style.display="none";
*/
/*Segun el numero de leccion activa se obtienen las notas asociadas*/
	switch (LecActiva) {
		case 1:
			document.getElementById("Tit").innerHTML="My own story about HTML (3)";
			NtaL1 = document.getElementById("N5L1L1").innerHTML;
			NtaL2 = document.getElementById("N5L2L1").innerHTML;
			NtaL3 = document.getElementById("N5L3L1").innerHTML;
			NtaL4 = document.getElementById("N5L4L1").innerHTML;
			NtaL5 = document.getElementById("N5L5L1").innerHTML;
			NtaL6 = document.getElementById("N5L6L1").innerHTML;
			NtaL7 = document.getElementById("N5L7L1").innerHTML;
			NtaL8 = document.getElementById("N5L8L1").innerHTML;
			NtaL9 = document.getElementById("N5L9L1").innerHTML;
			
			break;
		case 2:
			break;
		case 3:
			break;
	}

	document.getElementById("Ln01").innerHTML = NtaL1;
	document.getElementById("Ln02").innerHTML = NtaL2;
	document.getElementById("Ln03").innerHTML = NtaL3;
	document.getElementById("Ln04").innerHTML = NtaL4;
	document.getElementById("Ln05").innerHTML = NtaL5;
	document.getElementById("Ln06").innerHTML = NtaL6;
	document.getElementById("Ln07").innerHTML = NtaL7;
	document.getElementById("Ln08").innerHTML = NtaL8;
	document.getElementById("Ln09").innerHTML = NtaL9;
}

function NoteL6 () {
	var NtaL1;
	var NtaL2;
	var NtaL3;
	var NtaL4;
	var NtaL5;
	var NtaL6;
	var NtaL7;
	var NtaL8;
	var NtaL9;

/* Inicializacion: Quitar todos los videos activos
document.getElementById("v1").style.display="none";
document.getElementById("v2").style.display="none";
document.getElementById("v3").style.display="none";
document.getElementById("v4").style.display="none";
document.getElementById("v5").style.display="none";
document.getElementById("v6").style.display="none";
document.getElementById("v7").style.display="none";
*/
/*Segun el numero de leccion activa se obtienen las notas asociadas*/
	switch (LecActiva) {
		case 1:
			document.getElementById("Tit").innerHTML="My own story about HTML (4)";
			NtaL1 = document.getElementById("N6L1L1").innerHTML;
			NtaL2 = document.getElementById("N6L2L1").innerHTML;
			NtaL3 = document.getElementById("N6L3L1").innerHTML;
			NtaL4 = document.getElementById("N6L4L1").innerHTML;
			NtaL5 = document.getElementById("N6L5L1").innerHTML;
			NtaL6 = document.getElementById("N6L6L1").innerHTML;
			NtaL7 = document.getElementById("N6L7L1").innerHTML;
			NtaL8 = document.getElementById("N6L8L1").innerHTML;
			NtaL9 = document.getElementById("N6L9L1").innerHTML;
			
			break;
		case 2:
			break;
		case 3:
			break;
	}

	document.getElementById("Ln01").innerHTML = NtaL1;
	document.getElementById("Ln02").innerHTML = NtaL2;
	document.getElementById("Ln03").innerHTML = NtaL3;
	document.getElementById("Ln04").innerHTML = NtaL4;
	document.getElementById("Ln05").innerHTML = NtaL5;
	document.getElementById("Ln06").innerHTML = NtaL6;
	document.getElementById("Ln07").innerHTML = NtaL7;
	document.getElementById("Ln08").innerHTML = NtaL8;
	document.getElementById("Ln09").innerHTML = NtaL9;
}
