//Spread Operator
//memecah iterable menjadi single element
const mhs = ['rasyid', 'ciko', 'coki']
const dosen = ['ade', 'hendra', 'wanda']
const orang = [...mhs, ...dosen]//ini untukmenggabungkan array
console.log(...mhs);
console.log(...mhs[0]);
console.log(orang);

//mengcopy array & mndeklarasikan ulang tanpa mengubah array aslinya
const mhs1 = [...mhs]
mhs1[0] = 'fajar'
console.log(mhs1);