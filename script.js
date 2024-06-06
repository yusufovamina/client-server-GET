function fetchUsers() {
    fetch('http://localhost:5000/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('userList');
            userList.innerHTML = '';
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;

                const addButton = document.createElement('button');
                addButton.textContent = 'Add';
                addButton.addEventListener('click', () => {
                    addUserToLocalStorage(user);
                });

                listItem.appendChild(addButton);

                userList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error ', error));
}

function addUserToLocalStorage(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    alert('user was added to localStorage');
}
window.addEventListener('DOMContentLoaded', fetchUsers);