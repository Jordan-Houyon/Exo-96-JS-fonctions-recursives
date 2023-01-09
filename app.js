/*
let newDiv = document.createElement('div');
function test(a) {
    (a++ < 10) ? test(a) : null;
    newDiv.innerHTML = a;
    document.body.appendChild(newDiv);
}
test(1)
 */

function test(a) {
    for (let a = 0; a < 10; a+=2) {
        let newDiv = document.createElement('div')
        newDiv.innerHTML = a;
        document.body.appendChild(newDiv)
    }
}
test(0)

function recurs(a){
    for (let a=0;a<20;a+=2){
    let divcreate=document.createElement('div')
        divcreate.innerHTML='test';
    document.body.append(divcreate);
    }
}

recurs(2);