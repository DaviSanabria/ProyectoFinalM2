function guardar_datos(){ 
	/*let persona = {
		nombre: "jose",
		edad: 19,
		correo: "xyz@xyz.com"

	};

	let nombre = "david";
	*/
	var person = {
		nombre : document.getElementById("nombre").value,
		contrasena : document.getElementById("contrasena").value,
		puntAst : "",
		puntSnk : "",
		puntMem : "",
	 
		
		 getNombre: function(){
				return this.nombre;
		 },
		 getContrasena: function(){
			 return this.nombre;
		 },

		 
		 setPuntSmk: function(i){
			 if (this.puntSnk < i)
				 this.puntSnk = i;
		 },
		 setPuntAst: function(i){
			 if (this.puntAst < i)
				 this.puntAst = i;
		 },
		 
		 setPuntMem: function(i){
			 if (this.puntMem < i)
				 this.puntMem = i;
		 },
	 
	}

	
	var EnLinea ={
		nombreJ: document.getElementById("nombre").value,
		getNombreJ: function(){
			return this.nombreJ;
		},
	
	}
	var j = obtenerNombre(person);
	if(localStorage.getItem(j) != null){
	alert("nombre no disponible");
	}else{
	window.localStorage.setItem("EnLinea",JSON.stringify(EnLinea));
	window.localStorage.setItem(j, JSON.stringify(person));
	document.getElementById('menUsuario').style.display = 'none';
	document.getElementById('bienvenido').style.display = 'block';
	document.getElementById("Unombre").innerHTML = j;
	}




	

}


function login(){
	var nombre = document.getElementById("nombre").value;
	var contraseña = document.getElementById("contrasenia").value;
	
		

}
function obtenerNombre(person){
	var name = person.getNombre();
	return name;
}


//function contador juegos(){
//	
//}


function ocultar(){
	document.getElementById('menUsuario').style.display = 'none';	
}

function desconectarse(){
		window.localStorage.setItem("EnLinea",null);
		document.getElementById('menUsuario').style.display = 'block';
		document.getElementById('bienvenido').style.display = 'none';
}


function ComprobanteOnline(){
	var e = {
		getNombreJ: function(){
			return this.nombreJ;
		},
		
	}
	var i = Object.assign(JSON.parse(localStorage.getItem("EnLinea")), e);
	var scr = i.getNombreJ();
		if (i != null){
		
		document.getElementById('menUsuario').style.display = 'none';
		document.getElementById('bienvenido').style.display = 'block';
		document.getElementById("Unombre").innerHTML = scr;
		}
}
