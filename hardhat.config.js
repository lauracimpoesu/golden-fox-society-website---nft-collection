require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan"); 

const rinkebyRpc = "https://rinkeby.infura.io/v3/1409084735f646158e402a97c154203f";
const etherKey = "8ARFBKD5JBE1ZBWRN1YD3UFEUKXIYKQG7Q";
const privateKey = "8c67abdd5cdb31376669aea1d8b42158f1ecd7ce34ad44cbe5533c01ab216cab";


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: rinkebyRpc,
      accounts: [privateKey],
    },
  },
  etherscan: {
    apiKey: etherKey,
  },
}

//& Compiled Successfuly, Contract Address: 0xAcc1AdEd319C2EB148D0770fD37F60f02264dFF8