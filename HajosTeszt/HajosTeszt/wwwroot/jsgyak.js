window.onload = function () {
    let hova = document.getElementById("szorzo");
    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        sor.classList.add("sor");
        hova.appendChild(sor)
        for (var o = 0; o < 10; o++) {
            let szám = document.createElement("div");
            sor.appendChild(szám);
            szám.classList.add("elem")
            szám.innerText = (s + 1) * (o + 1);
            szám.style.background = `rgb(${255 - (255 / 10 * s)},0,${255 - (255 / 10 * o)})`
        }
    }
    let oda = document.getElementById("pascal");
    var faktorialis2 = function (n) {
        if (n === 0) return 1;
        return n * faktorialis2(n - 1);
    }
    for (var s = 0; s < 10; s++) {
        let sor = document.createElement("div");
        sor.classList.add("sor");
        hova.appendChild(sor)
        for (var o = 0; o <= s; o++) {
            let szám = document.createElement("div");
            sor.appendChild(szám);
            szám.classList.add("elem");
            szám.innerText = faktorialis2(s) / (faktorialis2(o) * (faktorialis2(s - o)));
        }
    }
}