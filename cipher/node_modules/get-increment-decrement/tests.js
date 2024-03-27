var chai = require('chai');
var expect = chai.expect;
var incrementDecrement = require('./index');
var getDecrement = incrementDecrement._getDecrement;
var getIncrement = incrementDecrement._getIncrement;
var getIncrementDecrement = incrementDecrement.getIncrementDecrement;

describe('decrement increment module', function() {
	
	describe('getDecrement function', function() {
		it('it will return result of decrement, and push it inside an array, with specific lengthNeeded', function() {
			var startNumber = 5;
			var lengthNeeded = 3;
			var expectedResult = [4,3,2];
			var minimumLimit = 0;

			var result = getDecrement({
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit
			});

			expect(result).to.have.members(expectedResult);
		})
		it('it will return result of decrement, and push it inside an array, with specific lengthNeeded', function() {
			var startNumber = 9;
			var lengthNeeded = 1;
			var expectedResult = [8];
			var minimumLimit = 0;

			var result = getDecrement({
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit
			});

			expect(result).to.have.members(expectedResult);
		})
		it('it will return result of decrement, and push it inside an array, with specific lengthNeeded', function() {
			var startNumber = 2;
			var lengthNeeded = 1;
			var expectedResult = [1];
			var minimumLimit = 0;

			var result = getDecrement({
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit
			});

			expect(result).to.have.members(expectedResult);
		})
		it('it will return result of decrement, and push it inside an array, with specific lengthNeeded', function() {
			var startNumber = 10;
			var lengthNeeded = 9;
			var expectedResult = [9,8,7,6,5,4,3,2,1];
			var minimumLimit = 0;

			var result = getDecrement({
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit
			});

			expect(result).to.have.members(expectedResult);
		})
		it('it will return result of decrement, and push it inside an array, with specific lengthNeeded', function() {
			var startNumber = 100;
			var lengthNeeded = 5;
			var expectedResult = [99,98,97,96,95];
			var minimumLimit = 0;

			var result = getDecrement({
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit
			});

			expect(result).to.have.members(expectedResult);
		})
		it('it will not return decremented number below the minimum number', function() {
			var startNumber = 10;
			var lengthNeeded = 7;
			var expectedResult = [9,8,7,6,5];
			var minimumLimit = 5;

			var result = getDecrement({
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit
			});

			expect(result).to.have.members(expectedResult);
		})
		it('it will not return decremented number below the minimum number', function() {
			var startNumber = 100;
			var lengthNeeded = 10;
			var expectedResult = [99,98,97,96,95];
			var minimumLimit = 95;

			var result = getDecrement({
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit
			});

			expect(result).to.have.members(expectedResult);
		})
		it('will return empty array if maximum number is same as source number', function() {
			var startNumber = 5;
			var lengthNeeded = 3;
			var expectedResult = [];
			var minimumLimit = 5;

			var result = getDecrement({
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit
			});

			expect(result).to.have.members(expectedResult);
		})
	})

	describe('getIncrement function', function() {
		it('it will return result of increment, and push it inside an array, with specific lengthNeeded', function() {
			var startNumber = 5;
			var lengthNeeded = 3;
			var expectedResult = [6,7,8];
			var maximumLimit = 10;

			var result = getIncrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				maximumLimit : maximumLimit
			});
			
			expect(result).to.eql(expectedResult);
		})
		it('it will return result of increment, and push it inside an array, with specific lengthNeeded', function() {
			var startNumber = 1;
			var lengthNeeded = 10;
			var expectedResult = [2,3,4,5,6,7,8,9,10,11];
			var maximumLimit = 100;

			var result = getIncrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				maximumLimit : maximumLimit
			});

			expect(result).to.eql(expectedResult);
		})
		it('it will return result of increment, and push it inside an array, with specific lengthNeeded', function() {
			var startNumber = 10;
			var lengthNeeded = 2;
			var expectedResult = [11,12];
			var maximumLimit = 100;

			var result = getIncrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				maximumLimit : maximumLimit
			});
			
			expect(result).to.eql(expectedResult);
		})
		it('it will return result of increment, and push it inside an array, with specific lengthNeeded', function() {
			var startNumber = 10;
			var lengthNeeded = 2;
			var expectedResult = [11,12];
			var maximumLimit = 100;

			var result = getIncrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				maximumLimit : maximumLimit
			});
			
			expect(result).to.eql(expectedResult);
		})
		it('it will return result of increment, and push it inside an array, with specific lengthNeeded', function() {
			var startNumber = 100;
			var lengthNeeded = 10;
			var expectedResult = [101,102,103,104,105,106,107,108,109,110];
			var maximumLimit = 200;

			var result = getIncrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				maximumLimit : maximumLimit
			});
			
			expect(result).to.eql(expectedResult);
		})
		it('will not return result of increment above the maximum number', function() {
			var startNumber = 100;
			var lengthNeeded = 10;
			var expectedResult = [101,102,103,104,105];
			var maximumLimit = 105;

			var result = getIncrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				maximumLimit : maximumLimit
			});
			
			expect(result).to.eql(expectedResult);
		})
		it('will not return result of increment above the maximum number', function() {
			var startNumber = 75;
			var lengthNeeded = 3;
			var expectedResult = [76,77];
			var maximumLimit = 77;

			var result = getIncrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				maximumLimit : maximumLimit
			});
			
			expect(result).to.eql(expectedResult);

		})
		it('will return empty array if maximum number is same as source number', function() {
			var startNumber = 5;
			var lengthNeeded = 3;
			var expectedResult = [];
			var maximumLimit = 5;
			
			var result = getIncrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				maximumLimit : maximumLimit
			});
			
			expect(result).to.eql(expectedResult);
		})
	})

	describe('getIncrementDecrement function', function() {
		it('will get array of number form increment and decrement, including start number', function() {
			var startNumber = 5;
			var lengthNeeded = 2;

			var expectedResultOfDecrement = [3,4];
			var expectedResultOfIncrement =  [6,7];
			var expectedArrayOfNumber = [].concat([startNumber], expectedResultOfDecrement, expectedResultOfIncrement);
			
			var maximumLimit = 10;
			var minimumLimit = 1;
			
			var resultArrayOfNumber =  getIncrementDecrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit, 
				maximumLimit : maximumLimit
			});

			expect(resultArrayOfNumber).to.have.members(expectedArrayOfNumber);
		})

		it('will get array of number form increment and decrement, including start number', function() {
			var startNumber = 4;
			var lengthNeeded = 2;

			var expectedResultOfDecrement = [2,3];
			var expectedResultOfIncrement =  [5,6];
			var expectedArrayOfNumber = [].concat([startNumber], expectedResultOfDecrement, expectedResultOfIncrement);

			var maximumLimit = 10;
			var minimumLimit = 1;
			
			var resultArrayOfNumber =  getIncrementDecrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit, 
				maximumLimit : maximumLimit
			});

			expect(resultArrayOfNumber).to.have.members(expectedArrayOfNumber);
		})

		it('if on decrement side get below minimum limit number, it remainder will go to increment side', function() {
			var startNumber = 1;
			var lengthNeeded = 2;

			var expectedResultOfDecrement = [];
			var expectedResultOfIncrement =  [2,3,4,5];
			var expectedArrayOfNumber = [].concat([startNumber], expectedResultOfDecrement, expectedResultOfIncrement);
			
			var maximumLimit = 10;
			var minimumLimit = 1;

			var resultArrayOfNumber =  getIncrementDecrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit, 
				maximumLimit : maximumLimit
			});

			expect(resultArrayOfNumber).to.have.members(expectedArrayOfNumber);
		})

		it('if on decrement side get below minimum limit number, it remainder will go to increment side', function() {
			var startNumber = 2;
			var lengthNeeded = 2;

			var expectedResultOfDecrement = [1];
			var expectedResultOfIncrement =  [3,4,5];
			var expectedArrayOfNumber = [].concat([startNumber], expectedResultOfDecrement, expectedResultOfIncrement);
			
			var maximumLimit = 10;
			var minimumLimit = 1;

			var resultArrayOfNumber =  getIncrementDecrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit, 
				maximumLimit : maximumLimit
			});

			expect(resultArrayOfNumber).to.have.members(expectedArrayOfNumber);
		})

		it('if on decrement side get below minimum limit number, it remainder will go to increment side', function() {
			var startNumber = 3;
			var lengthNeeded = 2;

			var expectedResultOfDecrement = [2,1];
			var expectedResultOfIncrement =  [4,5];
			var expectedArrayOfNumber = [].concat([startNumber], expectedResultOfDecrement, expectedResultOfIncrement);
			
			var maximumLimit = 10;
			var minimumLimit = 1;
			
			var resultArrayOfNumber =  getIncrementDecrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit, 
				maximumLimit : maximumLimit
			});

			expect(resultArrayOfNumber).to.have.members(expectedArrayOfNumber);
		})

		it('if on decrement side get below minimum limit number, it remainder will go to increment side', function() {
			var startNumber = 1;
			var lengthNeeded = 4;
			
			var expectedResultOfDecrement = [];
			var expectedResultOfIncrement =  [2,3,4,5,6,7,8,9];
			var expectedArrayOfNumber = [].concat([startNumber], expectedResultOfDecrement, expectedResultOfIncrement);
			
			var maximumLimit = 10;
			var minimumLimit = 1;
			
			var resultArrayOfNumber =  getIncrementDecrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit, 
				maximumLimit : maximumLimit
			});

			expect(resultArrayOfNumber).to.have.members(expectedArrayOfNumber);
		})

		it('if on decrement side get below minimum limit number, it remainder will go to increment side, and equal below maximum limit number', function() {
			var startNumber = 1;
			var lengthNeeded = 4;

			var expectedResultOfDecrement = [];
			var expectedResultOfIncrement =  [2,3];
			var expectedArrayOfNumber = [].concat([startNumber], expectedResultOfDecrement, expectedResultOfIncrement);
			
			var maximumLimit = 3;
			var minimumLimit = 1;
			
			var resultArrayOfNumber =  getIncrementDecrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit, 
				maximumLimit : maximumLimit
			});

			expect(resultArrayOfNumber).to.have.members(expectedArrayOfNumber);
		})

		it('if on decrement side get below minimum limit number, it remainder will go to increment side, and equal below maximum limit number', function() {
			var startNumber = 2;
			var lengthNeeded = 4;

			var expectedResultOfDecrement = [1];
			var expectedResultOfIncrement =  [3];
			var expectedArrayOfNumber = [].concat([startNumber], expectedResultOfDecrement, expectedResultOfIncrement);
			
			var maximumLimit = 3;
			var minimumLimit = 1;
			
			var resultArrayOfNumber =  getIncrementDecrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit, 
				maximumLimit : maximumLimit
			});

			expect(resultArrayOfNumber).to.have.members(expectedArrayOfNumber);
		})

		it('if on increment side get equal above maximum limit number, it remainder will go to decrement side, and equal above minimum limit number', function() {
			var startNumber = 3;
			var lengthNeeded = 4;
			
			var expectedResultOfDecrement = [1,2];
			var expectedResultOfIncrement =  [];
			var expectedArrayOfNumber = [].concat([startNumber], expectedResultOfDecrement, expectedResultOfIncrement);
			
			var maximumLimit = 3;
			var minimumLimit = 1;
			
			var resultArrayOfNumber =  getIncrementDecrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit, 
				maximumLimit : maximumLimit
			});

			expect(resultArrayOfNumber).to.have.members(expectedArrayOfNumber);
		})

		it('if on increment side get equal above maximum limit number, it remainder will go to decrement side, and equal above minimum limit number', function() {
			var startNumber = 10;
			var lengthNeeded = 2;

			var expectedResultOfDecrement = [9,8,7,6];
			var expectedResultOfIncrement =  [];
			var expectedArrayOfNumber = [].concat([startNumber], expectedResultOfDecrement, expectedResultOfIncrement);
			
			var maximumLimit = 10;
			var minimumLimit = 1;
			
			var resultArrayOfNumber =  getIncrementDecrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit, 
				maximumLimit : maximumLimit
			});

			expect(resultArrayOfNumber).to.have.members(expectedArrayOfNumber);
		})

		it('if on increment side get equal above maximum limit number, it remainder will go to decrement side', function() {
			var startNumber = 10;
			var lengthNeeded = 4;

			var expectedResultOfDecrement = [9,8,7,6,5,4,3,2];
			var expectedResultOfIncrement =  [];
			var expectedArrayOfNumber = [].concat([startNumber], expectedResultOfDecrement, expectedResultOfIncrement);
			
			var maximumLimit = 10;
			var minimumLimit = 1;
			
			var resultArrayOfNumber =  getIncrementDecrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit, 
				maximumLimit : maximumLimit
			});

			expect(resultArrayOfNumber).to.have.members(expectedArrayOfNumber);
		})

		it('if on increment side get equal above maximum limit number, it remainder will go to decrement side', function() {
			var startNumber = 9;
			var lengthNeeded = 4;
			
			var expectedResultOfDecrement = [8,7,6,5,4,3,2];
			var expectedResultOfIncrement =  [10];
			var expectedArrayOfNumber = [].concat([startNumber], expectedResultOfDecrement, expectedResultOfIncrement);
			
			var maximumLimit = 10;
			var minimumLimit = 1;
			
			var resultArrayOfNumber =  getIncrementDecrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit, 
				maximumLimit : maximumLimit
			});

			expect(resultArrayOfNumber).to.have.members(expectedArrayOfNumber);
		})

		it('if start number in center of decrement and increment', function() {
			var startNumber = 5;
			var lengthNeeded = 4;
			
			var expectedResultOfDecrement = [4,3,2,1];
			var expectedResultOfIncrement =  [6,7,8,9];
			var expectedArrayOfNumber = [].concat([startNumber], expectedResultOfDecrement, expectedResultOfIncrement);
			
			var maximumLimit = 10;
			var minimumLimit = 1;
			
			var resultArrayOfNumber =  getIncrementDecrement({ 
				startNumber : startNumber, 
				lengthNeeded : lengthNeeded, 
				minimumLimit : minimumLimit, 
				maximumLimit : maximumLimit
			});

			expect(resultArrayOfNumber).to.have.members(expectedArrayOfNumber);
		})
	})
})