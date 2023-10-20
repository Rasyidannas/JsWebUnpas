// DOM Selection
// getElementById --> ini mengembalikan element
const judul = document.getElementById('judul');
judul.style.color = 'white';//ini perintah u/ memasukkan css color
judul.style.backgroundColor= '#555';
judul.innerHTML = 'Rasyid Nur Annas';//ini untuk perintah mengganti code html


//getElementsByTagName--> ini mengembalikan HTML Collection, ini memanggil elemen dan penulisan harus menyertakkan index
const p = document.getElementsByTagName('p');
//looping u/ membuat pertintah kesemua index
for(let i = 0; i < p.length; i++){
  p[i].style.backgroundColor = 'lightblue';
}
console.log(p);
//cara lain penulisan untuk getElementsByTagName
const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '50px';


// getElementsByClassName --> ini mengembalikan HTML Collection, ini memanggil class dan penulisan harus menyertakkan index
const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML = 'Ini diubah dari javascript'
