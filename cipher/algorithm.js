import { question } from "readline-sync";
import { ShiftCipher } from "shift-cipher";
import railFence from "railfencecipher";
import vigenere from "vigenere-cipher";
import CryptJS from "crypto-js";
export const ciphers = [
  {
    defaultKey: 1,
    algorithm: "Shift Cipher",
    displayText: "Shift Cipher",
  },
  {
    defaultKey: "2",
    algorithm: "Permutation Cipher",
    displayText: "Permutation Cipher",
  },
  {
    defaultKey: "3",
    algorithm: "Simple Transposition",
    displayText: "Simple Transposition",
  },
  {
    defaultKey: "4",
    algorithm: "Double Transposition",
    displayText: "Double Transposition",
  },
  {
    defaultKey: "It My own secret",
    algorithm: "Vigenère Cipher",
    displayText: "Vigenère Cipher",
  },
  {
    defaultKey: "It My own secret",
    algorithm: "AES-128",
    displayText: "AES-128",
  },
  {
    defaultKey: "MyOwnKey",
    algorithm: "DES",
    displayText: "DES",
  },
  {
    defaultKey: "MyOwnKey",
    algorithm: "3DES",
    displayText: "3DES",
  },
];

export const ModesOfOperation = [
  { displayText: 'CBC', value: CryptJS.mode.CBC },
  { displayText: 'ECB', value: CryptJS.mode.ECB },
  { displayText: 'CFB', value: CryptJS.mode.CFB },
  { displayText: 'OFB', value: CryptJS.mode.OFB },
];
export const Operation = {
  Encryption: 0,
  Decryption: 1,
};

export function shiftCipher(choice, text, key) {
  const shiftCipher = new ShiftCipher();
  shiftCipher.makeCipherMap({
    chars: " abcdefghijklmnopqrstuvwxyz",
    shift: key,
  });
  let output = "";
  switch (parseInt(choice)) {
    case Operation.Encryption:
      output = shiftCipher.encode(text.toLowerCase());
      break;
    case Operation.Decryption:
      output = shiftCipher.decode(text.toLowerCase());
      break;
    default:
      handleInvalidCase();
  }
  return output;
}

export function permutationCipher(choice, text, key) {
  let output = "";
  key = parseInt(key);
  switch (parseInt(choice)) {
    case Operation.Encryption:
      output = railFence.encodeRailFenceCipher(text, key);
      break;
    case Operation.Decryption:
      output = railFence.decodeRailFenceCipher(text, key);
      break;
    default:
      handleInvalidCase();
  }

  return output;
}

export function simpleTransposition(choice, text, key) {
  key = parseInt(key);
  let output = "";
  switch (parseInt(choice)) {
    case Operation.Encryption:
      console.log(key,"key");
      for (let i = 0; i < text.length; i += key) {
        output += text.substring(i, i + key).split('').reverse().join('');
      }
      break;
    case Operation.Decryption:
      // Assuming the decryption process is the same due to the reversal nature
      for (let i = 0; i < text.length; i += key) {
        output += text.substring(i, i + key).split('').reverse().join('');
      }
      break;
    default:
      handleInvalidCase();
  }
  console.log("Output",output);
  return output;
}

