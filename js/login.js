function signup() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const username = document.querySelector('.signup-username').value;
    const email = document.querySelector('.signup-email').value;
    const password = document.querySelector('.signup-password').value;
    const messageEl = document.querySelector('.signup-message');

    if (!username || !email || !password) {
        messageEl.textContent = "Please fill all fields!";
        messageEl.style.color = "red";
        return;
    }

    if (users.some(user => user.email === email)) {
        messageEl.textContent = "Email already registered!";
        messageEl.style.color = "red";
        return;
    }

    users.push({ username, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    
    messageEl.textContent = "Signup successful!";
    messageEl.style.color = "green";
}

function login() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const email = document.querySelector('.login-email').value;
    const password = document.querySelector('.login-password').value;
    const messageEl = document.querySelector('.login-message');

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        messageEl.textContent = "Login successful!";
        messageEl.style.color = "green";
        localStorage.setItem('currentUser', JSON.stringify(user));
        setTimeout(() => window.location.href = "index.html", 1000);
    } else {
        messageEl.textContent = "Invalid credentials!";
        messageEl.style.color = "red";
    }
}