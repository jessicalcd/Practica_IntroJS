//Solución del Ejercicio 5

//Este programa simula una llamada asincrónicca para obtener un usuario

function obtenerUsuario(id) {
    return new Promise((resolve)=> {
        setTimeout(() => {
            const usuario = [{ id: 1, nombre: 'John Doe' }];
            resolve(usuario);
        },2000);
    });
}

obtenerUsuario(1)
    .then(usuario => {
        console.log(usuario);
    }).catch(error => {
        console.log(error);
    });
