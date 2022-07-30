import ThemeToggle from '../theme-toggle';
import CustomGasForm from '../custom-gas-form';

function Header({ setCustomGas, customGas }) {

  return (
    <div className="flex flex-wrap xs:flex-nowrap w-full p-4">

      <h1 className="min-w-[50%] xs:min-w-min xs:basis-1/4 md:basis-1/3 order-1 self-center select-none text-4xl">⛽</h1>

      <CustomGasForm setCustomGas={setCustomGas} customGas={customGas} />

      <div className="flex basis-1/4 min-w-[50%] xs:min-w-min xs:basis-1/4 md:basis-1/3 order-2 self-center flex-row-reverse">
        <ThemeToggle />
      </div>

    </div>
  );
}

export default Header;