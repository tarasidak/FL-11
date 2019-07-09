let email, password, oldpassword, newpassword;
let minLenght = 6;
let newPassLenght = 5;
email = prompt('Enter your Email');
if (email === null || email === '') {
    alert('Canceled');
} else if (email.length > 0 && email.length < minLenght) {
    alert('I don’t know any emails having name length less than 6 symbols');
} else if (email === 'user@gmail.com' || email === 'admin@gmail.com') {
    password = prompt('Enter your password');
    if (password === null || password === '') {
        alert('Canceled');
    } else if (email === 'user@gmail.com' && password === 'UserPass' ||
        email === 'admin@gmail.com' && password === 'AdminPass') {
        if (confirm('Do you want to change your password?')) {
            oldpassword = prompt('Write your old password');
            if (oldpassword === password) {
                newpassword = prompt('Enter your new password');
                if (newpassword === null || newpassword === '') {
                    alert('You have failed the change');
                } else if (newpassword.length < newPassLenght) {
                    alert('It’s too short password. Sorry.');
                } else if (newpassword.length >= newPassLenght) {
                    let confirmNewPassword = prompt('Enter new password again');
                    if (confirmNewPassword === newpassword) {
                        alert('You have successfully changed your password.');
                    } else {
                        alert('You wrote the wrong password.');
                    }
                }
            } else {
                alert('You have failed the change');
            }
        } else {
            alert('You have failed the change');
        }
    } else {
        alert('I don’t know you');
    }
} else {
    alert('I don’t know you');
}