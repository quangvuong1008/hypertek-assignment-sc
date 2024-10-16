// SPDX-License-Identifier: MIT
// An example of a consumer contract that relies on a subscription for funding.
pragma solidity 0.8.13;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


/**
 * THIS IS AN EXAMPLE CONTRACT THAT USES HARDCODED VALUES FOR CLARITY.
 * THIS IS AN EXAMPLE CONTRACT THAT USES UN-AUDITED CODE.
 * DO NOT USE THIS CODE IN PRODUCTION.
 */

/**
 * @title The RandomNumberConsumerV2_5 contract
 * @notice A contract that gets random values from Chainlink VRF V2_5
 */
contract USDC is ERC20 {
    
    address public minter;
    /**
     * @notice Constructor
     *
     * @param _minter - the minter of the contract
     */
    constructor(
        address _minter
    ) ERC20("USD Coin", "USDC") {
        minter = _minter;
    }

    function decimals() public pure override returns (uint8) {
        return 6;
    }

    function mint(address to, uint256 amount) public {
        require(msg.sender == minter, "Only minter can mint");
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
}
