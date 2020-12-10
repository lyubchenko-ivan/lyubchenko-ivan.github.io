let point = function (elem){
    elem.style.backgroundColor = 'red';
}


let reset = function (){
    start();
}



let start = function (){
    let container = document.getElementById('container');

    container.innerHTML = '<input type="button" value="Сбросить" onclick="reset()"> <input type = "text" placeholder = "какое количество квадратов?" id = "count"><br>';

    alert(document.getElementById("count").value);
    // alert(count);
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
}


start();