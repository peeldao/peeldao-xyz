import { ETH_SYMBOL } from "../constants/strings";

export function AmountButton({
  amount,
  onClick,
}: {
  amount: number;
  onClick: VoidFunction;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="mr-1 inline-flex items-center w-9 justify-center px-3 py-3 lg:py-1 font-thin text-sm rounded-md shadow-sm text-slate-300 bg-slate-700 border border-transparent hover:border-slate-500 border-inset box-content focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-cyan-600"
    >
      {ETH_SYMBOL}
      {amount}
    </button>
  );
}
