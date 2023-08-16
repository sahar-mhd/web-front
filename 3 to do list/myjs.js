var count = 0
function myfun() {
    var list = document.getElementById("ul")

    li = document.createElement("li");
    item = "<button class=\"b2\" onclick=\"done("+count+")\"><i style=\"font-size:20px\" class=\"fa\">&#xf00c;</i></button\><button class=\"b1\" onclick=\"del(" + count + ")\"><i style=\"font-size:20px\" class=\"fa\">&#xf014;</i></button\><input type=\"text\" id=\"inp\"/\>"

    li.innerHTML = item;
    li.setAttribute('id', count)

    list.appendChild(li)
    count++
}

function del(id) {
    var li = document.getElementById(id)
    var list = document.getElementById("ul")
    list.removeChild(li)
}

function done(id) {
    var li = document.getElementById(id)
    li.setAttribute('class', 'done')
    // var list = document.getElementById("ul")
    // list.removeChild(li)
}