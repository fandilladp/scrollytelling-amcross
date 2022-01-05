import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
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
      <main  style={{ fontFamily: "trebuchet" }}>
        <Navbar />
        <HeroImage
          data={
            "Harapan Kedepan"
          }
          bg={3}
        />
        <div className="items-center max-w-6xl mx-auto px-10 mt-40 mb-80">
          <p className="text-justify text-xl">
            Program yang masih berjalan ini masih bisa terus berjalan dengan
            segala kendala dan antisipasi yang dilakukan berdasarkan kondisi
            lapangan. Dari sisi program tentu bisa memberikan dampak yang
            signifikan kepada upaya kesiapsiagaan yang dibangun di tingkat desa
            dan sekolah sehingga program ini bisa membentuk komunitas yang
            saling berkaitan dan tentunya dalam segala kegiatan memiliki pronsip
            inklusifitas. Proses monitoring perlu dilakukan secara berkala
            sehingga bisa memberikan masukan berarti untuk strategi implementasi
            yang lebih tepat sesuai kondisi lapangan. Project ini masih berada
            pada pertengahan fase, semoga kedepannya project bisa berjalan
            dengan segala tantangan yang bisa kita atasi bersama, karna kami
            tidak bisa sendiri, bersama-sama kami menjadi kuat dengan nilai
            kemanusiaan yang selalu kami junjung.
          </p>
        </div>
        <div className="video w-screen mb-10">
          <iframe
            width="100%"
            height="800px"
            src="https://www.youtube.com/embed/gygt-SPXMUI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-40 mb-20">
          <iframe
            src="https://uploads.knightlab.com/storymapjs/eb19f568b30bbcabf219d8fdbc3713e6/testimoni-pmi/index.html"
            frameBorder="0"
            width="100%"
            height="800"
          ></iframe>
        </div>
      </main>
    </div>
  );
}
