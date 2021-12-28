
import {TEXT_ADDRESS_ZERO} from "../methods/Methods";
//let _burnWallet = await COINFLIP_CONTRACT.methods.burnWallet().call();
//const babyToshiContract = new web3.eth.Contract(BABYTOSHI_ABI, BABYTOSHI_ADDRESS);
export class Player{
    constructor(_key=TEXT_ADDRESS_ZERO, _wins=0, _looses=0, _connected=false, _subscribed=false){
        this.key = _key;
        this.wins = _wins;
        this.looses = _looses;
        this.connected = _connected;
        this.subscribed = _subscribed;
        //this.banned = _banned;
        //this.unblockTime = parseInt(_unblockTime);
        //this.bnbBalance = _bnbBalance;
    }
    //let _allowance = await babyToshiContract.methods.allowance(user, COINFLIP_ADDRESS).call();
}