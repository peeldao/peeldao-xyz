import { JsonRpcProvider } from "@ethersproject/providers";
import { NextPage } from "next";
import { Card } from "../components/Card";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import { rpcUrl } from "../constants/network";
import JuiceProvider from "../providers/JuiceProvider";
import NetworkProvider from "../providers/NetworkProvider";

const Home: NextPage = () => {
  const provider = new JsonRpcProvider(rpcUrl);

  return (
    <NetworkProvider>
      <JuiceProvider provider={provider}>
        <main>
          <header>
            <ConnectWalletButton />
          </header>
          <Card />
        </main>
      </JuiceProvider>
    </NetworkProvider>
  );
};

export default Home;
