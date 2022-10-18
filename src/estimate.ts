import { exit } from 'process';
import { NftInfo, Web3Helper, Chain } from 'xp.network';
import {
    initialize
} from './initialize';
import {listNfts} from './list'

const estimate = async (toChain:Web3Helper, selected:NftInfo<any>, to:string) => {

    const {
        moonbeam,
        factory
    } = await initialize();

    const result = await factory.estimateFees(
        moonbeam,
        toChain,
        selected,
        to
    );

    return result;

}

(async () => {

    const {factory, signer} = await initialize();

    // Replace with another chain to estimate the fee there
    const bsc = await factory.inner(Chain.BSC);

    // Send to yourself of provide another valid address
    const owner:string = signer.address;
    console.log("Receiver:", owner);
    
    //Select an NFT by its index:
    const selected = (await listNfts(owner))[0];
    console.log("Selected NFT:", selected);
    

    const result = await estimate(
        bsc,
        selected,
        owner
    )
    console.log("Estimation", result.toString());
    

    exit(0)
})().catch(e => {
    console.error(e);
    exit(1);
})