const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.addEventListener('click', function(){
    // document.body.setAttribute('class', 'biru-muda')
    document.body.classList.toggle('biru-muda')
})

const tAcakWarna = document.createElement('button');
tAcakWarna.textContent = 'Acak Warna';
tAcakWarna.setAttribute('type', 'button')
document.body.appendChild(tAcakWarna);
tUbahWarna.after(tAcakWarna)

tAcakWarna.addEventListener('click', function(){
    const r = Math.round(Math.random()* 255 + 1); //ini artinya dari 1 sampai 255
    const g = Math.round(Math.random()* 255 + 1 );
    const b = Math.round(Math.random()* 255 + 1 );
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

const sMerah = document.querySelector('input[name=sMerah]');
sMerah.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

const sHijau = document.querySelector('input[name=sHijau]');
sHijau.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})

const sBiru = document.querySelector('input[name=sBiru]');
sBiru.addEventListener('input', function(){
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')'
})


document.body.addEventListener('mousemove', function(e){
    const xPos = Math.round((e.clientX/innerWidth)*255);
    const yPos = Math.round((e.clientY/innerHeight)*255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100)'
})