function guardar_datos(){ 

	let nombre = document.getElementById("texto").value;
	let edad = document.getElementById("edad").value;
	let correo = document.getElementById("correo").value;
	let contrasena = document.getElementById("pass").value;
	/*let persona = {
		nombre: "jose",
		edad: 19,
		correo: "xyz@xyz.com"

	};

	let nombre = "juanda";
	*/

	localStorage.setItem("nombre", nombre);
	localStorage.setItem("edad", edad);
	localStorage.setItem("correo", correo);
	localStorage.setItem("contrasena", contrasena);
};
