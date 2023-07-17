const buffer = Buffer.from("Ini Saya Budi", "utf8");
// Kode dimulai dari membuat object Buffer baru

// kode kemudian membuat string yang disebut dengan "Ini Saya Budi",
// dan mengkodekannta ke dalam fitur encoding "utf8" 

// Selanjutnya kode mengubah buffer menjadi "base64" dan mencetak nilainya
// dalam bentuk heksadesimal.

// Terakhir Kode mengkonversikan string yang disediakan yaitu "hex" dan "base64"
// keemudian kembali ke "utf8" dan mencetak nilainya
console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

// Kapasitas awal 10 byte atau panjang dari string "Ini Saya Budi"
// Ini dilakukan dengan memanggil Buffer() pada Array kosong 
// yang belum memiliki
// propertis atau metode yang melekat pada nya
const bufferBase64 = Buffer.from("iduBayaSinI==", "base64");
console.info(bufferBase64.toString("utf8"));

// Kesimpulannya adalah string yang diberikan menjadi "hex", "base64" 
// dan "utf8"