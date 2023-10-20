//Contoh I dasar
// function tambah (){
//   return arguments // arguments ini tempat menyimpan argument
// }
// let coba = tambah (5,10,20,'hi',false)
// console.log(coba);

//contoh II
function tambah(){
  let hasil = 0
  for (let i = 0; i < arguments.length; i++){
    hasil += arguments[i]
  }
  return hasil
}

let coba = tambah(1,2,3,4)
console.log(coba);