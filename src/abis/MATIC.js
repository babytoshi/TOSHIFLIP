

import maticPng from '../images/currencies/matic.png';
export const MATIC_ADDRESS = "0xcc42724c6683b7e57334c4e856f4c9965ed682bd";
export const MATIC_ADDRESS_TEST = "0xcc42724c6683b7e57334c4e856f4c9965ed682bd";

export const MATIC_CURRENCY_NAME = "MATIC Token";
export const MATIC_CURRENCY_SYMBOL = "MATIC";
export const MATIC_CURRENCY_DECIMALS = 6;
export const MATIC_CURRENCY_IMAGE = maticPng;
export const MATIC_CURRENCY_BUY_LINK = "https://pancakeswap.finance/swap?outputCurrency=" + MATIC_ADDRESS;



export const MATIC_ABI = [{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}];