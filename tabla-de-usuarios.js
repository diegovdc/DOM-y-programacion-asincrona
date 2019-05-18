/*
  Al dar click en el botón cargar datos, hacer una petición ajax a https://jsonplaceholder.typicode.com/users
  usando axios.get: Ver documentación en https://github.com/axios/axios#axios-api

  Esto devuelve un array con objetos de usuario.
  Usando este array renderizar una tabla para mostrar la información del usuario.

  Si aun no saben usar axios y la promesas o async/await pero quieren crear una tabla dinámicamente pueden usar un array hardcodeado con datos similares.

  i.e. 
  const users = [{name: 'Pedro Picapiedra', phone: '5512345678'}, {name: 'Edna Moda', phone: ''8765432155}]


  Recomendación se puede usar:
  [element.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) para generar un callback al dar click en el botón

  [element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) para convertir un string de html en html.

  Usar interpolación de strings para generar los [templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals): 
    `<tr>
      <td>${name}</td>
      <td>${phone}</td>
    </tr>`

  Generar la tabla como string luego insertarla en el DOM
*/
