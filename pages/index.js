import Head from 'next/head';
import Header from '../components/header';
import BackgroundImage from '../components/background-image';

import ChainsGrid from '../components/chains-grid';
import { chains, speedMarks } from '../lib/settings';

export function Home({ chains, speedMarks}) {

  return (
    <>

      <Head>
        <title>GAS GAS GAS</title>
        <meta name="description" content="⛽🚘 EVM chains gas tools" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gasgasgas.xyz" />
        <meta property="og:title" content="GAS GAS GAS" />
        <meta property="og:description" content="⛽🚘 EVM chains gas tools" />
        <meta property="og:image" content="/images/og.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GAS GAS GAS" />
        <meta name="twitter:description" content="⛽🚘 EVM chains gas tools" />
        <meta name="twitter:image" content="/images/og.png" />

        <link rel="preload" href="/fonts/RobotoMono-Regular.ttf" as="font" crossOrigin="" type="font/ttf" />
        <link rel="preload" href="/fonts/RobotoMono-Light.ttf" as="font" crossOrigin="" type="font/ttf" />
      </Head>

      <BackgroundImage />

      <main className="grid place-items-center min-h-screen bg-zinc-50/50 dark:bg-zinc-900/50">
        <Header />
        <ChainsGrid chains={chains} speedMarks={speedMarks} />
      </main>

    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      chains,
      speedMarks,
    },
  };
}

export default Home;