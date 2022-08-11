import useProjectUri from "../hooks/read/useProjectUri";
import { Logo } from "./Logo";
import { PayForm } from "./PayForm";

export function Card() {
  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-gray-800 py-8 px-4 shadow sm:rounded-md sm:px-10">
        <div className="text-center mb-5">
          <Logo src="https://jbx.mypinata.cloud/ipfs/QmVQqQuUUvXbLftLpcBmwX5dFvQc24UPvMcSvMqVJYHv3f" />
        </div>

        <PayForm />
      </div>
    </div>
  );
}
