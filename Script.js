const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")
buttons.forEach(function (button) {
    button.addEventListener('click', function(whatever){
        console.log(whatever.target)
        if(whatever.target.id==='grey'){
            body.style.backgroundColor = whatever.target.id
        }
        if(whatever.target.id==='white'){
            body.style.backgroundColor = whatever.target.id
        }
        if(whatever.target.id==='blue'){
            body.style.backgroundColor = whatever.target.id
        }
        if(whatever.target.id==='yellow'){
            body.style.backgroundColor = whatever.target.id
        }

    });
});