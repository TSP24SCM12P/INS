import { question } from "readline-sync";
import {
  shiftCipher,
  permutationCipher,
  simpleTransposition,
  doubleTransposition,
  aes128,
  tripleDes,
  des,
  vigenereCipher,
  ciphers,
  ModesOfOperation,
} from "./algorithm.js";

export const operation = [
  { displayText: "Encryption" },
  { displayText: "Decryption" },
];

function displayMenu(list) {
  console.log("Available Choice:");
  list.forEach((item, index) => {

    console.log(`${index}. ${item.displayText}`);
  });
}

function handleAlgorithmSelection(algorithm, opChoice, text, key) {
  console.log(algorithm, opChoice, text, key);
  let output = "";
  const algo = ciphers[algorithm];
  let mode;
  key = key || algo.defaultKey;
  console.log("key",key);
  switch (parseInt(algorithm)) {
    case 0:
      output = shiftCipher(opChoice, text, key);
      break;
    case 1:
      output = permutationCipher(opChoice, text, key);
      break;
    case 2:
      output = simpleTransposition(opChoice,text,key);
      break;
    case 3:
      output = doubleTransposition(opChoice,text,key);
      break;
    case 4:
      output = vigenereCipher(opChoice, text, key);
      break;
    case 5:
      displayMenu(ModesOfOperation);
      mode = question("Select mode of operation: ");
      output = aes128(opChoice, text, key, mode);
      break;
    case 6:
      displayMenu(ModesOfOperation);
      mode = question("Select mode of operation: ");
      output = des(opChoice, text, key, mode);
      break;
    case 7:
      displayMenu(ModesOfOperation);
      mode = question("Select mode of operation: ");
      output = tripleDes(opChoice, text, key, mode);
      break;
    default:
      console.log("Invalid choice. Please select a valid option.");
  }
  console.log(output);
}

function main() {
  displayMenu(operation);
  const opChoice = question("Enter your choice: ");
  if (isNaN(opChoice) || opChoice < 0 || opChoice > 1) {
    console.log("Invalid choice");
    return;
  }

  displayMenu(ciphers);
  const encryptionAlgoIndex = question("Select algorithm: ");

  if (isNaN(encryptionAlgoIndex) || encryptionAlgoIndex >= ciphers.length) {
    console.log("Invalid choice");
    return;
  }

  const plainText = question(
    `Enter ${opChoice == 0 ? "plain-text" : "cipher-text"}: `
  );

  const key = question("Enter key(Empty for default key): ");

  handleAlgorithmSelection(encryptionAlgoIndex, opChoice, plainText, key);
}

main();
