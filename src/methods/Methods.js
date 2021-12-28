import Web3 from 'web3';
import { GENERAL_ABI } from "../abis/ABI_GENERAL";
import { TOSHIFLIP_ADDRESS,TOSHIFLIP_ADDRESS_TEST, TOSHIFLIP_ABI } from "../abis/TOSHIFLIP";

import {
    BABYTOSHI_ADDRESS, BABYTOSHI_ADDRESS_TEST, BABYTOSHI_ABI,
    BABYTOSHI_CURRENCY_NAME, BABYTOSHI_CURRENCY_SYMBOL,BABYTOSHI_CURRENCY_DECIMALS,BABYTOSHI_CURRENCY_IMAGE, BABYTOSHI_CURRENCY_BUY_LINK,
    BABYTOSHI_PANCAKE_PAIR, BABYTOSHI_PANCAKE_PAIR_TEST
} from "../abis/BABYTOSHI.js";
import { 
    BTCB_ADDRESS, BTCB_ADDRESS_TEST,
    BTCB_CURRENCY_NAME, BTCB_CURRENCY_SYMBOL, BTCB_CURRENCY_DECIMALS, BTCB_CURRENCY_IMAGE, BTCB_CURRENCY_BUY_LINK,
} from "../abis/BTCB";
import { 
    WBNB_ADDRESS, WBNB_ADDRESS_TEST,
    WBNB_CURRENCY_NAME, WBNB_CURRENCY_SYMBOL, WBNB_CURRENCY_DECIMALS, WBNB_CURRENCY_IMAGE, WBNB_CURRENCY_BUY_LINK,
} from "../abis/WBNB";
import { 
    BUSD_ADDRESS, BUSD_ADDRESS_TEST,
    BUSD_CURRENCY_NAME, BUSD_CURRENCY_SYMBOL, BUSD_CURRENCY_DECIMALS, BUSD_CURRENCY_IMAGE, BUSD_CURRENCY_BUY_LINK,
} from "../abis/BUSD";
import { 
    ETH_ADDRESS, ETH_ADDRESS_TEST,
    ETH_CURRENCY_NAME, ETH_CURRENCY_SYMBOL, ETH_CURRENCY_DECIMALS, ETH_CURRENCY_IMAGE, ETH_CURRENCY_BUY_LINK,
} from "../abis/ETH";
import { 
    USDT_ADDRESS, USDT_ADDRESS_TEST,
    USDT_CURRENCY_NAME, USDT_CURRENCY_SYMBOL, USDT_CURRENCY_DECIMALS, USDT_CURRENCY_IMAGE, USDT_CURRENCY_BUY_LINK,
} from "../abis/USDT";
import { 
    DAI_ADDRESS, DAI_ADDRESS_TEST,
    DAI_CURRENCY_NAME, DAI_CURRENCY_SYMBOL, DAI_CURRENCY_DECIMALS, DAI_CURRENCY_IMAGE, DAI_CURRENCY_BUY_LINK,
} from "../abis/DAI";
import { 
    XRP_ADDRESS, XRP_ADDRESS_TEST,
    XRP_CURRENCY_NAME, XRP_CURRENCY_SYMBOL, XRP_CURRENCY_DECIMALS, XRP_CURRENCY_IMAGE, XRP_CURRENCY_BUY_LINK,
} from "../abis/XRP";
import { 
    BTCCASH_ADDRESS, BTCCASH_ADDRESS_TEST,
    BTCCASH_CURRENCY_NAME, BTCCASH_CURRENCY_SYMBOL, BTCCASH_CURRENCY_DECIMALS, BTCCASH_CURRENCY_IMAGE, BTCCASH_CURRENCY_BUY_LINK,
} from "../abis/BTCCASH";

import { 
    MATIC_ADDRESS, MATIC_ADDRESS_TEST,
    MATIC_CURRENCY_NAME, MATIC_CURRENCY_SYMBOL, MATIC_CURRENCY_DECIMALS, MATIC_CURRENCY_IMAGE, MATIC_CURRENCY_BUY_LINK,
} from "../abis/MATIC";

import { 
    ADA_ADDRESS, ADA_ADDRESS_TEST,
    ADA_CURRENCY_NAME, ADA_CURRENCY_SYMBOL, ADA_CURRENCY_DECIMALS, ADA_CURRENCY_IMAGE, ADA_CURRENCY_BUY_LINK,
} from "../abis/ADA";

import { 
    SHIB_ADDRESS, SHIB_ADDRESS_TEST,
    SHIB_CURRENCY_NAME, SHIB_CURRENCY_SYMBOL, SHIB_CURRENCY_DECIMALS, SHIB_CURRENCY_IMAGE, SHIB_CURRENCY_BUY_LINK,
} from "../abis/SHIB";

import { 
    DOT_ADDRESS, DOT_ADDRESS_TEST,
    DOT_CURRENCY_NAME, DOT_CURRENCY_SYMBOL, DOT_CURRENCY_DECIMALS, DOT_CURRENCY_IMAGE, DOT_CURRENCY_BUY_LINK,
} from "../abis/DOT";

import { 
    AXS_ADDRESS, AXS_ADDRESS_TEST,
    AXS_CURRENCY_NAME, AXS_CURRENCY_SYMBOL, AXS_CURRENCY_DECIMALS, AXS_CURRENCY_IMAGE, AXS_CURRENCY_BUY_LINK,
} from "../abis/AXS";

