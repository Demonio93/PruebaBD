var formulario = document.getElementById('formulario');
var respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit' , function(e){
    e.preventDefault();

    var datos = new FormData(formulario);

    fetch('https://traumachilpancingo.000webhostapp.com/php/post.php', {
        method: 'POST',
        body: datos
    })
        .then( res => res.json())
        .then( data => {
            if(data==='error'){
                respuesta.innerHTML = 'Llena todos los campos'
            }else{
                /*respuesta.innerHTML = 'hola ' + data*/
                respuesta.innerHTML = data
            }
        } )
})