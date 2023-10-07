// cek apakah nilainya lulus atau tidak
let score = 80; 

if (score >= 0 && score <= 100) {
    if (score >= 90) {
        console.log ("Nilai kamu A");
    } else if (score >= 80) {
        console.log ("Nilai kamu B");
    } else if (score >= 70) {
        console.log ("Nilai kamu C");
    } else if (score >= 60) {
        console.log ("Nilai kamu D");
    } else {
        console.log ("Nilai kamu E");
    }
} else {
    console.log ("Nilai yang kau input salah, silahkan input ulang.");
}