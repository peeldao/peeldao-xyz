import { useState } from "react";
import { parseEther } from "@ethersproject/units";
import usePayProjectTx from "../hooks/write/usePayProjectTx";
import { AmountButton } from "./AmountButton";
import { Button } from "./Button";
import { Input } from "./Input";
import { PEEL_PROJECT_ID } from "../constants/juicebox";
import { TransactionButton } from "./TransactionButton";

const defaultAmounts = [0.01, 0.69, 1];

export function PayForm() {
  const [amount, setAmount] = useState<string>("0");
  const [hasClicked, setHasClicked] = useState<boolean>(false);

  const payProjectTx = usePayProjectTx();

  const onSubmit: React.FormEventHandler = async (e) => {
    e.preventDefault();

    if (!hasClicked) setHasClicked(true);

    await payProjectTx({
      projectId: PEEL_PROJECT_ID,
      valueWad: parseEther(amount.toString()),
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-5">
        <div className="mb-1">
          {defaultAmounts.map((amount) => (
            <AmountButton
              amount={amount}
              onClick={() => setAmount(amount.toString())}
              key={amount}
            />
          ))}
        </div>
        <div>
          <Input
            value={amount}
            onChange={(e) => {
              const targetValue = (e.target as HTMLInputElement).value;
              setAmount(targetValue);
            }}
            aria-invalid={amount === "0" && hasClicked}
          />
        </div>

        {/* <span className="text-xs font-light text-gray-500">
          Receive 1,000,000 tokens
        </span> */}
      </div>

      <TransactionButton>Fund us</TransactionButton>
    </form>
  );
}
