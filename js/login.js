document.getElementById('login-submit').addEventListener('click',function(){

    // Get User Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    // Get User Password
    const passField = document.getElementById('user-password');
    const userPassword = passField.value;

    if(userEmail == 'emon@gmail.com' && userPassword == 'magua'){
        window.location.href = 'banking.html';
    }
    else(
        console.log('Invalid Information')
    )
});