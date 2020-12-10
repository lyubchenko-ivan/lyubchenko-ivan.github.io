
let tored = function(elem){
    elem.style.backgroundColor = 'red';
}

let getSquare = function (count){
    //console.log(count);

    let container = document.getElementById('container');
    container.innerHTML = '';

    for (let i = 0; i < count; i++){
        container.innerHTML += `<div class='rows'></div>`;
        let rows = document.getElementsByClassName('rows');
        rows[i].style.height = `${90 / count}vh`;
        for (let j = 0; j < count; j++){
            rows[i].innerHTML += `<div class='cols' onmouseover="tored(this)"></div>`;
            // let col = document.getElementById(`${i}${j}`);
            let cols = document.getElementsByClassName('cols');
            for (let k = 0; k <cols.length; k++){    
                cols[k].style.width = `${99 / count}%`;
            }    
        }
    }

    

}

let access = function(){
    let text = document.getElementById('count');
    let count = text.value;
    text.value = '';

    getSquare(count);
}


