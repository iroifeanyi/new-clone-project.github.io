function myFunction(x) {
    x.classList.toggle("change");
    var x = document.getElementById("mymenu");
    if (x.className === "menu-all") {
        x.className += " responsive";
    } else {
        x.className = "menu-all";
    }
}