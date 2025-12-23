// Tugatip qoyaman ustoz baho qoyme turin please

// 1 map
let dollar = [100, 250, 50, 10];

let isSum = dollar.map((dollar) => dollar * 12.8);
console.log(isSum);

// 2  map

let isHtml = ["Bosh sahifa", "Xizmatlar", "Aloqa"];

let isBem = isHtml.map((isHtml) => "<li>" + isHtml + "</li>");

console.log(isBem);

// 1 filter

let products = [
  { p: "Sut", n: 12000 },
  { p: "Go'sht", n: 95000 },
  { p: "Non", n: 3000 },
];

let javob = products.filter(katta);
console.log(javob);

function katta(item) {
  return item.n > 20000;
}

// 2

let harf = ["Apple", "Samsung", "Vivo", "Artel"];

let h = harf.filter(a);
console.log(h);

function a(item) {
  return item.includes("A");
}

// ForEach

// 1

let ismlar = ["Ali", "Vali", "Guli"];

let isIsm = 0;
ismlar.forEach((item) => {
  isIsm = " Hurmatli " + item + " sizning hisobingiz toldirildi ";

  console.log(isIsm);
});

// 2

let isSonlar = [1, 2, 3, 4, 5, 6];

let sum = 0;
isSonlar.forEach((item) => {
  if (item % 2 === 0) {
    return (sum += item);
  }
});
console.log(sum);

// reduce()

// 1

let isNarx = [
  { nom: "Kitob", narx: 40000 },
  { nom: "Ruchka", narx: 2000 },
];
let isJami = isNarx.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue.narx);
}, 0);

console.log(isJami);

// qoshimcha vazifa qildim reduce boyicha,

let cart = [
  { item: "Laptop", price: 1000, count: 1 },
  { item: "Mouse", price: 1000, count: 2 },
  { item: "Keyboard", price: 1000, count: 1 },
];

let isCarts = cart.reduce((accumulator, currentValue) => {
  return (accumulator += currentValue.price * currentValue.count);
}, 0);

console.log(isCarts);

// 2
let isRandomSonlar = [15, 88, 42, 105, 3];

let isEngKatta = isRandomSonlar.reduce((max, current) => {
  return current > max ? current : max;
}, 0);

console.log(isEngKatta);

//  ? : була if / else



// find

// 1

let foydalanuvchila = [
  { u: "admin", id: 1 },
  { u: "user1", id: 2 },
];

 
let isAdmin = foydalanuvchila.find((user) => {
    return user.u === "admin"
})


console.log(isAdmin);


// Qoshimcha yodda qolishi uchun

let cars = [
    {brand: "Tesla"},
    {brand: "BMW"}
]
let isCar = cars.find((item) => {
    return item.brand === "BMW"
})
console.log(isCar);



// 2

let harorat = [15,12, 0, -5, 2]

let isManfiy = harorat.findIndex((item) => {
    return item < 0
})
console.log(isManfiy);



// Some / Every

let sozlar = ["yaxshi", "yomon_soz", "alo"]

let isYomon = sozlar.some((item) => {
    return item === "yomon_soz"
})
console.log(isYomon);


let yosh = [22, 19, 17, 30]

let voyagaYetkan = yosh.every((item) => {
    return item > 18
})
console.log(voyagaYetkan);


// Sort va reverse

// 1 

let alifbo = ["Zuxra", "Anvar", "Behzod",]

alifbo.sort()

console.log(alifbo);

// 2

let rasmlar = ["Rasm1", "Rasm2", "Rasm3"]

rasmlar.reverse()

console.log(rasmlar);


// includes / indexof

let mevalar = ["olma", "banan", "uzum"]

let isMeva = mevalar.includes("nok")

console.log(isMeva);

// 2 - indexof

let shaharlar = ["Toshkent", "Samarqand", "Buxoro"]

let isShahar = shaharlar.indexOf("Buxoro")

console.log(isShahar);


// Slice / va albatta splice, uje takrorlash bob ketyapti

// 1

let pagination = [1, 2, 3, 4, 5, 6, 7, 8]

let yangi = pagination.slice(3, 6)

console.log(yangi);

//2 - sipilaice 

let kunlar = ["Dushanba","Seshanba","Shorshanba"]

let kesish = kunlar.splice(1, 1, "Juma")

console.log(kunlar);


// Join va split 

// 1

let yonalishlar = ["JS", "React", "Node"]

let birlashtirish = yonalishlar.join("#")
console.log(birlashtirish);

// 2

let gap = "Men Javascript organyapman"

let ozgartirish = gap.split(" ");

console.log(ozgartirish);

// flat va at

// 1

let tekkis = [1, [2,3],[4,[5]]]

let tekkislimia = tekkis.flat(2) // nechta level borligini yozish kerak yani 5 yanada ichkarida oshan uchun 2

console.log(tekkislimia);

// 2

let elementlar = ["A", "B", "C", "D"]

let ohirgi = elementlar.at(3)

console.log(ohirgi);


// Filter

let fruits = ["olma", "apelsin", "nok", "shaptoli"]

isFiltered = fruits.filter(g)

function g (item){
    return item.length > 5
}

console.log(isFiltered);

