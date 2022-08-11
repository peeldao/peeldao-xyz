import { JsonRpcProvider } from "@ethersproject/providers";
import { NextPage } from "next";
import Head from "next/head";
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
        <Head>
          <title>Peel</title>
          <meta
            name="description"
            content="Artisans of the outer layer. Builders in Web3."
            key="description"
          />
        </Head>
        <main className="h-screen bg-gray-900 px-3">
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
