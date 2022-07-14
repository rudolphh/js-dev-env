import './index.css';

import { deleteUser, getUsers } from './api/user-api';

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
  global.document.querySelectorAll('.delete-user').forEach(link => {
    link.onclick = function(e) {
      e.preventDefault();
      let userId = this.getAttribute('data-id');
      deleteUser(userId).then((res) => { if (Object.keys(res).length === 0 ) this.parentElement.parentElement.remove(); });
    }
  });
})
