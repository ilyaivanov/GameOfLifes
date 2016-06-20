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
    var gameIsRunning = false;
    boxElement.css('width', board[0].length * 12 + 'px');

    var intervalInputElement = $("#internalInput");
    intervalInputElement.keyup(updateInterval);


    $("#startButton").click(function () {
        if (gameIsRunning) {
            clearInterval(refreshIntervalId);
            $("#startButton").text("Start")
        } else {
            updateInterval();
            $("#startButton").text("Stop")
        }
        gameIsRunning = !gameIsRunning;
    });
    var refreshIntervalId = 0;

    function updateInterval() {
        if (refreshIntervalId != 0) {
            clearInterval(refreshIntervalId);
        }

        refreshIntervalId = setInterval(function () {
            var now = performance.now();
            setBoard(boxElement);
            $('#frameRate').text((performance.now() - now).toFixed(2));
        }, intervalInputElement.val());
    }

    setBoard(boxElement);
});