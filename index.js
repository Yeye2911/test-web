let username = 'pruebayeisson@gmail.com';
let password = 'asd123qwe456';

firebase.auth().createUserWithEmailAndPassword(username, password)
.then((succes) => {
    console.log(succes)
})
.catch((error) =>  {
    if (error.code == "auth/email-already-in-use") {
        alert("La dirección de correo electrónico ya está siendo utilizada por otra cuenta.");
    } else {
        console.log(error);
    }
});