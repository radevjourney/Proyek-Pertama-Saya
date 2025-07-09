const namaApp = "RadevApp";
let versiApp = "v0.29.06.25";

document.getElementById("app").innerText = namaApp;
document.getElementById("versi").innerText = versiApp;

console.log(namaApp);
console.log(versiApp);

function kirimPesan() {
    let name =
    document.getElementById("name").value;
    let email =
    document.getElementById("email").value;
    let pesan =
    document.getElementById("pesan").value;

    document.getElementById("output").innerHTML =
    `Jazakallah Khair <br> <spain style="color:#043927;"> ${name}.</spain> <br> Kami akan segera membalas pesan <spain style="color:#043927;"> ${name}:</spain> <br><spain style="color:green;"><i>"${pesan}" </i></spain><br>Ke alamat email: <spain style="color:#043927;"> ${email}</spain>`;
    document.getElementById("out").style.display = "block";

    console.log(name);
    console.log(email);
    console.log(pesan);

    if (name. length > 30) {
        document.getElementById("error").innerText = `Teks ${name} terlalu panjang, Max 30 karakter. Kamu nulis ${name. length} karakter`;
        document.getElementById("out").style.display = "none";
        return;
    }
    else {
        document.getElementById("error").innerText = "";
    }

    if (pesan. length > 200) {
        document.getElementById("error").innerText = `Pesan ${name} melebihi batas! max 200 karakter. Maneh nulis ${pesan. length} karakter`
        document.getElementById("out").style.display = "none";
        return;
    }
    else {
        document.getElementById("error").innerText = "";
    }
}


