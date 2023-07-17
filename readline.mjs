import readline from "readline";
import process from "process";

//Objek input dibuat dengan readline, yang memungkinkan 
// kita untuk berinteraksi dengan terminal.

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

//  Ada dua fungsi dalam kode ini: question() dan close().
//  Fungsi question() menanyakan pengguna ingin dipanggil apa,
// lalu mencetak "Saya ingin menjadi _______" di layar jika mereka 
// memasukkan apa pun selain string kosong.

input.question("Apa Cita-Cita Anda? ", (name) => {
    console.info(`Saya ingin menjadi ${name}`);
    input.close();
    //  kemudian menutup objek input dengan memanggil metode close()-nya.
});


//  Kode mencoba membaca input dari pengguna dan kemudian mencetaknya 
// di console.