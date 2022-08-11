import { useContext } from "react";
import { NetworkContext } from "../contexts/NetworkProvider";
import { Button } from "./Button";
import { ConnectWalletButton } from "./ConnectWalletButton";

export function TransactionButton(
  props: Omit<React.HTMLProps<HTMLButtonElement>, "type">
) {
  const { signingProvider, connectedWalletAddress } =
    useContext(NetworkContext);

  if (!connectedWalletAddress) {
    return <ConnectWalletButton connectText="Connect Wallet" />;
  }

  return <Button {...props} />;
}
