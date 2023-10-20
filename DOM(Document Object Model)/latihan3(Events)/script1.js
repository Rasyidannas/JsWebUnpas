const p3 = document.querySelector('.p3');
function ubahWarnaP3(){
    p3.style.backgroundColor='lightblue';
}
//ini cara kedua
const p2= document.querySelector('.p2')
p2.onclick = ubahWarnaP2;

function ubahWarnaP2(){
    p2.style.backgroundColor='lightblue';
}


//addEventListener--> ini lebih recomended karena dapat membaca 2 function
const p4=document.querySelector('#b p');
p4.addEventListener('click', function(){
    const liBaru = document.createElement('li');
    liBaru.textContent = 'item baru';
    document.querySelector('#b ul').appendChild(liBaru)
})


