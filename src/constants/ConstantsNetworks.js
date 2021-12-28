import Web3 from 'web3';
import bnbPng from '../images/currencies/bnb.png';
/*------------------------------- MORALIS -------------------------------*/
export const APP_ID = "6LEOYiQwjtdKHa7VyeDFppd5JEwP6FIDm9QsIYEe";
export const API_KEY = "vxUZ5kddcn7AHf6sST3TLSA8VKnC2N6tluUJSCiIN2WVEIvBeQkWrSNfVAmN0LoK";
export const SERVER = "https://s5bxdyv8e3wz.usemoralis.com:2053/server";
export const NETWORK_CHAIN = "bsc";
export const NETWORK_CHAIN_TEST = "bsc testnet";
/*------------------------------- NETWORKS -------------------------------*/
/*--------------------- PRODUCTION -----------------------*/
const NETWORK_CHAIN_ID = 56;
const NETWORK_CHAIN_ID_HEX = "0x" + Number(NETWORK_CHAIN_ID).toString(16);
const NETWORK_NAME = "BSC";
export const NETWORK_CURRENCY_NAME = "Binance Coin";
export const NETWORK_CURRENCY_SYMBOL = "BNB";
export const NETWORK_CURRENCY_DECIMALS = 18;
export const NETWROK_IMAGE = bnbPng;

const NETWORK_RPC_URLS = ["https://bsc-dataseed.binance.org/"];
export const WEB3_DATA = new Web3(NETWORK_RPC_URLS[0]);
const NETWORK_BLOCK_EXPLORER_URLS = ["https://bscscan.com"];

export const GOOD_NETWORK = {
    chainId: NETWORK_CHAIN_ID_HEX,
    chainName: NETWORK_NAME,
    nativeCurrency: {
        name: NETWORK_CURRENCY_NAME,
        symbol: NETWORK_CURRENCY_SYMBOL, // 2-6 characters long
        decimals: NETWORK_CURRENCY_DECIMALS,
    },
    rpcUrls: NETWORK_RPC_URLS,
    blockExplorerUrls: NETWORK_BLOCK_EXPLORER_URLS,
};
/*--------------------- TEST -----------------------*/
const NETWORK_CHAIN_ID_TEST = 97;
const NETWORK_CHAIN_ID_HEX_TEST = "0x" + Number(NETWORK_CHAIN_ID_TEST).toString(16);
const NETWORK_NAME_TEST = "BSC Test";
const NETWORK_RPC_URLS_TEST = ["https://data-seed-prebsc-1-s1.binance.org:8545/"];
const NETWORK_BLOCK_EXPLORER_URLS_TEST = ["https://testnet.bscscan.com"];

export const GOOD_NETWORK_TEST = {
    chainId: NETWORK_CHAIN_ID_HEX_TEST,
    //chainIdInteger: NETWORK_CHAIN_ID,
    chainName: NETWORK_NAME_TEST,
    nativeCurrency: {
        name: NETWORK_CURRENCY_NAME,
        symbol: NETWORK_CURRENCY_SYMBOL, // 2-6 characters long
        decimals: NETWORK_CURRENCY_DECIMALS,
    },
    rpcUrls: NETWORK_RPC_URLS_TEST,
    blockExplorerUrls: NETWORK_BLOCK_EXPLORER_URLS_TEST,
};


export const WEB3_DATA_TEST = new Web3(NETWORK_RPC_URLS_TEST[0]);