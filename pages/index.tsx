import Head from "next/head";
import React from "react";
import StepMapScrollama from "../components/StepMapScrollama";


export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <script src="https://public.flourish.studio/resources/embed.js"></script>
      </Head>
      <main>
         <StepMapScrollama/>
      </main>
    </>
  );
}
