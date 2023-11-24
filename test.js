/* C'est une fonction pour afficher le mot de passe si vous cliquez sur l'icône en forme d'œil */ 
function showpassword(i){
    const target = i === 0 ? 'password' : 'confirm'
    const passwordInput = document.getElementById(target);
    
        if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        } else {
        passwordInput.type = 'password';
        }
        console.log('ok')
    
}
/* C'est une fonction pour sauvegarder l'image du profile*/
function addPicture(){

    document.getElementById('profil').click();


    document.getElementById('profil').addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('image').src = e.target.result;
        }
        reader.readAsDataURL(file);
        }
    });


}
/* C'est une fonction pour vérifier la validité et l'existence des informations*/
async function check(){
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const confirm = document.getElementById('confirm').value
    const file = document.getElementById('profil').files[0]
    
    if(!checkname(name)){
        throwErr('Entrez un nom composé uniquement de lettres')
    }
    else if(!checkmail(email)){
        throwErr('Entrer un email valide')
    }
    else if(!checkPassword(password)){
        throwErr('Le mot de passe doit contenir minimum 20 caracteres dont 1 caractere special')
    }
    else if(password !== confirm){
        throwErr('Les mots de passe ne sont pas identiques')
    }
    if(!file){
        throwErr('Entrez une image de profil')
    }

}

/* Ce sont des fonctions pour vérifier chaque information selon les normes */
function checkname(name){
    /* Le nom est composé uniquement de lettres */
    const namePattern = /^[a-zA-Z-' ]+$/;
    return namePattern.test(name)
}
function checkmail(mail){
    /* Vérifier la validité de l'email */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(mail)
}
function checkPassword(pass){
    /* Vérifiez que le mot de passe est valide et comprend au moins 10 caractères et un caractère spécial */
    const passwordPattern = /^(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{10,}$/;
    return passwordPattern.test(pass)
}


function closeErr(){
    /* Pour masquer la boîte d'erreur */
    const field = document.getElementById('err')
    field.style.display = 'none'
}

function throwErr(err){
    /* Pour afficher la boite d'erreur */
    event.preventDefault()
    const field = document.getElementById('err')
    field.style.display = 'block'
    field.innerHTML = err
}
