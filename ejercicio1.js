//Creo el objeto usuario
const usuario = {
    nombre: 'Jessica Luz',
    apallidos: 'Cabrera Díaz',
    temas: [
        {
            nombre: 'Node.js',
            fecha_inicio: '2025-01-04'
        },
        {
            nombre: 'Git',
            fecha_inicio: '2025-01-18'
        },
        {
            nombre: 'React',
            fecha_inicio: '2025-02-10'
        }
    ],
    busqueda_activa: true 
};

//Mostrar por pantalla la fecha de inicio del módulo React
const moduloReact = usuario.temas.find(tema => tema.nombre === `React`);
console.log('Fecha de inicio del módulo de React:', moduloReact.fecha_inicio);