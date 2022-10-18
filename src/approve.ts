import {initialize} from './initialize';
import {listNfts} from './list';

/**
 * Example of calling Approve on Moonbase Alpha
 */
export const approve = async () => {

    const {
        moonbeam,
        signer
    } = await initialize();

    const owner:string = signer.address;
    const NFTs = await listNfts(owner);
    const selected = NFTs[NFTs.length-1];
    console.log('Selected:', selected);
    

    console.log(`Approving NFTs for Moonbeam:`);
    const approved = await moonbeam.approveForMinter(selected, signer);
    console.log(`Approved: ${approved}`);
}

(async () => {
    await approve();
    
    process.exit(0);
})().catch(e => {
    console.error(e);
    process.exit(1);
});