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

const initialize = async () => {
    const factory: ChainFactory = ChainFactory(AppConfigs.TestNet(), await ChainFactoryConfigs.TestNet());
    const moonbeam: Web3Helper = await factory.inner(Chain.MOONBEAM);
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