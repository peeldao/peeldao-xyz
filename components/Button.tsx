export function Button(
  props: Omit<React.HTMLProps<HTMLButtonElement>, "type">
) {
  const className =
    "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-cyan-500 hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700" +
    ` ${props.className}`;

  return <button {...props} type="submit" className={className}></button>;
}
