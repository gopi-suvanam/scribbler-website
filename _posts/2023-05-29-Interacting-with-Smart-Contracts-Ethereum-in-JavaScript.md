---
title: Interacting with Smart Contracts of Ethereum in JavaScript
layout: post
description: Web3.js is a library that can be used to interact with Smart Contracts on Ethereum using JavaScript in the Browser. This helps build DApps (Decentralized Applications) on top of Ethereum.
---

### Smart Contracts and Ethereum
[Smart contracts are code pieces that auto-execute on a Blockchain like Ethereum](/2023/05/29/Developing-Deploying-Smart-Contract-Ethereum.html). Smart contracts are important for several reasons:

Automation and Efficiency: Smart contracts enable automation of contract execution, removing the need for intermediaries and reducing manual processes. This automation improves efficiency, eliminates human error, and speeds up transaction settlement.

Transparency: Smart contracts are executed on a blockchain, which is a distributed and transparent network. All contract transactions and state changes are recorded on the blockchain, providing a high level of transparency and accountability.

Security and Trust: Smart contracts are built on blockchain technology, which offers strong security features such as cryptographic encryption and decentralization. Once deployed, smart contracts are immutable and tamper-proof, reducing the risk of fraud or manipulation.

Cost Savings: By eliminating intermediaries and reducing manual processes, smart contracts can lead to significant cost savings. They remove the need for third-party intermediaries, reducing fees and streamlining operations.

Disintermediation: Smart contracts enable peer-to-peer transactions without the need for intermediaries such as banks, brokers, or lawyers. This disintermediation empowers individuals and businesses to interact directly, reducing dependency on centralized authorities.

Global Accessibility: Smart contracts are accessible to anyone with an internet connection. They have the potential to extend financial and contractual services to unbanked populations, providing opportunities for financial inclusion.

Programmability: Smart contracts are programmable, allowing complex logic and conditions to be embedded within the contract. This flexibility opens up new possibilities for innovative applications and use cases, such as decentralized finance (DeFi), supply chain management, and voting systems.

Auditability: As smart contracts are recorded on the blockchain, their execution and outcomes can be audited and verified by anyone. This auditability enhances trust and reduces the need for costly and time-consuming manual audits.

Interoperability: Smart contracts can interact with other smart contracts, allowing for interoperability between different platforms and systems. This interoperability enables seamless integration and collaboration between various blockchain-based applications.

### Using Web3.js for Interacting with Smart Contracts in JavaScript
We have looked at how to connect to MetaMask using JavaScript in the article: [Integrating Blockchain Functionality in Web Application using MetaMask](/2023/05/10/Integrating-Blockchain-in-Web-Application-MetaMask.html). To interact with smart contracts using JavaScript in a browser environment, you can utilize the web3.js library along with a provider like MetaMask. Here's an updated version of the steps involved:

1. Include web3.js in your HTML file. Add the following script tag to include the web3.js library from a CDN:

        <script src="https://cdn.jsdelivr.net/npm/web3@1.5.2/dist/web3.min.js"></script>

2. Connect to an Ethereum network. Check if the browser has a compatible web3 provider (e.g., MetaMask) available:

        if (typeof web3 !== 'undefined') {
          // Use the web3 provider from the browser
          web3 = new Web3(web3.currentProvider);
        } else {
          // Provide a fallback for users without MetaMask or other compatible providers
          web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID'));
        }

3. Load the Smart Contract ABI and Address. Retrieve the ABI (Application Binary Interface) and address of the deployed smart contract, similar to the previous example.
4. Create a Contract Instance. Use the web3 object to create an instance of the smart contract using the ABI and address:

	    const contract = new web3.eth.Contract(ABI, contractAddress);

5. Interact with Smart Contract Methods. You can call smart contract methods using the contract instance created in the previous step. Methods that modify the contract state (such as updating variables) require a transaction, while methods that only read the contract state can be called as a simple function call. Make sure to replace 'YOUR_ADDRESS' with the Ethereum address you are using to send the transaction.

        // Calling a read-only method
        contract.methods.getValue().call()
          .then((result) => {
            console.log('Contract value:', result);
          })
          .catch((error) => {
            console.error('Error:', error);
          });

        // Calling a method that modifies the contract state
        contract.methods.updateValue(42).send({ from: 'YOUR_ADDRESS' })
          .on('transactionHash', (hash) => {
            console.log('Transaction hash:', hash);
          })
          .on('confirmation', (confirmationNumber, receipt) => {
            console.log('Confirmation number:', confirmationNumber);
            console.log('Receipt:', receipt);
          })
          .on('error', (error) => {
            console.error('Error:', error);
          });


6. Handle Events. You can set up event listeners to capture events emitted by the smart contract. Note that event listening requires additional setup and permission from the user through MetaMask or another compatible provider.

        contract.events.ValueUpdated()
          .on('data', (event) => {
            console.log('Value updated:', event.returnValues.newValue);
          })
          .on('error', (error) => {
            console.error('Error:', error);
          });


Remember to handle errors appropriately and consider the asynchronous nature of the JavaScript code when interacting with smart contracts in a browser-based environment. Additionally, ensure that MetaMask or a compatible provider is installed and properly configured in the user's browser to interact with the Ethereum network.




