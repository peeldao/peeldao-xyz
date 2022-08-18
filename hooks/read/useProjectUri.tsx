import { useContext, useEffect } from "react";
import { getProjects as getProjectsContract } from "juice-sdk-v1";
import { ContractReadHookResponse, ProjectId } from "../../types";

import { JuiceContext } from "../../contexts/JuiceContext";
import useHookState from "../useHookState";

type DataType = string;

export default function useProjectUri({
  projectId,
}: {
  projectId: ProjectId;
}): ContractReadHookResponse<DataType> {
  const { provider } = useContext(JuiceContext);
  const {
    loading,
    data,
    error,
    actions: { setError, setData, setLoading },
  } = useHookState<DataType>();

  useEffect(() => {
    if (!provider) return;

    setLoading(true);

    getProjectsContract(provider)
      .uriOf(projectId)
      .then((cid) => {
        setData(cid);
      })
      .catch((e) => {
        setError(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [provider, projectId, setError, setData, setLoading]);

  return { loading, data, error };
}
