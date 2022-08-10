import { JsonRpcProvider } from "@ethersproject/providers";
import { NextPage } from "next";
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
        <main>
          <header className="px-10 py-5 flex justify-end">
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
