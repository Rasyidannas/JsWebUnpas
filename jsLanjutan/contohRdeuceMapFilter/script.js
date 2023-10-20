const js = Array.from(document.querySelectorAll('[data-duration]'))//Array.from() -> menjadikan array agar bisa menggunakan method array 

const jsLanjutan = js.filter((e)=>e.textContent.includes('JAVASCRIPT LANJUTAN'))
                    .map((e)=>e.dataset.duration)
                    .map((waktu)=>{
                        const parts = waktu.split(':')
                        .map(part=>parseFloat(part))
                        return parts[0]*60+parts[1]
                    }).reduce((acc, cur)=>acc+cur)

// pisah jam, menit, detik
const jam = Math.floor(jsLanjutan/3600)
const jsMenit = jsLanjutan - (jam*3600)
const menit = Math.floor(jsMenit/60)
const detik = jsLanjutan - ((jam*3600)+(menit*60))


const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`

const jmlVideo = document.querySelector('.jumlah-video')
const jsLanjutanVideos = js.filter((e)=>e.textContent.includes('JAVASCRIPT LANJUTAN'))
jmlVideo.textContent = `${jsLanjutanVideos.length} Video`
