#**Práctica de Introducción a JavaScript**

**Ejercico 1**
    - Crear el objeto usuario con los campos indicados
    - Mostra por pantalla la fecha de inicio del módulo React

**Ejercico 2**
 
 Esta en el archivo *bug.js*.
    - Se cambia el operador de comparción en el for. Como lo tiene el cliente provoca que el índice acceda a una posión fuera del array en la última iteración. Para solucionarlo hay que cambiar la condición <= por < .
    - Al ejecutar el código con la lista dada [1, 2, 3, 4, 5], la suma total es 15 y esta dividida entre 5 nos da un promedio igual a 3.  
    - Se muestra en consola el promedio, que es 3.

**Ejercicio 3**

· *3.1 Ejercicio*
    - Se crea una función para que pase el array de string separado por '/', a excepción del último que va separado por un '.' .
    - Tiene que ser la misma función para las 3 listas.
    - Con *list.slice(0,-1)* se obtiene una sublista sin el último elemento.
    - Con *.join('/')* une los elementos (excluyendo el último) usando '/' como separador.
    - Para unir el penúltimo y último elemento usamos *${list[list.length - 2]}.${list[list.length - 1]}*.

· *3.2 Ejercicio*
    - 