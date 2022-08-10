import React, { useContext, useEffect } from "react";
import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import { ethers } from "ethers";
import NetworkProvider from "../providers/NetworkProvider";
import { NetworkContext } from "../contexts/NetworkProvider";

const injected = injectedModule();

const infuraKey = "c2838024e339438fbe8a31d6754efe8a";
const rpcUrl = `https://rinkeby.infura.io/v3/${infuraKey}`;

// initialize Onboard
init({
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl,
    },
    {
      id: "0x4",
      token: "ETH",
      label: "Rinkeby Testnet",
      rpcUrl,
    },
  ],
});

export function ConnectWalletButton() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const { setSigningProvider } = useContext(NetworkContext);

  // create an ethers provider

  useEffect(() => {
    if (wallet) {
      const ethersProvider = new ethers.providers.Web3Provider(
        wallet.provider,
        "any"
      );
      if (!ethersProvider || !setSigningProvider) return;

      setSigningProvider(ethersProvider);
    }
  }, [wallet, setSigningProvider]);

  return (
    <div>
      <button
        disabled={connecting}
        onClick={() => (wallet ? disconnect(wallet) : connect())}
      >
        {connecting ? "connecting" : wallet ? "disconnect" : "connect"}
      </button>
    </div>
  );
}