import { 
    FTM_ADDRESS, FTM_ADDRESS_TEST,
    FTM_CURRENCY_NAME, FTM_CURRENCY_SYMBOL, FTM_CURRENCY_DECIMALS, FTM_CURRENCY_IMAGE, FTM_CURRENCY_BUY_LINK,
} from "../abis/FTM";

import { 
    DOGE_ADDRESS, DOGE_ADDRESS_TEST,
    DOGE_CURRENCY_NAME, DOGE_CURRENCY_SYMBOL, DOGE_CURRENCY_DECIMALS, DOGE_CURRENCY_IMAGE, DOGE_CURRENCY_BUY_LINK,
} from "../abis/DOGE";

import { 
    SLP_ADDRESS, SLP_ADDRESS_TEST,
    SLP_CURRENCY_NAME, SLP_CURRENCY_SYMBOL, SLP_CURRENCY_DECIMALS, SLP_CURRENCY_IMAGE, SLP_CURRENCY_BUY_LINK,
} from "../abis/SLP";

import { 
    XTZ_ADDRESS, XTZ_ADDRESS_TEST,
    XTZ_CURRENCY_NAME, XTZ_CURRENCY_SYMBOL, XTZ_CURRENCY_DECIMALS, XTZ_CURRENCY_IMAGE, XTZ_CURRENCY_BUY_LINK,
} from "../abis/XTZ";


import { PANCAKE_ABI } from "../abis/ABI_PANCAKE";
import { WEB3_DATA, WEB3_DATA_TEST, GOOD_NETWORK, GOOD_NETWORK_TEST } from "../constants/ConstantsNetworks";

import {Player} from '../classes/Player';
import moment from 'moment';

export function isMobile() {
    return window.screen.width < 640;
}

export function isTablet() {
    return window.screen.width >= 640;
}

export function isLaptop() {
    return window.screen.width >= 1024;
}

export function isDesktop() {
    return window.screen.width >= 1200;
}

/*--------------------------------------------------------------------------------------------- TEXTS ---------------------------------------------------------------------------------------------*/
export const TEXT_ADDRESS_ZERO = '0x0000000000000000000000000000000000000000';
export const TEXT_SEPARATE_ADDRESS = '...';
export const TEXT_DEFAULT_CURRENCY = 'No currency';
export const TEXT_CONNECT = "Connect";
export const TEXT_BUY = "Buy";
export const TEXT_APPROVE = "Approve";
export const TEXT_REGISTER = "Register";
export const TEXT_SUBSCRIBE = "Subscribe";
export const TEXT_TEMPORARY_BAN = "Temporary ban";
export const TEXT_PERMANENT_BAN = "Permanent ban";
export const TEXT_PERMIT_PLAYER = "Permit";
export const TEXT_CONNECTED = "connected";
export const TEXT_DISCONNECTED = "disconnected";
export const TEXT_SUBSCRIBED = "subscribed";
export const TEXT_UNSUBSCRIBED = "unsubscribed";
export const TEXT_BANNED = "banned";

export const TEXT_SYMBOL_PERCENTAGE = '%';
export const TEXT_SYMBOL_APPROXIMATIVELY = '≈';
/*--------------------------------------------------------------------------------------------- MODES ---------------------------------------------------------------------------------------------*/
export const TEXT_MODE_PRODUCTION = 'production';
export const TEXT_MODE_TEST = 'test';
export const TEXT_MODE_ACTUAL = TEXT_MODE_PRODUCTION;

export const ACTUAL_GOOD_NETWORK = TEXT_MODE_ACTUAL===TEXT_MODE_TEST ? GOOD_NETWORK_TEST : GOOD_NETWORK;
/*--------------------------------------------------------------------------------------------- CURRENCIES ---------------------------------------------------------------------------------------------*/
export const DEFAULT_CURRENCY = {address: TEXT_ADDRESS_ZERO.toLowerCase(), name: '', symbol: '', decimals:0, ether:getEther(0), image:''};

export const BABYTOSHI_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? BABYTOSHI_ADDRESS.toLowerCase() : BABYTOSHI_ADDRESS_TEST.toLowerCase(), name: BABYTOSHI_CURRENCY_NAME, symbol: BABYTOSHI_CURRENCY_SYMBOL, 
    decimals: BABYTOSHI_CURRENCY_DECIMALS, ether: getEther(BABYTOSHI_CURRENCY_DECIMALS), price:0, image:BABYTOSHI_CURRENCY_IMAGE, link:BABYTOSHI_CURRENCY_BUY_LINK,};
export const BTCB_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? BTCB_ADDRESS.toLowerCase() : BTCB_ADDRESS_TEST.toLowerCase(), name: BTCB_CURRENCY_NAME, symbol: BTCB_CURRENCY_SYMBOL, 
    decimals: BTCB_CURRENCY_DECIMALS, ether: getEther(BTCB_CURRENCY_DECIMALS), image:BTCB_CURRENCY_IMAGE, link:BTCB_CURRENCY_BUY_LINK,};
export const WBNB_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? WBNB_ADDRESS.toLowerCase() : WBNB_ADDRESS_TEST.toLowerCase(), name: WBNB_CURRENCY_NAME, symbol: WBNB_CURRENCY_SYMBOL, 
    decimals: WBNB_CURRENCY_DECIMALS, ether: getEther(WBNB_CURRENCY_DECIMALS), image:WBNB_CURRENCY_IMAGE, link:WBNB_CURRENCY_BUY_LINK,};
