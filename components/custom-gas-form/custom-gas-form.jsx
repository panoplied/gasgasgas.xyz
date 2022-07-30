function CustomGasForm ({ setCustomGas, customGas }) {


  function handleCustomGas(value) {
    // Don't allow non-numerical and negative values, also check for 8 digit limit
    if (!isNaN(value) && value >= 0 && value.length <= 8) {
      setCustomGas(parseInt(value));
    }
  }

  return (
      <input
        placeholder="Custom Gas Limit"
        type="number"
        maxLength={8}
        className="
          grow
          order-last
          xs:order-2 
          mt-16
          xs:mt-0
          xs:mx-32
          basis-1/2
          h-16
          justify-self-center
          font-robotoMonoRegular
          text-2xl
          text-center
          rounded-lg 
          appearance-none

          bg-zinc-50/50
          placeholder-zinc-500

          hover:placeholder-zinc-600
          hover:bg-zinc-50/60

          text-zinc-800 
          hover:text-zinc-900
          focus:text-zinc-900
          focus:placeholder-transparent
          focus:bg-zinc-50/70
          focus:border-2
          focus:border-zinc-800

          selection:bg-amber-400

          dark:bg-zinc-900/50
          dark:placeholder-zinc-600

          dark:hover:placeholder-zinc-500
          dark:hover:bg-zinc-900/70

          dark:text-zinc-400
          dark:hover:text-zinc-50
          dark:focus:text-zinc-50
          dark:focus:placeholder-transparent
          dark:focus:bg-zinc-900/80
          dark:focus:border-2
          dark:focus:border-zinc-400

          dark:selection:text-zinc-900

          outline-none
          focus:outline-none
          backdrop-blur-md
          "

        onChange={e => handleCustomGas(e.target.value)} 

        onKeyUp={(e => {e.key === 'Enter' ? e.target.blur() : ''})}

        value={customGas}
      />
  );
}

export default CustomGasForm;