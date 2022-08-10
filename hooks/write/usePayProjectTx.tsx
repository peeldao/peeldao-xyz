import { useContext } from "react";
import { ContractTransaction } from "@ethersproject/contracts";
import { BigNumber } from "@ethersproject/bignumber";
import { getTerminalV1_1Contract } from "juice-sdk-v1";
import { ContractReadHookResponse, ProjectId } from "../../types";

import useHookState from "../useHookState";
import { NetworkContext } from "../../contexts/NetworkProvider";

type DataType = ContractTransaction;

interface Args {
  projectId: ProjectId;
  valueWad: BigNumber;
}

export default function usePayProjectTx(): (
  args: Args
) => ContractReadHookResponse<DataType> {
  const { signingProvider, connectedWalletAddress } =
    useContext(NetworkContext);
  const {
    loading,
    data,
    error,
    actions: { setError, setData, setLoading },
  } = useHookState<DataType>();

  return ({ projectId, valueWad }: Args) => {
    console.log(connectedWalletAddress);
    if (!signingProvider || !connectedWalletAddress)
      return { loading, data, error: new Error("No connected wallet.") };

    setLoading(true);
    console.log(connectedWalletAddress);

    getTerminalV1_1Contract(signingProvider.getSigner())
      .pay(projectId, connectedWalletAddress, "", false, { value: valueWad })
      .then((res) => {
        setData(res);
      })
      .catch((e) => {
        console.error(e);

        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });

    return { loading, data, error };
  };
}