export const BUSD_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? BUSD_ADDRESS.toLowerCase() : BUSD_ADDRESS_TEST.toLowerCase(), name: BUSD_CURRENCY_NAME, symbol: BUSD_CURRENCY_SYMBOL, 
    decimals: BUSD_CURRENCY_DECIMALS, ether: getEther(BUSD_CURRENCY_DECIMALS), image:BUSD_CURRENCY_IMAGE, link:BUSD_CURRENCY_BUY_LINK,};
export const ETH_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? ETH_ADDRESS.toLowerCase() : ETH_ADDRESS_TEST.toLowerCase(), name: ETH_CURRENCY_NAME, symbol: ETH_CURRENCY_SYMBOL, 
    decimals: ETH_CURRENCY_DECIMALS, ether: getEther(ETH_CURRENCY_DECIMALS), image:ETH_CURRENCY_IMAGE, link:ETH_CURRENCY_BUY_LINK,};
export const DAI_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? DAI_ADDRESS.toLowerCase() : DAI_ADDRESS_TEST.toLowerCase(), name: DAI_CURRENCY_NAME, symbol: DAI_CURRENCY_SYMBOL, 
    decimals: DAI_CURRENCY_DECIMALS, ether: getEther(DAI_CURRENCY_DECIMALS), image:DAI_CURRENCY_IMAGE, link:DAI_CURRENCY_BUY_LINK,};
export const USDT_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? USDT_ADDRESS.toLowerCase() : USDT_ADDRESS_TEST.toLowerCase(), name: USDT_CURRENCY_NAME, symbol: USDT_CURRENCY_SYMBOL, 
    decimals: USDT_CURRENCY_DECIMALS, ether: getEther(USDT_CURRENCY_DECIMALS), image:USDT_CURRENCY_IMAGE, link:USDT_CURRENCY_BUY_LINK,};
export const XRP_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? XRP_ADDRESS.toLowerCase() : XRP_ADDRESS_TEST.toLowerCase(), name: XRP_CURRENCY_NAME, symbol: XRP_CURRENCY_SYMBOL, 
    decimals: XRP_CURRENCY_DECIMALS, ether: getEther(XRP_CURRENCY_DECIMALS), image:XRP_CURRENCY_IMAGE, link:XRP_CURRENCY_BUY_LINK,};
export const BTCCASH_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? BTCCASH_ADDRESS.toLowerCase() : BTCCASH_ADDRESS_TEST.toLowerCase(), name: BTCCASH_CURRENCY_NAME, symbol: BTCCASH_CURRENCY_SYMBOL, 
    decimals: BTCCASH_CURRENCY_DECIMALS, ether: getEther(BTCCASH_CURRENCY_DECIMALS), image:BTCCASH_CURRENCY_IMAGE, link:BTCCASH_CURRENCY_BUY_LINK,};
export const MATIC_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? MATIC_ADDRESS.toLowerCase() : MATIC_ADDRESS_TEST.toLowerCase(), name: MATIC_CURRENCY_NAME, symbol: MATIC_CURRENCY_SYMBOL, 
    decimals: MATIC_CURRENCY_DECIMALS, ether: getEther(MATIC_CURRENCY_DECIMALS), image:MATIC_CURRENCY_IMAGE, link:MATIC_CURRENCY_BUY_LINK,};

export const ADA_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? ADA_ADDRESS.toLowerCase() : ADA_ADDRESS_TEST.toLowerCase(), name: ADA_CURRENCY_NAME, symbol: ADA_CURRENCY_SYMBOL, 
decimals: ADA_CURRENCY_DECIMALS, ether: getEther(ADA_CURRENCY_DECIMALS), image:ADA_CURRENCY_IMAGE, link:ADA_CURRENCY_BUY_LINK,};

export const SHIB_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? SHIB_ADDRESS.toLowerCase() : SHIB_ADDRESS_TEST.toLowerCase(), name: SHIB_CURRENCY_NAME, symbol: SHIB_CURRENCY_SYMBOL, 
decimals: SHIB_CURRENCY_DECIMALS, ether: getEther(SHIB_CURRENCY_DECIMALS), image:SHIB_CURRENCY_IMAGE, link:SHIB_CURRENCY_BUY_LINK,};

export const DOT_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? DOT_ADDRESS.toLowerCase() : DOT_ADDRESS_TEST.toLowerCase(), name: DOT_CURRENCY_NAME, symbol: DOT_CURRENCY_SYMBOL, 
decimals: DOT_CURRENCY_DECIMALS, ether: getEther(DOT_CURRENCY_DECIMALS), image:DOT_CURRENCY_IMAGE, link:DOT_CURRENCY_BUY_LINK,};
export const AXS_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? AXS_ADDRESS.toLowerCase() : AXS_ADDRESS_TEST.toLowerCase(), name: AXS_CURRENCY_NAME, symbol: AXS_CURRENCY_SYMBOL, 
decimals: AXS_CURRENCY_DECIMALS, ether: getEther(AXS_CURRENCY_DECIMALS), image:AXS_CURRENCY_IMAGE, link:AXS_CURRENCY_BUY_LINK,};
export const FTM_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? FTM_ADDRESS.toLowerCase() : FTM_ADDRESS_TEST.toLowerCase(), name: FTM_CURRENCY_NAME, symbol: FTM_CURRENCY_SYMBOL, 
decimals: FTM_CURRENCY_DECIMALS, ether: getEther(FTM_CURRENCY_DECIMALS), image:FTM_CURRENCY_IMAGE, link:FTM_CURRENCY_BUY_LINK,};
export const DOGE_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? DOGE_ADDRESS.toLowerCase() : DOGE_ADDRESS_TEST.toLowerCase(), name: DOGE_CURRENCY_NAME, symbol: DOGE_CURRENCY_SYMBOL, 
decimals: DOGE_CURRENCY_DECIMALS, ether: getEther(DOGE_CURRENCY_DECIMALS), image:DOGE_CURRENCY_IMAGE, link:DOGE_CURRENCY_BUY_LINK,};
export const SLP_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? SLP_ADDRESS.toLowerCase() : SLP_ADDRESS_TEST.toLowerCase(), name: SLP_CURRENCY_NAME, symbol: SLP_CURRENCY_SYMBOL, 
decimals: SLP_CURRENCY_DECIMALS, ether: getEther(SLP_CURRENCY_DECIMALS), image:SLP_CURRENCY_IMAGE, link:SLP_CURRENCY_BUY_LINK,};
export const XTZ_CURRENCY = {address: TEXT_MODE_ACTUAL===TEXT_MODE_PRODUCTION ? XTZ_ADDRESS.toLowerCase() : XTZ_ADDRESS_TEST.toLowerCase(), name: XTZ_CURRENCY_NAME, symbol: XTZ_CURRENCY_SYMBOL, 
decimals: XTZ_CURRENCY_DECIMALS, ether: getEther(XTZ_CURRENCY_DECIMALS), image:XTZ_CURRENCY_IMAGE, link:XTZ_CURRENCY_BUY_LINK,};
        

