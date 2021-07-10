let pagina = 1;

document.addEventListener('DOMContentLoaded', function() {
    iniciarApp();
});

function iniciarApp() {
    mostrarSeccion();
    cambiarSeccion();
    formulario();
}

function mostrarSeccion() {
    const seccionAnterior = document.querySelector('.mostrar-seccion')
    if ( seccionAnterior ) {
        seccionAnterior.classList.remove('mostrar-seccion');
    }

    const seccionActual = document.querySelector(`#paso-${pagina}`);
    seccionActual.classList.add('mostrar-seccion');

    // Ocultar boton proyecto al precionarlo
    const ocultar = document.querySelector('.ocultar');
    if (`#paso-${pagina}` === '#paso-3'){
        const claseProyecto = document.querySelector('.proyecto');
        claseProyecto.classList.add('ocultar');
    } if ( ocultar ){
        ocultar.classList.remove('ocultar');
    }

    // bloquear scroll en inicio

    if (`#paso-${pagina}` === '#paso-1'){
        const claseScroll = document.querySelector('.contenedor');
        claseScroll.classList.add('no-scroll');
    } else {
        const noScroll = document.querySelector('.no-scroll');
        if ( noScroll ){
        noScroll.classList.remove('no-scroll');
        }
    }
}



function cambiarSeccion() {
    const enlaces = document.querySelectorAll('button');
    enlaces.forEach( enlace => {
        enlace.addEventListener('click', e => {
            e.preventDefault();
            pagina = parseInt(e.target.dataset.paso);
            mostrarSeccion();

        })
    })
}

function formulario() {
    const $form = document.querySelector('#form');

    $form.addEventListener('submit', handlesubmit);
    
    async function handlesubmit(event) {
        event.preventDefault();
        const form = new FormData(this);
        const response = await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'application/json'
            }
        })
        if (response.ok) {
            this.reset();
            alert('Gracias por contactarme, te escribire pronto!');
        }
    }

    
}