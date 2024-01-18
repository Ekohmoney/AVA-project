// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract Hashes{

    bytes32 keyHash;

    function setKeyHash(uint _num1, string memory _input) public {
        keyHash = keccak256(abi.encode(_num1, _input));
    }

    function viewHash() public view returns(bytes32){
        return keyHash;
    }

}