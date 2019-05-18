# Ejercicios DOM y Programación Asíncrona

Setup:

`npm install` en este directorio

## Ejercicio 1 "Piedra papel o tijera"
Agregar interactividad al juego en el archivo `piedra-papel-o-tijera.js`

Iniciar servidor:
`npm run parcel piedra-papel-o-tijera.html`

## Ejercicio 2 "Tabla de usuarios"
Recuperar datos de usuario de un endpoint externo y generar una tabla HTML que muestre los datos.

Iniciar servidor:
`npm run parcel tabla-de-usuarios.html`

Al dar click en el botón `Cargar Datos`, hacer una petición ajax a https://jsonplaceholder.typicode.com/users usando axios.get: Ver documentación en https://github.com/axios/axios#axios-api

Esto devuelve un array con objetos de usuario.
Usando este array renderizar una tabla para mostrar la información del usuario.

Si aun no saben usar `axios` y `Promises` o `async/await` pero quieren crear una tabla dinámicamente pueden usar un array hardcodeado con datos similares.

i.e. 
```js
const users = [{name: 'Pedro Picapiedra', phone: '5512345678'}, {name: 'Edna Moda', phone: '8765432155'}]
```

Recomendación se puede usar:
[element.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) para generar un callback al dar click en el botón

[element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) para convertir un string de html en html. Es decir, pueden generar la tabla como string luego insertarla en el DOM.

Usar interpolación de strings para generar los [templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals): 
```js
const myRow = `<tr>
  <td>${name}</td>
  <td>${phone}</td>
</tr>`
```
### Ejercicio 2.1
Si terminaron el ejercicio anterior y no usaron el método de array `.map`, investigar la manera de usar este método para modificar su código y hacerlo en un estilo más funcional. Para será necesario crear una función que tome un objeto del array `users` y devuelva un string que sea el row html.

Para ver una solución en este sentido se puede estudiar: https://github.com/diegovdc/clase-consumo-de-apis/tree/solucion (ojo es la rama llamada `solucion`).


## Ejercicio 3 "Login"
Usando el api de https://jsonplaceholder.typicode.com/ hacer un mock de un login de usuario, y al logear al usuario redigirilo a cualquier página de su elección.
