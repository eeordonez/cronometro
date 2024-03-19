/* let div_cronometro = document.querySelector(".cronometro");
let tiempo;

function iniciar_cronometro(minutos, segundo){
    div_cronometro.innerHTML =`0${minutos}:${segundo}`

    function actualizar (){
        if (segundo==1 & minutos == 0){
            clearInterval(tiempo);
        }

        segundo--;

        //
        if(segundo==0){
            if(minutos>=1){
                segundo = 60
                minutos--;
            }
        }

        div_cronometro.innerHTML ="";
        
        if(segundo < 10){
            div_cronometro.innerHTML =`0${minutos}:0${segundo}`;
        }else{
            div_cronometro.innerHTML = `0${minutos}:${segundo}`;
        }

    }

  
    tiempo = setInterval(actualizar, 1000);
}

iniciar_cronometro(10, 11);
 */

let div_cronometro = document.querySelector(".cronometro");
let tiempo;

function iniciar_cronometro(minutos, segundos) {
    div_cronometro.innerHTML = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

    function actualizar() {
        if (minutos === 1 && segundos === 0) {
            clearInterval(tiempo);
            return;
        }

        segundos--;

        if (segundos < 0) {
            segundos = 59;
            minutos--;
        }

        div_cronometro.innerHTML = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
    }

    tiempo = setInterval(actualizar, 1000);
}

iniciar_cronometro(10, 11);
