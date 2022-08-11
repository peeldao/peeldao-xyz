import { ETH_SYMBOL } from "../constants/strings";

export function Input(props: React.HTMLProps<HTMLInputElement>) {
  return (
    <div>
      <label htmlFor="price" className="sr-only">
        Amount
      </label>
      <div className="relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-200 sm:text-sm font-thin">{ETH_SYMBOL}</span>
        </div>
        <input
          {...props}
          type="number"
          name="price"
          id="price"
          className="focus:ring-cyan-500 focus:border-cyan-500 block w-full pl-7 pr-12 sm:text-sm border border-slate-500 rounded-md bg-transparent text-white"
          placeholder="0.00"
          step="0.01"
          aria-describedby="price-currency"
        />
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <span className="text-gray-200 sm:text-sm font-thin" id="price-currency">
            ETH
          </span>
        </div>
      </div>
    </div>
  );
}
