import {
    ChainFactoryConfigs, 
    ChainFactory,
    AppConfigs,
    Chain,
    MintArgs,
    Wallet,
    SK,
    UMT,
    initialize
} from './initialize';

/**
 * Minting NFTs example on Moonbase Alpha
 */
export const mintOnMoonbeam = async  (url:string) => {

    const uri: string = url; 

    const {
        factory,
        moonbeam,
        signer
    } = await initialize();

    const nftResult = await factory.mint(
        // On which chain to mint
        moonbeam,
        // The signer object
        signer,
        {
            // The NFT contract to mint in
            contract: UMT!,
            // The link to the metadata
            uri: uri
        } as MintArgs
    );
    
    console.log(`Minted ${uri}`, nftResult);
}

(async () => {
    await mintOnMoonbeam("https://meta.polkamon.com/meta?id=10001419693");
    process.exit(0)
})().catch(e => {
    console.error(e);
    process.exit(1);
});