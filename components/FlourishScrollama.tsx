import { useState, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";

import style from "./css/Scrollama.module.css";

export default function FlourishScrollama(props: any) {
  const bahasa = props.onSelectLanguage;

  const [currentStepIndex, setCurrentStepIndex] = useState(1);

  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data - 1);
  };

  return (
    <div style={{ fontFamily: "trebuchet" }}>
      <div className="px-auto py-auto w-full flex justify-between">
        <div className="basis-1/3">
          <Scrollama onStepEnter={onStepEnter}>
            <Step data={1} key={1}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>Distribution of Respondents</>
                  ) : (
                    <>Sebaran Responden</>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Respondents to the FDRCSI-DRR household baseline survey
                      covered 397 adults are spread over 2 districts, namely
                      Manggarai Regency as many as 180 people and Tanggamus
                      Regency as many as 234 people.
                    </>
                  ) : (
                    <>
                      Responden survei dasar rumah tangga FDRCSI-DRR mencakup
                      397 orang dewasa tersebar di 2 Kabupaten yaitu Kabupaten
                      Manggarai sebanyak 180 orang dan Kabupaten Tanggamus
                      sebanyak 234 orang.
                    </>
                  )}
                </p>
              </div>
            </Step>
            <Step data={2} key={2}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Types of Disasters that occurred in the respondent's
                      village
                    </>
                  ) : (
                    <> Jenis Bencana yang terjadi di desa responden</>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Of the types of disaster risk asked, respondents are more
                      knowing the flood response actions which are the main
                      risks in the target area, respondents in Manggarai
                      understand better than respondents in Tanggamus.
                    </>
                  ) : (
                    <>
                      Dari jenis risiko bencana yang ditanyakan, responden lebih
                      mengetahui tindakan respon banjir yang merupakan risiko
                      utama di wilayah sasaran, responden di Manggarai lebih
                      paham daripada responden di Tanggamus.
                    </>
                  )}
                </p>
              </div>
            </Step>
            <Step data={3} key={3}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Type of Disaster that occurred in the respondent's village
                      (per district)
                    </>
                  ) : (
                    <>
                      Jenis Bencana yang terjadi di desa responden (per
                      kabupaten)
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      The majority of respondents (257 respondents or 65%) were
                      able to mention at least one potential hazard whereas 107
                      respondents (27%) can mention two potential hazards, 21
                      respondents (5%) can mentioned three potential hazards and
                      only nine respondents (2%) who can name four potential
                      hazards.
                    </>
                  ) : (
                    <>
                      Mayoritas responden (257 responden atau 65%) mampu
                      menyebutkan setidaknya satu potensi bahaya sedangkan 107
                      responden (27%) dapat menyebutkan dua potensi bahaya, 21
                      responden (5%) dapat menyebutkan tiga potensi bahaya dan
                      hanya sembilan responden (2%) yang dapat menyebutkan empat
                      potensi bahaya.
                    </>
                  )}
                </p>
              </div>
            </Step>
            <Step data={4} key={4}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Does the respondent's village have an early warning
                      system?
                    </>
                  ) : (
                    <>
                      Apakah di desa responden memiliki sistem peringatan dini?
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Of the total respondents in the two districts, the
                      majority stated <b>don't know</b> if his village has a
                      system early warning.
                    </>
                  ) : (
                    <>
                      Dari total responden di kedua Kabupaten, mayoritas
                      menyatakan <b>tidak mengetahui</b> apakah di desanya
                      memiliki sistem peringatan dini.
                    </>
                  )}
                </p>
              </div>
            </Step>
            <Step data={5} key={5}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Does the respondent's village have an early warning
                      system? (per district)
                    </>
                  ) : (
                    <>
                      Apakah di desa responden memiliki sistem peringatan dini?
                      (per kabupaten)
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      When viewed from the graph, the majority of respondents
                      from both The district is not aware of an early warning
                      system in their village.
                    </>
                  ) : (
                    <>
                      Bila dilihat dari grafik, mayoritas responden dari kedua
                      Kabupaten tidak mengetahui adanya sistem peringatan dini
                      di desa mereka.
                    </>
                  )}
                </p>
              </div>
            </Step>
            <Step data={6} key={6}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Where do respondents get early warning information from?
                    </>
                  ) : (
                    <>
                      {" "}
                      Darimana responden mendapatkan informasi peringatan dini?
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      In this graph, the 3 biggest responses to get information
                      early warning is through friends, natural phenomena and
                      cellphones
                    </>
                  ) : (
                    <>
                      {" "}
                      Pada grafik ini, 3 respon terbesar untuk mendapatkan
                      informasi peringatan dini adalah melalui teman, gejala
                      alam dan HP
                    </>
                  )}
                </p>
              </div>
            </Step>
            <Step data={7} key={7}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Where do respondents get early warning information from?
                      (per district)
                    </>
                  ) : (
                    <>
                      Darimana responden mendapatkan informasi peringatan dini?
                      (per kabupaten)
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? <></> : <></>}
                  Responden di kedua Kabupaten menyatakan tidak mengetahui
                  darimana mendapatkan informasi peringatan dini.
                </p>
              </div>
            </Step>
            <Step data={8} key={8}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      What do respondents do when they get warning info early?
                    </>
                  ) : (
                    <>
                      {" "}
                      Apa yang responden lakukan ketika mendapatkan info
                      peringatan dini?
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Only a few respondents are aware of the regulations
                      disaster management in their village, namely eight people
                      (2%) of all respondents, four people (3%) of respondents
                      women, four people (2%) of the male respondents, three
                      people (2%) among respondents in Manggarai, and five
                      people (2%) on respondents in Tanggamus.
                    </>
                  ) : (
                    <>
                      {" "}
                      Hanya sedikit responden yang mengetahui adanya peraturan
                      penanggulangan bencana di desa mereka, yaitu delapan orang
                      (2%) pada semua responden, empat orang (3%) padaresponden
                      perempuan, empat orang (2%) pada responden laki-laki, tiga
                      orang (2%) di kalangan responden di Manggarai, dan lima
                      orang (2%) pada responden di Tanggamus.
                    </>
                  )}
                </p>
              </div>
            </Step>
            <Step data={9} key={9}>
              <div className="my-96 bg-red-600 text-white rounded-md p-10 mx-10">
                <p className="font-semibold text-center pb-5 text-xl">
                  {bahasa === "EN" ? (
                    <>
                      What do respondents do when they get warning info early?
                      (per district)
                    </>
                  ) : (
                    <>
                      {" "}
                      Apa yang responden lakukan ketika mendapatkan info
                      peringatan dini?(per kabupaten)
                    </>
                  )}
                </p>
                <p className="text-justify text-xl">
                  {bahasa === "EN" ? (
                    <>
                      Only a few respondents are aware of the regulations
                      disaster management in their village, namely eight people
                      (2%) of all respondents, four people (3%) of respondents
                      women, four people (2%) of the male respondents, three
                      people (2%) among respondents in Manggarai, and five
                      people (2%) on respondents in Tanggamus.
                    </>
                  ) : (
                    <>
                      {" "}
                      Hanya sedikit responden yang mengetahui adanya peraturan
                      penanggulangan bencana di desa mereka, yaitu delapan orang
                      (2%) pada semua responden, empat orang (3%) padaresponden
                      perempuan, empat orang (2%) pada responden laki-laki, tiga
                      orang (2%) di kalangan responden di Manggarai, dan lima
                      orang (2%) pada responden di Tanggamus.
                    </>
                  )}
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
