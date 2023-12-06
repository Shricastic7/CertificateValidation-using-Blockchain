// Import the web3 library
const Web3 = require("web3");

// Connect to Ganache or your Ethereum node
const web3 = new Web3("http://127.0.0.1:7545"); // Update with your Ganache URL

const contract = require("./build/contracts/CertificateValidation.json");

const certificateValidation = new web3.eth.Contract(
  contract.abi,
  contract.networks["5777"].address
);

async function addCertificate(certificateHash) {
  const accounts = await web3.eth.getAccounts();
  await certificateValidation.methods.addCertificate(certificateHash).send({ from: accounts[0] });
}

async function validateCertificate(certificateHash) {
  const result = await certificateValidation.methods.validateCertificate(certificateHash).call();
  console.log(`Certificate ${certificateHash} is ${result ? "valid" : "invalid"}`);
}

// Example usage:
addCertificate("hash123");
validateCertificate("hash123");
