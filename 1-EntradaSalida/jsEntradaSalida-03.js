/*
Ayrton Trapani DIV E
E/S ej3
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaramos variable
	var nombreIngresado;

    //guardamos el nombre
    //nombreIngresado = document.getElementById("txtIdNombre").value; //primer forma
    nombreIngresado=txtIdNombre.value;

    //mostrarlo por alert
	alert("su nombre es " + nombreIngresado);

}

//txtIdNombre
/*
entrada:
-prompt: muestra una ventana emergente y pide dato
-id

procesos:

salida:
-alert



*/
