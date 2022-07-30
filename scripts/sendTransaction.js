const Web3 = require('web3');
require("dotenv").config({ path: '../'+'.env' });
const {PRIVATE_KEY,API_URL} = process.env;
const fs = require('fs');
const contractJson = fs.readFileSync('../build/contracts/Person.json');
const abi = JSON.parse(contractJson);
const HDWalletProvider = require("truffle-hdwallet-provider");
var web3 = new Web3(new HDWalletProvider(PRIVATE_KEY,API_URL));

(async()=>{
 
const CONTRACT_ADDRESS= "0xcf6169f8e85bb2b0128c44547a1ec37269ab64b0";
const CONTRACT_ABI = abi ;

const ContractDetails = new web3.eth.Contract(CONTRACT_ABI.abi,CONTRACT_ADDRESS)
const SendDetails = await ContractDetails.methods.addDetails("jhon","steve","874564856835")
.send({from: "0xc79198cb232a77e425E02E4fd1c921DC154C968E"})

console.log(SendDetails)

}

)();