var x = [0, 0]

function myfun(n) {
    var icon = document.getElementById('i' + n);
    var buttons = document.getElementsByClassName('s' + n);

    if (x[n - 1] == 0) {
        x[n - 1] = 1
        icon.innerHTML = "&#8964;";
        for (i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove("hide");
        }
    }else{
        x[n - 1] = 0
        icon.innerHTML = "&#10094;";
        for (i = 0; i < buttons.length; i++) {
            buttons[i].classList.add("hide");
        }
    }
}
