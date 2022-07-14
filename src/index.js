import './index.css';

import { getUsers } from './api/user-api';

getUsers().then(users => {
  let usersBody = '';

  users.forEach(user => {
    usersBody += `<tr>
      <td><a href="#" data-id="${user.id}" class="delete-user">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
      </tr>`
  });
  global.document.getElementById('users').innerHTML = usersBody;
})
