require('dotenv-safe').config();

// Set up the appropriate configuration
const Web3 = require("web3") 
const EthereumTransaction = require("ethereumjs-tx").Transaction;
const url = `${process.env.SERVER_URL}`;
const web3 = new Web3(url);

// Set the sending and receiving addresses for the transaction
const sendingAddress = `${process.env.ADDRESS_1}`;
const receivingAddress = `${process.env.ADDRESS_2}`;

web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)

// Set up the transaction (must update nonce for every tx)
let rawTransaction = { 
    nonce: 0, 
    to: receivingAddress, 
    gasPrice: 20000000, 
    gasLimit: 30000, 
    value: 100, 
    data: "0x0"
}

web3.eth.getBalance(sendingAddress).then(console.log) 
web3.eth.getBalance(receivingAddress).then(console.log)

// Sign the transaction with the Hex value of the private key of the sender
let privateKeySender = `${process.env.PRIVATE_KEY_ADDRESS_1}`;
let privateKeySenderHex = new Buffer.from(privateKeySender, 'hex') 
let transaction = new EthereumTransaction(rawTransaction) 
transaction.sign(privateKeySenderHex)

// Send the serialized signed transaction to the Ethereum network. 
let serializedTransaction = transaction.serialize(); 
web3.eth.sendSignedTransaction(serializedTransaction);
