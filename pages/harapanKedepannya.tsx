import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import CreditFooter from "../components/CreditFooter";
export default function harapanKedepannya() {
  return (
    <div>
      <Head>
        <title>FDRCSI-DRR</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      </Head>
      <main style={{ fontFamily: "trebuchet" }}>
        <Navbar />
        <HeroImage data={"Harapan Kedepan"} bg={3} />
        <div className="items-center max-w-6xl mx-auto px-10 my-40">
          <p className="text-justify text-xl">
            Program yang masih berjalan ini masih bisa terus berjalan walaupun
            masih terdapat kendala, namun antisipasi tetap dilakukan berdasarkan
            kondisi lapangan. Dari sisi program tentu bisa memberikan dampak
            yang signifikan kepada upaya kesiapsiagaan yang dibangun di tingkat
            desa dan sekolah sehingga program ini bisa membentuk komunitas yang
            saling terhubung dan memiliki prinsip inklusifitas dalam setiap
            kegiatannya. Proses monitoring perlu dilakukan secara berkala
            sehingga bisa memberikan masukan berarti untuk strategi implementasi
            yang lebih tepat sesuai kondisi lapangan. Program ini masih berada
            pada fase pertengahan. Semoga kedepannya program bisa berjalan
            dengan segala tantangan yang tentu harus dapat kita atasi bersama,
            karena kami tidak bisa sendiri, bersama-sama kami menjadi kuat
            dengan nilai kemanusiaan yang selalu kami junjung.
          </p>
        </div>
        <iframe
          className="w-full aspect-video youtube"
          title="vimeo-player"
          src="https://www.youtube.com/embed/gygt-SPXMUI?controls=0"
          frameBorder="0"
          allowFullScreen
        />
        <div className="mt-40 mb-0">
          <iframe
            src="https://uploads.knightlab.com/storymapjs/eb19f568b30bbcabf219d8fdbc3713e6/testimoni-pmi/index.html"
            frameBorder="0"
            width="100%"
            height="800"
          ></iframe>
        </div>
      </main>
      <CreditFooter />
    </div>
  );
}
