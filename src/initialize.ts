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

let factory:ChainFactory;
let moonbeam: Web3Helper;
let signer:any;

const initialize = async () => {
    factory = ChainFactory(AppConfigs.TestNet(), await ChainFactoryConfigs.TestNet());
    moonbeam = await factory.inner(Chain.MOONBEAM);
    signer = new Wallet(SK!, moonbeam.getProvider());

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