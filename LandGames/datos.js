function guardar_datos(){ 
	/*let persona = {
		nombre: "jose",
		edad: 19,
		correo: "xyz@xyz.com"

	};

	let nombre = "david";
	*/
	var person = { //
		nombre : document.getElementById("nombre").value,
		contrasena : document.getElementById("contrasena").value,
		puntAst : 0,
		
		
		 getNombre: function(){ 
				return this.nombre;
		 },
		 getContrasena: function(){
			 return this.contrasena;
		 },
		 getPuntAst: function(){
			 return this.puntAst;
		 },
		 setPuntAst: function(s){
			 
			 if(s > puntAst)
				 this.puntAst=s;
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
	//lineas para copiar
		var puntAs = person.getPuntAst();
		document.getElementById('asteroides').innerHTML = puntAs;
	}
}
function aJugador(a){
	var e = {
		getNombre: function(){ 
				return this.nombre;
		 },
		 getContrasena: function(){
			 return this.contrasena;
		 },
		 getPuntAst: function(){
			 return this.puntAst;
		 },
		 setPuntAst: function(s){
			 
			 if(s > puntAst)
				 this.puntAst=s;
		 },
	}

	var i = Object.assign(a,e);
	return i;
}
function aElinea(a){
	var e = {
		getNombreJ: function(){
			return this.nombreJ;
		},
	}

	var i = Object.assign(a,e);
	return i;
}


function login(){
	var nombre = document.getElementById("nombre").value;
	var contraseña = document.getElementById("contrasena").value;
	if (localStorage.getItem(nombre) != null){
		var i = aJugador(JSON.parse(localStorage.getItem(nombre)));
		var com = i.getContrasena();
		if(com == contraseña){
			var EnLinea ={
				nombreJ: document.getElementById("nombre").value,
				getNombreJ: function(){
					return this.nombreJ;
				},
			}
			window.localStorage.setItem("EnLinea",JSON.stringify(EnLinea));
			window.localStorage.setItem(nombre, JSON.stringify(i));
			document.getElementById('menUsuario').style.display = 'none';
			document.getElementById('bienvenido').style.display = 'block';
			document.getElementById("Unombre").innerHTML = nombre;
	
		}else{
		
		}
	}else{
		alert("nombre de usuario no encontrado, registrese");
	}

}
function obtenerNombre(person){
	var name = person.getNombre();
	return name;
}

//function contador juegos(){
//	
//}


function desconectarse(){
		window.localStorage.setItem("EnLinea",null);
		document.getElementById('menUsuario').style.display = 'block';
		document.getElementById('bienvenido').style.display = 'none';
}



function ComprobanteOnline(){

	var i = aElinea(JSON.parse(localStorage.getItem("EnLinea")));
	var scr = i.getNombreJ();
		if (i != null){
		
		document.getElementById('menUsuario').style.display = 'none';
		document.getElementById('bienvenido').style.display = 'block';
		document.getElementById("Unombre").innerHTML = scr;
		//funciones para copiar
		var play = aJugador(JSON.parse(localStorage.getItem(scr)));
		var puntAs = play.getPuntAst();
		document.getElementById('asteroides').innerHTML = puntAs;
		}
	
}



