import { useState, useEffect } from "react";
import Image from "next/image";
import LogoPMI from "../public/images/LogoPMI.jpg";
import LogoAMCROSS from "../public/images/LogoAMCROSS.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar(props: any) {
  const [active, setActive] = useState(false);
  const [translate, setTranslate] = useState("");
  const router = useRouter();

  const handleClick = () => {
    setActive(!active);
  };

  const handleTranslate = (data: any) => {
    setTranslate(data);
    props.onSelectLanguage(data);
    sessionStorage.setItem("translate", data);
  };

  useEffect(() => {
    const getData = sessionStorage.getItem("translate");
    setTranslate(getData);
    console.log(getData);
  }, []);
  return (
    <>
      <nav className="flex items-center w-full fixed z-50 flex-wrap bg-white p-3 ">
        <Link href="/">
          <Image
            src={LogoPMI}
            alt="Logo"
            width="200"
            height="45"
            className="inline-flex items-center p-2 mr-4"
          />
        </Link>
        <button
          className=" inline-flex p-3 bg-red-600 hover:bg-red-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a
                className={`${
                  router.pathname == "/"
                    ? "bg-red-600 text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-900 hover:text-white"
                    : "bg-white text-red-600 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-600 hover:text-white"
                }`}
              >
                {translate === "EN" ? <>Project Background</> : <> Latar Belakang</>}
              </a>
            </Link>
            <Link href="peningkatanKapasitas">
              <a
                className={`${
                  router.pathname == "/peningkatanKapasitas"
                    ? "bg-red-600 text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-900 hover:text-white"
                    : "bg-white text-red-600 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-600 hover:text-white"
                }`}
              >
                {translate === "EN" ? (
                  <>Capacity Building</>
                ) : (
                  <> Peningkatan Kapasitas</>
                )}
              </a>
            </Link>
            <Link href="harapanKedepannya">
              <a
                className={`${
                  router.pathname == "/harapanKedepannya"
                    ? "bg-red-600 text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-900 hover:text-white"
                    : "bg-white text-red-600 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-600 hover:text-white"
                }`}
              >
                {translate === "EN" ? <>Looking Forward</> : <> Harapan Kedepan</>}
              </a>
            </Link>
            {translate === "EN" ? (
              <div
                className="bg-white text-red-600 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold hover:bg-red-600 hover:text-white cursor-pointer align-center flex items-center content-center self-center justify-items-center"
                onClick={() => handleTranslate("ID")}
              >
                EN
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="align-middle px-1 h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              <div
                className="bg-white text-red-600 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold hover:bg-red-600 hover:text-white cursor-pointer align-center flex items-center content-center self-center justify-items-center"
                onClick={() => handleTranslate("EN")}
              >
                ID
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="align-middle px-1 h-7 w-7"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
