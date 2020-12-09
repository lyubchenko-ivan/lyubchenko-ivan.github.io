let point = function (elem){
    elem.style.backgroundColor = 'red';
}

let container = document.getElementById('container');

for (let i = 0; i < 16; i++) {
    container.innerHTML += `<div class = 'row'></div>`
}

let rows = document.getElementsByClassName('row');

for (let i = 0; i < 16; i++) {
    let temp = rows[i];
    
    for (let j = 0; j < 16; j++) {
        temp.innerHTML += `<div class='col' onmouseover='point(this)'></div>` 
        
    }
}