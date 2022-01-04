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
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  const [imageCall, setimageCall] = useState(sekolah001);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  useEffect(() => {
    if (currentStepIndex === 1) {
      setimageCall(sekolah001);
    } else if (currentStepIndex === 2) {
      setimageCall(sekolah002);
    } else if (currentStepIndex === 3) {
      setimageCall(sekolah003);
    } else if (currentStepIndex === 4) {
      setimageCall(sekolah004);
    } else if (currentStepIndex === 5) {
      setimageCall(masy001);
    } else if (currentStepIndex === 6) {
      setimageCall(masy002);
    } else if (currentStepIndex === 7) {
      setimageCall(masy003);
    } else if (currentStepIndex === 8) {
      setimageCall(masy004);
    }
    console.log(currentStepIndex);
  }, [onStepEnter, currentStepIndex]);
  return (
    <div className="relative">
      <div className={style.graphic}>
        <div className="text-center h-full w-full overflow-hidden">
          <Image
            src={imageCall}
            alt="Map1"
            layout="responsive"
            id="imgV1"
            className="opacity-100"
          />
        </div>
      </div>
      <div className="absolute">
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={1} key={1}>
            <div
              className="mx-10 step my-80 items-center"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify w-1/2 drop-shadow-2xl rounded-lg">
                12 sekolah (7 di Tanggamus dan 5 di Manggarai) telah
                menyelenggarakan pelatihan sekolah siaga bencana bagi siswa.
              </p>
            </div>
          </Step>

          <Step data={2} key={2}>
            <div
              className="mx-10 step my-80 items-center"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify w-1/2 drop-shadow-2xl rounded-lg">
                Menggunakan kurikulum pelatihan kebencanaan untuk sekolah dasar
                PMI, siswa diharapkan memiliki pengetahuan tentang bahaya,
                pengetahuan tentang bencana, memahami risiko di rumah, sekolah
                dan desa.
              </p>
            </div>
          </Step>

          <Step data={3} key={3}>
            <div
              className="mx-10 step my-80 items-center"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify w-1/2 drop-shadow-2xl rounded-lg">
                Pelatihan ini bertujuan agar para siswa memiliki pemahaman
                tentang kerentanan yang ada pada diri sendiri dan keluarganya.
              </p>
            </div>
          </Step>

          <Step data={4} key={4}>
            <div
              className="mx-10 step my-80 items-center"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify w-1/2 drop-shadow-2xl rounded-lg">
                {" "}
                Dan diharapkan juga para siswa untuk memiliki peningkatan
                kapasitas kesiapsiagaan bencana didalam diri mereka sendiri dan
                keluarga untuk mengurangi risiko bencana.
              </p>
            </div>
          </Step>

          <Step data={5} key={5}>
            <div
              className="mx-10 step my-80 items-center"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify w-1/2 drop-shadow-2xl rounded-lg">
                Difasilitasi oleh relawan PMI, 7 desa di Kabupaten Tanggamus dan
                5 desa di Kabupaten Manggarai telah mengembangkan dan menguji
                rencana kontinjensi/SOP bencana berbasis masyarakat.
              </p>
            </div>
          </Step>

          <Step data={6} key={6}>
            <div
              className="mx-10 step my-80 items-center"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify w-1/2 drop-shadow-2xl rounded-lg">
                SOP ini dibuat untuk mendorong pemahaman SIBAT, perangkat desa,
                kelompok masyarakat dan anggota masyarakat peran dan fungsi
                masing-masing elemen masyarakat dalam penanggulangan bencana
                banjir ditingkat desa.
              </p>
            </div>
          </Step>

          <Step data={7} key={7}>
            <div
              className="mx-10 step my-80 items-center"
              style={{ height: 2280 }}
            >
              <p className="bg-white p-10 text-xl text-justify w-1/2 drop-shadow-2xl rounded-lg">
                SOP ini juga memperjelas alur tugas, wewenang, dan tanggung
                jawab setiap elemen masyarakat dalam Penanggulangan Bencana
                Banjir.{" "}
              </p>
            </div>
          </Step>
        </Scrollama>
        <section className="bg-white justify-center py-10">
          <div className="items-center max-w-6xl mx-auto my-10 px-10">
            <p className="font-bold text-2xl text-center mb-10">
              Peningkatan Kapasitas Institusi
            </p>
            <p className="py-5 px-10 text-justify text-xl">
              Seperti kegiatan di masyarakat dan sekolah peningkatan kapasitas
              di PMI lokal juga sempat tidak berjalan dengan baik. Namun
              pendampingan masih dilakukan dari PMI pusat terkait kegiatan
              project dan respon covid. PMI Tanggamus berhasil membuat Business
              continuities plan (BCP) terkait layanan yang diberikan selama masa
              pandemi Covid-19. Rekruitmen juga dilakukan untuk relawan PMI dan
              diberikan pelatihan terkait ICBRR.
            </p>
            <p className="py-5 px-10 text-justify text-xl">
              Tantangan yang cukup sigifikan dirasakan adalah adanya pandemi.
              Antisipasi yang dilakukan dengan melakuan realokasi budget dan
              perubahan aktivitas.
            </p>
          </div>
          <div className="video mb-10">
            <iframe
              width="100%"
              height="800px"
              src="https://www.youtube.com/embed/Yf3idRC2xpA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
              allowFullScreen
            ></iframe>
          </div>
          <div className="items-center max-w-6xl mx-auto my-10 px-10">
            <p className="py-5 px-10 text-justify text-xl">
              Aktivitas yang nyata terlihat adalah dengan perubahan kegiatan
              yang berfokus pada respon Covid-19. Pengembangan materi KIE
              dilakukan sebagai bentuk edukasi yang lebih mudah untuk dipahami
              bagi masyarakat, selain itu hotline covid-19 dibentuk dan dimotori
              oleh para relawan PMI. Siaran Radio menjadi salah satu yang
              merupakan kampanye perilaku hidup dan sehat selama covid-19.
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
        <Footer data={"Harapan kedepan untuk program FDRCSI-DRR"} link={"harapanKedepannya"}/>
      </div>
    </div>
  );
}
