let UserData = [
    {
        username: "saad789",
        Email: "saadkamran678@gmail.com",
        Password: "Ronaldo"
    },
    {
        username: "saad79",
        Email: "saadkamran78@gmail.com",
        Password: "Ronald"
    },
    {
        username: "saad78",
        Email: "saadkamran68@gmail.com",
        Password: "Ronalo"
    },
    {
        username: "saad89",
        Email: "saadkamran68@gmail.com",
        Password: "Ronldo"
    }
];


function checkingUserAccount(){
    let username = document.querySelector('.username').value;
    let password = document.querySelector('.password').value;
    let email = document.querySelector('.email').value;
    let messageElement = document.querySelector('p');
    let isRegistered = false;

    for (let i = 0; i < UserData.length; i++) {
        if (UserData[i].username === username && 
            UserData[i].Email === email &&
            UserData[i].Password===password) {
            isRegistered = true;
            break;
        }
    }
    if(isRegistered){
        UserData.push( {
            username: username,
            Email: email,
            Password: password
        })
        messageElement.innerHTML = "Registration successful!";
        messageElement.style.color = "green";
        window.location.href = "product.html";
        return false;
    }
    else{
        messageElement.innerHTML = "Invalid credentials!";
        messageElement.style.color = "red";
        return false; 

    }
}
 
