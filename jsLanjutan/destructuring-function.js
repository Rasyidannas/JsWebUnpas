//Destructuring
//array
// function penjumlahanPerkalian(a, b){return [a+b, a*b]}

// const [jumlah, kali] = penjumlahanPerkalian(2,3)
// console.log(jumlah);
// console.log(kali);

//object
function kalkulasi(a,b){
    return{
        tambah: a+b,
        kurang: a-b,
        kali: a*b,
        bagi: a/b
    }
}

const {bagi, kurang, tambah, kali} = kalkulasi(2, 3)
console.log(kali);


//dextructuring function arguments
const mhs1={
    nama: 'rasyid nur annas',
    umur: 22
}

function cetakMhs({nama, umur}){
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun`
}

console.log(cetakMhs(mhs1));
