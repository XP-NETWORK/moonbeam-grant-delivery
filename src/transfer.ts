import {
    Chain,
    initialize
} from './initialize';
import {listNfts} from './list';

/**
 * Transferring NFTs from Moonbeam Alpha Example
 */
const transfer = async () => {

    const {
        factory,
        moonbeam,
        signer
    } = await initialize();

    // Handler for the chain of destination
    const bsc = await factory.inner(Chain.BSC);

    const NFTs = await listNfts();

    // Selecting an NFT to transfer (the last on the list)
    const selected = NFTs[NFTs.length-1];
    console.log('Selected:', selected);

    const result = await factory.transferNft(
        moonbeam,       // Origin
        bsc,            // Destination
        selected,       // Which NFT
        signer,         // Wallet
        signer.address, // Recipient (e.g. self)
        undefined,      // transaction fee | automatic
        undefined,      // target smart contract address or arrives to the default SC
        undefined,      // Gas Limit | automatic
        undefined       // Extra fee | automatic
    );
    console.log("Transfer result:", result);

}

(async () => {
    await transfer();
    process.exit(0)
})().catch(e => {
    console.error(e);
    process.exit(1);
});