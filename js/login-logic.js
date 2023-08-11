var userSigned = false;

/* VALIDA SESION INICIADA */
function checkUserSigned() {
    userSigned = sessionStorage.getItem(userSigned)

    if (!userSigned)
        window.location.href = 'login.html';
}

/* LOGIN  */
document.querySelector('form')
    .addEventListener('submit', e=> {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )

        for (cuenta of cuentas) {
            if(data.user == cuenta.nombre && data.password == cuenta.password) {
                sessionStorage.setItem(userSigned,true);
                setUserData(cuenta);
                window.location.href = 'index.html';
            }
        }
    })

/* LOG OFF */
function logOff(){
    alert('Vuelva Pronto');
    sessionStorage.clear();
    window.location.href = 'login.html';
}

function setUserData(data) {
    console.log("INICIA ==> setUserData()")
    sessionStorage.setItem('userData',JSON.stringify(data));
}

function getUserData() {
    return JSON.parse(sessionStorage.userData);
}