// https://eth-goerli.g.alchemy.com/v2/gm-_SYCx_ei66CLf6vUiOh5zH6v0hAR9

// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.17",
// };


require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: "0.8.0",
  networks: {
   goerli: {
     url: "https://eth-goerli.g.alchemy.com/v2/gm-_SYCx_ei66CLf6vUiOh5zH6v0hAR9",
     accounts: ['b497f2307420d8e844ba5d8f936cb677e74872b42b0a08606e412cf2ed01805d' ]
     
   
   },
 
}
}