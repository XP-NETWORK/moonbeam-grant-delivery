# Moonbeam Grant Delivery Report

## `Milestone 1` — Smart Contract Development

| Specification |
|-|
| 0. Researched about Moonbeam [NFT token standards](https://docs.moonbeam.network/builders/build/eth-api/dev-env/openzeppelin/contracts/#deploying-an-erc-721-token) and other factors & protocols that distinguish it from other chains<br/>We have developed smart contracts that can:<br/>1. Support Singe & Batch transfers - ([ERC-721/ERC-1155](https://github.com/XP-NETWORK/XP.network-HECO-Migration/blob/f474704150da557f931e011026d0c033b391bd7a/dist/Minter.d.ts))<br/>2. [Freeze](https://github.com/XP-NETWORK/XP.network-HECO-Migration/search?q=freeze)/[Unfreeze](https://github.com/XP-NETWORK/XP.network-HECO-Migration/search?q=unfreeze) Native NFTs<br/>3. [Mint](https://github.com/XP-NETWORK/XP.network-HECO-Migration/search?q=mint)/[Burn](https://github.com/XP-NETWORK/XP.network-HECO-Migration/search?q=burn) wrapped NFTs<br/>4. [Withdraw](https://github.com/XP-NETWORK/XP.network-HECO-Migration/search?q=withdraw) the TX fees on the target chain in native tokens<br>5. Trust the [multisig](https://github.com/XP-NETWORK/frost-secp256k1) of the bridge oracle validators<br/>6. [Whitelist](https://github.com/XP-NETWORK/XP.network-HECO-Migration/search?q=whitelist) NFT smart contracts<br/>7. [Pause](https://github.com/XP-NETWORK/XP.network-HECO-Migration/search?q=pause)/[Unpause](https://github.com/XP-NETWORK/XP.network-HECO-Migration/search?q=unpause) for maintenance or if compromised<br/>10. [Add / Remove](https://github.com/XP-NETWORK/XP.network-HECO-Migration/search?q=validate) validator<br/>11. Set consensus [threshold](https://github.com/XP-NETWORK/XP.network-HECO-Migration/search?q=threshold)|


## `Milestone 2` — Testing & Documenting

| Length | Deliverable | Specification |
|-|-|-|
| 1 week | Tests & Documentation | 1. We have provided the inline documentation of the code and a [basic tutorial](./ui_tutorial.md) that can interact with the deployed smart contracts and backend service.<br/>2. The code has proper unit-test coverage 85% to ensure functionality and robustness. In the [JavaScript library guide](./tutorial.md), we described how to run these tests preparing for auditing<br/>3. [Deploying and testing](./deployment_n_testing.md) the contracts in the testnet environment|


# TODO

## `Milestone 3` — Integrating into the Live Bridge
| Length | Deliverable | Specification |
|-|-|-|
| 2 weeks | Validators, Backend, Frontend | 1. Developed [validation logic](./proof.md/#31-validation-logic) relevant for the Moonbeam part of the bridge<br/>2. Added Moonbeam to the Bridge [NFT-Indexer](./proof.md/#32-nft-indexing)<br/>3. Integrated [TX fee estimation](./proof.md/#33-tx-fee-estimation)<br/>4. Plugged Moonbeam in the [heartbeat](./proof.md/#34-heartbeat)<br/>5. Integrated with a Moonbeam [RPC nodes](./proof.md/#35-rpc-nodes)<br/>6. Integrated Moonbeam in the [bridge UI](./proof.md/#36-bridge-ui)<br/>7. Deployed [Mainnet smart contracts](./proof.md/#37-mainnet-contracts)<br/>8. Added Moonbeam to the bridge [JS library](./proof.md/#38-js-library-integration)<br/>9. Added Moonbeam to the bridge [widget](./proof.md/#39-widget-integration)|
|