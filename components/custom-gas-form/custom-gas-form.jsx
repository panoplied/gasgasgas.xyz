function CustomGasForm ({ setCustomGas }) {

  function handleCustomGas(value) {
    setCustomGas(value); 
  }

  return (
    <>
      <input
        className="grow h-16 justify-self-center"
        onChange={e => handleCustomGas(e.target.value)} 
      />
    </>
  );
}

export default CustomGasForm;