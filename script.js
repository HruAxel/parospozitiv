function szamok1() {
    const szam = prompt("Adj meg egy számot.");

    if (szam % 2 ==0) {
        document.getElementById("szoveg1").innerHTML = "A " + szam + " páros!"
    }
    else {
        document.getElementById("szoveg1").innerHTML = "A " + szam + " páratlan!"
    }
}

function szamok2() {
    const szam = prompt("Adj meg egy számot.");

    if (szam > 0) {
        document.getElementById("szoveg2").innerHTML = "A " + szam + " pozitív!"
    }
    else if(szam == 0) {
        document.getElementById("szoveg2").innerHTML = "Ez a szám a nulla!"
    }
    else {
        document.getElementById("szoveg2").innerHTML = "A " + szam + " negatív!"
    }
}


