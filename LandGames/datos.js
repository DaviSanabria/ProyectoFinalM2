var i = parseInt(localStorage.getItem("EnCuenta"), 10);
	if (i == 1){
	document.getElementById('menUsuario').style.display = 'none';
	}



function guardar_datos(){ 

	
	/*let persona = {
		nombre: "jose",
		edad: 19,
		correo: "xyz@xyz.com"

	};

	let nombre = "david";
	*/
const person = {
     nombre : document.getElementById("nombre").value,
	 contrasena : document.getElementById("contrasena").value,
}
var nombre= getNombre(JSON.stringify(person));

window.localStorage.setItem("EnCuenta","1");
window.localStorage.setItem("user", JSON.stringify(person));
document.getElementById('menUsuario').style.display = 'none';
	
}
function getNombre( person ){
	
	
}


function ocultar(){
	document.getElementById('menUsuario').style.display = 'none';
	
	
}

function mostrar(){
		document.getElementById('menUsuario').style.display = 'block';

}

 