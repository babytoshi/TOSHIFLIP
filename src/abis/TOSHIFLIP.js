import { Player } from '../classes/Player';
import { WEB3_DATA, WEB3_DATA_TEST,  } from "../constants/ConstantsNetworks";
import {TEXT_MODE_TEST, TEXT_MODE_ACTUAL, TEXT_ADDRESS_ZERO,  } from '../methods/Methods';

export const TOSHIFLIP_ADDRESS = "0x28F0AbB030C083d97e97CA8256C08b88e77bd032".toLowerCase(); // TOSHIFLIP
export const TOSHIFLIP_ADDRESS_TEST = "0x8bBeE95e26bF1e2c84985A4f6c28Ef90e8A07023".toLowerCase(); // TOSHIFLIP TEST 
export const CONTRACT_LINK = "https://bscscan.com/address/" + TOSHIFLIP_ADDRESS;
export const CONTRACT_LINK_TEST = "https://testnet.bscscan.com/address/" + TOSHIFLIP_ADDRESS_TEST;
export const web3Data = TEXT_MODE_ACTUAL === TEXT_MODE_TEST ? WEB3_DATA_TEST : WEB3_DATA;
//export const toshiflipAddress = TEXT_MODE_ACTUAL === TEXT_MODE_TEST ? PLAYERS_ADDRESS_TEST : PLAYERS_ADDRESS;
export const TOSHIFLIP_ABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "babytoshiAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "bnbAmount",
				"type": "uint256"
			}
		],
		"name": "AddLiquidity",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "burnAmount",
				"type": "uint256"
			}
		],
		"name": "Burn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "key",
				"type": "address"
			}
		],
		"name": "cancelFlip",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "here",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "key",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "player1",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "CancelFlip",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "choice",
				"type": "bool"
			}
		],
		"name": "createFlip",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "here",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "key",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "player1",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "choice",
				"type": "bool"
			}
		],
		"name": "CreateFlip",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_key",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "_choice",
				"type": "bool"
			}
		],
		"name": "joinFlip",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "here",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "key",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "player2",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "choice",
				"type": "bool"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "winner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "looser",
				"type": "address"
			}
		],
		"name": "JoinFlip",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "previousOwner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "renounceOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokenAmount",
				"type": "uint256"
			}
		],
		"name": "SwapTokenForETH",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TransferFrom",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "currency",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TransferTo",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "here",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "newExpiration",
				"type": "uint256"
			}
		],
		"name": "UpdateExpirationParty",
		"type": "event"
	},
	{
		"stateMutability": "payable",
		"type": "fallback"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	},
	{
		"inputs": [],
		"name": "BABYTOSHI_ADDRESS",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "key",
				"type": "address"
			}
		],
		"name": "getFlip",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "key",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "player1",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "player2",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "currency",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "commitment1",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "commitment2",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "winner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "looser",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "finished",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "balance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "dateCreated",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "dateFinished",
						"type": "uint256"
					}
				],
				"internalType": "struct FlipsMapping.Flip",
				"name": "flip",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getFlips",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "key",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "player1",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "player2",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "currency",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "commitment1",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "commitment2",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "winner",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "looser",
						"type": "address"
					},
					{
						"internalType": "bool",
						"name": "finished",
						"type": "bool"
					},
					{
						"internalType": "uint256",
						"name": "balance",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "dateCreated",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "dateFinished",
						"type": "uint256"
					}
				],
				"internalType": "struct FlipsMapping.Flip[]",
				"name": "flip",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "player",
				"type": "address"
			}
		],
		"name": "getPlayerStats",
		"outputs": [
			{
				"internalType": "address",
				"name": "key",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "wins",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "looses",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MARKETING_FEE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "MARKETING_WALLET",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sizeFlips",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "length",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "sizePlayers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "size",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

function getWeb3(){
	return TEXT_MODE_ACTUAL === TEXT_MODE_TEST ? WEB3_DATA_TEST : WEB3_DATA;
}
export function getToshiflipAddress(){
	return TEXT_MODE_ACTUAL === TEXT_MODE_TEST ? TOSHIFLIP_ADDRESS_TEST : TOSHIFLIP_ADDRESS;
}
export function getContractLinkToshiflip(){
	return TEXT_MODE_ACTUAL === TEXT_MODE_TEST ? CONTRACT_LINK_TEST : CONTRACT_LINK;
}

export async function getMarketingFee(){
	let web3Data = getWeb3();
	let toshiFlipAddressData = getToshiflipAddress();
    let contract = new web3Data.eth.Contract(TOSHIFLIP_ABI, toshiFlipAddressData);
    if( contract ){
        let amount = await contract.methods.MARKETING_FEE().call().then( (_amount) => {
            return _amount;
        });
        return amount;
    }
    return 0;
}

export async function getPlayersSize(){
	let web3Data = getWeb3();
	let toshiFlipAddressData = getToshiflipAddress();
    let contract = new web3Data.eth.Contract(TOSHIFLIP_ABI, toshiFlipAddressData);
    if( contract ){
        let amount = await contract.methods.sizePlayers().call().then( (_amount) => {
            return _amount;
        });
        return amount;
    }
    return 0;
}

export async function getPlayer(userAddress){
	let web3Data = getWeb3();
	let toshiFlipAddressData = getToshiflipAddress();
    let contract = new web3Data.eth.Contract(TOSHIFLIP_ABI, toshiFlipAddressData);

    let player = await contract.methods.getPlayerStats(userAddress).call().then( async (data) => {
		let _wins = 0;
		let _looses = 0;
		let _connected = false;
		let _isPlayer = false;
		
        if( data.key.toLowerCase() !== TEXT_ADDRESS_ZERO.toLowerCase() ){
			_wins = data.wins;
			_looses = data.looses;
			_connected = true;
			_isPlayer = true;
            //_player = new Player(userAddress, parseInt(data.wins), parseInt(data.looses), false, 0, _connected, _isPlayer, '0');
        }
		return new Player(userAddress, parseInt(_wins), parseInt(_looses), _connected, _isPlayer);
        //return new Player(userAddress, 0, 0, false, 0, false, false, 0);
    }).catch( () => {
        return new Player(TEXT_ADDRESS_ZERO, 0, 0, false, 0, false, false, 0);
    });
    return player;
}