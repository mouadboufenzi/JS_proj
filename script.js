var username = document.getElementById("username"),
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    cpassword = document.getElementById("cpassword"),
    msg1 = document.getElementById("msg1")
    msg2 = document.getElementById("msg2")
    msg3 = document.getElementById("msg3")
    msg4 = document.getElementById("msg4")

    input = document.querySelector('input')

    const isEmailValid = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    const isRequired = value => value === '' ? false : true;

    const isPasswordSecure = (password) => {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
    };

    var flagU, flagE, flagP, flagCp = false;
username.addEventListener("input", function(){
    let a = username.value;
    if(!isRequired(a)) {
        msg1.style.display = "block";
        username.style.border = "0.2px solid red";
        msg1.innerHTML = "Username est obligatoire";
    }else if(a.length < 3 || a.length > 25){
        msg1.style.display = "block";
        username.style.border = "0.2px solid red";
        msg1.innerHTML = "Username comporte au moins 3 caractères et ne peut pas dépasser 25 caractères";
    }else{
        msg1.style.display = "none";
        username.style.border = "0.2px solid green";
        flagU = true;
        return flagU;
   }
})

email.addEventListener("input", function(){
    let a = email.value;
    if (!isRequired(a)) {
        msg2.style.display = "block";
        email.style.border = "0.2px solid red";
        msg2.innerHTML = "Email est obligatoire";
    } else if (!isEmailValid(a)) {
        msg2.style.display = "block";
        email.style.border = "0.2px solid red";
         msg2.innerHTML = "Email doit être correspondant à un pattern RegEx : example@example.ma";
    } else {
        msg2.style.display = "none";
        email.style.border = "0.2px solid green";
        flagE = true;
        return flagE;
    }

})

password.addEventListener("input", function () {
    let a = password.value;
    if (!isRequired(a)) {
        msg3.style.display = "block";
        password.style.border = "0.2px solid red";
        msg3.innerHTML = "Mot de passe est obligatoire";
    } else if (!isPasswordSecure(a)) {
        msg3.style.display = "block";
        password.style.border = "0.2px solid red";
         msg3.innerHTML = "Le mot de passe doit contenir au moins 8 caractères, dont au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial (!@#$%^&amp;*).";
    } else {
        msg3.style.display = "none";
        password.style.border = "0.2px solid green";
        flagP = true;
        return flagP;
    }
  })

  cpassword.addEventListener("input", function () {
    let a = password.value;
    let b = cpassword.value;

    if (!isRequired(b)) {
        msg4.style.display = "block";
        cpassword.style.border = "0.2px solid red";
        msg4.innerHTML = "Mot de passe est obligatoire";
    } else if (b != a) {
        msg4.style.display = "block";
        cpassword.style.border = "0.2px solid red";
         msg4.innerHTML = "Le mot de passe de confirmation doit être le même que le mot de passe.";
    } else {
        msg4.style.display = "none";
        cpassword.style.border = "0.2px solid green";
        flagCp = true;
        return flagCp;
    }
  })

  document.getElementById("sub").addEventListener("click", function () {
    if(flagU && flagE && flagP && flagCp){
        document.getElementById("f").setAttribute('action','page2.html')
    }
    })

  