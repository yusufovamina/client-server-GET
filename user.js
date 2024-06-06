function displayUsersFromLocalStorage() {
    const localStorageUsers = JSON.parse(localStorage.getItem('users'));
    const localStorageUsersList = document.getElementById('localStorageUsers');
    localStorageUsersList.innerHTML = ''; 
    if (localStorageUsers) {
        localStorageUsers.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            localStorageUsersList.appendChild(listItem);
        });
    } else {
        localStorageUsersList.textContent = 'empty list.';
    }
}

window.addEventListener('DOMContentLoaded', displayUsersFromLocalStorage);