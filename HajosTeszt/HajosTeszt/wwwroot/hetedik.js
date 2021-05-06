var kérdés;
var kérdésSzám = 1;
var aktuáliskérdés;
var hotList = [];           //Az éppen gyakoroltatott kérdések listája 
var questionsInHotList = 3; //Ez majd 7 lesz, teszteléshez jobb a 3. 
var displayedQuestion;      //A hotList-ből éppen ez a kérdés van kint
var numberOfQuestions;      //Kérdések száma a teljes adatbázisban
var nextQuestion = 1;       //A következő kérdés száma a teljes listában
window.onload = () => {
    letöltés();
    kérdésBetöltés(kérdésSzám)
};
function letöltés() {

    fetch("/questions/all")
        .then(response => response.json())
        .then(data => { kérdésSzám = data.length });
}
function kérdésBetöltés(questionNumber, destination) {
    fetch(`/questions/${questionNumber}`)
        .then(
            result => {
                if (!result.ok) {
                    console.error(`Hibás letöltés: ${response.status}`)
                }
                else {
                    return result.json()
                }
            }
        )
        .then(
            q => {
                hotList[destination].question = q;
                hotList[destination].goodAnswers = 0;
                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
            }
        );
}
//function kérdésBetöltés(id) {
  //  fetch(`/questions/${id}`)
    //    .then(response => {
      //      if (!response.ok) {
        //        console.error(`Hibás válasz: ${response.status}`)
          //  }
            //else {
              //  return response.json()
            //}
        //})
        //.then(data => kérdésMegjelenítés(data));
//} 
function init() {
    for (var i = 0; i < questionsInHotList; i++) {
        let q = {
            question: {},
            goodAnswers: 0
        }
        hotList[i] = q;
    }

    //Első kérdések letöltése
    for (var i = 0; i < questionsInHotList; i++) {
        kérdésBetöltés(nextQuestion, i);
        nextQuestion++;
    }
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