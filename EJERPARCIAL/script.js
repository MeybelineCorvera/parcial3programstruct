document.getElementById('loadButton').addEventListener('click', function() {
    // Realiza la petición GET a la API pública
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Verifica si la respuesta es exitosa
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json(); // Convierte la respuesta en formato JSON
      })
      .then(data => {
        // Itera sobre los usuarios y crea un elemento <li> para cada uno
        const userList = document.getElementById('userList');
        userList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos datos
        data.forEach(user => {
          const listItem = document.createElement('li');
          listItem.textContent = user.name; // Asigna el nombre del usuario al <li>
          userList.appendChild(listItem);
        });
      })
      .catch(error => {
        // Muestra un error en la consola si ocurre algún problema
        console.error('Hubo un problema con la solicitud:', error);
      });
  });
  