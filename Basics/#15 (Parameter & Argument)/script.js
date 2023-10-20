// ini contoh I
// function tambah(a, b){ //didalam kurung ini adalah PARAMETER
//   return a + b;
// }

// let a = parseInt(prompt('Masukkan nilai ke-1')); //parseInt berfungsi untuk mengonversi String ke int
// let b = parseInt(prompt('Masukkan nilai ke-2'));
// let hasil = tambah(a, b); //di dalam kurung ini adalah ARGUMENT

// console.log(hasil);

// ini contoh II
function tambah (a, b){
  return a + b
}

function kali (a, b){
  return a * b
}

let hasil = kali (tambah(1,2), tambah(3,4))

console.log(hasil)