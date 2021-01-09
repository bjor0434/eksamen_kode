window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}


function toggleMenu() {
    console.log("toggleMenu")

    document.querySelector("nav").classList.toggle("hidden");

    let erSkjult = document.querySelector("nav").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "✕";
    }

}
//window.addEventListener("load", sidenVises);
//
//function sidenVises() {
//    console.log("sidenVises");
//
//    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
//}
//
//
//function toggleMenu() {
//    console.log("toggleMenu")
//
//    document.querySelector("#menu").classList.toggle("hidden");
//
//    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
//
//    if (erSkjult == true) {
//        document.querySelector("#menuknap").textContent = "☰";
//    } else {
//        document.querySelector("#menuknap").textContent = "✕";
//    }
//
//}

function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}



function toggleMenu() {
    console.log("toggleSections")

    document.querySelector("#sections").classList.toggle("hidden");

    let erSkjult = document.querySelector("#sections").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "✕";
    }

}
