

var p = {

	teclas: document.querySelectorAll("#calculadora ul li"),
	
	operaciones: document.querySelector("#operaciones"),

}




/*=============================================
         FUNCION DE LA LLAMADA
=============================================*/

function Hacerllamada()
{
	  alert("Llamando a ... " + document.getElementById("operaciones").innerHTML ) ;

	
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

		 m.calculadora(p.accion, p.digito);

	},

	calculadora: function(accion, digito) {

		switch (accion) {

			case "numero":

				

				if (p.operaciones.innerHTML == "0") {

					p.operaciones.innerHTML = digito;

				} else {

					if (p.resultado) {

						
						p.operaciones.innerHTML = digito;


					} else {

						p.operaciones.innerHTML += digito;
					}

				}

				break;


		}

	},

	Borrar: function() {
			p.operaciones.innerHTML = 0;
	}

}

m.inicio();
m.teclado();