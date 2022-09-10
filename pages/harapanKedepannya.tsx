import Head from "next/head";
import React, { useState, useEffect } from "react";
import CreditFooter from "../components/CreditFooter";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";

export default function harapanKedepannya() {
  const [bahasa, setBahasa] = useState<String>("");
  const handleLanguage = (data: any) => {
    setBahasa(data);
  };
  useEffect(() => {
    const getData = sessionStorage.getItem("translate");
    setBahasa(getData);
  }, [bahasa]);
  return (
    <div>
      <Head>
        <title>FDRCSI-DRR</title>
        <link
          rel="icon"
          href="https://res.cloudinary.com/fandilladp/image/upload/v1642164064/favicon_dnqicc.ico"
        />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.bundle.min.js"></script>
      </Head>
      <main style={{ fontFamily: "trebuchet" }}>
        <Navbar onSelectLanguage={(data) => handleLanguage(data)} />
        <HeroImage
          data={`${bahasa === "EN" ? "Looking Forward" : "Harapan Kedepan"}`}
          bg={3}
        />
        <div className="items-center max-w-6xl mx-auto px-10 my-40">
          <p className="text-justify text-xl">
            {bahasa === "EN" ? (
              <>
                The program that is still running can still continue to run even
                though there are some obstacles, but PMI have their anticipation
                based on field conditions. In terms of programs, it can
                certainly have a significant impact on preparedness efforts at
                the village and school level so this program can create a
                community that is interconnected and also has the principle of
                inclusiveness in every activity. The monitoring process needs to
                be done periodically so it can provide meaningful input for a
                more precise implementation strategy according to the field
                conditions. The program is still in the middle phase. Hopefully
                in the future the program can run with all the challenges that
                we certainly have to overcome together, because we cannot be
                alone, together we become stronger with humanity values that we
                always uphold.
              </>
            ) : (
              <>
                Program yang masih berjalan ini masih bisa terus berjalan
                walaupun masih terdapat kendala, namun antisipasi tetap
                dilakukan berdasarkan kondisi lapangan. Dari sisi program tentu
                bisa memberikan dampak yang signifikan kepada upaya
                kesiapsiagaan yang dibangun di tingkat desa dan sekolah sehingga
                program ini bisa membentuk komunitas yang saling terhubung dan
                memiliki prinsip inklusifitas dalam setiap kegiatannya. Proses
                monitoring perlu dilakukan secara berkala sehingga bisa
                memberikan masukan berarti untuk strategi implementasi yang
                lebih tepat sesuai kondisi lapangan. Program ini masih berada
                pada fase pertengahan. Semoga kedepannya program bisa berjalan
                dengan segala tantangan yang tentu harus dapat kita atasi
                bersama, karena kami tidak bisa sendiri, bersama-sama kami
                menjadi kuat dengan nilai kemanusiaan yang selalu kami junjung.
              </>
            )}
          </p>
        </div>
        <iframe
          className="w-full aspect-video youtube"
          title="vimeo-player"
          src="https://www.youtube.com/embed/Iq4MZE_NCFg?controls=0"
          frameBorder="0"
          allowFullScreen
        />
        <iframe
          src="https://uploads.knightlab.com/storymapjs/eb19f568b30bbcabf219d8fdbc3713e6/testimoni-pmi/index.html"
          frameBorder="0"
          width="100%"
          height="800"
        />
      </main>
      <CreditFooter onSelectLanguage={bahasa} />
    </div>
  );
}
