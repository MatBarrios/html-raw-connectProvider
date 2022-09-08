const { ethers } = require("ethers");


async function connectWallet() { 
    if(typeof window.ethereum !== "undefined") {
        await ethereum.request({method: "eth_requestAccounts"});
    }
}

async function send() {
    //address 
    const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
    //abi
    const contractABI = [
        {
          inputs: [
            {
              internalType: "string",
              name: "_name",
              type: "string"
            },
            {
              internalType: "uint256",
              name: "_favoriteNumber",
              type: "uint256"
            }
          ],
          name: "addPerson",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "",
              type: "string"
            }
          ],
          name: "nameToFavoriteNumber",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          name: "people",
          outputs: [
            {
              internalType: "uint256",
              name: "favoriteNumber",
              type: "uint256"
            },
            {
              internalType: "string",
              name: "name",
              type: "string"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [],
          name: "retrieve",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256"
            }
          ],
          stateMutability: "view",
          type: "function"
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_favoriteNumber",
              type: "uint256"
            }
          ],
          name: "store",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function"
        },
      ];

      //aqui ponemos el provider 
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // luego el signer. Lo pedimos a metamask
      const signer = provider.getSigner(); //esto me trae la wallet conectada 

      const contract = new ethers.Contract(contractAddress, contractABI, signer)

      // llamamos a la funcion "store" del smartcontract, como parametro le paso un numero
      await contract.store(25)
}


module.exports = {
    connectWallet,
    send
};