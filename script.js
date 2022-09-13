let kitaplar=["Sevimli Küçük Yalancılar","Yeşilin Kızı Anne","Şeytanı Uyandırma","Rizzoli ve Isle","Harry Potter ve Felsefe Taşı","Sherlock Holmes","Pal Sokağı Çocukları"];

const button=document.getElementById("btnKitap");
const kitap=document.getElementById("kitap");

button.addEventListener("click", ()=>{
    let sayi=Math.floor(Math.random()*7);
    kitap.innerHTML=kitaplar[sayi];
})