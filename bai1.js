let b = document.getElementById("carogame");
let board = [];
let data = "";
for (let i = 0; i < 5; i++) {
    board[i] = new Array('| |','| |','| |','| |','| |','| |');
}

for (let i = 0; i < 5; i++) {
    data += "<br/>";
    for (let j = 0; j < 5; j++) {
        data += board[i][j] + "&nbsp;&nbsp;";
    }
}

data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
b.innerHTML = data;

function changeValue() {
    let positionX = prompt("Nhập tọa độ đánh x, X: ");
    let positionY = prompt("Nhập tọa độ đánh x, Y: ");
    board[positionX][positionY] = "x";
    let sitionX = prompt("Nhập tọa độ đánh O, X: ");
    let sitionY = prompt("Nhập tọa độ đánh O, Y: ");
    board[sitionX][sitionY] = "O";
    data = "";
    for (let i = 0; i < 5; i++) {
        data += "<br/>";
        for (let j = 0; j < 5; j++) {
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    data += "<br/><br/><input type='button' value='Change Value' onclick='changeValue()'>"
    b.innerHTML = "<hr/>" + data;
}