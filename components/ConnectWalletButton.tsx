import React, { useContext, useEffect } from "react";
import { init, useConnectWallet } from "@web3-onboard/react";
import injectedModule from "@web3-onboard/injected-wallets";
import { ethers } from "ethers";
import { NetworkContext } from "../contexts/NetworkProvider";
import { rpcUrl } from "../constants/network";

const injected = injectedModule();

// initialize Onboard
init({
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum",
      rpcUrl,
    },
  ],
});

export function ConnectWalletButton() {
  const [{ wallet, connecting }, connect, disconnect] = useConnectWallet();
  const { setSigningProvider } = useContext(NetworkContext);

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
        className="flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-700"
      >
        {connecting ? "Connecting" : wallet ? "Disconnect" : "Connect"}
      </button>
    </div>
  );
}
