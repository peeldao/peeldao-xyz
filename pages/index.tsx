import { JsonRpcProvider } from "@ethersproject/providers";
import { NextPage } from "next";
import { useEffect } from "react";
import { Card } from "../components/Card";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { WarningBanner } from "../components/WarningBanner";
import { rpcUrl } from "../constants/network";
import JuiceProvider from "../providers/JuiceProvider";
import NetworkProvider from "../providers/NetworkProvider";

const Home: NextPage = () => {
  const provider = new JsonRpcProvider(rpcUrl);

  return (
    <NetworkProvider>
      <JuiceProvider provider={provider}>
        <main className="bg-slate-50 h-screen bg-gray-900 px-3">
          <header className="md:px-10 mod py-5 flex justify-end">
            <ConnectWalletButton />
          </header>

          <WarningBanner />
          <Card />
        </main>
      </JuiceProvider>
    </NetworkProvider>
  );
};

export default Home;
