import Head from "next/head";
import React from "react";
import BaselineIndex from "../components/BaselineIndex";
import FlourishScrollama from "../components/FlourishScrollama";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import StepMapScrollama from "../components/StepMapScrollama";
import peningkatanKapasitas from "./peningkatanKapasitas";

export default function Home() {
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
      <main>
        <Navbar />
        <HeroImage
          data={
            " Program Masyarakat Siaga Bencana Melalui Pengurangan Risiko Bencana Berkelanjutan dan Inklusif"
          }
          bg={1}
        />
        <div className="relative z-0 bg-white"style={{fontFamily: "trebuchet"}} >
          <div className="relative bg-white flex justify-center ">
            <div className="items-center max-w-6xl mx-auto px-10">
              <div className="py-10 ">
                <p className="py-5 px-10 text-justify text-xl">
                  Sejak Januari 2020, Palang Merah Indonesia (PMI) bersama
                  Palang Merah Amerika melanjutkan Program Pengurangan Risiko
                  Bencana Berbasis Masyarakat (Community Based Disaster Risk
                  Reduction)
                </p>
                <p className="py-5 px-10 text-justify text-xl">
                  untuk membangun kapasitas dan kesiapan masyarakat dalam
                  merespon bencana serta memperkuat kapasitas kelembagaan PMI
                  dalam menyediakan kebutuhan dasar masyarakat pada kondisi
                  darurat melalui program Program Masyarakat Siaga Bencana
                  Melalui Pengurangan Risiko Bencana Berkelanjutan dan Inklusif
                  (Fostering Disaster-Ready Communities through Sustainable and
                  Inclusive Disaster Risk Reduction).
                </p>
                <p className="py-5 px-10 text-justify text-xl">
                  Program ini dilaksanakan di dua provinsi dengan melibatkan
                  tujuh komunitas di Kabupaten Tanggamus, Provinsi Lampung dan
                  lima komunitas di Kabupaten Manggarai Barat, Provinsi Nusa
                  Tenggara Timur.
                </p>
              </div>
              <iframe
                className="w-full aspect-video youtube"
                title="vimeo-player"
                src="https://www.youtube.com/embed/Sr30IEiPoC4?controls=0"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              <p className="text-center py-10">Scroll untuk melanjutkan</p>
            </div>
          </div>
        </div>
        <StepMapScrollama />
        <BaselineIndex />
        <div className="relative z-40 bg-white">
          <FlourishScrollama />
        </div>
      </main>
      <footer>
        <Footer data={"Apa saja yang sudah dilakukan oleh PMI dilapangan ?"} link={"peningkatanKapasitas"}/>
      </footer>
    </>
  );
}
