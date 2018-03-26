

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