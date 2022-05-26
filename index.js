// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

// Data warna yang akan di set 
const warnaUserSatu= ["Yellow","Pink","White","Purple"];
const warnaUserDua = ["Blue","Black", "Grey"];

// Data education user 1
let educationUserSatu = {
        name1: "SD 01",  city1: "Jakarta", graduate1: 2016,
        name2: "SMP 02",  city2: "Jakarta", graduate2: 2019,
        name3: "SMA 03",  city3: "Tangerang"
};

// Data education user 2
const educationUserDua = {
        name1: "SD 02",  city1: "Jakarta", graduate1: 2010,
        name2: "SMP 03",  city2: "Bogor", graduate2: 2013,
        name3: "SMA 01",  city3: "Surabaya", graduate3: 2016,
        name4: "Universitas Maju",  city4: "Tangerang"
};

// Data restoran yang akan di set
restaurantUserSatu = ["Bento","Sushi","Pancake","Eggy","Tempura","Bento", "Eggy","Padang","Tteok","Sushi","Sushi"];
restaurantUserDua = ["Tempura","Bento","Sushi","Pancake","Padang","Katsu","Geprek","Pancake","Eggy"];

const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: new Set (warnaUserSatu),    
    isHavePet: "Yes",
    education: Object.values(educationUserSatu),
    favoriteRestaurant: new Set (restaurantUserSatu)
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: new Set (warnaUserDua),
    isHavePet: "No",
    education: Object.values(educationUserDua),
    favoriteRestaurant: new Set (restaurantUserDua)
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [
    firstUser,
    secondUser
    // favoriteColor,
    // favoriteRestaurant
];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};