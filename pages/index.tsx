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

  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Whenever the user explicitly chooses light mode
    localStorage.theme = "light";

    // Whenever the user explicitly chooses dark mode
    localStorage.theme = "dark";

    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  }, []);

  return (
    <NetworkProvider>
      <JuiceProvider provider={provider}>
        <main className="bg-slate-50 h-screen dark:bg-gray-900">
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
