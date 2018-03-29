
  $(function(){



    $("#boton").on('click', function(){

        

		 

        var texto = $("#text").val();

        if(texto.length == 0){

        	alert("Escriba algo para continuar");
        }

        else {

        letras(texto.trim());

        caracteres(texto.trim());

        novocales(texto.trim());

        palabras(texto.trim());

    	}

    });

    function caracteres(texto){

    	texto = texto.replace(/[\s]/gi,'');

    	alert("Cantidad de caracteres: " + texto.length)
    }

    function letras(texto){


    texto = texto.replace(/[^aeiou]/gi,'');

    alert("Cantidad de vocales: " + texto.length);
	}


	function novocales(texto){

    texto = texto.replace(/[\saeiou]/gi,'');

    alert("Cantidad de no vocales: " + texto.length);
	}

	function palabras(texto){

		palabras = texto.split(" ");


		alert("Cantidad de palabras: " + palabras.length);

	}


	
  });
      