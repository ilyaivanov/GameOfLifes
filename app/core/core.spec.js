describe("Havign a Game", function () {
    describe('in a recurring board', function () {
        describe('having a slider at the bottop right corner', function () {
            var board = [
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0],
                [0, 0, 0, 0, 1],
                [0, 0, 1, 1, 1]
            ];

            it('next board should incorporate recurring cells on a first row', function () {
                var expectedFirstRow = [0, 0, 0, 1, 0];
                var receivedNextBoard = getNextBoard(board);
                expect(receivedNextBoard[0]).toEqual(expectedFirstRow);
            });

            it('next board should contains recurring cells on the last row', function () {
                var expectedLastRow = [0, 0, 0, 1, 1];
                var receivedNextBoard = getNextBoard(board);
                expect(receivedNextBoard[receivedNextBoard.length - 1]).toEqual(expectedLastRow);
            });

            it('next board should include a slider pattern with points on top', function () {
                var expectedBoard = [
                    [0, 0, 0, 1, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0],
                    [0, 0, 1, 0, 1],
                    [0, 0, 0, 1, 1]
                ];
                var receivedNextBoard = getNextBoard(board);
                expect(receivedNextBoard).toEqual(expectedBoard);
            });

            it('number of neightbours for the pre-last celss', function () {
                expect(getNeightboursCount(board, 4, 3)).toEqual(3);
            });


            describe('having three steps from it', function () {
                it('should have a pattern according to http://ezgif.com/maker/ebc38e-gif', function () {
                    var expectedBoard = [
                        [1, 0, 0, 1, 1],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1],
                        [1, 0, 0, 0, 0]
                    ];
                    var receivedNextBoard = getNextBoard(getNextBoard(getNextBoard(getNextBoard(board))));
                    expect(receivedNextBoard).toEqual(expectedBoard);
                });

            });
        });
        describe('numbers of neighbours for bottom line ', function () {
            var board = [
                [1,1,1],
                [0,0,0],
                [0,0,0]
            ];
            it('should include top lines', function () {
                  expect(getNeightboursCount(board, 2, 1)).toEqual(3);
            });
        });

        describe('numbers of neighbours for left vertical line ', function () {
            var board = [
                [0,0,1],
                [0,0,1],
                [0,0,1]
            ];
            it('should include cells on the right', function () {
                  expect(getNeightboursCount(board, 1, 0)).toEqual(3);
            });
        });

        describe('numbers of neighbours for right vertical line ', function () {
            var board = [
                [1,0,0],
                [1,0,0],
                [1,0,0]
            ];
            it('should include cells on the left', function () {
                  expect(getNeightboursCount(board, 1, 2)).toEqual(3);
            });
        });
        describe('non-square board', function () {
            var board = [
                [0],
                [0],
                [0]
            ];
            var nextBoard = getNextBoard(board);
            it('should get exact same dimesntions', function () {
                expect(nextBoard.length).toEqual(3);
                expect(nextBoard[0].length).toEqual(1);
                expect(nextBoard[1].length).toEqual(1);
                expect(nextBoard[2].length).toEqual(1);
            });
        });
    });

    describe('getting index for a zero position', function () {
        it('should return index of the last item', function () {
            var topIndex = getLowerIndex(0, 10);
            expect(topIndex).toEqual(9);
        });
    });

    describe('getting low index for a last position', function () {
        it('should return zero', function () {
            var lowIndex = getUpperIndex(8, 9);
            expect(lowIndex).toEqual(0);
        });
    });
});