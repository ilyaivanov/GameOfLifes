var view = (function () {
    function render(board, element){
        for (var i = 0; i < 10; i++) {
            var row = createRow(board[i]);
            element.append(row);
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
    return {
        render:render
    }
}());