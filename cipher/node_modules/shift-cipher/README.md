# Shift cipher

A simple package for encrypting and decrypting strings using Caesar cipher-like technique.

## How does it work

Install it from npm using your preferred package manager, i.e.:

```
npm install shift-cipher
```

Import it and create a new shift cipher class:

```
import { ShiftCipher } from 'shift-cipher';

const cipher = new ShiftCipher();
```

By default the cipher uses letters of the English alphabet and 13 characters shift.

Strings are encrypted by passing a text string to the **encode** method of the cipher object:

```

const encryptedString = cipher.encode('Hello');

console.log(encryptedString);
// Uryyb
```

To decode simply pass the gibberish you got earlier to the **decode** method:

```
const readableString = cipher.decode('Uryyb');

console.log(readableString);
```

## Character set and shift settings

The character set and the shift can be set by invoking the **makeCipherMap** method and passing it an object with desired settings.

So you have total control over what characters are encoded and using what shift.

Thus you can either completely switch encoded alphabet, or pick which letters will be encoded, i.e. code below encodes only vowels with a shift of 1:

```
cipher.makeCipherMap({
  chars: 'aioue',
  shift: 1,
});

const encryptedString = cipher.encode('Hello');

console.log(encryptedString);
// Hallu
```

The code snippet below changes whole alphabet, so the shift can be used with the set of Cyrillic characters in Ukrainian:

```
cipher.makeCipherMap({
  chars: 'абвгґдеєжзиіїйклмнопрстуфхцчшщьюя',
  shift: 13,
});
```

Note that characters should be in lower case (the function takes care of uppercasing) and should not contain duplicates.

It is intentionally not fool proof against undefined, nulls and wrong types.