export const ALL_CURRENCIES = [BABYTOSHI_CURRENCY, BTCB_CURRENCY, WBNB_CURRENCY, BUSD_CURRENCY, ETH_CURRENCY, DAI_CURRENCY, USDT_CURRENCY, XRP_CURRENCY,BTCCASH_CURRENCY
    , MATIC_CURRENCY, ADA_CURRENCY, SHIB_CURRENCY, DOT_CURRENCY, AXS_CURRENCY, FTM_CURRENCY, DOGE_CURRENCY, SLP_CURRENCY, XTZ_CURRENCY];
/*--------------------------------------------------------------------------------------------- CURRENCIES ---------------------------------------------------------------------------------------------*/


export const VALUE_SECONDS_ONE_WEEK = 604800;
export const VALUE_SECONDS_ONE_DAY = 86400;
export const VALUE_SECONDS_ONE_HOUR = 3600;
export const VALUE_SECONDS_ONE_MINUTE = 60;

export const currencies = [BABYTOSHI_ADDRESS, BTCB_ADDRESS, WBNB_ADDRESS, BUSD_ADDRESS, ETH_ADDRESS, USDT_ADDRESS, DAI_ADDRESS, XRP_ADDRESS];
export const currenciesTest = [BABYTOSHI_ADDRESS_TEST, BTCB_ADDRESS_TEST, WBNB_ADDRESS_TEST, BUSD_ADDRESS_TEST, ETH_ADDRESS_TEST, USDT_ADDRESS_TEST,DAI_ADDRESS_TEST, XRP_ADDRESS_TEST];

export const DEFAULT_FLIP = {key: TEXT_ADDRESS_ZERO, amount: "0",commitment1: TEXT_ADDRESS_ZERO,commitment2:TEXT_ADDRESS_ZERO, currency: DEFAULT_CURRENCY, dateCreated: new Date().getTime(),
                                dateFinished: new Date().getTime(),expiration:new Date().getTime(), finished: true, looser:TEXT_ADDRESS_ZERO, player1:TEXT_ADDRESS_ZERO, 
                                player2:TEXT_ADDRESS_ZERO, winner:TEXT_ADDRESS_ZERO};

export function convertFromWei(balance, ether=getEther(BABYTOSHI_CURRENCY_DECIMALS)){
    return parseFloat(WEB3_DATA.utils.fromWei(balance.toString(), ether));
}
export function convertToWei(balance, ether=getEther(BABYTOSHI_CURRENCY_DECIMALS)){
    return WEB3_DATA.utils.toWei(balance.toString(), ether);
}

export function convertNumberToCurrency(value, decimals=2){
    let result = (value).toLocaleString(
        undefined, // leave undefined to use the visitor's browser 
                   // locale or a string like 'en-US' to override it.
        { style: "currency", currency:"USD", minimumFractionDigits: decimals }
    );
    return result;
}

export function formatNumber(value, lengthDecimals=2){
    value = parseFloat(value).toFixed(lengthDecimals);
    value = value.toString();
    let indexDecimalsDot = value.indexOf('.')>=0 ? value.indexOf('.') : value.length;
    value = indexDecimalsDot>=0 ? value.replace(".", ",") : value;
    let finalNumber = '';
    let cpt = 0;
    for( let i=value.length-1; i >= 0; i-- ){
        finalNumber = value[i] + finalNumber;
        if( i > 0  && i < indexDecimalsDot ){
            cpt++;
            if( cpt === 3 ){
                finalNumber = " " + finalNumber;
                cpt = 0;
            }  
        }  
    }
    return finalNumber;
}
export function shortNumber(value, lengthDecimals=2){
    value = parseFloat(value);
    return value.toFixed(lengthDecimals);
}

export function getEther(decimals){
    switch(decimals){
        case 0: return 'wei';
        case 6: return 'mwei';
        case 18: return 'ether';
        default: return 'wei';
    }
}

export function shortAddress(address, length=10){
    let nAccount = address.length;
    if( length > (nAccount/2 - TEXT_SEPARATE_ADDRESS.length)){
        return address;
    }
    let partOne = address.substring(0,length);
    let partTwo = address.substring(nAccount-length,nAccount);
    return partOne + TEXT_SEPARATE_ADDRESS + partTwo;
}

