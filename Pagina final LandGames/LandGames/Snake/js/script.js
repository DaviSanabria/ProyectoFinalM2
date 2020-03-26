 window.document.onkeydown = tecla;
		var puntaje = 0;
        var posy = 0;
        var y = 20;
        var posx = 0;
        var randomx;
        var randomy;
        var x = 20;
        var cola = 1;
        var v = 2;
        var divi = document.body.getElementsByTagName('div');
        var tempo;
        var Tenter = 0;
        var randomcom;
        //FUNCION MOV
        function mov() {
            movCulebra();
            document.all.div0.style.top = y = y + posy;
            document.all.div0.style.left = x = x + posx;
            if (y + 'px' == divi[cola].style.top && x + 'px' == divi[cola].style.left) {
                Random();
            }
            if (y / 20 < 0 || y / 20 > 24) {
                fin();
            }
            if (x / 20 < 0 || x / 20 > 24) {
                fin();
            }
            for (i = 2; i < cola - 1; i++) {
                if (y + 'px' == divi[i].style.top && x + 'px' == divi[i].style.left) {
                    fin();
                }
            }
        }
        // FUNCION TECLA: EVENT ONKEYDOWN
        function tecla() { //alert(window.event.keyCode);
            switch (window.event.keyCode) {
                case 13://ENTER
                    if (Tenter == 0) {
                        Random();
                        tempo = window.setInterval('mov()', 60);
                        posx = 20;
                        posy = 0;
                        Tenter = 2;
                    }
                    else if (Tenter == 1) {
                        tempo = window.setInterval('mov()', 60);
                        Tenter = 2;
                    }
                    break;
                case 37://FLECHA IZQUIERDA
                    if (posx == 0) {
                        posy = 0;
                        posx = -20;
                    }
                    break;
                case 38://FLECHA ARRIVA
                    if (posy == 0) {
                        posy = -20;
                        posx = 0;
                    }
                    break;
                case 39://FLECHA DERECHA
                    if (posx == 0) {
                        posy = 0;
                        posx = 20;
                    }
                    break;
                case 40://FLECHA ABAJO
                    if (posy == 0) {
                        posy = 20;
                        posx = 0;
                    }
                    break;
                case 80://TECLA P PAUSA
                    window.clearInterval(tempo);
                    Tenter = 1;
                    break;
                case 67://TECLA C CARGAR
                    Random();
                    break;
            }
        }
        //FUNCION RANDOM--
        function Random() {
            cola = cola + 1;
			puntaje = puntaje + 20;
            randomy = (Math.round(Math.random() * 24));
            randomx = (Math.round(Math.random() * 24));
            document.all.area.insertAdjacentHTML("BeforeEnd", "<div id=div" + cola + " style = 'position:absolute;width:20;height:20;top:" + randomy * 20 + ";left:" + randomx * 20 + ";background-color:black'></div>");
        }
        //FUNCION MOVCULEBRA--
        function movCulebra() {
            v = v + 1;
            if (v >= cola) {
                v = 2;
            }
            if (v < cola) {
                divi[v].style.left = x;
                divi[v].style.top = y;
            }
        }
        function fin() {
            alert('PERDISTE');
            window.clearInterval(tempo);
			pararPuntaje();
        }
		
//funciones que copiar
function aElinea(a){
	var e = {
		getNombreJ: function(){
			return this.nombreJ;
		},
	}

	var i = Object.assign(a,e);
	return i;
}
function aJugador(a){
	var e = {
		getNombre: function(){ 
				return this.nombre;
		 },
		 getContrasena: function(){
			 return this.contrasena;
		 },
		 getPuntSnake: function(){
			 return this.puntSnake;
		 },
		 setPuntSnake: function(s){
			 
			 if(s > this.puntSnake)
				 this.puntSnake=s;
		 },
	}

	var i = Object.assign(a,e);
	return i;
}


function pararPuntaje(){
			
				var i = aElinea(JSON.parse(localStorage.getItem("EnLinea")));
				var src = i.getNombreJ();

		var puntSnake = {
					puntos :  puntaje,
					jugador : src,
					
					
					
				}
				alert(this.puntaje);
						window.localStorage.setItem("PuntSnake",JSON.stringify(puntSnake));
						
						var i = aElinea(JSON.parse(localStorage.getItem("EnLinea")));
						var scr = i.getNombreJ();
						var e = aJugador(JSON.parse(localStorage.getItem(scr)));
						e.setPuntSnake(puntaje);
						window.localStorage.setItem(src,JSON.stringify(e));
						
						location.reload();
}
		
		
		