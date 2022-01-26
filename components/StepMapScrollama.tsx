import Image from "next/image";
import { useEffect, useState } from "react";
import { Parallax, Background } from "react-parallax";
import { Scrollama, Step } from "react-scrollama";
import imgResikoBanjirTanggamus from "../public/images/banjirsemaka1.jpg";
import imgManggarai from "../public/images/gee-mgr.jpg";
import imgTanggamus from "../public/images/gee-tgm.jpg";
import imgDesaDampinganManggarai from "../public/images/manggarai-keg01.jpg";
import imgResikoBanjirManggarai from "../public/images/mgr-bnj.jpg";
import imgProvLampung from "../public/images/provlampung.jpg";
import imgProvNTT from "../public/images/ra-ntt.jpg";
import imgDesaDampinganTanggamus from "../public/images/tgm-des.jpeg";
import layerMap from "./LayerMap";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFuZGlsbGFkcCIsImEiOiJja2t2bGhtdW8xNWE1MnBsbXR5bTFyNm94In0.Cw8RqeLPToDY7XpQuI4cjw";

export default function StepMapScrollama(props: any) {
  const bahasa = props.onSelectLanguage;
  const [Map, setMap] = useState();
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/fandilladp/ckxdi9e6qeyjl15luv88kx85q",
      interactive: false,
      center: { lon: 0.0, lat: 0.0 },
      zoom: 1.0,
      pitch: 0.0,
      bearing: 0.0,
    });
    setMap(map);
  }, []);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  useEffect(() => {
    if (currentStepIndex) {
      layerMap(Map, currentStepIndex);
    }
  }, [setMap, Map, currentStepIndex]);
  return (
    <>
      <div id="map" className="h-screen w-screen top-0 fixed -z-10" />
      <div
        className="pt-3 pb-0 relative mx-auto "
        style={{ fontFamily: "trebuchet" }}
      >
        <div className="sticky top-20  flex justify-end -z-10">
          <div className=" h-full w-1/4 flex justify-end relative">
            {currentStepIndex === 3 ? (
              <>
                <div className="h-fit w-fit mt-80  mx-10 p-2 flex bg-white rounded-md flex-col">
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    {bahasa === "EN" ? (
                      <>Flood Risk</>
                    ) : (
                      <> Indeks Risiko Banjir</>
                    )}
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-100" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.082594
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-200" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.214227
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-300" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.325212
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-400" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.449102
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-500" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.658167
                    </div>
                  </div>
                </div>
              </>
            ) : null}

            {currentStepIndex === 4 ? (
              <>
                <div className="h-fit w-fit mt-80  mx-10 p-2 flex bg-white rounded-md flex-col">
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    {bahasa === "EN" ? <>Population</> : <>Jumlah Penduduk</>}
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-100" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      1277
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-200" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      1565
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-300" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      1851
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-400" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      1954
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-500" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      2492
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-600" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      2776
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-penduduk-700" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      3581
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {currentStepIndex === 7 ? (
              <>
                <div className="h-fit w-fit mt-80  mx-10 p-2 flex bg-white rounded-md flex-col">
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    {bahasa === "EN" ? (
                      <>Flood Risk</>
                    ) : (
                      <> Indeks Risiko Banjir</>
                    )}
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-100" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.072555
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-200" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.193481
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-300" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.319243
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-400" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.452261
                    </div>
                  </div>
                  <div className="flex content-center py-2">
                    <div className=" w-5 h-5 bg-resikoBanjir-500" />
                    <div className="truncate px-1 text-xs md:text-md xl:text-md">
                      0.61672
                    </div>
                  </div>
                </div>
              </>
            ) : null}
            {currentStepIndex === 8 ? (
              <div className="h-fit w-fit mt-80  mx-10 p-2 flex bg-white rounded-md flex-col">
                <div className="truncate px-1 text-xs md:text-md xl:text-md">
                  {bahasa === "EN" ? <>Population</> : <>Jumlah Penduduk</>}
                </div>
                <div className="flex content-center py-2">
                  <div className=" w-5 h-5 bg-penduduk-100" />
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    1125
                  </div>
                </div>
                <div className="flex content-center py-2">
                  <div className=" w-5 h-5 bg-penduduk-200" />
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    2104
                  </div>
                </div>
                <div className="flex content-center py-2">
                  <div className=" w-5 h-5 bg-penduduk-300" />
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    2495
                  </div>
                </div>
                <div className="flex content-center py-2">
                  <div className=" w-5 h-5 bg-penduduk-400" />
                  <div className="truncate px-1 text-xs md:text-md xl:text-md">
                    2618
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={1} key={1}>
            <div className="my-96 z-20 bg-white rounded-md  md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                {bahasa === "EN" ? (
                  <>Lampung province</>
                ) : (
                  <> Provinsi Lampung</>
                )}
              </h3>
              <Image src={imgProvLampung} className="w-full" />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://lampung.bps.go.id/publication/2021/09/03/71dfb425039080bb0d5617d0/potret-sensus-penduduk-2020-provinsi-lampung.html">
                  {bahasa === "EN" ? (
                    <>Lampung province</>
                  ) : (
                    <>Provinsi Lampung</>
                  )}
                </a>
              </p>
              <p className="text-justify text-xl">
                {bahasa === "EN" ? (
                  <>
                    Lampung Province has an area of 34.62 thousand square
                    kilometers with a population density of 260 people per
                    square kilometers in 2020. This figure is increasing based
                    on 2010 Population Census data which recorded the density of
                    The population of Lampung Province is 220 people per
                    kilometer square footage and 192 inhabitants per square
                    kilometer based on the Census Population 2000.
                  </>
                ) : (
                  <>
                    Wilayah Provinsi Lampung memiliki luas sebesar 34,62 ribu
                    kilometer persegi dengan kepadatan penduduk 260 jiwa per
                    kilometer persegi pada tahun 2020. Angka ini meningkat
                    berdasarkan data Sensus Penduduk 2010 yang mencatat
                    kepadatan penduduk Provinsi Lampung sebanyak 220 jiwa per
                    kilometer persegi dan 192 jiwa per kilometer persegi
                    berdasarkan Sensus Penduduk 2000.
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={2} key={2}>
            <div className="my-96 bg-white rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                {bahasa === "EN" ? (
                  <>TANGGAMUS District</>
                ) : (
                  <>Kabupaten TANGGAMUS</>
                )}
              </h3>
              <Image src={imgTanggamus} className="w-full" />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://kimyrae1.users.earthengine.app/view/banjir-kabupaten-tanggamus-2021">
                  {bahasa === "EN" ? (
                    <>Google Earth Engine Alluvionne analysis</>
                  ) : (
                    <> Analisis Google Earth Engine Alluvionne</>
                  )}
                </a>
              </p>
              <p className="text-justify text-xl">
                {bahasa === "EN" ? (
                  <>
                    Tanggamus Regency has an area of 4,654.98 Km² and with a
                    population of 640,275 people (2020) with a density of
                    population 137 people/km². Regional Disaster Management
                    Agency (BPBD) of Tanggamus Regency states that there are 12
                    sub-districts on Earth Begawi Jejama is included in the
                    category prone to flood disasters and landslides. This is
                    due to geographic location districts located in hilly areas
                    accompanied by large rivers.
                  </>
                ) : (
                  <>
                    {" "}
                    Kabupaten Tanggamus ini memiliki luas wilayah 4.654,98 Km²
                    dan berpenduduk sebanyak 640.275 jiwa (2020) dengan
                    kepadatan penduduk 137 jiwa/km². Badan Penanggulangan
                    Bencana Daerah (BPBD) Kabupaten Tanggamus menyatakan ada 12
                    kecamatan di Bumi Begawi Jejama ini yang masuk dalam
                    katagori rawan bencana banjir dan tanah longsor.Hal ini
                    disebabkan oleh lokasi geografis kabupaten yang berada
                    diwilayah perbukitan disertai sungai-sungai yang berukuran
                    besar.
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={3} key={3}>
            <div className="my-96 bg-white rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                {bahasa === "EN" ? <>Flood Risk</> : <> Risiko Banjir</>}
              </h3>
              <Image src={imgResikoBanjirTanggamus} className="w-full" />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://inarisk.bnpb.go.id/pdf/Buku%20RBI_Final_low.pdf">
                  {bahasa === "EN" ? <>RBI BNPB</> : <>RBI BNPB</>}
                </a>
              </p>
              <p className="text-justify text-xl">
                {bahasa === "EN" ? (
                  <>
                    Based on BNPB's inaRISK risk assessment, Tanggamus Regency
                    has a disaster risk index with a value of 0.083 - 0.658,
                    namely low to high.
                  </>
                ) : (
                  <>
                    Berdasarkan kajian risiko inaRISK BNPB, Kabupaten Tanggamus
                    memiliki indeks risiko bencana dengan nilai 0.083 - 0.658
                    yaitu rendah sampai tinggi.
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={4} key={4}>
            <div className="my-96 bg-white rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                {bahasa === "EN" ? (
                  <>Assisted Village in Tanggamus . district</>
                ) : (
                  <> Desa Dampingan di kabupaten Tanggamus</>
                )}
              </h3>
              <Image src={imgDesaDampinganTanggamus} className="w-full" />
              <p className="text-justify text-xl">
                {bahasa === "EN" ? (
                  <>
                    The American Red Cross and PMI implemented this program in
                    Semaka District, Tanggamus Regency with reference to agreed
                    criteria for village selection related to potential elements
                    of the district-level PMI branch that are for carry out
                    program coordination and implementation. However, The
                    increase in PMI branch office capacity remains a main
                    component to improve institutional readiness.
                  </>
                ) : (
                  <>
                    {" "}
                    Palang Merah Amerika dan PMI mengimplementasikan program ini
                    di Kecamatan Semaka, Kabupaten Tanggamus dengan merujuk pada
                    kriteria yang disepakati untuk pemilihan desa terkait dengan
                    unsur-unsur potensi cabang PMI tingkat kabupaten yang untuk
                    menjalankan koordinasi dan implementasi program. Namun
                    demikian, peningkatan kapasitas kantor cabang PMI ini tetap
                    menjadi komponen utama untuk meningkatkan kesiapan
                    kelembagaan.
                  </>
                )}
              </p>
              <iframe
                className="flourish-embed flourish-table"
                width="100%"
                height="500"
                scrolling="no"
                src={`https://public.flourish.studio/visualisation/3919568/embed`}
              />
            </div>
          </Step>
          <Step data={5} key={5}>
            <div className="my-96 bg-white rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                {bahasa === "EN" ? (
                  <>East Nusa Tenggara (NTT) Province</>
                ) : (
                  <> Provinsi Nusa Tenggara Timur (NTT)</>
                )}
              </h3>
              <Image src={imgProvNTT} className="w-full" />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://localisesdgs-indonesia.org/profil-tpb/profil-daerah/17">
                  {bahasa === "EN" ? (
                    <>NTT Regional Profile</>
                  ) : (
                    <> Profil Daerah NTT</>
                  )}
                </a>
              </p>
              <p className="text-justify text-xl">
                {bahasa === "EN" ? (
                  <>
                    The NTT region consists of 12 regencies/cities. Process the
                    division of the territory that occurs makes an
                    administrative area NTT Province in 2019 is divided into 21
                    regencies and 1 The city is Kupang City, as the capital of
                    the province of NTT which is located the western part of the
                    island of Timor. Province with endemic Komodo dragon It has
                    a land area of 47,931.54 km2. Based on data BPS in 2020, the
                    total population in NTT Province reached 5,325,566 people
                    with a population density of 111 people per km2. When viewed
                    by gender, the population with female gender is higher than
                    male especially with a sex ratio in NTT Province in 2020 of
                    98.19 percent.
                  </>
                ) : (
                  <>
                    Wilayah NTT terdiri atas 12 daerah Kabupaten/Kota. Proses
                    pemekaran wilayah yang terjadi menjadikan wilayah
                    administratif Provinsi NTT pada tahun 2019 terbagi atas 21
                    Kabupaten dan 1 Kota yaitu Kota Kupang, sebagai ibukota
                    provinsi NTT yang berada bagian barat Pulau Timor. Provinsi
                    dengan satwa endemik Komodo ini memiliki luas wilayah darat
                    47.931,54 km2. Berdasarkan data BPS tahun 2020, jumlah
                    populasi di Provinsi NTT mencapai 5.325.566 jiwa dengan
                    kepadatan penduduk sebesar 111 jiwa per km2. Jika dilihat
                    berdasarkan jenis kelamin, penduduk dengan jenis kelamin
                    perempuan lebih tinggi daripada laki-laki terutama dengan
                    rasio jenis kelamin di Provinsi NTT tahun 2020 sebesar 98,19
                    persen.
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={6} key={6}>
            <div className="my-96 bg-white rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                {bahasa === "EN" ? (
                  <>Manggarai Regency</>
                ) : (
                  <> Kabupaten Manggarai</>
                )}
              </h3>
              <Image src={imgManggarai} className="w-full" />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://kimyrae1.users.earthengine.app/view/banjir-kabupaten-manggarai-tahun-2021/">
                  {bahasa === "EN" ? (
                    <>Google Earth Engine Alluvionne analysis</>
                  ) : (
                    <>Analisis Google Earth Engine Alluvionne</>
                  )}
                </a>
              </p>
              <p className="text-justify text-xl">
                {bahasa === "EN" ? (
                  <>
                    Manggarai Regency is a highland area which dominated by the
                    shape of the undulating land surface with a land slope of
                    40% (mountains) which is 38.36% and the slope of the land is
                    between 15% -40% which is 55.41% of the area of Manggarai
                    Regency. Manggarai Regency has 12 rivers that have the
                    potential to flood, from some of these rivers has caused
                    flooding and caused damage to facilities community and other
                    public facilities with 22 incidents on year 2019.
                  </>
                ) : (
                  <>
                    {" "}
                    Kabupaten Manggarai merupakan daerah dataran tinggi yang
                    didominasi oleh bentuk permukaan daratan yang bergelombang
                    dengan kemiringan lahan ≥40% (pegunungan) yaitu seluas
                    38,36% dan kemiringan lahan antara 15%-40% yakni seluas
                    55,41% dari luas wilayah Kabupaten Manggarai. Kabupaten
                    Manggarai memiliki 12 sungai yang berpotensi banjir, dari
                    beberapa sungai tersebut telah menyebabkan banjir dan
                    mengakibatkan rusaknyanya fasilitas masyarakat dan fasilitas
                    umum lainnya dengan 22 Kejadian pada tahun 2019.
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={7} key={7}>
            <div className="my-96 bg-white rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                {bahasa === "EN" ? <>Flood Risk</> : <>Risiko Banjir</>}
              </h3>
              <Image src={imgResikoBanjirManggarai} className="w-full" />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://inarisk.bnpb.go.id/pdf/Buku%20RBI_Final_low.pdf">
                  {bahasa === "EN" ? <>RBI BNPB</> : <>RBI BNPB</>}
                </a>
              </p>
              <p className="text-justify text-xl">
                {bahasa === "EN" ? (
                  <>
                    Based on BNPB's inaRISK risk assessment, Manggarai district
                    has a risk index with a value of 0.072 - 0.616 which is low
                    to moderate.
                  </>
                ) : (
                  <>
                    {" "}
                    Berdasarkan kajian risiko inaRISK BNPB, kabupaten Manggarai
                    memiliki indeks risiko dengan nilai 0.072 - 0.616 yaitu
                    rendah sampai sedang.
                  </>
                )}
              </p>
            </div>
          </Step>
          <Step data={8} key={8}>
            <div className="my-96 bg-white rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                {bahasa === "EN" ? (
                  <>Assisted Village in Manggarai kabupaten district</>
                ) : (
                  <>Desa Dampingan di kabupaten Manggarai</>
                )}
              </h3>
              <Image src={imgDesaDampinganManggarai} className="w-full" />
              <p className="text-justify text-xl">
                {bahasa === "EN" ? (
                  <>
                    The American Red Cross and PMI implemented this program in
                    five villages in Reok District, Reok Regency. Apart from the
                    flood residents in this region also face high risk exposure
                    against extreme weather, droughts, earthquakes, landslides,
                    floods, plagues and plagues, tsunamis and storms and
                    abrasion extreme coast (National Agency for Disaster
                    Management, 2015).
                  </>
                ) : (
                  <>
                    Palang Merah Amerika dan PMI mengimplementasikan program ini
                    di lima desa di Kecamatan Reok, Kabupaten Reok. Selain
                    banjir penduduk di wilayah ini juga menghadapi paparan
                    risiko tinggi terhadap cuaca ekstrem, kekeringan, gempa
                    bumi, tanah longsor, banjir, wabah penyakit dan wabah,
                    tsunami serta badai dan abrasi pantai yang ekstrem (Badan
                    Nasional Penanggulangan Bencana, 2015).
                  </>
                )}
              </p>
              <iframe
                className="flourish-embed flourish-table"
                width="100%"
                height="400"
                scrolling="no"
                src={`https://public.flourish.studio/visualisation/8235044/embed`}
              />
            </div>
          </Step>
        </Scrollama>
      </div>
    </>
  );
}
