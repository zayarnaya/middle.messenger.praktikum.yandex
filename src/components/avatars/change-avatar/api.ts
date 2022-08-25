const host = 'https://ya-praktikum.tech';
const myUserForm = document.getElementById('myUserForm');

myUserForm.addEventListener('submit', event => {
  event.preventDefault();

  const avatar = document.getElementById('avatar');
  const form = new FormData(myUserForm);

  // Можете добавлять свои дополнительные поля или составлять данные полностью из пустой FormData
  // Если хотите назвать файлы как-то иначе, третий параметр по-вашему усмотрению
  // form.append('avatar', avatar, 'my-file-name.png');

  fetch(`${host}/api/v2/user/profile/avatar`, {
    method: 'PUT',
    credentials: 'include', // Нам нужно подставлять cookies
    mode: 'cors', // Работаем с CORS
    body: form,
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });
  });
