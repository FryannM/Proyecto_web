
function validar(){

	var cedula = document.getElementById('cedula').value; // llamo al elemento del input

	var cedula2 = String(cedula);


		if(cedula2.length == 11) {

			
			validacion(convertirarray(cedula2),calculo(convertirarray(cedula2))); // si la cedula tiene 11 digitos se ejecuran los metodos que estan abajo
		}

		else{

			alert("Cantidad de numero es insuficiente " + cedula2.length); // de lo contrario lanza esta alerta
		
		}

}

function convertirarray (la_we){ //aqui convertitmos una cedula tipo string en un array

	var arr_ced = []; 	//inicializo el array son elementos

	for(var i=0; i <=la_we.length-1;i++){// aqui se toma cada elemeto del array

		arr_ced.push(parseInt(la_we.charAt(i)));// se convierte uno por uno a numero

	}

	

	return arr_ced;

}

function calculo(array){ //aqui se hace el calculo del modulo 10

	 var total=0;

	for(var i=0; i <=array.length-2;i++){	

		if ((i+1)%2==0) {

			total += array[i]*2 > 9 ? (array[i]*2)-9 : array[i]*2; 
		}

		else{

			total += array[i];

		}
		
	}



	total = total%10==0 ? 0 :10-(total % 10);


	
	return total;


}

function validacion(array,num){// se toma el resultado y el ultimo valor del array y se comparan a ver si es valido

	if (array.pop()==num){ 

		alert("Bienvenido su cedula es valida");

	}

	else {

		alert("Cedula invalida");
	}

}


