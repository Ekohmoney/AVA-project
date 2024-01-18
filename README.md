# Hashes Contract

This Solidity smart contract, named Hashes, allows you to set and view a hashed value based on a provided number and string input.

# Contract Functions

setKeyHash(uint \_num1, string memory \_input)
This function sets the keyHash by hashing the provided number (\_num1) and string (\_input) using the keccak256 algorithm.

# Parameters:

\_num1: An unsigned integer representing the numeric input.
\_input: A string representing the textual input.
viewHash()
This function allows you to view the currently set keyHash.

Returns:
bytes32: The hashed value.
Usage
Deploy the contract on a compatible Ethereum Virtual Machine (EVM).
Call the setKeyHash function with the desired numeric and string inputs to set the hash.
Use the viewHash function to retrieve the current hashed value.
