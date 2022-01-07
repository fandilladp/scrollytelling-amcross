import React from "react";
import Image from "next/image";
import logoCredit from "../public/images/LogoPMI.png";

export default function CreditFooter() {
  return (
    <footer className="text-center lg:text-left text-gray-600">
      <div className="flex justify-center">
        <div className="max-w-6xl">
          <p className="py-20 px-10 text-justify text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            sunt dicta eaque cupiditate! Cum, suscipit deserunt! Eius cumque
            deserunt beatae fugiat ut, doloremque dignissimos delectus tempore,
            provident neque explicabo eaque.
          </p>
        </div>
      </div>
      <div className="text-center py-6 px-6 bg-gray-200">
        <Image src={logoCredit} width={200} height={50} />   
      </div>
    </footer>
  );
}
