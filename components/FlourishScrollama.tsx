import { useState, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";

import style from "./css/Scrollama.module.css";

export default function FlourishScrollama() {
  const [currentStepIndex, setCurrentStepIndex] = useState(1);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data - 1);
  };

  return (
    <div style={{fontFamily: "trebuchet"}} >
      <div className="px-auto py-auto w-full flex justify-between">
        <div className="basis-1/3">
          <Scrollama onStepEnter={onStepEnter}>
            <Step data={1} key={1}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  Sebaran Responden
                </p>
                <p className="text-justify text-xl">
                  Responden survei dasar rumah tangga FDRCSI-DRR mencakup 397
                  orang dewasa tersebar di 2 Kabupaten yaitu Kabupaten Manggarai
                  sebanyak 180 orang dan Kabupaten Tanggamus sebanyak 234 orang.
                </p>
              </div>
            </Step>
            <Step data={2} key={2}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  Jenis Bencana yang terjadi di desa responden
                </p>
                <p className="text-justify text-xl">
                  Dari jenis risiko bencana yang ditanyakan, responden lebih
                  mengetahui tindakan respon banjir yang merupakan risiko utama
                  di wilayah sasaran, responden di Manggarai lebih paham
                  daripada responden di Tanggamus.
                </p>
                <p className="text-justify text-xl pt-5 font-semibold">
                  Untuk bisa menyortir grafik, silahkan klik ikon gir di pojok
                  kanan bawah grafik.
                </p>
              </div>
            </Step>
            <Step data={3} key={3}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  Jenis Bencana yang terjadi di desa responden (per kabupaten)
                </p>
                <p className="text-justify text-xl">
                  Mayoritas responden (257 responden atau 65%) mampu menyebutkan
                  setidaknya satu potensi bahaya sedangkan 107 responden (27%)
                  dapat menyebutkan dua potensi bahaya, 21 responden (5%) dapat
                  menyebutkan tiga potensi bahaya dan hanya sembilan responden
                  (2%) yang dapat menyebutkan empat potensi bahaya.
                </p>
              </div>
            </Step>
            <Step data={4} key={4}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  Apakah di desa responden memiliki sistem peringatan dini?
                </p>
                <p className="text-justify text-xl">
                  Dari total responden di kedua Kabupaten, mayoritas menyatakan{" "}
                  <b>tidak mengetahui</b> apakah di desanya memiliki sistem
                  peringatan dini.
                </p>
              </div>
            </Step>
            <Step data={5} key={5}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  Apakah di desa responden memiliki sistem peringatan dini? (per
                  kabupaten)
                </p>
                <p className="text-justify text-xl">
                  Bila dilihat dari grafik, mayoritas responden dari kedua
                  Kabupaten tidak mengetahui adanya sistem peringatan dini di
                  desa mereka.
                </p>
              </div>
            </Step>
            <Step data={6} key={6}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  Darimana responden mendapatkan informasi peringatan dini?
                </p>
                <p className="text-justify text-xl">
                  Pada grafik ini, 3 respon terbesar untuk mendapatkan informasi
                  peringatan dini adalah melalui teman, gejala alam dan HP
                </p>
              </div>
            </Step>
            <Step data={7} key={7}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  Darimana responden mendapatkan informasi peringatan dini? (per
                  kabupaten)
                </p>
                <p className="text-justify text-xl">
                  Responden di kedua Kabupaten menyatakan tidak mengetahui
                  darimana mendapatkan informasi peringatan dini.
                </p>
              </div>
            </Step>
            <Step data={8} key={8}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  Apa yang responden lakukan ketika mendapatkan info peringatan
                  dini?
                </p>
                <p className="text-justify text-xl">
                  Hanya sedikit responden yang mengetahui adanya peraturan
                  penanggulangan bencana di desa mereka, yaitu delapan orang
                  (2%) pada semua responden, empat orang (3%) padaresponden
                  perempuan, empat orang (2%) pada responden laki-laki, tiga
                  orang (2%) di kalangan responden di Manggarai, dan lima orang
                  (2%) pada responden di Tanggamus.
                </p>
              </div>
            </Step>
            <Step data={9} key={9}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  Apa yang responden lakukan ketika mendapatkan info peringatan
                  dini?(per kabupaten)
                </p>
                <p className="text-justify text-xl">
                  Hanya sedikit responden yang mengetahui adanya peraturan
                  penanggulangan bencana di desa mereka, yaitu delapan orang
                  (2%) pada semua responden, empat orang (3%) padaresponden
                  perempuan, empat orang (2%) pada responden laki-laki, tiga
                  orang (2%) di kalangan responden di Manggarai, dan lima orang
                  (2%) pada responden di Tanggamus.
                </p>
              </div>
            </Step>
          </Scrollama>
        </div>
        <div className={style.graphic}>
          <iframe
            width="100%"
            height="100%"
            className="h-full"
            scrolling="no"
            src={
              `https://public.flourish.studio/story/1072910/embed#slide-` +
              currentStepIndex
            }
          />
        </div>
      </div>
    </div>
  );
}
