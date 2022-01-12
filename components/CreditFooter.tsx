import React from "react";
import Image from "next/image";
import logoCredit from "../public/images/LogoPMI.png";

export default function CreditFooter(props: any) {
  const bahasa = props.onSelectLanguage;

  return (
    <footer
      className="text-center lg:text-left text-gray-600"
      style={{ fontFamily: "trebuchet" }}
    >
      <div className="flex justify-center">
        <div className="max-w-6xl">
          <div className="py-20 px-10 text-justify text-sm flex gap-4 justify-center">
            <div className="font-semibold">
              {bahasa === "EN" ? (
                <>
                  <p>Video Editor</p>
                  <p>Data Analysis</p>
                  <p>Data Visualization</p>
                  <p>Website Designer</p>
                </>
              ) : (
                <>
                  {" "}
                  <p>Penyunting Video</p>
                  <p>Data Analisis</p>
                  <p>Visualisasi Data</p>
                  <p>Desainer Website</p>
                </>
              )}
            </div>
            <div className="font-semibold">
              <p>:</p>
              <p>:</p>
              <p>:</p>
              <p>:</p>
            </div>
            <div>
              <p>Saiful Azhari</p>
              <p>Wina Natalia</p>
              <p>Hilman Arioaji</p>
              <p>Fandilla DP</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center py-6 px-6 bg-gray-200">
        <Image src={logoCredit} width={200} height={50} />
      </div>
    </footer>
  );
}
