import { useContext, useState } from "react";
import { parseEther } from "@ethersproject/units";
import { NetworkContext } from "../contexts/NetworkProvider";
import usePayProjectTx from "../hooks/write/usePayProjectTx";
import { AmountButton } from "./AmountButton";
import { Button } from "./Button";
import { Input } from "./Input";

const defaultAmounts = [0.1, 0.69, 1];

export function PayForm(props: React.HTMLProps<HTMLFormElement>) {
  const [amount, setAmount] = useState<number>(0);
  const { signingProvider } = useContext(NetworkContext);

  const payProjectTx = usePayProjectTx();

  const onSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();

    await payProjectTx({
      projectId: 329,
      valueWad: parseEther(amount.toString()),
    });
  };

  return (
    <form {...props} onSubmit={onSubmit}>
      <div className="mb-5">
        <div className="mb-1">
          {defaultAmounts.map((amount) => (
            <AmountButton
              amount={amount}
              onClick={() => setAmount(amount)}
              key={amount}
            />
          ))}
        </div>
        <div>
          <Input
            value={amount}
            onChange={(e) =>
              setAmount(parseInt((e.target as HTMLInputElement).value || "0"))
            }
          />
        </div>
        <span className="text-xs font-light text-gray-500">
          Receive 1,000,000 tokens
        </span>
      </div>

      <Button />
    </form>
  );
}
