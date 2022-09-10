import Image from "next/image";
import BaseLine01 from "../public/images/baseline01.jpg";

export default function BaselineIndex(props: any) {
  const bahasa = props.onSelectLanguage;
  return (
    <div
      className="relative bg-white mt-96 flex justify-center"
      style={{ fontFamily: "trebuchet" }}
    >
      <div className="items-center w-full mx-auto ">
        <div className="py-10">
          <h1
            className="font-bold text-2xl text-center my-10"
            style={{ fontSize: "5vh", fontFamily: "helveticaNeue" }}
          >
            {bahasa === "EN" ? (
              <>Program Background</>
            ) : (
              <> Latar Belakang Program</>
            )}
          </h1>
          <Image src={BaseLine01} layout="responsive" />
          <div className="flex w-full justify-center">
            <div className="max-w-6xl">
              <p className="py-5 px-10 text-justify text-xl">
                {bahasa === "EN" ? (
                  <>
                    Lampung and East Nusa Tenggara provinces were chosen as high
                    priority areas designated in the high risk class in the
                    national risk reduction index.
                  </>
                ) : (
                  <>
                    {" "}
                    Provinsi Lampung dan Nusa Tenggara Timur dipilih sebagai
                    wilayah prioritas tinggi ditetapkan dalam kelas risiko
                    tinggi dalam indeks pengurangan risiko nasional.
                  </>
                )}
              </p>
              <p className="py-5 px-10 text-justify text-xl">
                {bahasa === "EN" ? (
                  <>
                    This program aims to build community capacity in disaster
                    preparedness and when facing disasters, as well as to
                    strengthen PMI institutional capacity in providing disaster
                    risk management services to the community. Through this
                    program, vulnerable community groups are expected to
                    overcome vulnerabilities in the form of inequality, gender
                    equality, exclusion, and chronic environmental degradation.
                  </>
                ) : (
                  <>
                    {" "}
                    Program ini bertujuan untuk membangun kapasitas masyarakat
                    dalam kesiapsiagaan dan saat menghadapi bencana, serta untuk
                    memperkuat kapasitas kelembagaan PMI dalam memberikan
                    layanan manajemen risiko bencana yang penting kepada
                    masyarakat. Melalui program ini, kelompok masyarakat rentan
                    diharapkan bisa mengatasi kerentanan berupa kesenjangan,
                    kesetaraan gender, pengucilan, dan degradasi lingkungan
                    kronis.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        <iframe
          className="w-full aspect-video youtube"
          title="vimeo-player"
          src="https://www.youtube.com/embed/Y6JPel2DDqU?controls=0"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="py-10 ">
          <h1
            className="font-bold text-2xl text-center my-10 font-sans"
            style={{ fontSize: "5vh", fontFamily: "helveticaNeue" }}
          >
            {bahasa === "EN" ? (
              <>Baseline Study</>
            ) : (
              <>
                Studi <i>Baseline</i>
              </>
            )}
          </h1>
          <div className="w-full flex justify-center">
            <div className="max-w-6xl">
              <p className="py-5 px-10 text-justify text-xl">
                {bahasa === "EN" ? (
                  <>
                    Based on preliminary data obtained through the Baseline Study, the community and the school community have knowledge of the risks of disasters in their environment, but there is still few who understand how to respond properly in planning or reacting when disasters occur.
                  </>
                ) : (
                  <>
                    Berdasarkan data awal yang didapatkan melalui Studi
                    <i>Baseline</i>, masyarakat dan komunitas sekolah memiliki pengetahuan mengenai risiko bencana yang ada di lingkungan mereka, namum masih sedikit yang memahami bagaimana respon yang tepat dalam merencanakan atau bereaksi ketika bencana terjadi.
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
        <iframe
          className="w-full aspect-video youtube"
          title="vimeo-player"
          src="https://www.youtube.com/embed/pJdIXt1zv0s?controls=0"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="w-full flex justify-center mb-20">
          <div className="max-w-6xl">
            <p className="py-5 px-10 text-justify text-xl">
              {bahasa === "EN" ? (
                <>
                  Capacity building in the community has begun to run with the establishment of SIBAT in several target communities. Furthermore, many activities are related to the COVID-19 response in the implementation area. 
                </>
              ) : (
                <>
                  Peningkatan kapasitas di masyarakat sudah mulai berjalan dengan dibentuknya SIBAT di beberapa komunitas sasaran. Selanjutnya aktivitas yang dilakukan banyak yang berhubungan dengan respon COVID-19 di area implementasi.
                </>
              )}
            </p>
            <p className="py-5 px-10 text-justify text-xl">
              {bahasa === "EN" ? (
                <>
                  Baseline Study Results can be seen in the following data visualization.
                </>
              ) : (
                <>
                 Hasil Studi Baseline bisa dilihat pada visualisasi data berikut ini.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
