// program untuk menghitung luas lingkaran jika jari jarinya 8

function luasLingkaran (jariJari) {
    let luas = Math.PI * jariJari;
    return luas;
}

let jariJari = 8;

let hasil = luasLingkaran(jariJari);

console.log(`Luas lingkarannya ialah ${hasil}`)