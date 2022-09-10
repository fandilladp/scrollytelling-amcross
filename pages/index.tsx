import Head from "next/head";
import { useState, useEffect } from "react";
import BaselineIndex from "../components/BaselineIndex";
import FlourishScrollama from "../components/FlourishScrollama";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import StepMapScrollama from "../components/StepMapScrollama";

export default function Home() {
  const [bahasa, setBahasa] = useState<String>("");
  const handleLanguage = (data: any) => {
    setBahasa(data);
  };
  useEffect(() => {
    const getData = sessionStorage.getItem("translate");
    setBahasa(getData);
  }, [bahasa]);
  return (
    <>
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
        <script src="https://public.flourish.studio/resources/embed.js"></script>
      </Head>
      <main style={{ fontFamily: "trebuchet" }}>
        <Navbar onSelectLanguage={(data) => handleLanguage(data)} />
        <HeroImage
          data={`${
            bahasa === "EN"
              ? "Disaster Preparedness Community Program Through Sustainable and Inclusive Disaster Risk Reduction"
              : "Program Masyarakat Siaga Bencana Melalui Pengurangan Risiko Bencana Berkelanjutan dan Inklusif"
          }`}
          bg={1}
        />

        <div
          className="relative z-0 bg-white"
          style={{ fontFamily: "trebuchet" }}
        >
          <div className="relative bg-white w-full flex justify-center ">
            <div className="w-full items-center">
              <div className="py-10 max-w-6xl mx-auto px-10">
                <p className="py-5 px-10 text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Since January 2020, the Indonesian Red Cross (PMI)
                      together with the American Red Cross continued the
                      Community Based Disaster Risk Reduction Program
                    </>
                  ) : (
                    <>
                      Sejak Januari 2020, Palang Merah Indonesia (PMI) bersama
                      Palang Merah Amerika melanjutkan Program Pengurangan
                      Risiko Bencana Berbasis Masyarakat (
                      <i>Community Based Disaster Risk Reduction</i>)
                    </>
                  )}
                </p>
                <p className="py-5 px-10 text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Building the capacity and readiness of the community in
                      responding disasters and strengthening PMI institutional
                      capacity in providing basic needs for the community in
                      emergency conditions through the Fostering Disaster-Ready
                      Communities through Sustainable and Inclusive Disaster
                      Risk Reduction program. ).
                    </>
                  ) : (
                    <>
                      membangun kapasitas dan kesiapan masyarakat dalam merespon
                      bencana serta memperkuat kapasitas kelembagaan PMI dalam
                      menyediakan kebutuhan dasar masyarakat pada kondisi
                      darurat melalui program Program Masyarakat Siaga Bencana
                      Melalui Pengurangan Risiko Bencana Berkelanjutan dan
                      Inklusif (
                      <i>
                        Fostering Disaster-Ready Communities through Sustainable
                        and Inclusive Disaster Risk Reduction
                      </i>
                      ).
                    </>
                  )}
                </p>
                <p className="py-5 px-10 text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      The program was implemented in two provinces involving
                      seven communities in Tanggamus Regency, Lampung Province
                      and five communities in West Manggarai Regency, East Nusa
                      Tenggara Province.
                    </>
                  ) : (
                    <>
                      Program ini dilaksanakan di dua provinsi dengan melibatkan
                      tujuh komunitas di Kabupaten Tanggamus, Provinsi Lampung
                      dan lima komunitas di Kabupaten Manggarai Barat, Provinsi
                      Nusa Tenggara Timur.
                    </>
                  )}
                </p>
              </div>
              <iframe
                className="w-full aspect-video youtube"
                title="vimeo-player"
                src="https://www.youtube.com/embed/Gy-kSw0tdOM?controls=0"
                frameBorder="0"
                allowFullScreen
              />
              <p className="text-center py-10">
                {bahasa === "EN" ? (
                  <>Scroll to continue</>
                ) : (
                  <>Scroll untuk melanjutkan</>
                )}
              </p>
            </div>
          </div>
        </div>
        <StepMapScrollama onSelectLanguage={bahasa} />
        <BaselineIndex onSelectLanguage={bahasa} />
        <div className="relative z-40 bg-white">
          <FlourishScrollama onSelectLanguage={bahasa} />
        </div>
      </main>
      <footer>
        <Footer
          data={`${
            bahasa === "EN"
              ? "What PMI has done on the ground"
              : "Apa saja yang sudah dilakukan oleh PMI dilapangan"
          }`}
          link={"peningkatanKapasitas"}
        />
      </footer>
    </>
  );
}
