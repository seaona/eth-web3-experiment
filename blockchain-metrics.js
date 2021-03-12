require('dotenv-safe').config();

// Set up the appropriate configuration
const Web3 = require("web3") 
const url = `${process.env.SERVER_URL}`;
const web3 = new Web3(url);


// Blockchain metrics
const getGasPrice = async () => {
    let gasPrice = await web3.eth.getGasPrice();
    console.log(`Gas Price in Wei: ${gasPrice}`);
}

const getUncle = async blockHashOrNumber => {
    let uncleIndex = 0;
    let uncle = await web3.eth.getUncle(blockHashOrNumber, uncleIndex);
    console.log(`Uncle block: ${uncle}`);
}

const getBlockTxCount = async blockHashOrNumber => {
    let blockTxCount = await web3.eth.getBlockTransactionCount(blockHashOrNumber);
    console.log(`Block Tx Count: ${blockTxCount}`);
}

// Test Data
let blockNumber = 0;

// Functions execution
getGasPrice();
getUncle(blockNumber);
getBlockTxCount(blockNumber);