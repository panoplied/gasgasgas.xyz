import ThemeToggle from '../theme-toggle';
import CustomGasForm from '../custom-gas-form';

function Header({ setCustomGas }) {

  return (
    <div className="flex w-full p-4">

      <h1 className="text-4xl grow self-center select-none">⛽</h1>

      <CustomGasForm setCustomGas={setCustomGas} />

      <div className="grow flex self-center flex-row-reverse">
        <ThemeToggle />
      </div>

    </div>
  );
}

export default Header;