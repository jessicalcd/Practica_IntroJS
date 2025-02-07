#**Práctica de Introducción a JavaScript**

**Ejercico 1**

    - Creamos el objeto usuario con los campos indicados
    - Mostramos por pantalla la fecha de inicio del módulo React

**Ejercico 2**
 
 Esta en el archivo *bug.js*.
    - Se cambia el operador de comparción en el for. Como lo tiene el cliente provoca que el índice acceda a una posión fuera del array en la última iteración. Para solucionarlo hay que cambiar la condición <= por < .
    - Al ejecutar el código con la lista dada [1, 2, 3, 4, 5], la suma total es 15 y esta dividida entre 5 nos da un promedio igual a 3.  
    - Se muestra en consola el promedio, que es 3.

**Ejercicio 3**

· *3.1 Ejercicio*
    - Hacemos una función para que pase el array de string separado por '/', a excepción del último que va separado por un '.' .
    - Tiene que ser la misma función para las 3 listas.
    - Con *list.slice(0,-1)* se obtenemos una sublista sin el último elemento.
    - Con *.join('/')* unimos los elementos (excluyendo el último) usando '/' como separador.
    - Para unir el penúltimo y último elemento usamos *${list[list.length - 2]}.${list[list.length - 1]}*.

· *3.2 Ejercicio*
    - Tenemos una función que devuelve el número convertido en una cadena separada por guiones '-' .
    - Para convertir el número en una cadena usamos *number.toString()*
    - Dividimos la cadena en dígitos individuales con *.split('')*
    - Unimos los elementos del array separador por un guion gracias a *.join('-')*.

· *3.3 Ejercicio*
    - Creamos una función donde se da una cadena y devuelve la longitud de la cadena seguida de un espacio y la cadena invertida.
    - Obtenemos la longitud con *cadena.length*.
    - Ahora con *cadena.split('').reverse().join('')* dividimos la cadena de texto en un array de caracteres, invertimos y unimos de nuevo.

**Ejercicio 4**

Esta en el archivo *transform.js*.
    - Creamos dos funciones, una para obtener el listado de desarrolladores con la habilidad "Javascript" y otra para el listado de nombres de los proyectos.
    - Hay que utilizar map y filter.
    - Filter e includes lo usamos en la función desarrolladoresJS
    - En la función de nombreProyectos usamos map y flatMap para mostrar todo en una linea.

**Ejercicio 5**

    - Hay un código erroneo que tenemos que solventar. El cliente pide un usuario con el id correcto y le devuelve underfined, en lugar de los datos del usuario.
    - Para resolverlo usamos una promesa, asi simulamos una llamada asincrónica y devolvemos el resultado correcto cuando la operación haya terminado.



