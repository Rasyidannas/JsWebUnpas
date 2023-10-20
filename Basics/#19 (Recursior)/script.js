//ini contoh infinity rekursif
/* function cetakAngka(n){
  console.log(n)
  return cetakAngka(n-1)
}

cetakAngka(10) */ 

//ini contoh rekrusif dengan batas/base case
function cetakAngka(n){
  if(n === 0) {
    return
  } //if ini adalah base case
  console.log(n)
  cetakAngka(n-1)
}
cetakAngka(10)

// contoh Faktorial 
function faktorial(n){
  if(n === 0) {
    return 1
  }
  return total = n * faktorial(n-1)
}

faktorial(5)
console.log(total);
