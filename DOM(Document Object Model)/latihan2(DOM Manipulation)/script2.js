//DOM Manipulation

//1. appendChild -->ini menambahkan di akhir atau membuat anak terakhir
//Buat Elemen
const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('Pragraf Baru');

//simpan tulisan dalam paragraf
pBaru.appendChild(teksBaru);

//simpan pBaru di section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru)


//ini cara simple
const p = document.createElement('p')
p.textContent = 'ini cara simple'
document.querySelector('#a').appendChild(p)


//2.insertBefore--> ini menambahkan elemen sebelum elemen atau ditengah 
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru)

const ul = document.querySelector('#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2)

//ini cara simple
const li = document.createElement('li');
li.textContent = 'ini item baru dibuat dengan simple';

const ulSimple = document.querySelector('li:nth-child(3)');
document.querySelector('#b ul').insertBefore(li, ulSimple)


//3. removeChild-->ini untuk menghapus sebuah elemen
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


//4.replaceChild--> ini untuk mengganti elemen lama dengan elemen baru 
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!');

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4)

//ini cara simple
const h1Baru = document.createElement('h1');
h1Baru.textContent = 'Hello Simple Away:)';

document.querySelector('#judul').appendChild(h1Baru)
document.querySelector('body').replaceChild(h1Baru, document.querySelector('h1'))
