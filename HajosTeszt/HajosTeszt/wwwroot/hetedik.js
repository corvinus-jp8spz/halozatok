var kérdés;
var kérdésSzám = 1;
var aktuáliskérdés;

window.onload = () => {
    letöltés();
    kérdésBetöltés(kérdésSzám)
};
function letöltés() {

    fetch("/questions/all")
        .then(response => response.json())
        .then(data => { kérdésSzám = data.length });
}
function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => kérdésMegjelenítés(data));
} 
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésBetöltés(id);
    }
id = 1;
function kérdésMegjelenítés(kérdés) {
    aktuáliskérdés = kérdés;
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerHTML = aktuáliskérdés.questionText;
    document.getElementById("answer1").innerHTML = kérdés.answer1;
    document.getElementById("answer2").innerHTML = kérdés.answer2;
    document.getElementById("answer3").innerHTML = kérdés.answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    if (kérdés.image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
    }
    else {
        document.getElementById("kép1").src = "";
    }
    answer1.classList.remove("jo", "rossz");
    answer2.classList.remove("jo", "rossz");
    answer3.classList.remove("jo", "rossz");

}

function Előre() {
    id++;
    if (id <= kérdésSzám - 1) {
        kérdésBetöltés(id);
    }
    else {
        id = 1;
        kérdésBetöltés(id);
    }
};

function Vissza() {
    id--;
    if (id >= 1) {
        kérdésBetöltés(id);

    }
    else {
        id = kérdésSzám - 1;
        kérdésBetöltés(id);
    }
}
function színez(n) {
    if (n = aktuáliskérdés.correctAnswer) document.getElementById("answer" + n).classList.add("jo");
     else document.getElementById("answer" + n).classList.add("rossz");
}