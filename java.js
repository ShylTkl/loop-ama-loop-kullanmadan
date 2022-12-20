
///////////////////////////// 1. ÖDEV ///////////////////////////// 

let adet= +prompt("kaç adet sayı girilecek ?");
sum=0;


for (i=1; i<= adet ; i++)  {
    let number = +prompt(`${i}. sayıyı girin`);
    sum = sum  +  number ;
}

console.log(`girilen sayıların ortalaması : ${((sum/adet).toFixed(2))}`);




///////////////////////////// 2. ÖDEV ///////////////////////////// 




let taban = +prompt("taban sayıyı giriniz");
let us = +prompt("üssü giriniz");
let sonuc = Math.pow(taban,us);
console.log(`${taban} üssü ${us} işleminin sonucu : ${sonuc}`);



///////////////////////////// 3. ÖDEV ///////////////////////////// 




let sayiniz = +prompt("basamağını öğrenmek istediğiniz sayıyı giriniz");

console.log("sayınız " + sayiniz.toString().length + " basamaklıdır");





