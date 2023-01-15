// https://eth-goerli.g.alchemy.com/v2/f-q9h4gvRsBR2Jgfx6_NqCRy3jy2TD3w

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/f-q9h4gvRsBR2Jgfx6_NqCRy3jy2TD3w",
      accounts: [
        "2cdf169b705d271a185272a9790e9ab2d2d301f413830bbec0aeba47ddedefa4",
        "e28482908c09ca9cec75e4f3701e4cdcb77613cf828e05e1de4990b55f15f268",
        "ec5ba11430cdf7324e3f0a8ee14954e563c483156ad3aeb2be07b8616590c99d"
      ]

    }
  }
};
