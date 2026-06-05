function spocitat(){

    let p1 = Number(document.getElementById("p1").value);

    let p2 = Number(document.getElementById("p2").value);

    let p3 = Number(document.getElementById("p3").value);

    let cena =

        p1 * 249 +

        p2 * 299 +

        p3 * 399;

    document.getElementById("cena").innerText = cena;

}

function odeslat(){

    let jmeno = document.getElementById("jmeno").value;

    let prijmeni = document.getElementById("prijmeni").value;

    let email = document.getElementById("email").value;

    let telefon = document.getElementById("telefon").value;

    alert(

        "Objednávka odeslána!\n\n" +

        "Jméno: " + jmeno + "\n" +

        "Příjmení: " + prijmeni + "\n" +

        "Email: " + email + "\n" +

        "Telefon: " + telefon

    );

}
 