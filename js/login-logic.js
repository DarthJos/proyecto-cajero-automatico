var userSigned = false;

function checkUserSigned() {
    console.log("INICIA ==> checkUserSigned()")
    alert("userSigned: "+userSigned)
    if (!userSigned)
        window.location.href = 'login.html';
}

document.querySelector('form')
    .addEventListener('submit', e=> {
        e.preventDefault()
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        for (cuenta of cuentas) {
            if(data.user == cuenta.nombre && data.password == cuenta.password) {
                userSigned = true;
                window.location.href = 'dashboard.html';
            }
        }
        alert(JSON.stringify(data))
        console.log(cuentas)
    })