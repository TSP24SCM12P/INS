module.exports = (function() {

	function _getDecrement(objectArgument) {
		var decrements = [];
		for(var count = objectArgument.startNumber - 1; count >= (objectArgument.startNumber - objectArgument.lengthNeeded); count--) {
			if(count >= objectArgument.minimumLimit) {
				decrements.push(count);
			}
		}
		return decrements;
	}

	function _getIncrement(objectArgument) {
		var increments = [];
		for(var count = objectArgument.startNumber + 1; count <= (objectArgument.startNumber + objectArgument.lengthNeeded); count++) {
			if(count <= objectArgument.maximumLimit) {
				increments.push(count);
			}
		}
		return increments;
	}

	function getIncrementDecrement(objectArgument) {
		
		var arrayOfDecrementNumber = _getDecrement({
			startNumber : objectArgument.startNumber,
			lengthNeeded : objectArgument.lengthNeeded,
			minimumLimit : objectArgument.minimumLimit
		});

		var arrayOfIncrementNumber = _getIncrement({
			startNumber : objectArgument.startNumber,
			lengthNeeded : objectArgument.lengthNeeded,
			maximumLimit : objectArgument.maximumLimit
		});

		if(arrayOfDecrementNumber.length < objectArgument.lengthNeeded) {
			
			var remainLength = objectArgument.lengthNeeded - arrayOfDecrementNumber.length;

			arrayOfIncrementNumber = _getIncrement({
				startNumber : objectArgument.startNumber,
				lengthNeeded : (objectArgument.lengthNeeded + remainLength),
				maximumLimit : objectArgument.maximumLimit
			});
		}

		if(arrayOfIncrementNumber.length < objectArgument.lengthNeeded) {
			
			var remainLength = objectArgument.lengthNeeded - arrayOfIncrementNumber.length;

			arrayOfDecrementNumber = _getDecrement({
				startNumber : objectArgument.startNumber,
				lengthNeeded : (objectArgument.lengthNeeded + remainLength),
				minimumLimit : objectArgument.minimumLimit
			});
		}

		var arrayOfdecrementIncrement = arrayOfDecrementNumber.concat(arrayOfIncrementNumber);
		arrayOfdecrementIncrement.push(objectArgument.startNumber);

		return arrayOfdecrementIncrement; 
	}

	return {
		_getIncrement : _getIncrement,
		_getDecrement : _getDecrement,
		getIncrementDecrement : getIncrementDecrement
	}
})();