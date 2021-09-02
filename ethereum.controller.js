const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/"))
//const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc.apothem.network"))

exports.get_new_address = async function (req,res) {

  console.log('ETH GET NEW ADDRESS');
  let ethData = {};
  try {

    ethData = await web3.eth.accounts.create();
      
      console.table(ethData);
      ethData.result = ethData.address;
      return ethData.result;
  }catch(err){

    ethData.result = err.message;
    console.log("request error in get_new_address");
    return ethData.result;
  }

  console.log(ethData.result)
  return ethData.result;
}