export function showRemainingTime(tabTime){
    let showRemaining = '';
    if( tabTime.timeRemaining > VALUE_SECONDS_ONE_WEEK ){ // more than 1 week
        showRemaining = moment(new Date(tabTime.secRemainingInt).getTime()).fromNow();
    }else if( tabTime.timeRemaining > VALUE_SECONDS_ONE_DAY ){ // more than 1 day
        showRemaining = parseInt(tabTime.days) + "d " + parseInt(tabTime.hours) + "h " + parseInt(tabTime.minutes) + "m " + parseInt(tabTime.seconds) + "s ";
    }else if( tabTime.timeRemaining > VALUE_SECONDS_ONE_HOUR ){ // more than 1 hour
        showRemaining = parseInt(tabTime.hours) + "h " + parseInt(tabTime.minutes) + "m " + parseInt(tabTime.seconds) + "s ";
    }else if( tabTime.timeRemaining > VALUE_SECONDS_ONE_MINUTE ){ // more than 1 hour
        showRemaining = parseInt(tabTime.minutes) + "m " + parseInt(tabTime.seconds) + "s ";
    }else if( tabTime.timeRemaining > 0 ){ // more than 1 hour
        showRemaining = parseInt(tabTime.seconds) + "s ";
    }
    return showRemaining;
}

export function formatRemainingTime(secRemainingInt){
    let now = new Date().getTime();
    let timeRemaining = (new Date(secRemainingInt).getTime()-now)/1000;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if( timeRemaining > VALUE_SECONDS_ONE_DAY ){ // more than 1 day
        days = timeRemaining/VALUE_SECONDS_ONE_DAY;
        hours = (days - parseInt(days)) * 24;
        minutes = (hours - parseInt(hours)) * 60;
        seconds = (minutes - parseInt(minutes)) * 60;
        return {days:parseInt(days), hours:parseInt(hours), minutes:parseInt(minutes), seconds:parseInt(seconds), timeRemaining:parseInt(timeRemaining), secRemainingInt:parseInt(secRemainingInt)};
    }else if( timeRemaining > VALUE_SECONDS_ONE_HOUR ){ // more than 1 hour
        hours = timeRemaining/VALUE_SECONDS_ONE_HOUR;
        minutes = (hours - parseInt(hours)) * VALUE_SECONDS_ONE_MINUTE;
        seconds = (minutes - parseInt(minutes)) * VALUE_SECONDS_ONE_MINUTE;
        return {days:0, hours:parseInt(hours), minutes:parseInt(minutes), seconds:parseInt(seconds), timeRemaining:parseInt(timeRemaining), secRemainingInt:parseInt(secRemainingInt)};
    }else if( timeRemaining > VALUE_SECONDS_ONE_MINUTE ){ // more than 1 hour
        minutes = timeRemaining/VALUE_SECONDS_ONE_MINUTE;
        seconds = (minutes - parseInt(minutes)) * VALUE_SECONDS_ONE_MINUTE;
        return {days:0, hours:0, minutes:parseInt(minutes), seconds:parseInt(seconds), timeRemaining:parseInt(timeRemaining), secRemainingInt:parseInt(secRemainingInt)};
    }
    seconds = timeRemaining;
    return {days:0, hours:0, minutes:0, seconds:parseInt(seconds), timeRemaining:parseInt(timeRemaining), secRemainingInt:parseInt(seconds)};
}