export function doubleTransposition(choice,text,key1) {
  const key2 = question("Enter key(Empty for default key): ");
  let output = "";
  function encrypt(text, key) {
    // Remove spaces and make the text uppercase for simplicity
    text = text.replace(/\s+/g, '').toUpperCase();
    let encryptedText = '';

    // Create an array of characters for the key
    let keyArray = key.split("");
    // Sort the key array and remember the original order
    let sortedKeyArray = keyArray.slice().sort();
    let order = keyArray.map(function(e) {
        return sortedKeyArray.indexOf(e);
    });

    // Calculate the number of rows
    let numRows = Math.ceil(text.length / key.length);
    let grid = [];

    // Fill the grid with text in row-major order
    for (let i = 0; i < numRows; i++) {
        let row = text.slice(i * key.length, (i + 1) * key.length).split("");
        // If the row is short, fill with 'X'
        while (row.length < key.length) row.push("X");
        grid.push(row);
    }

    // Transpose based on the key order
    for (let i = 0; i < key.length; i++) {
        for (let j = 0; j < numRows; j++) {
            encryptedText += grid[j][order[i]];
        }
    }

    return encryptedText;
}
function decrypt(encryptedText, key) {
  let decryptedText = '';

  // Create an array of characters for the key
  let keyArray = key.split("");
  // Sort the key array and remember the original order
  let sortedKeyArray = keyArray.slice().sort();
  let order = keyArray.map(function(e) {
      return sortedKeyArray.indexOf(e);
  });

  // Calculate the number of rows
  let numRows = Math.ceil(encryptedText.length / key.length);
  let grid = [];

  // Initialize grid with placeholders
  for (let i = 0; i < numRows; i++) {
      let row = new Array(key.length).fill('');
      grid.push(row);
  }

  // Transpose based on the key order to fill the grid
  let index = 0;
  for (let i = 0; i < key.length; i++) {
      for (let j = 0; j < numRows && index < encryptedText.length; j++) {
          grid[j][order[i]] = encryptedText[index++];
      }
  }

  // Read the grid in row-major order
  for (let i = 0; i < numRows; i++) {
      decryptedText += grid[i].join('');
  }

  return decryptedText;
}
  switch (parseInt(choice)) {
    case Operation.Encryption:
       // Apply the first transposition
    let firstPass = encrypt(text, key1);
    // Apply the second transposition
    output = encrypt(firstPass, key2);
    break;
    case Operation.Decryption:
      // Apply the first decryption
    let ciphertext1 = decrypt(text, key2); // Note the key order is reversed
    // Apply the second decryption
    output = decrypt(ciphertext1, key1);
    break;
    default:
      handleInvalidCase();
  }
  return output;
}

export function vigenereCipher(choice, text, key) {
  let output = "";
console.log("Key is here0",key);
  switch (parseInt(choice)) {
    case Operation.Encryption:
      output = vigenere.encrypt(text, key);
      break;
    case Operation.Decryption:
      output = vigenere.decrypt(text, key);
      break;

    default:
      handleInvalidCase();
  }

  return output;
}

export function aes128(choice, text, key, mode) {
  let output = "";
  mode = ModesOfOperation[mode].value || CryptJS.mode.CBC;

  if (key.length !== 16) {
    console.log("Key size must be 16 for AES 128");
    return;
  }
  if (key.length > text.length && choice == Operation.Encryption) {
    console.log("Plain text size must be greater than key");
    return;
  }

  switch (parseInt(choice)) {
    case Operation.Encryption:
      output = CryptJS.AES.encrypt(text, key, {
        mode,
        padding: CryptJS.pad.AnsiX923,
      }).toString();
      break;
    case Operation.Decryption:
      output = CryptJS.AES.decrypt(text, key, { mode }).toString(CryptJS.enc.Utf8);
      break;

    default:
      handleInvalidCase();
  }

  return output;
}

export function des(choice, text, key, mode) {
  let output = "";

  if (key.length > text.length && choice == Operation.Encryption) {
    console.log("Plain text size must be greater than key");
    return;
  }
  mode = ModesOfOperation[mode].value || CryptJS.mode.CBC;

  switch (parseInt(choice)) {
    case Operation.Encryption:
      output = CryptJS.DES.encrypt(text, key, {
        mode,
        padding: CryptJS.pad.AnsiX923,
      }).toString();
      break;
    case Operation.Decryption:
      output = CryptJS.DES.decrypt(text, key, { mode }).toString(CryptJS.enc.Utf8);
      break;

    default:
      handleInvalidCase();
  }

  return output;
}

export function tripleDes(choice, text, key, mode) {
  let output = "";

  if (key.length > text.length && choice == Operation.Encryption) {
    console.log("Plain text size must be greater than key");
    return;
  }
  mode = ModesOfOperation[mode].value || CryptJS.mode.CBC;

  switch (parseInt(choice)) {
    case Operation.Encryption:
      output = CryptJS.TripleDES.encrypt(text, key, {
        mode,
        padding: CryptJS.pad.AnsiX923,
      }).toString();
      break;
    case Operation.Decryption:
      output = CryptJS.TripleDES.decrypt(text, key, { mode }).toString(
        CryptJS.enc.Utf8
      );
      break;

    default:
      handleInvalidCase();
  }

  return output;
}

export function blockCipherModes() {
  console.log("You selected Block Cipher Modes");
}

function handleInvalidCase() {
  console.log("Invalid choice");
}
