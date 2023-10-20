//destructuring variable/assignment


//destructuring array
const perkenalan = ['Halo', 'nama', 'saya', 'rasyid nur annas']
const [salam, satu, dua, nama] = perkenalan
//skiping items
// const [salam, , , nama] = perkenalan
console.log(salam);


//swap items
let a = 1
let b = 3
console.log(a);
console.log(b);
[a, b] = [b, a]
console.log(`nilai a adalah ${a}`);
console.log(`nilai b adalah ${b}`);

//return value pd funcion
coba = ()=>{
    return [1, 2]
}

const [c, d]=coba()
console.log(c);


//rest parameter 
const [e, ...values] = [1, 2, 3, 6, 8]
console.log(e);
console.log(values);//ini rest parameter


//destructuring object
// const mhs = {
//     name: 'Rasyid Nur Annas',
//     umur: 33
// }

// const {name, umur} = mhs
// console.log(name);


//assignment tanpa deklarasi object
// ({name, umur} = {
//     name: 'Rasyid Nur Annas',
//     umur: 33
// })
// console.log(name);


//assign ke variabel baru
// const mhs = {
//     name: 'Rasyid Nur Annas',
//     umur: 33
// }

// const {name:n, umur:u} = mhs
// console.log(n);


//memberi deafault value
const mhs = {
    name: 'Rasyid Nur Annas',
    umur: 33
}

const {name, umur, email='defaultvalue@gmail.com'} = mhs
console.log(email);



// mengabil field pd object, seteleah dikirim sebagai parameter untuk function
const mhs2 = {
    id: 123,
    name: 'Rasyid Nur Annas',
    umur: 33
}

function getIdMhs({id}){
    return id
}

console.log(getIdMhs(mhs2));
