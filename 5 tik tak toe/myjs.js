var turn = 0
var x = "<i>&#x2718;</i>"
var o = "<i>&#9711;</i>"
const map = [
    [2, 2, 2],
    [2, 2, 2],
    [2, 2, 2]
];
function myfun(id) {
    var button = document.getElementById(id)
    if( map[id[0]][id[1]] != 2){
        alert("play a valid move!")
        turn--
    }
    else if (turn % 2 == 0) {
        button.innerHTML = x
        map[id[0]][id[1]] = 0
        if (winner()) {
            alert("X wins the game!!")
            clear()
            turn = 1
        }
    } else {
        button.innerHTML = o
        map[id[0]][id[1]] = 1
        if (winner()) {
            alert("O wins the game!!")
            clear()
            turn = 1
        }
    }
    turn++
}

function winner() {
    for (var i = 0; i < 3; i++) {
        if (map[i][0] == map[i][1] && map[i][1] == map[i][2] && map[i][2] != 2) {
            return true
        }
    }
    for (var i = 0; i < 3; i++) {
        if (map[0][i] == map[1][i] && map[1][i] == map[2][i] && map[2][i] != 2) {
            return true
        }
    }
    if (map[0][0] == map[1][1] && map[1][1] == map[2][2] && map[2][2] != 2) {
        return true
    }
    if (map[0][2] == map[1][1] && map[1][1] == map[2][0] && map[2][0] != 2) {
        return true
    }

    return false
}

function clear() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            var button = document.getElementById(i+""+j)
            button.innerHTML = ""
            map[i][j]=2
        }
    }
}