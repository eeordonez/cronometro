

let div_cronometro = document.querySelector(".cronometro");
let tiempo;

function iniciar_cronometro(minutos, segundos) {
    div_cronometro.innerHTML = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;

    function actualizar() {
        if (minutos === 0 && segundos === 0) {
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

let iniciar = document.querySelector(".boton_iniciar");
        iniciar.textContent = 'iniciar';
        iniciar.addEventListener('click', function() {
            iniciar_cronometro(10, 5); 
        });
        document.body.appendChild(iniciar);


