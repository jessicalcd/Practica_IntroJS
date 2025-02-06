// Solución del Ejercicio 4

const datos = [
    {
        id: 1,
        nombre: 'Juan',
        habilidades: ['Javascript', 'HTML', 'CSS'],
        proyectos: [
            { id: 1, nombre: 'Proyecto 1' },
            { id: 2, nombre: 'Proyecto 2' }
        ]
    },
    {
        id: 2,
        nombre: 'Maria',
        habilidades: ['Python', 'SQL', 'Django'],
        proyectos: [
            { id: 3, nombre: 'Proyecto 3' },
            { id: 4, nombre: 'Proyecto 4' }
        ]
    },
    {
        id: 3,
        nombre: 'Pedro',
        habilidades: ['Javas', 'Spring', 'Hibernate'],
        proyectos: [
            { id: 5, nombre: 'Proyecto 5' },
            { id: 6, nombre: 'Proyecto 6' }
        ]
    },
];

const desarrolladoresJS = dato => dato.filter(desarrollador => desarrollador.habilidades.includes('Javascript'));

const nombreProyectos = dato => dato.flatMap(desarrollador => desarrollador.proyectos.map(proyecto => proyecto.nombre));

console.log("Desarrolladores con Javascript:", desarrolladoresJS(datos));
console.log("Nombres de los proyectos:", nombreProyectos(datos));