let produkty = [];
fetch("produkty.csv")
.then(response => response.text())
.then(data => {
   let radky = data.trim().split("\n");
   for(let i = 1; i < radky.length; i++){
       let hodnoty = radky[i].split(",");
       produkty.push({
           nazev: hodnoty[0],
           cena: Number(hodnoty[1])
       });
   }
   zobrazProdukty();
});
function zobrazProdukty(){
   let html = "";
   produkty.forEach((produkt,index)=>{
       html += `
<p>
           ${produkt.nazev} (${produkt.cena} Kč)
<input
               type="number"
               min="0"
               value="0"
               id="p${index}"
               onchange="spocitat()">
</p>
       `;
   });
   document.getElementById("produkty").innerHTML = html;
}
function spocitat(){
   let cena = 0;
   produkty.forEach((produkt,index)=>{
       let pocet =
       Number(document.getElementById(`p${index}`).value);
       cena += pocet * produkt.cena;
   });
   document.getElementById("cena").innerText = cena;
}
function odeslat(){
   let jmeno =
   document.getElementById("jmeno").value;
   let prijmeni =
   document.getElementById("prijmeni").value;
   let email =
   document.getElementById("email").value;
   let telefon =
   document.getElementById("telefon").value;
   alert(
       "Objednávka odeslána\n\n" +
       "Jméno: " + jmeno + "\n" +
       "Příjmení: " + prijmeni + "\n" +
       "Email: " + email + "\n" +
       "Telefon: " + telefon
   );
}
 