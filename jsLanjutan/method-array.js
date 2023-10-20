const angka = [1, 4, 5, 6, 2, 6, 9, 2, 1, 8]

//for
// const newAngka = [];
// for(let i = 0; i < angka.length; i++){
//     if(angka[i]>=3){
//         newAngka.push(angka[i])
//     }
// }

// console.log(newAngka);

//filter
// const newAngka = angka.filter((e)=>e >= 3)
// console.log(newAngka);

//map
// const kaliAngka = angka.map((e)=>e * e)
// console.log(kaliAngka);

//reduce -> ini akan mengesekusi kesemua elemen
// const jmlhAngka = angka.reduce((acuumulator, currentvalue)=>acuumulator+currentvalue)
// console.log(jmlhAngka);

//method chaining
const chainingAngka = angka.filter((e)=> e >= 5).map((e)=> e * 3).reduce((acc, cur)=> acc + cur)
console.log(chainingAngka);

