require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn purpose inner cloth front sound'; 
let testAccounts = [
"0x70a9f7a533ff19dc108698b81fdcc4a91ce22efc27710a1bd2bbcc5592bac463",
"0x484700694fed3a90e7921ea090926ff1f5bbabe6126e6d0879f8ac522f24926e",
"0xc9821fed2897c11f3eeab363fa7efcb347b57c048fb8080e773213b41e2fe63e",
"0xabf2f0e95e3092d2ae5123aad3952c299d30c086cce6bac4e0d68179616d25be",
"0x5ab9693be0efa5b02cb3869ae3bba736fa368927fe120782bd2a1242dce1df7f",
"0x7c8c061758cd37d9c37ef7c5dd7b6b8d7bd5ccba1ad1b4cf794f5d00dee463a2",
"0x616158306431decc8437ad9ec50a9ac0961bd3c9c540e657085d172c6fd926f2",
"0x296ec41d407d498f7251930b1cc1436d6f009420a07e1ad1851d5a846380a8f3",
"0xf72e16bfb88a764b717f48bb50a41f4cc75d8d31c2b75ae2a12415af0b65a4cd",
"0x6395a4405055a722dc2aa37c80b9f3129feecaa836c295cbffecd0b5d1b3dddc"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

