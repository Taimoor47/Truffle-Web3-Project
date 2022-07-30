const Web3 = require("web3");
require('dotenv').config({ path: '../'+'.env' })
const Api = process.env.API_URL;
const fs = require("fs");
const contractJson = fs.readFileSync("../build/contracts/Person.json");
const abi = JSON.parse(contractJson);


(async () => {
  const web3 = new Web3(new Web3.providers.HttpProvider(Api));

  const CONTRACT_ADDRESS = "0xcf6169f8e85bb2b0128c44547a1ec37269ab64b0";
  const CONTRACT_ABI = abi;

  const contractData = new web3.eth.Contract(
    CONTRACT_ABI.abi,
    CONTRACT_ADDRESS
  );
  const GetDetails = await contractData.methods
    .getDetails("jhon")
    .call({ from: "0xc79198cb232a77e425E02E4fd1c921DC154C968E" });

  console.log(GetDetails);
})();
