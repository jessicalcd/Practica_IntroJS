//3.1 Ejercicio  

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
]

const input2 = [
    'CodingGame',
    'python',
    'py',
];

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
];

const crearLinea = (list) => {
    return `${list.slice(0, -1).join('/')}/${list[list.length - 2]}.${list[list.length - 1]}`;
};

console.log(crearLinea(input2));