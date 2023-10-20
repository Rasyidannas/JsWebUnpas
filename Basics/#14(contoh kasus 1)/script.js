//ini cara tanpa function
// let a = 8;
// let b = 3;
// let volumeA;
// let volumeB;
// let jumlahVolume;
//
// volumeA = a*a*a;
// volumeB = b*b*b;
//
// jumlahVolume = volumeA + volumeB;
// console.log(jumlahVolume);

// ini dengan function
function jumlahVolumeDuaKubus(a, b){
  let volumeA;
  let volumeB;
  let total;
  
  volumeA = a*a*a;
  volumeB = b*b*b;
  total = volumeA + volumeB;

  return total;
}
console.log(jumlahVolumeDuaKubus(8, 3));
