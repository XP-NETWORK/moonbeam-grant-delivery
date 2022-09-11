import {
    ChainFactoryConfigs, 
    ChainFactory,
    AppConfigs,
    Chain,
    MintArgs,
    Web3Helper
} from "xp.network";
import { config } from 'dotenv';
config();

// EVM chains compatible wallet:
import { Wallet } from "ethers";

const {
    SK, // Owner's private key
    UMT // UserNftMinter smart contract address
} = process.env;

/**
 * A function initializing & awaiting for the objects to initialize
 * @returns factory, moonbeam, signer
 */
const initialize = async () => {

    // Accommonized factory for interacting with various chain protocols
    const factory: ChainFactory = ChainFactory(AppConfigs.TestNet(), await ChainFactoryConfigs.TestNet());
    
    // Handler for the chain of departure (Origin)
    const moonbeam: Web3Helper = await factory.inner(Chain.MOONBEAM);

    // The signer object (like a wallet with PK, SK key-pair)
    const signer:any = new Wallet(SK!, moonbeam.getProvider());

    return {
        factory,
        moonbeam,
        signer
    }
}

export {
    ChainFactoryConfigs, 
    ChainFactory,
    AppConfigs,
    Chain,
    MintArgs,
    Wallet,
    SK,
    UMT,
    initialize
}