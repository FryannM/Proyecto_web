

var p = {

	teclas: document.querySelectorAll("#Tecladoclss ul li"),
	
	OperacionLlamar: document.querySelector("#OperacionLlamar"),

}




/*=============================================
         FUNCION DE LA LLAMADA
=============================================*/

function Hacerllamada()
{
	  alert("Llamando a ... " + document.getElementById("OperacionLlamar").innerHTML ) ;

	
}




var m = {

	inicio: function() {

		for (var i = 0; i < p.teclas.length; i++) {

			p.teclas[i].addEventListener("click", m.oprimirTecla)

		}
	},

	

	oprimirTecla: function(tecla) {

		p.accion = tecla.target.getAttribute("class");
		 p.digito = tecla.target.innerHTML;

		 m.Tecladoclss(p.accion, p.digito);

	},

	Tecladoclss: function(accion, digito) {

		switch (accion) {

			case "numero":

				

				if (p.OperacionLlamar.innerHTML == "0") {

					p.OperacionLlamar.innerHTML = digito;

				} else {

					if (p.resultado) {

						
						p.OperacionLlamar.innerHTML = digito;


					} else {

						p.OperacionLlamar.innerHTML += digito;
					}

				}

				break;


		}

	},

	Borrar: function() {
			p.OperacionLlamar.innerHTML = 0;
	}

}

m.inicio();
m.teclado();


function transformar(){
var num1,denom1,entero1,Resultado;
entero1=entero.value;
num1=parseInt (numerador.value);
denom1= parseInt(denominador.value);
if (denom1>0){
resultado=(entero1*denom1)+ parseInt(num1);
numeradore.value=resultado;
denominadore.value=denom1;
alert("El numero mixto ha sido transformado Correctamente... ");
}
else{
alert("El denominador debe ser distino de cero (0)... ");
}
}
function limpiar(){
entero.value="";
numerador.value="";
denominador.value="";
numeradore.value="";
denominadore.value="";
alert("Borrado de pantalla OK... ");
}