export function getABI(currencyAddress){
    switch(currencyAddress.toLowerCase()){
        case TOSHIFLIP_ADDRESS.toLowerCase():case TOSHIFLIP_ADDRESS_TEST.toLowerCase(): return TOSHIFLIP_ABI;
        case BABYTOSHI_ADDRESS.toLowerCase():case BABYTOSHI_ADDRESS_TEST.toLowerCase(): return BABYTOSHI_ABI;
        case BTCB_ADDRESS.toLowerCase():case BTCB_ADDRESS_TEST.toLowerCase():
        case WBNB_ADDRESS.toLowerCase():case WBNB_ADDRESS_TEST.toLowerCase():
        case BUSD_ADDRESS.toLowerCase():case BUSD_ADDRESS_TEST.toLowerCase():
        case ETH_ADDRESS.toLowerCase():case ETH_ADDRESS_TEST.toLowerCase():
        case USDT_ADDRESS.toLowerCase():case USDT_ADDRESS_TEST.toLowerCase():
        case DAI_ADDRESS.toLowerCase():case DAI_ADDRESS_TEST.toLowerCase():
        case XRP_ADDRESS.toLowerCase():case XRP_ADDRESS_TEST.toLowerCase():
        case BTCCASH_ADDRESS.toLowerCase():case BTCCASH_ADDRESS_TEST.toLowerCase():
        case MATIC_ADDRESS.toLowerCase():case MATIC_ADDRESS_TEST.toLowerCase():
        case ADA_ADDRESS.toLowerCase():case ADA_ADDRESS_TEST.toLowerCase():
        case SHIB_ADDRESS.toLowerCase():case SHIB_ADDRESS_TEST.toLowerCase():
        case DOT_ADDRESS.toLowerCase():case DOT_ADDRESS_TEST.toLowerCase():
        case AXS_ADDRESS.toLowerCase():case AXS_ADDRESS_TEST.toLowerCase():
        case FTM_ADDRESS.toLowerCase():case FTM_ADDRESS_TEST.toLowerCase():
        case DOGE_ADDRESS.toLowerCase():case DOGE_ADDRESS_TEST.toLowerCase():
        case SLP_ADDRESS.toLowerCase():case SLP_ADDRESS_TEST.toLowerCase():
        case XTZ_ADDRESS.toLowerCase():case XTZ_ADDRESS_TEST.toLowerCase():
            
        return GENERAL_ABI;
        default: return [];
    }
}
export function getContract(currencyAddress){
    switch(currencyAddress.toLowerCase()){
        case TOSHIFLIP_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(TOSHIFLIP_ABI, TOSHIFLIP_ADDRESS);
        case BABYTOSHI_PANCAKE_PAIR.toLowerCase(): return new WEB3_DATA.eth.Contract(PANCAKE_ABI, BABYTOSHI_PANCAKE_PAIR);
        case BABYTOSHI_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(BABYTOSHI_ABI, BABYTOSHI_ADDRESS);
        case BTCB_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, BTCB_ADDRESS);
        case WBNB_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, WBNB_ADDRESS);
        case BUSD_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, BUSD_ADDRESS);
        case ETH_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, ETH_ADDRESS);
        case USDT_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, USDT_ADDRESS);
        case DAI_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, DAI_ADDRESS);
        case XRP_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, XRP_ADDRESS);
        case BTCCASH_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, BTCCASH_ADDRESS);
        case MATIC_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, MATIC_ADDRESS);
        case ADA_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, ADA_ADDRESS);
        case SHIB_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, SHIB_ADDRESS);
        case DOT_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, DOT_ADDRESS);
        case AXS_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, AXS_ADDRESS);
        case FTM_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, FTM_ADDRESS);
        case DOGE_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, DOGE_ADDRESS);
        case SLP_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, SLP_ADDRESS);
        case XTZ_ADDRESS.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, XTZ_ADDRESS);
        
        case BABYTOSHI_PANCAKE_PAIR_TEST.toLowerCase(): return new WEB3_DATA_TEST.eth.Contract(PANCAKE_ABI, BABYTOSHI_PANCAKE_PAIR_TEST);
        case BABYTOSHI_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA_TEST.eth.Contract(BABYTOSHI_ABI, BABYTOSHI_ADDRESS_TEST);
        case BTCB_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA_TEST.eth.Contract(GENERAL_ABI, BTCB_ADDRESS_TEST);
        case WBNB_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA_TEST.eth.Contract(GENERAL_ABI, WBNB_ADDRESS_TEST);
        case BUSD_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA_TEST.eth.Contract(GENERAL_ABI, BUSD_ADDRESS_TEST);
        case ETH_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA_TEST.eth.Contract(GENERAL_ABI, ETH_ADDRESS_TEST);
        case USDT_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA_TEST.eth.Contract(GENERAL_ABI, USDT_ADDRESS_TEST);
        case DAI_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA_TEST.eth.Contract(GENERAL_ABI, DAI_ADDRESS_TEST);
        case XRP_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA_TEST.eth.Contract(GENERAL_ABI, XRP_ADDRESS_TEST);
        case BTCCASH_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA_TEST.eth.Contract(GENERAL_ABI, BTCCASH_ADDRESS_TEST);
        case MATIC_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, MATIC_ADDRESS_TEST);
        case ADA_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, ADA_ADDRESS_TEST);
        case SHIB_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, SHIB_ADDRESS_TEST);
        case DOT_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, DOT_ADDRESS_TEST);
        case AXS_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, AXS_ADDRESS_TEST);
        case FTM_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, FTM_ADDRESS_TEST);
        case DOGE_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, DOGE_ADDRESS_TEST);
        case SLP_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, SLP_ADDRESS_TEST);
        case XTZ_ADDRESS_TEST.toLowerCase(): return new WEB3_DATA.eth.Contract(GENERAL_ABI, XTZ_ADDRESS_TEST);
        
        default: return null;
    }
}

export async function getCurrencyByAddress(_currencyAddress){
    let currencyAddress = _currencyAddress.toLowerCase();
    for( let currency of await getCurrencies() ){
        if( currency.address.toLowerCase()===currencyAddress ){
            return currency;
        }
    }
    return DEFAULT_CURRENCY;
}

export async function getCurrencies(){
   return ALL_CURRENCIES;
}

export async function getBabytoshiPrice() {    
    let contract;
    if( TEXT_MODE_ACTUAL === TEXT_MODE_TEST ){
        contract = getContract(BABYTOSHI_PANCAKE_PAIR_TEST);
    }else{
        contract = getContract(BABYTOSHI_PANCAKE_PAIR);
    }
    let bnbPrice = await getCurrencyPrice(WBNB_ADDRESS);
    let token0 = await contract.methods.token0().call().then((token)=>{return token;}).catch(()=>{return '';});
    let result = await contract.methods.getReserves().call().then((reserves)=>{
        let _price = 0;
        if( token0.toLowerCase() === WBNB_ADDRESS.toLowerCase() || token0.toLowerCase() === WBNB_ADDRESS_TEST.toLowerCase() ){
            _price = (parseInt(reserves._reserve0) / parseInt(reserves._reserve1));
        }else{
            _price = (parseInt(reserves._reserve1) / parseInt(reserves._reserve0));
        }
        return parseFloat(_price) * bnbPrice;
    }).catch((error)=>{
        return 0;
    });

    return result;
}


