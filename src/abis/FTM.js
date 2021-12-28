import ftmPng from '../images/currencies/ftm.png';
export const FTM_ADDRESS = "0xad29abb318791d579433d831ed122afeaf29dcfe";
export const FTM_ADDRESS_TEST = "0xad29abb318791d579433d831ed122afeaf29dcfe";

export const FTM_CURRENCY_NAME = "Fantom";
export const FTM_CURRENCY_SYMBOL = "FTM";
export const FTM_CURRENCY_DECIMALS = 18;
export const FTM_CURRENCY_IMAGE = ftmPng;
export const FTM_CURRENCY_BUY_LINK = "https://pancakeswap.finance/swap?outputCurrency=" + FTM_ADDRESS;

export const FTM_ABI = [{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}];
