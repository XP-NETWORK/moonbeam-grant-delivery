import {initialize} from './initialize';
import {listNfts} from './list';

export const approve = async () => {

    const {
        moonbeam,
        signer
    } = await initialize();

    const NFTs = await listNfts();
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