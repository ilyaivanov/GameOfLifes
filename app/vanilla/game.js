var board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

function setBoard(boxElement) {
    board = getNextBoard(board);

    boxElement.empty();

    view.render(board, boxElement);
}


$(function () {

    var boxElement = $("#box");
    boxElement.css('width', board[0].length * 12 + 'px');

    var intervalInputElement = $("#internalInput");
    intervalInputElement.keyup(updateInterval);

    var refreshIntervalId = 0;

    function updateInterval() {
        if (refreshIntervalId != 0) {
            clearInterval(refreshIntervalId);
        }

        refreshIntervalId = setInterval(function () {
            setBoard(boxElement);
        }, intervalInputElement.val());
    }

    updateInterval();
});