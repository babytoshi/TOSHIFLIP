// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;
/*
****************      **************    ****************    ***            ***  ******************   **************      ****************  ***            ***  ****
*****************    ****************   *****************    ***          ***   ******************  ****************    ****************   ***            ***  ****
**             ***  ***            ***  **             ***    ***        ***    ****************** ******************  ****************    ***            ***  **** 
**              **  **              **  **              **     ***      ***            ****        **              **   ***********        ***            ***  ****
**              **  **              **  **              **      ***    ***             ****        **              **    ***********       ***            ***  
*****************   ******************  *****************        ********              ****        **              **     ***********      ******************  ****
*****************   ******************  *****************         ******               ****        **              **      ***********     ******************  ****     
**              **  **              **  **              **         ****                ****        **              **       ***********    ***            ***  ****
**              **  **              **  **              **         ****                ****        **              **        ***********   ***            ***  ****    
**             ***  **              **  **             ***         ****                ****        ******************    ****************  ***            ***  ****
*****************   **              **  *****************          ****                ****         ****************    ****************   ***            ***  ****
****************    **              **  ****************           ****                ****          **************    ****************    ***            ***  ****

******************   **************      ****************  ***            ***  ****  ******************  ***                 ***  ****************
******************  ****************    ****************   ***            ***  ****  ******************  ***                 ***  *****************
       ****        ******************  ****************    ***            ***  ****  ******************  ***                 ***  ******************
       ****        **              **   ***********        ***            ***  ****  ***                 ***                 ***  ***            ***
       ****        **              **    ***********       ***            ***        ***                 ***                      ***            ***
       ****        **              **     ***********      ******************  ****  ******************  ***                 ***  *****************
       ****        **              **      ***********     ******************  ****  ******************  ***                 ***  **************** 
       ****        **              **       ***********    ***            ***  ****  ***                 ***                 ***  ***
       ****        **              **        ***********   ***            ***  ****  ***                 ***                 ***  ***
       ****        ******************    ****************  ***            ***  ****  ***                 ******************  ***  ***
       ****         ****************    ****************   ***            ***  ****  ***                 ******************  ***  ***
       ****          **************    ****************    ***            ***  ****  ***                 ******************  ***  ***
*/            
/** 
 * This contract must be Excluded from Babytoshi Fees !!!
 * Dont send funds to this contract !!!
**/

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./ToshiGame.sol";
import "./Players.sol";
import "./Flips.sol";

/*
 * @dev 
 * Required to manage players
 * Only new players can subscribe
 */