function getCurrencyId(currencyAddress){
    switch(currencyAddress.toLowerCase()){
        case BTCB_ADDRESS.toLowerCase(): case BTCB_ADDRESS_TEST.toLowerCase(): return "bitcoin";
        case WBNB_ADDRESS.toLowerCase(): case WBNB_ADDRESS_TEST.toLowerCase(): return "binancecoin";
        case BUSD_ADDRESS.toLowerCase(): case BUSD_ADDRESS_TEST.toLowerCase(): return "binance-usd";
        case ETH_ADDRESS.toLowerCase(): case ETH_ADDRESS_TEST.toLowerCase(): return "ethereum";
        case USDT_ADDRESS.toLowerCase(): case USDT_ADDRESS_TEST.toLowerCase(): return "tether";
        case DAI_ADDRESS.toLowerCase(): case DAI_ADDRESS_TEST.toLowerCase(): return "dai";
        case XRP_ADDRESS.toLowerCase(): case XRP_ADDRESS_TEST.toLowerCase(): return "ripple";
        case BTCCASH_ADDRESS.toLowerCase(): case BTCCASH_ADDRESS_TEST.toLowerCase(): return "bitcoin-cash";
        case MATIC_ADDRESS.toLowerCase(): case MATIC_ADDRESS_TEST.toLowerCase(): return "matic-network";

        case ADA_ADDRESS.toLowerCase(): case ADA_ADDRESS_TEST.toLowerCase(): return "cardano";
        case SHIB_ADDRESS.toLowerCase(): case SHIB_ADDRESS_TEST.toLowerCase(): return "shiba-inu";
        case DOT_ADDRESS.toLowerCase(): case DOT_ADDRESS_TEST.toLowerCase(): return "polkadot";
        case AXS_ADDRESS.toLowerCase(): case AXS_ADDRESS_TEST.toLowerCase(): return "axie-infinity";
        case FTM_ADDRESS.toLowerCase(): case FTM_ADDRESS_TEST.toLowerCase(): return "fantom";
        case DOGE_ADDRESS.toLowerCase(): case DOGE_ADDRESS_TEST.toLowerCase(): return "dogecoin";
        case SLP_ADDRESS.toLowerCase(): case SLP_ADDRESS_TEST.toLowerCase(): return "smooth-love-potion";
        case XTZ_ADDRESS.toLowerCase(): case XTZ_ADDRESS_TEST.toLowerCase(): return "tezos";
        default: return null;
    }
}

export async function getCurrencyPrice(currencyAddress) {
    if( currencyAddress.toLowerCase() === BABYTOSHI_ADDRESS.toLowerCase() || currencyAddress.toLowerCase() === BABYTOSHI_ADDRESS_TEST.toLowerCase() ){
        return await getBabytoshiPrice();
    }else{
        let currencyId = getCurrencyId(currencyAddress);
        let url = "https://api.coingecko.com/api/v3/simple/price?ids="+currencyId+"&vs_currencies=usd";
        let price = await fetch(url,{method: "GET", headers: {accept: "*/*",}}).then( async (_price) => {
        let priceText = await _price.clone().text();
        let currencyText = '"usd":';
        let indexOf = priceText.indexOf(currencyText) + currencyText.length;
        let lastIndexOf = priceText.indexOf('}');
        return parseFloat(priceText.substring(indexOf, lastIndexOf));
        });
        return price.toFixed(4);
    }    
}

export async function getBalanceBnb(userAddress){
    let web3;
    if( TEXT_MODE_ACTUAL === TEXT_MODE_TEST ){
        web3 = WEB3_DATA_TEST;
    }else{
        web3 = WEB3_DATA;
    }

    if( userAddress !== TEXT_ADDRESS_ZERO ){
        return 0;
    }
    let balanceBnb = web3.eth.getBalance(userAddress).then( async (result) => {
        return result;
    }).catch( () => {
        return 0;
    });
    return balanceBnb;
}

export async function getBalanceOf(currencyAddress, player=new Player()){
    let contract = getContract(currencyAddress);
    if( player.key !== TEXT_ADDRESS_ZERO ){
        if( contract ){
            let balance = await contract.methods.balanceOf(player.key).call().then( async (data) => {
                return data;
            });
            return balance;
        }
    }
    return '0';
}

export async function getAllowanceOf(currencyAddress, player=new Player()){
    let coinFlipAddress;
    if( TEXT_MODE_ACTUAL === TEXT_MODE_TEST ){
        coinFlipAddress = TOSHIFLIP_ADDRESS_TEST;
    }else{
        coinFlipAddress = TOSHIFLIP_ADDRESS;
    }

    let contract = getContract(currencyAddress);
    if( player.key !== TEXT_ADDRESS_ZERO ){
        if( contract ){
            let allowance = await contract.methods.allowance(player.key, coinFlipAddress).call().then( async (data) => {
                return data;
            });
            return allowance;
        }
    }
    return '0';
}

