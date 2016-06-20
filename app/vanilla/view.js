var view = (function () {
    function render(board, element){
        for (var i = 0; i < board.length; i++) {
            var row = appendRow(board[i], element);
            element.append(row);
        }

        function appendRow(row, element) {
            for (var i = 0; i < row.length; i++) {
                var newCell = document.createElement('div');
                var className = "cell";
                if (row[i])
                {
                    className += " full";
                }
                newCell.className = className;

                element.append(newCell);
            }
        }
    }
    return {
        render:render
    }
}());