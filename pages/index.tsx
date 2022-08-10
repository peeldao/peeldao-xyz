import { JsonRpcProvider } from "@ethersproject/providers";
import { NextPage } from "next";
import { Card } from "../components/Card";
import { ConnectWalletButton } from "../components/ConnectWalletButton";
import JuiceProvider from "../providers/JuiceProvider";
import NetworkProvider from "../providers/NetworkProvider";

const RPC_HOST =
  "https://rinkeby.infura.io/v3/c2838024e339438fbe8a31d6754efe8a";

const Home: NextPage = () => {
  const provider = new JsonRpcProvider(RPC_HOST);

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