export async function approveCurrency(ethereum, player=new Player(), currencyAddress, amount=0){
    let contract = new (new Web3(ethereum)).eth.Contract(getABI(currencyAddress), currencyAddress);
    let coinFlipAddress;
    if( TEXT_MODE_ACTUAL === TEXT_MODE_TEST ){
        coinFlipAddress = TOSHIFLIP_ADDRESS_TEST;
    }else{
        coinFlipAddress = TOSHIFLIP_ADDRESS;
    }
    if( player.key !== TEXT_ADDRESS_ZERO && parseFloat(amount) > 0 ){
        if( contract ){
            await contract.methods.approve(coinFlipAddress, amount).send({from: player.key}).then( async () => {
                return true;
            }); 
        }
    }
    return false;
}
export async function createFlip(ethereum, player=new Player(), currencyAddress, amount=0, choice){
    let coinFlipAddress;
    if( TEXT_MODE_ACTUAL === TEXT_MODE_TEST ){
        coinFlipAddress = TOSHIFLIP_ADDRESS_TEST;
    }else{
        coinFlipAddress = TOSHIFLIP_ADDRESS;
    }
    let contract = new (new Web3(ethereum)).eth.Contract(getABI(coinFlipAddress), coinFlipAddress);
    if( player.key !== TEXT_ADDRESS_ZERO && parseFloat(amount) > 0 && choice!==undefined ){
        if( contract ){
            let result = await contract.methods.createFlip(currencyAddress, amount, choice).send({from: player.key}).then( async (_result) => {
                return _result;
            }); 
            return result;
        }
    }
    return false;
}
export async function joinFlip(ethereum, player=new Player(), flipAddress, currencyAddress, amount=0, choice){
    let coinFlipAddress;
    if( TEXT_MODE_ACTUAL === TEXT_MODE_TEST ){
        coinFlipAddress = TOSHIFLIP_ADDRESS_TEST;
    }else{
        coinFlipAddress = TOSHIFLIP_ADDRESS;
    }
    let contract = new (new Web3(ethereum)).eth.Contract(getABI(coinFlipAddress), coinFlipAddress);
    if( player.key !== TEXT_ADDRESS_ZERO && parseFloat(amount) > 0 && choice!==undefined ){
        if( contract ){
            let result = await contract.methods.joinFlip(flipAddress, currencyAddress, amount, choice).send({from: player.key}).then( async (_result) => {
                return _result;
            }); 
            return result;
        }
    }
    return false;
}
export async function cancelFlip(ethereum, player=new Player(), flipAddress=TEXT_ADDRESS_ZERO){
    let coinFlipAddress;
    if( TEXT_MODE_ACTUAL === TEXT_MODE_TEST ){
        coinFlipAddress = TOSHIFLIP_ADDRESS_TEST;
    }else{
        coinFlipAddress = TOSHIFLIP_ADDRESS;
    }
    let contract = new (new Web3(ethereum)).eth.Contract(getABI(coinFlipAddress), coinFlipAddress);
    if( player.key !== TEXT_ADDRESS_ZERO && flipAddress !== TEXT_ADDRESS_ZERO ){
        if( contract ){
            let result = await contract.methods.cancelFlip(flipAddress).send({from: player.key}).then( async (_result) => {
                return _result;
            }); 
            return result;
        }
    }
    return false;
}

export async function getFlips(){
    let coinFlipAddress;
    let web3;
    if( TEXT_MODE_ACTUAL === TEXT_MODE_TEST ){
        coinFlipAddress = TOSHIFLIP_ADDRESS_TEST;
        web3 = WEB3_DATA_TEST;
    }else{
        coinFlipAddress = TOSHIFLIP_ADDRESS;
        web3 = WEB3_DATA;
    }
    let contract = new web3.eth.Contract(getABI(coinFlipAddress), coinFlipAddress);
    if( contract ){
        let result = await contract.methods.getFlips().call().then( async (data) => {
            let _flips = [];
            for( let flip of data ){
                let currency = await getCurrencyByAddress(flip.currency);
                _flips.push({key: flip.key, amount: flip.amount,commitment1: flip.commitment1,commitment2:flip.commitment2, currency: currency, 
                    dateCreated: new Date(parseInt(flip.dateCreated)*1000),dateFinished: new Date(parseInt(flip.dateFinished)*1000),expiration:new Date(parseInt(flip.expiration)*1000),
                    finished: flip.finished, looser:flip.looser, player1:flip.player1,player2:flip.player2, winner:flip.winner}); 
            }
            return _flips;
        }); 
        return result;
    }
    return [];
}

export async function getFlipByKey(key){
    let flips = await getFlips();
    for( let flip of flips ){
        if( flip.key.toLowerCase() === key.toLowerCase() ){
            return flip;
        }   
    }
    return null;
}

export async function getValueFlip(key){
    let flip = await getFlipByKey(key);
    let totalValue = flip ? parseFloat( await getCurrencyPrice(flip.currency.address)) * parseFloat(convertFromWei(flip.amount, flip.currency.ether)) : 0;
    return totalValue;
}

export async function getTotalValueFlips(flips){
    let totalValue = 0;
    for( let flip of flips ){
        let valueInUsd = parseFloat( await getCurrencyPrice(flip.currency.address)) * parseFloat(convertFromWei(flip.amount, flip.currency.ether));
        totalValue += valueInUsd;
    }
    return totalValue;
}

export async function getPendingFlips(){
    let flips = await getFlips();
    let availableFlips = [];
    for( let flip of flips ){
        if( !flip.finished ){
            availableFlips.push(flip);
        }   
    }
    return availableFlips;
}

export async function getPendingPlayerFlips(player=new Player()){
    let flips = await getPendingFlips();
    let availableFlips = [];
    for( let flip of flips ){
        if( player.key !== TEXT_ADDRESS_ZERO ){
            if( flip.player1.toLowerCase() === player.key.toLowerCase() ){
                availableFlips.push(flip);
            }
        }
           
    }
    return availableFlips;
}

export async function getFlipsByFinished(finished=false){
    let flips = await getFlips();
    let availableFlips = [];
    for( let flip of flips ){
        if( flip.finished === finished ){
            availableFlips.push(flip);
        }   
    }
    return availableFlips;
}



