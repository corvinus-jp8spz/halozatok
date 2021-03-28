var kérdések;
var kérdésSzám = 0;

window.onload =  () => {
    letöltés();
}
function letöltés() {
    fetch("/questions.json")
        .then(response => response.json())
        .then(data =>letöltésBefejeződött(data))
}
function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    kérdésMegjelenítés(0);
    }

function kérdésMegjelenítés(k) {
    document.getElementById("kérdés_szöveg").innerHTML = kérdések[k].questionText;
    document.getElementById("válasz1").innerHTML = kérdések[k].answer1;
    document.getElementById("válasz2").innerHTML = kérdések[k].answer2;
    document.getElementById("válasz3").innerHTML = kérdések[k].answer3;
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdésSzám].image;
    válasz1.classList.remove("jo", "rossz");
    válasz2.classList.remove("jo", "rossz");
    válasz3.classList.remove("jo", "rossz");

}

function Előre() {
    kérdésSzám = (kérdésSzám + 1) % kérdések.length
    kérdésMegjelenítés(kérdésSzám);
    }

function Vissza() {
    if (kérdésSzám == 0) {
        kérdésSzám=kérdések.length-1;
        kérdésMegjelenítés(kérdésSzám);


    }
    else {
        kérdésSzám = kérdésSzám - 1;
        kérdésMegjelenítés(kérdésSzám);


    }
}
function színez(n) {
    if (n == kérdések[kérdésSzám].correctAnswer) {
        document.getElementById("válasz" + n).classList.add("jo");
    }
    else {
        document.getElementById("válasz" + n).classList.add("rossz");
    }
}