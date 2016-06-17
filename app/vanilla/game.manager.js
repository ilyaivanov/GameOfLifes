var board = [
    [0,0,0,0,0,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,0,1],
    [0,0,0,0,0,0,0,1,1,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
];

function setBoard(boxElement) {
    board = getNextBoard(board);

    boxElement.empty();
    for (var i = 0; i < 10; i++) {
        var row = createRow(board[i]);
        boxElement.append(row);
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
}
