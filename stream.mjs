import fs from "fs";

const writer = fs.createWriteStream("target.log");
//kode membuka file bernama target.log dan membuat aliran tulisan diatasnya
// Aliran tulisannya di dibuat dengan fungsi fs.createWriteStream(), 
// yang mengambil dua argumen: "target" dan "log".

// Argumen pertama adalah nama file yang akan dibuat,
// sedangkan argumen kedua adalah apa yang akan ditulis ke file itu.
writer.write("Ini\n");
writer.write("Saya\n");
writer.write("Budi\n");
writer.end();
// Kode kemudian menulis beberapa teks ke dalam file log baru ini,
// diikuti oleh baris kosong (Ini),
//  baris lain (Saya), satu baris lagi (Budi).
// Akhirnya, ini mengakhiri aliran tulis dengan writer.end().
const reader = fs.createReadStream("target.log");
// Selanjutnya adalah write data dari file log 
// yang baru dibuat menggunakan addListener("data", callback) .

//Listener ini dipanggil setiap kali ada sesuatu di file log yang layak 
// dibaca - dengan kata lain ketika data telah ditambahkan 
// ke dalamnya atau ketika akhirnya telah tercapai.

reader.addListener("data", (data) => {
    console.info(data.toString());
});
// Ketika data tiba di reader , memanggil console.info(data) di mana mencetak apa pun 
// yang baru saja dibaca dari file log target sejauh ini serta 
// kesalahan apa pun yang mungkin terjadi selama pemrosesan

// Kode mencoba membuat file bernama target.log, dan kemudian 
// menulis tiga baris teks di dalamnya.

// Baris pertama adalah "Ini", baris kedua adalah "Saya", 
// dan baris ketiga adalah "Budi".