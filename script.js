const result = document.querySelector("#cikti");

let diziNum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let diziStr = ["okan", "   nurdoğan", "enes", "alper"];

let dizi = [];
//! .find() 4 sayısından küçük olan ilk elemanı döner findLast bunun tam tersini yapar.
// const dizim = diziNum.find((x) => x < 4);
// console.log(dizim);
// result.textContent = dizim;

//! .finIndex() 4 sayısından büyük olan ilk elemanın index numarasını döndürür
// const dizim = diziNum.findIndex((x) => x > 4);
// console.log(dizim);
// result.textContent = dizim;

//! .evert() dizi içerisindeki tüm elemanları koşula tabi tutar eğer hepsi koşula uyuyorsa true yoksa false döner.
// const dizim = diziStr.every((x) => x === "okan");
// console.log(dizim);
// result.textContent = dizim;

//! .some() dizi içerisindeki tek bir eleman bile koşula uyuyorsa true döndürür.
// const dizim = diziStr.some((x) => x === "okan");
// console.log(dizim);
// result.textContent = dizim;

//! .forEach dizinin içerisindeki indeksleri döner ve döndürür yeni dizi oluşturmaz
const dizim = diziStr.forEach((x) => console.log(x.toLocaleUpperCase().trim()));

