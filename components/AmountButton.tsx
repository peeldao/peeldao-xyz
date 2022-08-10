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
      className="mr-1 inline-flex items-center px-2 py-0.25 border  border-gray-200 text-xs font-normal rounded-full shadow-sm text-gray-500 bg-transparent hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-sky-700"
    >
      {ETH_SYMBOL}
      {amount}
    </button>
  );
}
