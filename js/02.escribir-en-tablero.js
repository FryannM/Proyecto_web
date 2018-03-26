/*=============================================
OBJETO CON LAS PROPIEDADES DE LA CALCULADORA
=============================================*/

var p = {

	teclas: document.querySelectorAll("#calculadora ul li"),
	accion: null,
	digito: null,
	operaciones: document.querySelector("#operaciones"),
	cantidadSignos: 0

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

	// 

		}

	},

	borrarCalculadora: function() {

		p.operaciones.innerHTML = 0;

	}

}

m.inicio();