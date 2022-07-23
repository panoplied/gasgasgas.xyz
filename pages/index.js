import Head from 'next/head';
import Image from 'next/image';

import ChainsGrid from '../components/chains-grid';

export default function Home() {

  return (
    <div className="bg-black">

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
      </Head>

      <main className="grid place-items-center min-h-screen">
        <h1 className="text-5xl p-12">⛽</h1>
        <ChainsGrid />
        {/* TODO Adjust image placement */}
        {/* <Image
          src="/images/bg.jpg"
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        /> */}
      </main>

    </div>
  );
}