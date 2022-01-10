import Image from "next/image";
import { useState, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import sekolah001 from "../public/images/sekolah001.jpg";
import sekolah002 from "../public/images/sekolah002.jpg";
import sekolah003 from "../public/images/sekolah003.jpg";
import sekolah004 from "../public/images/sekolah004.jpg";
import masy001 from "../public/images/masy001.jpg";
import masy002 from "../public/images/masy002.jpg";
import masy003 from "../public/images/masy003.jpg";
import masy004 from "../public/images/masy004.jpg";

import style from "./css/Sticky.module.css";
import Footer from "./Footer";
export default function Scrollytelling() {
  const [currentStepIndex, setCurrentStepIndex] = useState<any>(0);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [transition1, setTransition1] = useState(
    "opacity-100 transition delay-1000 duration-300 ease-in-out"
  );
  const [transition2, setTransition2] = useState(
    "opacity-100 transition delay-1000 duration-300 ease-in-out"
  );
  const [transition3, setTransition3] = useState(
    "opacity-100 transition delay-1000 duration-300 ease-in-out"
  );
  const [transition4, setTransition4] = useState(
    "opacity-100 transition delay-1000 duration-300 ease-in-out"
  );
  const [transition5, setTransition5] = useState(
    "opacity-100 transition delay-1000 duration-300 ease-in-out"
  );
  const [transition6, setTransition6] = useState(
    "opacity-100 transition delay-1000 duration-300 ease-in-out"
  );
  const [transition7, setTransition7] = useState(
    "opacity-100 transition delay-1000 duration-300 ease-in-out"
  );
  const [transition8, setTransition8] = useState(
    "opacity-100 transition delay-1000 duration-300 ease-in-out"
  );

  const onStepEnter = ({ data, direction }) => {
    setCurrentStepIndex(data + 1);
    setScrollDirection(direction);
  };

  useEffect(() => {
    if (scrollDirection == "down") {
      if (currentStepIndex === 0) {
        setTransition1(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 1) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 2) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 3) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 4) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 5) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 6) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 7) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
      }
    } else if (scrollDirection === "up") {
      if (currentStepIndex === 1) {
        setTransition1(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 2) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 3) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 3) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 4) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 5) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 6) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
      } else if (currentStepIndex === 7) {
        setTransition1(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition2(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition3(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition4(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition5(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition6(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition7(
          "hidden opacity-0 transition delay-1000 duration-300 ease-in-out"
        );
        setTransition8(
          "opacity-100 transition delay-1000 duration-300 ease-in-out"
        );
      }
    }
  }, [onStepEnter]);
  return (
    <div className="relative">
      <div
        className={`fixed -z-10 basis-full w-full h-full top-0 flex justify-center justify-items-center`}
      >
        <div
          className={`${transition1}text-center h-full w-full overflow-hidden align-center flex items-center`}
        >
          <Image
            src={sekolah001}
            alt="Map1"
            className="overflow-hidden w-full h-screen"
            id="imgV1"
          />
        </div>
        <div
          className={`${transition2}text-center h-full w-full overflow-hidden align-center flex items-center`}
        >
          <Image
            src={sekolah002}
            alt="Map1"
            className="overflow-hidden w-full h-screen"
            id="imgV1"
          />
        </div>
        <div
          className={`${transition3}text-center h-full w-full overflow-hidden align-center flex items-center`}
        >
          <Image
            src={sekolah003}
            alt="Map1"
            className="overflow-hidden w-full h-screen"
            id="imgV1"
          />
        </div>
        <div
          className={`${transition4}text-center h-full w-full overflow-hidden align-center flex items-center`}
        >
          <Image
            src={sekolah004}
            alt="Map1"
            className="overflow-hidden w-full h-screen"
            id="imgV1"
          />
        </div>
        <div
          className={`${transition5}text-center h-full w-full overflow-hidden align-center flex items-center`}
        >
          <Image
            src={masy001}
            alt="Map1"
            className="overflow-hidden w-full h-screen"
            id="imgV1"
          />
        </div>
        <div
          className={`${transition6}text-center h-full w-full overflow-hidden align-center flex items-center`}
        >
          <Image
            src={masy002}
            alt="Map1"
            className="overflow-hidden w-full h-screen"
            id="imgV1"
          />
        </div>
        <div
          className={`${transition7}text-center h-full w-full overflow-hidden align-center flex items-center`}
        >
          <Image
            src={masy003}
            alt="Map1"
            className="overflow-hidden w-full h-screen"
            id="imgV1"
          />
        </div>
        <div
          className={`${transition8}text-center h-full w-full overflow-hidden align-center flex items-center`}
        >
          <Image
            src={masy004}
            alt="Map1"
            className="overflow-hidden w-full h-screen"
            id="imgV1"
          />
        </div>
      </div>
      <div className="absolute w-full" style={{ fontFamily: "trebuchet" }}>
        <Scrollama onStepEnter={onStepEnter} offset={0}>
          <Step data={0} key={0}>
            <div
              className="my-96 rounded-md   md:w-1/2 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify overflow-hidden drop-shadow-2xl rounded-lg">
                12 sekolah (7 sekolah di Tanggamus dan 5 sekolah di Manggarai)
                telah menyelenggarakan pelatihan sekolah siaga bencana bagi
                siswa.
              </p>
            </div>
          </Step>

          <Step data={1} key={1}>
            <div
              className="my-96 rounded-md   md:w-1/2 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify overflow-hidden drop-shadow-2xl rounded-lg">
                Menggunakan kurikulum pelatihan kebencanaan untuk sekolah dasar
                yang disusun PMI, siswa diharapkan memiliki pengetahuan tentang
                bahaya, pengetahuan tentang bencana, memahami risiko di rumah,
                sekolah dan desa.
              </p>
            </div>
          </Step>

          <Step data={2} key={2}>
            <div
              className="my-96 rounded-md   md:w-1/2 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify overflow-hidden drop-shadow-2xl rounded-lg">
                Pelatihan ini bertujuan agar para siswa memiliki pemahaman
                tentang kerentanan yang ada pada diri sendiri dan keluarganya.
              </p>
            </div>
          </Step>

          <Step data={3} key={3}>
            <div
              className="my-96 rounded-md   md:w-1/2 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify overflow-hidden drop-shadow-2xl rounded-lg">
                {" "}
                Dan diharapkan juga para siswa untuk memiliki peningkatan
                kapasitas kesiapsiagaan bencana didalam diri mereka sendiri dan
                keluarga untuk mengurangi risiko bencana.
              </p>
            </div>
          </Step>

          <Step data={4} key={4}>
            <div
              className="my-96 rounded-md   md:w-1/2 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify overflow-hidden drop-shadow-2xl rounded-lg">
                Difasilitasi oleh relawan PMI, 7 desa di Kabupaten Tanggamus dan
                5 desa di Kabupaten Manggarai telah mengembangkan dan menguji
                rencana kontinjensi bencana atau /SOP(Standard Operational
                Procedure) bencana berbasis masyarakat.
              </p>
            </div>
          </Step>

          <Step data={5} key={5}>
            <div
              className="my-96 rounded-md   md:w-1/2 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify overflow-hidden drop-shadow-2xl rounded-lg">
                SOP ini dibuat untuk mendorong pemahaman SIBAT, perangkat desa,
                kelompok masyarakat dan anggota masyarakat peran dan fungsi
                masing-masing elemen masyarakat dalam penanggulangan bencana
                banjir ditingkat desa.
              </p>
            </div>
          </Step>

          <Step data={6} key={6}>
            <div
              className="my-96 rounded-md   md:w-1/2 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify overflow-hidden drop-shadow-2xl rounded-lg">
                SOP ini juga memperjelas alur tugas, wewenang, dan tanggung
                jawab setiap elemen masyarakat dalam Penanggulangan Bencana
                Banjir.{" "}
              </p>
            </div>
          </Step>
        </Scrollama>
        <section className="bg-white justify-center py-10">
          <div className="items-center max-w-6xl mx-auto my-10 px-10">
            <p
              className="font-bold text-2xl text-center mb-10 font-sans"
              style={{ fontSize: "5vh" }}
            >
              Peningkatan Kapasitas Institusi
            </p>
            <p className="py-5 px-10 text-justify text-xl">
              Seperti kegiatan di masyarakat dan sekolah peningkatan kapasitas
              di PMI lokal juga sempat tidak berjalan dengan baik. Namun
              pendampingan masih dilakukan oleh PMI pusat terkait kegiatan
              program dan respon eCovid-19. PMI Tanggamus berhasil membuat
              Business eContinuities plan (BCP) atau Rencana Kelanjutan Bisnis
              terkait layanan yang diberikan selama masa pandemi Covid-19.
              Rekruitmen juga dilakukan untuk relawan PMI dan diberikan
              pelatihan terkait ICBRR.
            </p>
            <p className="py-5 px-10 text-justify text-xl">
              Tantangan yang cukup sigifikan adalah adanya pandemi. Antisipasi
              yang dilakukan dengan melakuan realokasi budget dan perubahan
              aktivitas.
            </p>
          </div>
          <iframe
            className="w-full aspect-video youtube mb-10"
            title="vimeo-player"
            src="https://www.youtube.com/embed/YWHXgd7t6Mw?controls=0"
            frameBorder="0"
            allowFullScreen
          />
          <div className="items-center max-w-6xl mx-auto my-10 px-10">
            <p className="py-5 px-10 text-justify text-xl">
              Aktivitas yang nyata terlihat adalah dengan perubahan kegiatan
              yang berfokus pada respon Covid-19. Pengembangan materi KIE
              dilakukan sebagai bentuk edukasi yang lebih mudah untuk dipahami
              bagi masyarakat. Selain itu hotline Covid-19 juga dibentuk dan
              dimotori oleh para relawan PMI. Siaran Radio menjadi salah satu
              yang merupakan kampanye perilaku hidup dan sehat selama eCovid-19.
            </p>
            <p className="px-10 text-justify text-xl">
              Berikut ini rangkuman kegiatan yang sudah dilakukan oleh PMI
              dilapangan.
            </p>
          </div>
          <iframe
            src="https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1EVw_I-F-m3Zq0qNYeGO9Kij_-G6C6iv2ZDdAz2lsS1I&font=Default&lang=en&initial_zoom=2&height=800"
            height="800px"
            width="100%"
            frameBorder="0"
          ></iframe>
        </section>
        <Footer
          data={"Harapan kedepan untuk program FDRCSI-DRR"}
          link={"harapanKedepannya"}
        />
      </div>
    </div>
  );
}
