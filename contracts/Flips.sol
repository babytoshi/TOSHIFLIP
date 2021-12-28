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
       ****        **              **    ***********       ***            ***        ***                 ***                 ***  ***            ***
       ****        **              **     ***********      ******************  ****  ******************  ***                 ***  *****************
       ****        **              **      ***********     ******************  ****  ******************  ***                 ***  **************** 
       ****        **              **       ***********    ***            ***  ****  ***                 ***                 ***  ***
       ****        **              **        ***********   ***            ***  ****  ***                 ***                 ***  ***
       ****        ******************    ****************  ***            ***  ****  ***                 ******************  ***  ***
       ****         ****************    ****************   ***            ***  ****  ***                 ******************  ***  ***
       ****          **************    ****************    ***            ***  ****  ***                 ******************  ***  ***
*/
/**
 * @dev Is library to manage flips.
 * 
 * This contract is linked with Toshiflip Contract.
 * Dont send funds to this contract !!!
**/

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

library FlipsMapping {
    using SafeMath for uint256;
    
    // Iterable mapping from address to uint;
    struct Flip{
        address key;
        address player1;
        address player2;
        address currency;
        uint256 amount;
        address commitment1;
        address commitment2;
        address winner;
        address looser;
        bool finished;
        uint256 balance;
        uint256 dateCreated;
        uint256 dateFinished;
    }

    // Struct of all flips
    struct Flips{
        address[] keys;
        mapping(address => Flip) flips;
        mapping(address => address) nonces;
        mapping(address => uint) indexOf;
        mapping(address => bool) inserted;
    }

    /**
     * @dev Create random address for a party
     */
    function createFlipAddress(uint nbRandomAddress) internal view returns (address randomPlayer) {
        return address(uint160(uint(keccak256(abi.encodePacked(nbRandomAddress, msg.sender, address(this), block.timestamp, block.difficulty, blockhash(block.number))))));
    }

    /**
     * @dev Create nonce for a party
     */
    function createNonce(address flipKey, uint nbNonce) internal view returns (address nonce) {
        return address(uint160(uint(keccak256(abi.encodePacked(flipKey, nbNonce, msg.sender, address(this), block.timestamp, block.difficulty, blockhash(block.number))))));
    }

    /**
     * @dev Create commitment for a player
     */
    function createCommitment(address flipKey, address nonce, bool choice) internal pure returns (address commitment) {
        return address(uint160(uint(keccak256(abi.encodePacked(flipKey, nonce, choice)))));
    }

    /**
     * @dev Get a flip
     */
    function get(Flips storage flips, address key) internal view returns(Flip memory flip) {
        if( !flips.inserted[key] )
            return Flip(address(0),address(0), address(0), address(0), 0, address(0), address(0), address(0), address(0), false, 0, 0, 0);

        return flips.flips[key];
    } 
    /**
     * @dev Get all flips
     */
    function getAll(Flips storage flips) external view returns(Flip[] memory flip) {
        uint _size = flips.keys.length;
        if( _size == 0 )
            return new Flip[](0);

        Flip[] memory _flips = new Flip[](_size);
        for( uint i=0; i < _size; i++){
            _flips[i] = get(flips, flips.keys[i]);
        }
        return _flips;
    } 

    /**
     * @dev Add a flip
     */
    function add(Flips storage flips, address currency, uint256 amount, bool choice) external returns (address _key){
        uint length = flips.keys.length;
        address key = createFlipAddress(length);
        if( flips.inserted[key] )
            return address(0);

        address nonce = createNonce(key, length);
        
        flips.flips[key] = Flip(key, msg.sender, address(0), currency, amount, createCommitment(key, nonce, choice), 
                    address(0), address(0), address(0), false, amount, block.timestamp, 0);
                    
        flips.nonces[key] = nonce;
        flips.indexOf[key] = flips.keys.length;
        flips.inserted[key] = true;
        flips.keys.push(key);   
        return key;
    }
    /**
     * @dev Join a flip
     */
    function join(Flips storage flips, address _key, uint256 amount, bool choice) external returns(Flip memory flip) {
        
        address key = _key;
        address nonce = flips.nonces[key];
        address commitment2 = createCommitment(key, nonce, choice);
        flips.flips[key].player2 = msg.sender;
        flips.flips[key].commitment2 = commitment2;
        
        flips.flips[key].winner = flips.flips[key].commitment1 == commitment2 ? msg.sender : flips.flips[key].player1; // if the same commitment, player2 wins !!!
        flips.flips[key].looser = flips.flips[key].commitment1 == commitment2 ? flips.flips[key].player1 : msg.sender; // if not the same commitment, player1 wins !!!

        flips.flips[key].finished = true;
        flips.flips[key].balance += amount;
        flips.flips[key].dateFinished = block.timestamp;
        delete flips.nonces[key];

        return flips.flips[key]; 
    }
    
    /**
     * @dev Remove a flip
     */
    function remove(Flips storage flips, address key) external returns (bool removed) {
        if( !flips.inserted[key] )
            return false;

        delete flips.flips[key];
        delete flips.nonces[key];
        delete flips.inserted[key];
        uint index = flips.indexOf[key];
        uint lastIndex = flips.keys.length - 1;
        address lastKey = flips.keys[lastIndex];

        flips.indexOf[lastKey] = index;
        delete flips.indexOf[key];

        flips.keys[index] = lastKey;
        flips.keys.pop();
        return true;
    }

    /**
     * @dev Verify if a flip exists
     */
    function contains(Flips storage flips, address key) external view returns(bool isFlip){
        return flips.inserted[key];
    }

    /**
     * @dev Get flips size
     */
    function size(Flips storage flips) external view returns (uint length) {
        return flips.keys.length;
    } 
    
}
