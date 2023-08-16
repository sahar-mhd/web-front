var slidenum = 1;
show(slidenum);

function myfun(n) {
    show(slidenum += n);
}

function page(n) {
    slidenum = n;
    show(slidenum);
}

function show(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var buttons = document.getElementsByClassName("buttons");
    if (n > slides.length) {
        slidenum = 1
    }
    if (n < 1) {
        slidenum = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        buttons[i].classList.remove("selected");
    }
    slides[slidenum - 1].style.display = "block";
    buttons[slidenum - 1].classList.add("selected");
}