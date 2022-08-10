import useProjectUri from "../hooks/read/useProjectUri";
import { Logo } from "./Logo";
import { PayForm } from "./PayForm";

export function Card() {
  const { data: uri } = useProjectUri({ projectId: 1 });

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div className="text-center mb-5">
          <Logo src="https://jbx.mypinata.cloud/ipfs/QmVQqQuUUvXbLftLpcBmwX5dFvQc24UPvMcSvMqVJYHv3f" />
        </div>

        <PayForm />
      </div>
    </div>
  );
}
