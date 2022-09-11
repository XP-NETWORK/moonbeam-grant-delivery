import {
    initialize
} from './initialize';

/**
 * Listing Moonbase NFTs Example
 * @returns an array of NFT JSON objects
 */
export const listNfts = async () => {

    console.log(`Listing NFTs for Moonbeam:`);

    const {
        factory,
        moonbeam,
        signer
    } = await initialize();

    const NFTs = await factory.nftList(
        moonbeam,
        signer.address
    );
    console.log(`On Moonbeam Found NFTs:`, NFTs.length);
    return NFTs;
}

(async () => {
    const NFTs = await listNfts();
    console.log(NFTs);
    
    process.exit(0);
})().catch(e => {
    console.error(e);
    process.exit(1);
});