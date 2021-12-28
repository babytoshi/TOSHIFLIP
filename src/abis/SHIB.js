import shibPng from '../images/currencies/shib.png';
export const SHIB_ADDRESS = "0x2859e4544c4bb03966803b044a93563bd2d0dd4d";
export const SHIB_ADDRESS_TEST = "0x2859e4544c4bb03966803b044a93563bd2d0dd4d";

export const SHIB_CURRENCY_NAME = "Shiba Inu Token";
export const SHIB_CURRENCY_SYMBOL = "SHIB";
export const SHIB_CURRENCY_DECIMALS = 18;
export const SHIB_CURRENCY_IMAGE = shibPng;
export const SHIB_CURRENCY_BUY_LINK = "https://pancakeswap.finance/swap?outputCurrency=" + SHIB_ADDRESS;

export const SHIB_ABI = [{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}];
