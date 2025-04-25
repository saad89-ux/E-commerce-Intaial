// User data storage

// Signup function
function signup() {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let username = document.querySelector('.signup-username').value;
    let email = document.querySelector('.signup-email').value;
    let password = document.querySelector('.signup-password').value;
    let messageElement = document.querySelector('.signup-message');
    
    if (!username || !email || !password) {
        messageElement.innerHTML = "Please fill all fields!";
        messageElement.style.color = "red";
        return;
    }

    let newUser = { 
        username: username,
        email: email,
        password: password 
    };

    // Check if user already exists
    let userExists = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email) {
            userExists = true;
            break;
        }
    }

    if (userExists) {
        messageElement.innerHTML = "User already registered!";
        messageElement.style.color = "red";
        return;
    }

    // Save new user
    users.push(newUser);
    console.log(users, 'users',newUser)
    localStorage.setItem("users", JSON.stringify(users));
    
    messageElement.innerHTML = "Signup successful!";
    messageElement.style.color = "green";

    // Clear fields
    document.querySelector('.signup-username').value = '';
    document.querySelector('.signup-email').value = '';
    document.querySelector('.signup-password').value = '';
}

// Login function
function login() {
    let email = document.querySelector('.login-email').value;
    let password = document.querySelector('.login-password').value;
    let messageElement = document.querySelector('.login-message');

    // Get updated users from localStorage
    users = JSON.parse(localStorage.getItem('users')) || [];
    
    let isValidUser = false;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email && users[i].password === password) {
            isValidUser = true;
            break;
        }
    }

    if (isValidUser) {
        messageElement.innerHTML = "Login successful!";
        messageElement.style.color = "green";
        
        // Store current user in localStorage
        localStorage.setItem('currentUser', JSON.stringify({ email: email }));
        
        // Redirect after short delay to see message
        setTimeout(function() {
            window.location.href = "product.html";
        }, 500);
    } else {
        messageElement.innerHTML = "Invalid credentials!";
        messageElement.style.color = "red";
    }
}
