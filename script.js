// Progression 1 
// Check username
// create a function called as checkUserName()
// username should not be empty
// username should be a minimum of 8 characters and above 
// username should be less than 15 characters
// No space is allowed in username
// username should not contain special characters
// the function should return true if all the conditions above are validated.
// return false if the validation fails
function checkUserName() {
    var correct_way = /^[A-Za-z0-9]+$/;
    var a = document.getElementsByClassName("username").value;
    if (a == "") {
        document.getElementById("usertext").innerHTML = "Please Fill username";
        return false;
    }
    if (a < 8) {
        document.getElementById("usertext").innerHTML = "UserName should atleast of 8 Characters";
        return false;
    }
    if (a.length > 15) {
        document.getElementById("usertext").innerHTML = "username should be less than 15 characters";
        return false;
    }
    for (var i = 0; i < a.length; i++) {
        if (a.charAt(i) === " ") {
            document.getElementById("usertext").innerHTML = "No space is allowed in username";
            return false;
        }
    }
    if (a.match(correct_way)) {
        return true;
    } else {
        document.getElementById("usertext").innerHTML = "username should not contain special characters";
        return false;
    }
}


// Progression 2 
// Check mail
// create a function called as checkEmail()
// only @ , . , _ [at,dot,underscore] is allowed
// It can be alphanumeric in nature
// return true if it passses all validation and false otherwise
function checkUserName() {
    var email = document.getElementsByClassName("email");
    var filter = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
        document.getElementById("emailtext").innerHTML = "username should not contain special characters";
        return false;
    } else {
        return true;
    }
}

// Progression 3
// Check password
// create a function called as checkPassword()
// should be alphanumeric in nature
// password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]
// return true else return false
function checkPassword() {
    var correct_way = /^[A-Za-z0-9]+$/;
    var a = document.getElementsByClassName("password").value;
    if (a.match(/[a-z]/g) && a.match(/[A-Z]/g) && a.match(/[0-9]/g) && a.match(/[^a-zA-Z\d]/g)) {
        return true;
    } else {
        document.getElementById("passwordtext").innerHTML = "password must contain atleast one Uppercase, one number and special characters[!@#$%^&*()_]";
        return false;
    }
}