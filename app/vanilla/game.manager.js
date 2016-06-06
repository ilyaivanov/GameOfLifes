document.addEventListener("DOMContentLoaded", function (event) {
    // setBoard();
    // setInterval(setBoard, 1000);
});


function setBoard() {
    var board = [
        [0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,0,0,1,0,1],
        [0,0,0,0,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0]
    ];

    var box = document.getElementById("box");
    clearNode(box);
    for (var i = 0; i < 10; i++) {
        var row = createRow(board[i]);
        box.appendChild(row);
    }

    function createRow(row) {
        var rowElement = document.createElement('div');
        for (var i = 0; i < 10; i++) {
            var newCell = document.createElement('div');
            var className = "cell";
            if (row[i])
            {
                className += " full";
            }
            newCell.className = className;

            rowElement.appendChild(newCell);
        }
        return rowElement;
    }

    function clearNode(node){
        while (node.firstChild) {
            node.removeChild(node.firstChild);
        }
    }
}

