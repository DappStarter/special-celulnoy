require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth mirror pulse install gloom orange velvet'; 
let testAccounts = [
"0x92586e42a740f8a59fb90c450d84d4165383f8450e0695878b72c7dd48b4ef9e",
"0xe7f969903678d3699ef50e7d533f9a53dfb4ddbae98411ec4e328f8eb939e9b6",
"0x68da195fbf57912453eac11750ec9e1a9d6761be6803da92ef03d8a0c0763d5f",
"0x9e0c669ccbc5d47c7d1ce526e814ad275793cb56b02e7478c68eca768c682778",
"0xd3dc3cb7bf02b356949bc3c9fca618d56cce6ccfd0fa7ef7699ec9efb7393e79",
"0x3232d5498d89756022b2cb1ad6f7c1e95309c0f5f46929a6f491c1622e290bab",
"0x6ef563b0784a3b8d1e3fa7f264e20433698823c2833d9d2588b823f10bc31804",
"0x07c47e105405ff272c41ea0d5c6a139025a1c798e85e67ee2b563129f10d6ec5",
"0xe3b2b0db66581091aba2641d26e209c3a5514dc6b3d8c01773af524f9a7be549",
"0x9cbb7f58cbc88328dc40448d53e13b6437d0af3bba3f7ed3531b455de0e984c3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
