/* 
* Author: JEO SISTEMAS
* Website: https://jeosistemas.com.ar
*/

const $form = document.querySelector('#form');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const phone = '573012297913';


$form.addEventListener('submit', (event) => {
    event.preventDefault()
    buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
    buttonSubmit.disabled = true

    setTimeout(() => {
        let name = document.querySelector('#name').value
        let lastname = document.querySelector('#lastname').value
        let email = document.querySelector('#email').value
        let tel = document.querySelector('#tel').value
        let origen = document.querySelector('#origen').value
        let destino = document.querySelector('#destino').value
        let envio = document.querySelector('#envio').value
        let abona = document.querySelector('#abona').value
        let comentario = document.querySelector('#comentario').value
        let message = 'send?phone=' + phone 
        + '&text=*_Formulario Web_*%0A*_Nuevo Pedido_*%0A%0A*¿Cual es tu nombre?*%0A' 
        + name + 
        '%0A*¿Cuál es tu apellido?*%0A' 
        + lastname + 
        '%0A*¿Cuál es tu correo?*%0A' 
        + email + 
        '%0A*¿Cuál es tu telefono?*%0A' 
        + tel + 
        '%0A*¿Cuál es la direccion de origen?*%0A' 
        + origen + 
        '%0A*¿Cuál es la direccion de destino?*%0A' 
        + destino + 
        '%0A*¿Que tenemos que llevar?*%0A' 
        + envio + 
        '%0A*¿Donde se abona?*%0A' 
        + abona + 
        '%0A*Comentarios*%0A' 
        + comentario + ''

        if (isMobile()) {
            window.open(urlMobile + message, '_blank')
            window.location.assign(urlMobile + message, '_blank')
        } else {
            window.open(urlDesktop + message, '_blank')
        }

        buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
        buttonSubmit.disabled = false

    }, 4000);

});
