// Tugatip qoyaman ustoz baho qoyme turin please

// 1 map
let dollar = [100, 250, 50, 10]

let isSum = dollar.map((dollar) => dollar * 12.800
)
console.log(isSum);

// 2  map

let isHtml = ["Bosh sahifa", "Xizmatlar", "Aloqa"]

let isBem = isHtml.map((isHtml) => "<li>" + isHtml + "</li>")

console.log(isBem);


// 1 filter

let products = [
    {p: "Sut", n: 12000},
    {p: "Go'sht", n: 95000},
    {p: "Non", n: 3000},
    
]

let javob = products.filter(katta)
console.log(javob);


function katta(item){
return item.n > 20000
}

// 2
