const button = document.getElementById('colorBoton');
const body = document.body;

button.addEventListener('click', () => {
    if(body.style.backgroundColor == 'red'){
        body.style.backgroundColor = 'white';
    }else{
        body.style.backgroundColor = 'red';
    }
});