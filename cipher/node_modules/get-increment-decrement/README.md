# getIncrementDecrement

will return numbers result from decrementing and incrementing, including its start number 

```javascript

	var getIncrementDecrement = require('get-increment-decrement').getIncrementDecrement;

	var startNumber = 5;
	var length = 4;
	var minimumLimit = 1;
	var maximumLimit = 10;

	var incrementDecrement = getIncrementDecrement({
		startNumber : startNumber,
		lengthNeeded : length,
		minimumLimit : minimumLimit,
		maximumLimit : maximumLimit
	});

	console.log(incrementDecrement) // [1,2,3,4,5,6,7,8,9]
```

#### the result actually will not be ordered

### Options

- startNumber => start number for incrementing and decrementing 
- length => how much number you get from incrementing and decrementing, example : if its 4, it will get 4 numbers from incrementing and 4 number from decrementuing
- minimumLimit => minimum limit for decrementing, decrementing will not return number below minimum limit 
- maximumLimit => maximum limit for incrementing, incrementing will not return number above maximum limit

##### the result actually will not be ordered

##### if the decrementing get below minimum limit, the length quota that is empty will go to incrementing side

```javascript

	var getIncrementDecrement = require('get-increment-decrement').getIncrementDecrement;

	var startNumber = 2;
	var length = 3;
	var minimumLimit = 1;
	var maximumLimit = 10;

	var incrementDecrement =  getIncrementDecrement({
		startNumber : startNumber,
		lengthNeeded : length,
		minimumLimit : minimumLimit,
		maximumLimit : maximumLimit
	});

	console.log(incrementDecrement) // [1,2,3,4,5,6,7] -> decrementing only get [1], so the quota only fullfilled one, need two more, so incrementing side get extra two quota, [3,4,5,6,7]

```

##### if the incrementing get above maximum limit, the length quota that is empty will go to decrementing side

```javascript

	var getIncrementDecrement = require('get-increment-decrement').getIncrementDecrement;

	var startNumber = 9;
	var length = 3;
	var minimumLimit = 1;
	var maximumLimit = 10;

	var incrementDecrement = getIncrementDecrement({
		startNumber : startNumber,
		lengthNeeded : length,
		minimumLimit : minimumLimit,
		maximumLimit : maximumLimit
	});

	console.log(incrementDecrement) // [4,5,6,7,8,9,10] -> incrementing only get [10], so the quota only fullfilled one, need two more, so incrementing side get extra two quota, [4,5,6,7,8]

```

#### inside this module there are two private function, only intended to be used inside function getIncrementDecrement, but you can used it

# getDecrement

```javascript

	var getDecrement = require('get-increment-decrement')._getIncrement;

	var DecrementstartNumber = 9;
	var length = 3;
	var minimumLimit = 1;
	
	var decrement = getDecrement({
		startNumber : startNumber,
		lengthNeeded : length,
		minimumLimit : minimumLimit,
	});

	console.log(decrement) // [8,7,6] -> start number not included

	var startNumber = 9;
	var length = 3;
	var minimumLimit = 7;
	
	var decrement = getDecrement({
		startNumber : startNumber,
		lengthNeeded : length,
		minimumLimit : minimumLimit,
	});

	console.log(decrement) // [8,7] -> not get below minimum limit

```

# getIncrement

```javascript

	var getIncrement = require('get-increment-decrement')._getIncrement;

	var startNumber = 4;
	var length = 3;
	var maximumLimit = 10;

	var increment = getIncrement({
		startNumber : startNumber,
		lengthNeeded : length,
		maximumLimit : maximumLimit
	});

	console.log(increment) // [5,6,7] -> start number not included
	
	var startNumber = 4;
	var length = 3;
	var maximumLimit = 6;

	var increment = getIncrement({
		startNumber : startNumber,
		lengthNeeded : length,
		maximumLimit : maximumLimit
	});

	console.log(increment) // [5,6] -> not get above maximum limit
```

# Installing


`npm install get-increment-decrement`


# m test`
Decrement