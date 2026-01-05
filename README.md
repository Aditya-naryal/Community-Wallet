# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```
🏦 Community Wallet (DAO-style Shared Wallet)

📌 Overview

The Community Wallet is a DAO-style shared wallet smart contract built on Ethereum that enables a group of participants to collectively manage funds through a multi-approval spending mechanism.

Instead of a single owner controlling funds, spending requests must be approved by a predefined threshold of members before execution, ensuring transparency and shared governance.

This project is being developed step-by-step with a focus on clean smart contract design, modern Hardhat tooling, and future-ready frontend integration.

✨ Key Features (Implemented)

🔐 Shared ETH Pool
Multiple users can deposit ETH into a common wallet.

🗳️ Multi-Approval Spending Requests
Spending requests require approval from a minimum number of participants before execution.

⚙️ Configurable Approval Threshold
The required number of approvals is set at deployment time via the constructor.

📢 Event-Driven Architecture
Events are emitted for deposits, request creation, approvals, and execution to support off-chain indexing and frontend integration.

🛡️ Security-Conscious Design

Prevents double approvals

Reentrancy-safe execution flow

Relies on native EVM balance tracking (address(this).balance)

🧱 Smart Contract Architecture
Core Components

CommunityWallet.sol

Handles ETH deposits

Manages spending requests

Tracks approvals

Executes transfers once approval threshold is met

Key Concepts Used

Solidity mappings & structs

Modifiers for access control

Constructor-based configuration

Event emission for state changes

🛠️ Tech Stack
Blockchain & Smart Contracts

Solidity (0.8.20)

Hardhat (v2)

Hardhat Ignition (modern deployment workflow)

Tooling

Node.js (LTS)

npm

Git & GitHub

🚀 Deployment Status
✅ Local Development

Contract successfully compiled using Hardhat

Local blockchain via hardhat node

Deployment configured using Hardhat Ignition modules

🚧 Testnet

Sepolia deployment planned in upcoming phase

📂 Project Structure

community-wallet/
 ├─ contracts/
 │   └─ CommunityWallet.sol
 ├─ ignition/
 │   └─ modules/
 │       └─ CommunityWallet.js
 ├─ test/
 ├─ hardhat.config.js
 ├─ package.json
 └─ README.md

🧪 How It Works (High Level)

Users deposit ETH into the Community Wallet

Owner creates a spending request

Depositors approve the request

Once approval threshold is met, funds are transferred to the recipient

All major actions emit events that can be consumed by off-chain services or a frontend application.

🔮 Upcoming Work (Planned)
Frontend (Next Phase)

React + Vite frontend

MetaMask wallet connection

ETH deposit UI

Spending request creation & approval UI

Real-time UI updates using contract events (ethers.js)

Blockchain Enhancements

Sepolia testnet deployment

Automated tests (Hardhat + Mocha/Chai)

Optional role-based execution permissions

Gas optimization & contract refinements

Documentation

Architecture diagrams

Frontend screenshots

Deployment guides

🎯 Learning Objectives

This project is designed to strengthen understanding of:

DAO-style smart contract patterns

Multi-signature & approval-based fund management

Event-driven smart contract design

Modern Hardhat workflows (Ignition)

Full-stack Web3 DApp architecture (in progress)

📌 Status

🟢 Active Development
This project is under continuous development with incremental improvements and feature additions.
