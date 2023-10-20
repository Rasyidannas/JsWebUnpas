//Rest parameter -> sisa dan diakhir parameter
function myFunc(a, b, ...myArgs){
    return `a = ${a}, b = ${b}, myArgs = ${myArgs} `
}

console.log(myFunc(1, 2, 3, 4, 5));

//array destructuring
const kelompok1 = ['rasyid', 'ciko', 'coki']
const [ketua, wakil, ...anggota] = kelompok1
console.log(anggota);


//object destructuring
const team = {
    pm: 'rasyid',
    frontEnd:'ciko',
    backEnd: 'coki'
}

const {pm, ...myTeam} = team
console.log(myTeam);


//filtering
function filterBy(type, ...values){
    return values.filter(v => typeof v === type)
}

console.log(filterBy('number', 1, 2, 'rasyid', 9));
