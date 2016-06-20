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
    var length = board.length;
    var rowLength = board[row].length;
    var neighbours =
        board[getLowerIndex(row, length)][getLowerIndex(column, rowLength)] +
        board[getLowerIndex(row, length)][getUpperIndex(column, rowLength)] +
        board[getLowerIndex(row, length)][column] +
        board[row][getLowerIndex(column, rowLength)] +
        board[row][getUpperIndex(column, rowLength)] +
        board[getUpperIndex(row, length)][getLowerIndex(column, rowLength)] +
        board[getUpperIndex(row, length)][getUpperIndex(column, rowLength)] +
        board[getUpperIndex(row, length)][column];
    return neighbours;
}

function getLowerIndex(currentIndex, length) {
    return currentIndex == 0 ? length - 1 : currentIndex - 1;
}

function getUpperIndex(currentIndex, length) {
    return currentIndex >= length - 1 ? 0 : currentIndex + 1;
}


//todo: isolate getNeightboursCount from getNextBoard
//unit test them separately
