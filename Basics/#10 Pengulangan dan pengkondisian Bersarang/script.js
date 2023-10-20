// ini contoh I
// let s = '';
// for (let i = 0; i < 5; i++) {
//   s = s + '*';
// }
// console.log(s);

//ini contoh II
//let s = '';
//for (let i = 0; i < 5; i++) {
//   s += '*';
//   s += '\n';
// }
 //console.log(s);

//ini contoh III
// let s = '';
// for (let i = 0; i < 10; i++) {
//   for (let j = 0; j < 5; j++) {
//     s += '*';
//   }
//   s +='\n';
// }
// console.log(s);

// ini contoh IV
// let s = '';
// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     s += '*';
//   }
//   s +='\n';
// }
// console.log(s);

//ini contoh V
// let s = '';
// for (let i = 10; i > 0; i--) {
//   for (let j = 0; j < i; j++) {
//     s += '*';
//   }
//   s +='\n';
// }
// console.log(s);
//ini contoh V dgn cara berbeda
// let s ='';
// for (let i = 1; i < 5; i++) {
//   for(let j = 1; j < 5; j++){
//     if (j >= i) {
//       s += '*'
//     }
//   }
//   s += '\n'
// }
// console.log(s);

//ini contoh VI
 let s = '';
 for(let i = 0; i < 5; i++){
   for(let j = 0; j <= 5; j++)
     if (i + j >= 5) {
       s += '*';
   }else {
       s += ' ';
   }
   s +='\n'
 }
 console.log(s);

//contoh VII
// let s = '';
// for(let i = 1; i < 16; i++){
//   for(let j = 1; j < 16; j++){
//     if (i <= 16 / 2 && j >= (16 / 2)-(i - 1) && j <= (16 / 2)+(i - 1)){
//       s += '*';
//     }else if (i >= 16 / 2 && j > ((16 / 2)-i)*(-1) && j < (16 - ((16 / 2)-i)*(-1))) {
//       s += '*';
//     }else {
//       s += ' ';
//     }
//   }
//   s +='\n';
// }
// console.log(s);

//contoh VIII
// let s = '';
// for(let i = 1; i < 16; i++){
//   for(let j = 1; j < 16; j++){
//     if (i <= 16 / 2 && j >= (16 / 2)-(i - 1) && j <= (16 / 2)+(i - 1)){
//       s += '*';
//     }else {
//       s += ' ';
//     }
//   }
//   s +='\n';
// }
// console.log(s);
