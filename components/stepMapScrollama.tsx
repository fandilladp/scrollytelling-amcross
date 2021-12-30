import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Scrollama, Step } from "react-scrollama";
import imgProvLampung from "../public/images/provlampung.jpg";
import imgTanggamus from "../public/images/gee-tgm.jpg";
import imgResikoBanjirTanggamus from "../public/images/banjirsemaka1.jpg";
import imgDesaDampinganTanggamus from "../public/images/tgm-des.jpeg";
import imgProvNTT from "../public/images/ra-ntt.png";
import imgManggarai from "../public/images/gee-mgr.png";
import imgResikoBanjirManggarai from "../public/images/mgr-bnj.jpg";
import imgDesaDampinganManggarai from "../public/images/manggarai-keg01.jpg";
import layerMap from "./layerMap";
const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFuZGlsbGFkcCIsImEiOiJja2t2bGhtdW8xNWE1MnBsbXR5bTFyNm94In0.Cw8RqeLPToDY7XpQuI4cjw";

export default function stepMapScrollama() {
  const [pageIsMounted, setPageIsMounted] = useState(false);
  const [Map, setMap] = useState();
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  useEffect(() => {
    setPageIsMounted(true);
    const Map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/fandilladp/ckxdi9e6qeyjl15luv88kx85q",
      interactive: false,
      center: { lon: 0.0, lat: 0.0 },
      zoom: 1.0,
      pitch: 0.0,
      bearing: 0.0,
    });
    setMap(Map);
  }, []);

  // This callback fires when a Step hits the offset threshold. It receives the
  // data prop of the step, which in this demo stores the index of the step.
  const onStepEnter = ({ data }) => {
    setCurrentStepIndex(data);
  };

  useEffect(() => {
      layerMap(Map, currentStepIndex);
  }, [pageIsMounted, setMap, Map, currentStepIndex]);
  return (
    <>
      <div id="map" className="h-screen w-screen top-0 fixed" />
      <div style={{ margin: "50vh 0", border: "2px dashed skyblue" }}>
        <Scrollama onStepEnter={onStepEnter}>
          <Step data={1} key={1}>
            <div
              style={{
                margin: "50vh 0",
                border: "1px solid grReactay",
                opacity: currentStepIndex === 1 ? 1 : 1,
              }}
              className="relative bg-white rounded-md left-20 w-80 h-50 p-10"
            >
              <h3>Lampung</h3>
              <Image src={imgProvLampung} width="200px" height="200px" />
              <p className="imageCredit">
                <a href="https://lampung.bps.go.id/publication/2021/09/03/71dfb425039080bb0d5617d0/potret-sensus-penduduk-2020-provinsi-lampung.html">
                  Provinsi Lampung
                </a>
              </p>
              <p>
                Dengan luas wilayah Provinsi Lampung sebesar 34,62 ribu
                kilometer persegi, maka kepadatan penduduk Provinsi Lampung pada
                tahun 2020 sebanyak 260 jiwa per kilometer persegi. Angka ini
                meningkat dari hasil SP2010 yang mencatat kepadatan penduduk
                Provinsi Lampung sebanyak 220 jiwa per kilometer
                layout="fill"persegi dan hasil SP2000 yang mencapai 192 jiwa per
                kilometer persegi.
              </p>
            </div>
          </Step>
          <Step data={2} key={2}>
            <div
              style={{
                margin: "50vh 0",
                border: "1px solid grReactay",
                opacity: currentStepIndex === 2 ? 1 : 1,
              }}
              className="relative"
            >
              <h3>TANGGAMUS</h3>
              <Image src={imgTanggamus} width="200px" height="200px" />
              <p className="imageCredit">
                <a href="https://kimyrae1.users.earthengine.app/view/banjir-kabupaten-tanggamus-2021">
                  Analisis Google Earth Engine Alluvionne
                </a>
              </p>
              <p>
                Kabupaten Tanggamus adalah salah satu kabupaten di Provinsi
                Lampung, Indonesia. Ibu kota kabupaten ini terletak di Kota
                Agung. Kabupaten ini memiliki luas wilayah 4.654,98 Km² dan
                berpenduduk sebanyak 640.275 jiwa (2020) dengan kepadatan
                penduduk 137 jiwa/km². Badan Penanggulangan Bencana Daerah
                (BPBD) Kabupaten Tanggamus menyatakan ada 12 kecamatan di Bumi
                Begawi Jejama ini yang masuk dalam katagori rawan bencana banjir
                dan tanah longsor. Itu terjadi karena selain berada diwilayah
                perbukitan juga sungai yang berukuran besar.
              </p>
            </div>
          </Step>
          <Step data={3} key={3}>
            <div
              style={{
                margin: "50vh 0",
                border: "1px solid grReactay",
                opacity: currentStepIndex === 3 ? 1 : 1,
              }}
              className="relative"
            >
              <h3>Risiko Banjir</h3>
              <Image
                src={imgResikoBanjirTanggamus}
                width="200px"
                height="200px"
              />
              <p className="imageCredit">
                <a href="https://inarisk.bnpb.go.id/pdf/Buku%20RBI_Final_low.pdf">
                  RBI BNPB
                </a>
              </p>
              <p>
                Berdasarkan kajian risiko inaRISK BNPB, kabupaten Tanggamus
                memiliki index risiko dengan nilai 0.083 - 0.658 yaitu rendah
                sampai tinggi.
              </p>
            </div>
          </Step>
          <Step data={4} key={4}>
            <div
              style={{
                margin: "50vh 0",
                border: "1px solid grReactay",
                opacity: currentStepIndex === 4 ? 1 : 1,
              }}
              className="relative"
            >
              <h3>Desa Dampingan di kabupaten Tanggamus</h3>
              <Image
                src={imgDesaDampinganTanggamus}
                width="200px"
                height="200px"
              />
              <p>
                Palang Merah Amerika dan PMI telah memilih tujuh desa di
                kecamatan Semaka, kabupaten Tanggamus untuk implementasi
                berdasarkan pada kriteria yang disepakati untuk pemilihan desa
                terkait dengan unsur-unsur potensi cabang PMI tingkat kabupaten
                yang mungkin relatif lebih kondusif untuk keberhasilan
                koordinasi dan implementasi, sambil tetap mengakui bahwa
                peningkatan kapasitas cabang-cabang ini akan menjadi pusat
                komponen kesiapan kelembagaan dari proyek.
              </p>
              <div
                className="flourish-embed flourish-table"
                data-src="visualisation/3919568"
              ></div>
            </div>
          </Step>
          <Step data={5} key={5}>
            <div
              style={{
                margin: "50vh 0",
                border: "1px solid grReactay",
                opacity: currentStepIndex === 5 ? 1 : 1,
              }}
              className="relative"
            >
              <h3>Pulau NTT</h3>
              <Image src={imgProvNTT} width="200px" height="200px" />
              <p className="imageCredit">
                <a href="https://localisesdgs-indonesia.org/profil-tpb/profil-daerah/17">
                  Profil Daerah NTT
                </a>
              </p>
              <p>
                Wilayah administratif NTT terdiri atas 12 daerah Kabupaten/Kota.
                Jumlah ini terus bertambah hingga pada tahun 2019 wilayah
                administratif NTT terbagi atas 21 Kabupaten dan 1 Kota.
                Satu-satunya kota di NTT yaitu Kota Kupang, ibukota provinsi NTT
                yang berada bagian barat Pulau Timor. Provinsi dengan satwa
                endemik Komodo ini memiliki luas wilayah darat seluas 47.931,54
                km2. Berdasarkan data BPS tahun 2020, jumlah populasi di
                Provinsi NTT mencapai 5.325.566 jiwa dengan kepadatan penduduk
                sebesar 111 jiwa per km2. Jika dilihat berdasarkan jenis
                kelamin, penduduk dengan jenis kelamin perempuan lebih tinggi
                daripada laki-laki terutama dengan rasio jenis kelamin di
                Provinsi NTT tahun 2020 sebesar 98,19 persen.
              </p>
            </div>
          </Step>
          <Step data={6} key={6}>
            <div
              style={{
                margin: "50vh 0",
                border: "1px solid grReactay",
                opacity: currentStepIndex === 6 ? 1 : 1,
              }}
              className="relative"
            >
              <h3>Kabupaten Manggarai</h3>
              <Image src={imgManggarai} width="200px" height="200px" />
              <p className="imageCredit">
                <a href="https://kimyrae1.users.earthengine.app/view/banjir-kabupaten-manggarai-tahun-2021/">
                  Analisis Google Earth Engine Alluvionne
                </a>
              </p>
              <p>
                Kabupaten Manggarai merupakan daerah dataran tinggi yang
                didominasi oleh bentuk permukaan daratan yang bergelombang
                dengan kemiringan lahan ≥40% (pegunungan) yaitu seluas 38,36%
                dan kemiringan lahan antara 15%-40% yakni seluas 55,41% dari
                luas wilayah Kabupaten Manggarai. Kabupaten Manggarai memiliki
                12 sungai yang berpotensi banjir, dari beberapa sungai tersebut
                diatas pada tahun 2019 telah menyebabkan banjir dan
                mengakibatkan rusaknyanya fasilitas masyarakat dan fasilitas
                umum lainnya sejumlah 22 Kejadian.
              </p>
            </div>
          </Step>
          <Step data={7} key={7}>
            <div
              style={{
                margin: "50vh 0",
                border: "1px solid grReactay",
                opacity: currentStepIndex === 7 ? 1 : 1,
              }}
              className="relative"
            >
              <h3>Risiko Banjir</h3>
              <Image
                src={imgResikoBanjirManggarai}
                width="200px"
                height="200px"
              />
              <p className="imageCredit">
                <a href="https://inarisk.bnpb.go.id/pdf/Buku%20RBI_Final_low.pdf">
                  RBI BNPB
                </a>
              </p>
              <p>
                Berdasarkan kajian risiko inaRISK BNPB, kabupaten Manggarai
                memiliki index risiko dengan nilai 0.072 - 0.616 yaitu rendah
                sampai sedang.
              </p>
            </div>
          </Step>
          <Step data={8} key={8}>
            <div
              style={{
                margin: "50vh 0",
                border: "1px solid grReactay",
                opacity: currentStepIndex === 8 ? 1 : 1,
              }}
              className="relative"
            >
              <h3>Desa Dampingan di kabupaten Manggarai</h3>
              <Image
                src={imgDesaDampinganManggarai}
                width="200px"
                height="200px"
              />
              <p>
                Palang Merah Amerika dan PMI telah memilih lima desa di
                Kecamatan Reok, Kabupaten Reok. Penduduk di kabupaten ini juga
                menghadapi paparan yang tinggi terhadap cuaca ekstrem,
                kekeringan, gempa bumi, tanah longsor, banjir, wabah penyakit
                dan wabah, tsunami serta badai dan abrasi pantai yang ekstrem
                (Badan Nasional Penanggulangan Bencana, 2015).
              </p>
            </div>
          </Step>
        </Scrollama>
      </div>
    </>
  );
}
