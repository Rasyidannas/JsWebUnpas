//promise -> Object yang merepresentasikan keberhasilan / kegagalan sebuah event yng asynchronous di masa yang akan datang
// CONTOH 1
// const ditepati = true
// const janji1 = new Promise((resolve, reject)=>{
//     if(ditepati){
//         resolve('Janji telah ditepati!')
//     }else{
//         reject('ingkar janji..') 
//     }
// })

// janji1
//     .then(response => console.log('OK! : ' + response))//ini menagkap resolve
//     .catch(response => console.log('NOT OK! : ' + response))//ini menangkap reject


// CONTOH 2
// const ditepati = true
// const janji2 = new Promise ((resolve, reject)=>{
//     if (ditepati){
//         setTimeout(()=>{
//             resolve('Tidak ditepati setelah beberapa waktu!')
//         },2000)
//     }
// })

// janji2
//     .finally(()=>console.log('selesai menunggu!'))//ini biasanya untuk animasi loading
//     .then(response => console.log('OK! : ' + response))
//     .catch(response => console.log('NOT OK! : ' + response))
//     console.log('selesai');


//PROMISE ALL
const film = new Promise(resolve=>{
    setTimeout(()=>{
        resolve([{
            judul: 'Avangers',
            relase: '2012'
        }])
    }, 1000)
})

const cuaca = new Promise(resolve => {
    setTimeout(()=>{
        resolve([{
            kota: 'Surabaya',
            temp: 32
        }])
    }, 500)
})

Promise.all([film, cuaca])
    // .then(response => console.log(response))//ini akan menjadikan satu array
    .then(response=>{
        const [film, cuaca] = response;
        console.log(film);
        console.log(cuaca);
    })