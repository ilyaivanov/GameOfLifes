describe("when calling add function", function () {
    it("rotating stick", function () {
        var board = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ];
        var received = getNextBoard(board);
        var expected = [
            [0, 0, 0],
            [1, 1, 1],
            [0, 0, 0]
        ];
        expect(expected).toEqual(received);
    });

    describe('for a full 3x3 board', function () {
        var board = [
            [1, 1, 1],
            [1, 1, 1],
            [1, 1, 1]
        ];

        describe('when counting neighbours for the center', function () {
            it('should return 8', function(){
                expect(getNeightboursCount(board, 1,1)).toEqual(8);
            });
        });

        describe('when counting neighbours for the top center', function () {
            it('should return 5', function(){
                expect(getNeightboursCount(board, 0,1)).toEqual(5);
            });
        });

        describe('when counting neighbours for the bottom center', function () {
            it('should return 5', function(){
                expect(getNeightboursCount(board, 2,1)).toEqual(5);
            });
        });

        describe('when counting neighbours for the left center', function () {
            it('should return 5', function(){
                expect(getNeightboursCount(board, 1,0)).toEqual(5);
            });
        });

        describe('when counting neighbours for the right center', function () {
            it('should return 5', function(){
                expect(getNeightboursCount(board, 1,2)).toEqual(5);
            });
        });

        describe('when counting neighbours for the top left', function () {
            it('should return 5', function(){
                expect(getNeightboursCount(board, 0,0)).toEqual(3);
            });
        });
    });
});