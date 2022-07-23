import ThemeToggle from '../theme-toggle';

function Header() {
  return (
    <div className="flex w-full p-4">
      <h1 className="text-4xl grow self-center">⛽</h1>
      {/* TODO: Implement input for custom gas limit */}
      {/* <input className="grow h-16 justify-self-center"></input> */}
      <div className="grow flex self-center flex-row-reverse">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Header;