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
      className="mr-1 inline-flex items-center px-2 py-0.25 border font-thin  border-slate-500 text-xs  rounded-full shadow-sm text-gray-200 bg-transparent hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-cyan-600"
    >
      {ETH_SYMBOL}
      {amount}
    </button>
  );
}
