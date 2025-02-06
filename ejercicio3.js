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

// 3.2 Ejercicio


const input = 10;
const secondInput = 1;
const thirdInput = 11234;

const separador = (number) => {
    return number.toString().split('').join('-');
};

console.log(separador(thirdInput));

//3.3 Ejercicio

const input_1 = 'string';
const input_2 = 'variable';
const input_3 = 'pointer';

const invertirLongitud = (cadena) => {
    return `${cadena.length} ${cadena.split('').reverse().join('')}`;
};

console.log(invertirLongitud(input_3));
