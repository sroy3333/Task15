function handleFormSubmit(event) {
    event.preventDefault();
  
    // Get form values
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
  
    // Create user object
    const user = {
      username,
      email,
      phone
    };
  
    // Add user to the list
    addUserToList(user);
  
    // Clear form fields
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
}
  
  // Function to add user to the list
  function addUserToList(user) {
    // Create li element
    const li = document.createElement('li');
  
    // Create text node with user details
    const textNode = document.createTextNode(
      `Username: ${user.username}, Email: ${user.email}, Phone: ${user.phone}`
    );
  
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
      // Remove li element from the screen
      li.remove();
      // Remove user from local storage
      removeUserFromLocalStorage(user);
    };
  
    // Append text node and delete button to li
    li.appendChild(textNode);
    li.appendChild(deleteButton);
  
    // Append li to the user list
    document.getElementById('userList').appendChild(li);
  
    // Save user to local storage
    saveUserToLocalStorage(user);
}
  
  // Function to save user to local storage
  function saveUserToLocalStorage(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}
  
  // Function to remove user from local storage
  function removeUserFromLocalStorage(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users = users.filter(u => u.username !== user.username);
    localStorage.setItem('users', JSON.stringify(users));
}