import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Scrollytelling from "../components/Scrollytelling";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";

export default function peningkatanKapasitas() {
  const [bahasa, setBahasa] = useState<String>("");
  const handleLanguage = (data: any) => {
    setBahasa(data);
  };
  return (
    <>
      <Head>
        <title>FDRCSI-DRR</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <script src="https://public.flourish.studio/resources/embed.js"></script>
      </Head>
      <main className="bg-white w-full" style={{ fontFamily: "trebuchet" }}>
        <Navbar onSelectLanguage={(data) => handleLanguage(data)} />
        <HeroImage
          data={`${
            bahasa === "EN" ? "Capacity Upgrade" : "Peningkatan Kapasitas"
          }`}
          bg={2}
        />
        <div className="items-center max-w-6xl mx-auto px-10 py-10 mb-80">
          <p
            className="text-2xl font-bold text-center mt-10 py-10 font-sans"
            style={{ fontSize: "5vh" }}
          >
            {bahasa === "EN" ? (
              <>Community and school capacity building</>
            ) : (
              <> Peningkatan kapasitas komunitas dan sekolah</>
            )}
          </p>
          <p className="text-justify text-xl py-10">
            {bahasa === "EN" ? (
              <>
                Activities undertaken for capacity building are not running
                according to the initial plan. In 2020 Covid-19 enters Indonesia
                and the increase in cases occurred significantly between the end
                of 2020 and mid-2021. PMI must lock several times down the
                office, so that the project implementation process is disrupted.
                The decision of the governor of each province that issues strict
                rules for organizing the training process also follow postpone
                the implementation of field activities.
              </>
            ) : (
              <>
                {" "}
                Kegiatan yang dilakukan untuk peningkatan kapasitas tidak
                berjalan sesuai dengan perencanaan awal. Di tahun 2020 Covid-19
                masuk ke Indonesia dan peningkatan kasus terjadi siginifikan
                diantara akhir 2020 dan pertengahan 2021. PMI harus beberapa
                kali melakukan lock down kantor, sehingga proses pelaksanaan
                proyek menjadi terganggu. Keputusan gubernur dari masing-masing
                provinsi yang mengeluarkan aturan ketat untuk penyelenggaraan
                proses pelatihan juga turut menunda pelaksanaan kegiatan
                dilapangan.
              </>
            )}
          </p>
        </div>
        <Scrollytelling onSelectLanguage={bahasa}/>
      </main>
    </>
  );
}
