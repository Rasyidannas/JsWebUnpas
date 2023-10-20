// ini contoh kasus I
// function jumlahVolumeDuaKubus(a, b){
//   let volumeA;
//   let volumeB;
//   let total;
  
//   volumeA = a*a*a;
//   volumeB = b*b*b;
//   total = volumeA + volumeB;

//   return total;
// }
// console.log(jumlahVolumeDuaKubus(8, 3));

// function di atas dapat kita 'refactoring' menjadi seperti dibawah
function jumlahVolumeDuaKubus(a, b){
  return a * a * a + b * b *b;
}
console.log(jumlahVolumeDuaKubus(8, 3));