contract ToshiFlip is ToshiGame {
    using SafeMath for uint256;
    using PlayersMapping for PlayersMapping.Players;
    using FlipsMapping for FlipsMapping.Flip;
    using FlipsMapping for FlipsMapping.Flips;

    receive() external payable override {}
    fallback() external payable override {}

    FlipsMapping.Flips flips;

    event CreateFlip (address indexed here, address indexed key, address player1, address currency, uint256 amount, bool choice);
    event JoinFlip (address indexed here, address indexed key, address player2, bool choice, address winner, address looser);
    event CancelFlip (address indexed here, address indexed key, address player1, address currency, uint256 amount);

    /**
    * @dev Initializes the contract setting the deployer as the initial owner.
    */
    constructor() ToshiGame() {
    }

    /**
     * @dev Throws if not called by player one.
     */
    modifier onlyPlayerOne(address key) {
        require(flips.flips[key].player1 == _msgSender(), "only callable by player one!");
        _;
    }
    /**
     * @dev Throws if called by player one.
     */
    modifier notPlayerOne(address key) {
        require(flips.flips[key].player1 != _msgSender(), "not callable by player one!");
        _;
    }
    /**
     * @dev Throws if flip not exists.
     */
    modifier onlyExistingFlip(address key) {
        require(isFlip(key), "only existing flip!");
        _;
    }

    /**
     * @dev Throws if flip is not finished.
     */
    modifier notFinishedFlip(address key) {
        require(!flips.flips[key].finished, "not finished flip!");
        _;
    }
    /**
     * @dev Get a flip
     */
    function getFlip(address key) public view returns(FlipsMapping.Flip memory flip) {
        return flips.get(key);
    } 
    /**
     * @dev Get all flips
     */
    function getFlips() public view returns(FlipsMapping.Flip[] memory flip) {
        return flips.getAll();
    } 
 
    /**
     * @dev Create a flip
     * Team wallets can't execute this function !!!
     */
    function createFlip(address currency, uint256 amount, bool choice) public virtual notTeam {
        if( !isPlayer(_msgSender()) ){
            players.add(_msgSender());
        }

        address key = flips.add(currency, amount, choice);
        require(key != address(0), "flip not added");
        bool transferredFrom = transferFrom(currency, _msgSender(), amount);
        require(transferredFrom, "amount not transferred");

        emit CreateFlip(here, key, _msgSender(), currency, amount, choice);
    }
    /**
     * @dev Join a flip
     * Team wallets can't execute this function !!!
     * The player one can't execute this function !!!
     */
    function joinFlip(address _key, address currency, uint256 amount, bool _choice) public virtual notTeam notPlayerOne(_key) onlyExistingFlip(_key) notFinishedFlip(_key) {
        if( !isPlayer(_msgSender()) ){
            players.add(_msgSender());
        }
        address key = _key;
        bool choice = _choice;
        FlipsMapping.Flip memory flip = flips.join(key, amount, choice);

        require(currency == flip.currency, "the currency is not the same!");
        require(amount == flip.amount, "the amount is not the same!");
        bool transferredFrom = transferFrom(currency, _msgSender(), amount);
        require(transferredFrom, "amount not transferred");

        if( flip.winner == _msgSender() ){ // if the same commitment, player2 wins !!!
            players.incrementWin(_msgSender());
            players.incrementLoose(flip.player1);
        }else{
            players.incrementLoose(_msgSender());
            players.incrementWin(flip.player1);
        }

        uint256 balanceMarketing = flip.balance.mul(MARKETING_FEE).div(100);
        uint256 attemptBalanceWinner = ERC20(flip.currency).balanceOf(here).sub(flip.balance);

        bool marketingSwapped;
        if( currency == BABYTOSHI_ADDRESS ){
            marketingSwapped = addLiquidity(balanceMarketing);
        }else if( currency == pancakeswapV2Router.WETH() ){
            marketingSwapped = transferTo(flip.currency, MARKETING_WALLET, balanceMarketing);
        }else {
            marketingSwapped = swapTokenForETH(flip.currency, balanceMarketing, MARKETING_WALLET);
        }
        require(marketingSwapped, "no transfer bnb marketing");

        uint256 balanceWinner = ERC20(flip.currency).balanceOf(here).sub(attemptBalanceWinner);
        require(balanceWinner >= flip.balance.sub(balanceMarketing), "not random");

        bool transferredToWinner = transferTo(flip.currency, flip.winner, balanceWinner);
        require(transferredToWinner, "NON transfer tokens to winner");

        flip.balance = 0;

        flips.flips[key] = flip;
        emit JoinFlip (here, key, _msgSender(), choice, flip.winner, flip.looser);
    }
    /**
     * @dev Cancel a flip
     * Team wallets can't execute this function !!!
     * Only the player one can execute this function !!!
     */
    function cancelFlip(address key) public onlyPlayerOne(key) onlyExistingFlip(key) notFinishedFlip(key) {
        FlipsMapping.Flip memory flip = getFlip(key);

        bool removed = flips.remove(key);
        require(removed, "flip not removed");

        bool transferredToPlayer = transferTo(flip.currency, _msgSender(), flip.balance);
        require(transferredToPlayer, "NON transfer tokens to player");
        emit CancelFlip (here, key, _msgSender(), flip.currency, flip.amount);
    }

    function isFlip(address key) private view returns(bool contains){
        return flips.contains(key);
    }
    
    function sizeFlips() public view returns (uint length) {
        return flips.size();
    }    
}