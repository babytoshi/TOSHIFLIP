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
 * @dev Is the parent of all games.
 * 
 * This contract is Excluded from Babytoshi Fees !!!
 * Dont send funds to this contract !!!
**/

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Players.sol";

/*
 * @dev Is the parent of all games.
 * Required to manage players
 * This contract must be Excluded from Babytoshi Fees !!!
 */
abstract contract ToshiGame is Ownable {
    using SafeMath for uint256;
    using PlayersMapping for PlayersMapping.Players;

    PlayersMapping.Players internal players;

    receive() external virtual payable {}
    fallback() external virtual payable {}

    address internal here = address(this);
    address public constant BABYTOSHI_ADDRESS = address(0xD2309BbD6Ec83D8B3341cE5b061ce378F45c2621);
    address public constant MARKETING_WALLET = address(0x61472CEd7D1Dea15d3Ef3e30158006a4152E48b5);
    address internal constant PANCAKESWAP_ROUTER_ADDRESS = address(0x10ED43C718714eb63d5aA57B78B54704E256024E);
    IUniswapV2Router02 internal constant pancakeswapV2Router = IUniswapV2Router02(PANCAKESWAP_ROUTER_ADDRESS);

    uint internal nbRandomAddress = 0;
    uint internal nbNonce = 0;
    uint256 public MARKETING_FEE = 3; //3% in percentage -> 3/100

    event UpdateExpirationParty (address indexed here, uint256 newExpiration);

    event SwapTokenForETH(address indexed currency, address indexed sender, address receiver, uint256 tokenAmount);
    event AddLiquidity(address indexed babytoshiAddress, uint256 tokenAmount, uint256 bnbAmount);
    event Burn(address indexed sender, address indexed receiver, uint256 burnAmount);
    event TransferTo(address indexed currency, address indexed sender, address indexed receiver, uint256 amount);
    event TransferFrom(address indexed currency, address indexed sender, address indexed receiver, uint256 amount);

    /**
     * @dev Throws if called by any account from the team.
     */
    modifier notTeam() {
        require(_msgSender() != owner(), "Ownable: caller is the owner");
        require(_msgSender() != MARKETING_WALLET, "Ownable: caller is the owner");
        _;
    }
    
    /**
     * @dev Create random address for a party
     */
    function createGameAddress() internal view returns (address randomPlayer) {
        return address(uint160(uint(keccak256(abi.encodePacked(nbRandomAddress, _msgSender(), here, block.timestamp, block.difficulty, blockhash(block.number))))));
    }

    /**
     * @dev Create nonce for a party
     */
    function createNonce(address keyGame) internal returns (address nonce) {
        nbNonce++;
        return address(uint160(uint(keccak256(abi.encodePacked(keyGame, _msgSender(), here, block.timestamp, block.difficulty, blockhash(block.number))))));
    }

    /**
     * @dev Create commitment for a player
     */
    function createCommitment(address nonce, bool choice) internal pure returns (address commitment) {
        return address(uint160(uint(keccak256(abi.encodePacked(nonce, choice)))));
    }

    /**
     * @dev Create commitment for a player
     */
    function createCommitment(address nonce, uint256 choice) internal pure returns (address commitment) {
        return address(uint160(uint(keccak256(abi.encodePacked(nonce, choice)))));
    }

    /**
     * @dev Swap any tokens for bnb
     * Can only be called by derived contracts
     */
    function swapTokenForETH(address currency, uint256 tokenAmount, address receiver) internal returns (bool swapped){
        // generate the pancakeswap pair path of token -> weth
        address[] memory path = new address[](2);
        path[0] = currency;
        path[1] = pancakeswapV2Router.WETH();

        bool approved = ERC20(currency).approve(PANCAKESWAP_ROUTER_ADDRESS, tokenAmount);
        require(approved, 'the token was not approved for swap to bnb');
        
        // make the swap
        pancakeswapV2Router.swapExactTokensForETHSupportingFeeOnTransferTokens(
            tokenAmount,
            0, // accept any amount of ETH
            path,
            receiver,
            block.timestamp
        );
        emit SwapTokenForETH(currency, _msgSender(), receiver, tokenAmount);
        return true;
    }
    
    /**
     * @dev Add babytoshi liquidity
     * Can only be called by derived contracts
     */
    function addLiquidity(uint256 babytoshiAmount) internal returns (bool liquidityAdded){
        uint256 half = babytoshiAmount.div(2);
        uint256 otherHalf = babytoshiAmount.sub(half);
        
        uint256 initialBalance = here.balance;
        bool swap = swapTokenForETH(BABYTOSHI_ADDRESS, half, here); // <- this breaks the ETH -> HATE swap when swap+liquify is triggered
        require(swap, "non swap liquidity");
        uint256 newBalance = here.balance.sub(initialBalance);
        require(newBalance > 0, "no balance");

        bool approved = ERC20(BABYTOSHI_ADDRESS).approve(PANCAKESWAP_ROUTER_ADDRESS, babytoshiAmount);
        require(approved, "the token was not approved for swap to bnb");
        
        // add the liquidity
        pancakeswapV2Router.addLiquidityETH{value: newBalance}(
            BABYTOSHI_ADDRESS,
            otherHalf,
            0, // slippage is unavoidable
            0, // slippage is unavoidable
            address(0),
            block.timestamp
        );
        emit AddLiquidity(BABYTOSHI_ADDRESS, otherHalf, newBalance);
        return true;
    }
        
    /**
     * @dev Transfer currency to an account
     * Can only be called by derived contracts
     */
    function transferTo(address currency, address key, uint256 amount) internal returns (bool transferred){
        //bool approved = ERC20(BABYTOSHI_ADDRESS).approve(key, amount);
        (bool approved,) = currency.call(abi.encodeWithSignature("approve(address,uint256)", key, amount));
        require(approved, "the token was not approved to transfer");
        (bool _transferred,) = currency.call(abi.encodeWithSignature("transfer(address,uint256)", key, amount));
        emit TransferTo(currency, here, key, amount);
        return _transferred;
    }
    
    /**
     * @dev Transfer currency from an account
     * Can only be called by derived contracts
     */
    function transferFrom(address currency, address player, uint256 amount) internal returns (bool transferred){
        (bool _transferred,) = currency.call(abi.encodeWithSignature("transferFrom(address,address,uint256)", player, here, amount));
        emit TransferFrom(currency, player, here, amount);
        return _transferred;
    }
    
    function getPlayerStats(address player) public view returns(address key, uint256 wins, uint256 looses){
        return players.getPlayer(player);
    }

    function isPlayer(address key) internal view returns(bool contains){
        return players.contains(key);
    }
    function sizePlayers() public view returns (uint size) {
        return players.size();
    } 
}