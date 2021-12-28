import dogePng from '../images/currencies/doge.png';
export const DOGE_ADDRESS = "0xba2ae424d960c26247dd6c32edc70b295c744c43";
export const DOGE_ADDRESS_TEST = "0xba2ae424d960c26247dd6c32edc70b295c744c43";

export const DOGE_CURRENCY_NAME = "Dogecoin Token";
export const DOGE_CURRENCY_SYMBOL = "DOGE";
export const DOGE_CURRENCY_DECIMALS = 18;
export const DOGE_CURRENCY_IMAGE = dogePng;
export const DOGE_CURRENCY_BUY_LINK = "https://pancakeswap.finance/swap?outputCurrency=" + DOGE_ADDRESS;

export const DOGE_ABI = [{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}];
