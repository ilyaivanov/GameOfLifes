function getNextBoard(board) {
    var newBoard = [];
    for (var rowIndex = 0; rowIndex < board.length; rowIndex++) {
        newBoard[rowIndex] = [];
        for (var columnIndex = 0; columnIndex < board[rowIndex].length; columnIndex++) {
            var numberOfNeighbours = getNeightboursCount(board, rowIndex, columnIndex);
            if (numberOfNeighbours == 2 && board[rowIndex][columnIndex] || numberOfNeighbours == 3) {
                newBoard[rowIndex][columnIndex] = 1;
            }
            else {
                newBoard[rowIndex][columnIndex] = 0;
            }
        }
    }
    return newBoard;


}

function getNeightboursCount(board, row, column) {
    var neighbours =
        (row > 0 && column > 0 ? board[row - 1][column - 1] : 0 ) +
        (row > 0 && column < board.length - 1 ? board[row - 1][column + 1] : 0 ) +
        (row > 0 ? board[row - 1][column] : 0 ) +
        (column > 0 ? board[row][column - 1] : 0) +
        (column < board.length - 1 ? board[row][column + 1] : 0) +
        (row < board.length - 1 && column > 0 ? board[row + 1][column - 1] : 0) +
        (row < board.length - 1 && column < board.length - 1 ? board[row + 1][column + 1] : 0) +
        (row < board.length - 1 ? board[row + 1][column] : 0);
    return neighbours;


}