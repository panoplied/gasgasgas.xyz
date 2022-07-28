import ChainData from '../chain-data';

function ChainsGrid({ chains, speedMarks, customGas }) {

  // Using chains from lib/settings.js as chain props

  return (
    <div className="p-4 max-w-5xl grid gap-6 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 min-w-[80%]">
      {
        Object.values(chains).map(chain => (
          <ChainData chain={chain} speedMarks={speedMarks} key={chain.id} customGas={customGas} />
        ))
      }
    </div>
  );

}

export default ChainsGrid;