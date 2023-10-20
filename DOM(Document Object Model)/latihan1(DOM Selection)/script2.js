//querySelector()--ini untuk mengeksekusi sebuah elemen
const p4 = document.querySelector('#b p')
p4.style.color = 'green'
p4.style.fontSize = '30px'

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = 'orange'


//querySelectorAll()--ini untuk mengeksekusi semua elemen dan ini akan menjadi array
const pAll = document.querySelectorAll('p')
pAll.forEach(function(p) {
    p.style.backgroundColor = 'lightblue'
})
