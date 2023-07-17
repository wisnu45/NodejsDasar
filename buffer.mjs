const buffer = Buffer.from("Ini Saya Budi");

// kode dimulai dengan membuat objeck buffer baru yang disebut buffer

// kode kemudian membuat string kosong dan menambahkannya ke buffer 
// yang baru dibuat,

console.info(buffer);
console.info(buffer.toString());

// Baris berikutnya membalik urutan karakter dalam string, sehingga
// menjadi "Ini" menjadi "Saya".

//Setelah dibalik, kita dapat melihat bahwa sekarang ada dua hasil
// "Budi" di awal dan yg lain dengan "Saya" di awal

buffer.reverse();
console.info(buffer.toString());

// kode menghasilkan output : Ini Saya Budi dan iduB ayaS inI