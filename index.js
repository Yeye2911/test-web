firebase.auth().createUserWithEmailAndPassword('johnalexand3rg@gmail.com', 'asd123qwe456')
.then((algo)=> console.log(algo))
.catch((error) => {
    if (error.code == "auth/email-already-in-use") {
        alert("La dirección de correo electrónico ya está siendo utilizada por otra cuenta.");
    } else {
        alert(error.message);
    }
});