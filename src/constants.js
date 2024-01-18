const ContractAddress = "0x7F5A5bDA2ABe88688356aAf4D7f3CFF04c879f1A";

const ContractAbi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_num1",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_input",
        type: "string",
      },
    ],
    name: "setKeyHash",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "viewHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export { ContractAddress, ContractAbi };
