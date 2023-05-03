let maximum = parseInt(prompt("Masukan nilai maksimal!"));
while (!maximum) {
  maximum = parseInt(prompt("Masukan nilai maksimal!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = parseInt(prompt("Isi tebakan pertama kamu!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess !== targetNum) {
    guess = parseInt(prompt("Terlalu tinggi! tebak lagi:"));
  } else {
    guess = parseInt(prompt("terlalu rendah! tebak lagi:"));
  }
}

alert(`Selamat Tebakan anda benar! dengan percobaan ${attempts} kali`);
