describe('Exam unit test', () => {
 
    describe('Test 1 ', () => {
        it('Test sum functionality', () => {
            expect(testNumbers.sumNumbers(1,'1')).to.be.undefined;
            expect(testNumbers.sumNumbers(-1,1)).to.equals('0.00');
            expect(testNumbers.sumNumbers('a',1)).to.be.undefined;
        });
 
        it('Test number Checker functionality', () => {
            expect(testNumbers.numberChecker('1')).to.equal('The number is odd!');
            expect(testNumbers.numberChecker(1)).to.equal('The number is odd!');
            expect(testNumbers.numberChecker.bind('str')).to.throw('The input is not a number!');
        });
 
        it('Test averageSumArray functionality', () => {
            expect(testNumbers.averageSumArray([1,2,3,4])).to.equals(2.5);
        });
    });
 
})