import Image from "next/image";
import { useEffect, useState } from "react";
import { Parallax, Background } from "react-parallax";
import { Scrollama, Step } from "react-scrollama";
import imgResikoBanjirTanggamus from "../public/images/banjirsemaka1.jpg";
import imgManggarai from "../public/images/gee-mgr.png";
import imgTanggamus from "../public/images/gee-tgm.jpg";
import imgDesaDampinganManggarai from "../public/images/manggarai-keg01.jpg";
import imgResikoBanjirManggarai from "../public/images/mgr-bnj.jpg";
import imgProvLampung from "../public/images/provlampung.jpg";
import imgProvNTT from "../public/images/ra-ntt.png";
import imgDesaDampinganTanggamus from "../public/images/tgm-des.jpeg";
import layerMap from "./LayerMap";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFuZGlsbGFkcCIsImEiOiJja2t2bGhtdW8xNWE1MnBsbXR5bTFyNm94In0.Cw8RqeLPToDY7XpQuI4cjw";

export default function StepMapScrollama() {
  const [Map, setMap] = useState();
  const [currentStepIndex, setCurrentStepIndex] = useState(false);
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
        className="pt-3 pb-0 relative mx-auto"
        style={{ fontFamily: "trebuchet" }}
      >
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={1} key={1}>
            <div className="my-96 bg-white rounded-md  md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                Provinsi Lampung
              </h3>
              <Image src={imgProvLampung} className="w-full" />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://lampung.bps.go.id/publication/2021/09/03/71dfb425039080bb0d5617d0/potret-sensus-penduduk-2020-provinsi-lampung.html">
                  Provinsi Lampung
                </a>
              </p>
              <p className="text-justify text-xl">
                Wilayah Provinsi Lampung memiliki luas sebesar 34,62 ribu
                kilometer persegi dengan kepadatan penduduk 260 jiwa per
                kilometer persegi pada tahun 2020. Angka ini meningkat
                berdasarkan data Sensus Penduduk 2010 yang mencatat kepadatan
                penduduk Provinsi Lampung sebanyak 220 jiwa per kilometer
                persegi dan 192 jiwa per kilometer persegi berdasarkan Sensus
                Penduduk 2000.
              </p>
            </div>
          </Step>
          <Step data={2} key={2}>
            <div className="my-96 bg-white rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                Kabupaten TANGGAMUS
              </h3>
              <Image src={imgTanggamus} className="w-full" />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://kimyrae1.users.earthengine.app/view/banjir-kabupaten-tanggamus-2021">
                  Analisis Google Earth Engine Alluvionne
                </a>
              </p>
              <p className="text-justify text-xl">
                Kabupaten Tanggamus ini memiliki luas wilayah 4.654,98 Km² dan
                berpenduduk sebanyak 640.275 jiwa (2020) dengan kepadatan
                penduduk 137 jiwa/km². Badan Penanggulangan Bencana Daerah
                (BPBD) Kabupaten Tanggamus menyatakan ada 12 kecamatan di Bumi
                Begawi Jejama ini yang masuk dalam katagori rawan bencana banjir
                dan tanah longsor.Hal ini disebabkan oleh lokasi geografis
                kabupaten yang berada diwilayah perbukitan disertai
                sungai-sungai yang berukuran besar.
              </p>
            </div>
          </Step>
          <Step data={3} key={3}>
            <div className="my-96 bg-white rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                Risiko Banjir
              </h3>
              <Image src={imgResikoBanjirTanggamus} className="w-full" />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://inarisk.bnpb.go.id/pdf/Buku%20RBI_Final_low.pdf">
                  RBI BNPB
                </a>
              </p>
              <p className="text-justify text-xl">
                Berdasarkan kajian risiko inaRISK BNPB, Kabupaten Tanggamus
                memiliki indeks risiko bencana dengan nilai 0.083 - 0.658 yaitu
                rendah sampai tinggi.
              </p>
            </div>
          </Step>
          <Step data={4} key={4}>
            <div className="my-96 bg-white rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                Desa Dampingan di kabupaten Tanggamus
              </h3>
              <Image src={imgDesaDampinganTanggamus} className="w-full" />
              <p className="text-justify text-xl">
                Palang Merah Amerika dan PMI mengimplementasikan program ini di
                Kecamatan Semaka, Kabupaten Tanggamus dengan merujuk pada
                kriteria yang disepakati untuk pemilihan desa terkait dengan
                unsur-unsur potensi cabang PMI tingkat kabupaten yang untuk
                menjalankan koordinasi dan implementasi program. Namun demikian,
                peningkatan kapasitas kantor cabang PMI ini tetap menjadi
                komponen utama untuk meningkatkan kesiapan kelembagaan.
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
                Provinsi Nusa Tenggara Timur (NTT)
              </h3>
              <Image src={imgProvNTT} className="w-full" />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://localisesdgs-indonesia.org/profil-tpb/profil-daerah/17">
                  Profil Daerah NTT
                </a>
              </p>
              <p className="text-justify text-xl">
                Wilayah NTT terdiri atas 12 daerah Kabupaten/Kota. Proses
                pemekaran wilayah yang terjadi menjadikan wilayah administratif
                Provinsi NTT pada tahun 2019 terbagi atas 21 Kabupaten dan 1
                Kota yaitu Kota Kupang, sebagai ibukota provinsi NTT yang berada
                bagian barat Pulau Timor. Provinsi dengan satwa endemik Komodo
                ini memiliki luas wilayah darat 47.931,54 km2. Berdasarkan data
                BPS tahun 2020, jumlah populasi di Provinsi NTT mencapai
                5.325.566 jiwa dengan kepadatan penduduk sebesar 111 jiwa per
                km2. Jika dilihat berdasarkan jenis kelamin, penduduk dengan
                jenis kelamin perempuan lebih tinggi daripada laki-laki terutama
                dengan rasio jenis kelamin di Provinsi NTT tahun 2020 sebesar
                98,19 persen.
              </p>
            </div>
          </Step>
          <Step data={6} key={6}>
            <div className="my-96 bg-white rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                Kabupaten Manggarai
              </h3>
              <Image src={imgManggarai} className="w-full" />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://kimyrae1.users.earthengine.app/view/banjir-kabupaten-manggarai-tahun-2021/">
                  Analisis Google Earth Engine Alluvionne
                </a>
              </p>
              <p className="text-justify text-xl">
                Kabupaten Manggarai merupakan daerah dataran tinggi yang
                didominasi oleh bentuk permukaan daratan yang bergelombang
                dengan kemiringan lahan ≥40% (pegunungan) yaitu seluas 38,36%
                dan kemiringan lahan antara 15%-40% yakni seluas 55,41% dari
                luas wilayah Kabupaten Manggarai. Kabupaten Manggarai memiliki
                12 sungai yang berpotensi banjir, dari beberapa sungai tersebut
                telah menyebabkan banjir dan mengakibatkan rusaknyanya fasilitas
                masyarakat dan fasilitas umum lainnya dengan 22 Kejadian pada
                tahun 2019.
              </p>
            </div>
          </Step>
          <Step data={7} key={7}>
            <div className="my-96 bg-white rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                Risiko Banjir
              </h3>
              <Image src={imgResikoBanjirManggarai} className="w-full" />
              <p className="text-xs text-blue-500 mb-3">
                <a href="https://inarisk.bnpb.go.id/pdf/Buku%20RBI_Final_low.pdf">
                  RBI BNPB
                </a>
              </p>
              <p className="text-justify text-xl">
                Berdasarkan kajian risiko inaRISK BNPB, kabupaten Manggarai
                memiliki indeks risiko dengan nilai 0.072 - 0.616 yaitu rendah
                sampai sedang.
              </p>
            </div>
          </Step>
          <Step data={8} key={8}>
            <div className="my-96 bg-white rounded-md md:w-1/3 sm:w-1/2 py-2.5 px-5 mx-14 mb-3.5">
              <h3 className="font-bold uppercase text-justify mb-2 text-xl">
                Desa Dampingan di kabupaten Manggarai
              </h3>
              <Image src={imgDesaDampinganManggarai} className="w-full" />
              <p className="text-justify text-xl">
                Palang Merah Amerika dan PMI mengimplementasikan program ini di
                lima desa di Kecamatan Reok, Kabupaten Reok. Selain banjir
                penduduk di wilayah ini juga menghadapi paparan risiko tinggi
                terhadap cuaca ekstrem, kekeringan, gempa bumi, tanah longsor,
                banjir, wabah penyakit dan wabah, tsunami serta badai dan abrasi
                pantai yang ekstrem (Badan Nasional Penanggulangan Bencana,
                2015).
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
