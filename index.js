function equal() {
    if (cal.display.value == "") {
        var eq = "";
    } else {
        var eq = eval(cal.display.value);
    }
    cal.display.value = eq;
}

var dark_mode = document.querySelector("#dark");

function darkmode() {
    document.body.classList.toggle("darkmode");
    if (document.body.classList.contains("darkmode")) {
        dark_mode.innerHTML =
            ' <i style="color:white;" class="fa-regular fa-sun"></i> ';
    } else {
        dark_mode.innerHTML = ' <i class="fa-solid fa-moon"></i> ';
    }
}