import axsPng from '../images/currencies/axs.png';
export const AXS_ADDRESS = "0x715d400f88c167884bbcc41c5fea407ed4d2f8a0";
export const AXS_ADDRESS_TEST = "0x715d400f88c167884bbcc41c5fea407ed4d2f8a0";

export const AXS_CURRENCY_NAME = "Axie Infinity";
export const AXS_CURRENCY_SYMBOL = "AXS";
export const AXS_CURRENCY_DECIMALS = 18;
export const AXS_CURRENCY_IMAGE = axsPng;
export const AXS_CURRENCY_BUY_LINK = "https://pancakeswap.finance/swap?outputCurrency=" + AXS_ADDRESS;

export const AXS_ABI = [{"inputs":[{"internalType":"address","name":"logic","type":"address"},{"internalType":"address","name":"admin","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":false,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"Upgraded","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newAdmin","type":"address"}],"name":"changeAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"}],"name":"upgradeTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"upgradeToAndCall","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}];
