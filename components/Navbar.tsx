import { useState } from "react";
import Image from "next/image";
import LogoPMI from "../public/images/LogoPMI.jpg";
import LogoAMCROSS from "../public/images/LogoAMCROSS.png";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setActive(!active);
  };
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
                Latar Belakang
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
                Peningkatan Kapasitas
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
                Harapan Kedepan
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
    // navbar lama
    // <nav className="flex fixed z-50 flex-wrap bg-white w-full">
    //   <div className="lg:hidden ">
    //     <Link href="/">
    //       <Image
    //         src={LogoPMI}
    //         alt="Logo"
    //         width="100"
    //         height="45"
    //         className="mr-2 py-auto"
    //       />
    //     </Link>
    //     <Link href="/">
    //       <Image
    //         src={LogoAMCROSS}
    //         alt="Logo"
    //         width="100"
    //         height="60"
    //         className="mr-2"
    //       />
    //     </Link>
    //     <div
    //       className={`${
    //         active ? "" : "hidden"
    //       } bg-white w-fit lg:max-w-6xl lg:mx-auto lg:px-4`}
    //     >
    //       <div className=" lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
    //         <div>
    //           <a href="/" className="hidden lg:flex items-center py-4 px-2">
    //             <Image
    //               src={LogoPMI}
    //               alt="Logo"
    //               width="100"
    //               height="60"
    //               className="mr-2"
    //             />
    //           </a>
    //         </div>
    //         <Link href="/">
    //           <a
    //             className={`${
    //               router.pathname == "/"
    //                 ? "bg-red-600 text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-900 hover:text-white"
    //                 : "bg-white text-red-600 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-600 hover:text-white"
    //             }`}
    //           >
    //             Latar Belakang
    //           </a>
    //         </Link>
    //         <Link href="peningkatanKapasitas">
    //           <a
    //             className={`${
    //               router.pathname == "/peningkatanKapasitas"
    //                 ? "bg-red-600 text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-900 hover:text-white"
    //                 : "bg-white text-red-600 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-600 hover:text-white"
    //             }`}
    //           >
    //             Peningkatan Kapasitas
    //           </a>
    //         </Link>
    //         <Link href="harapanKedepannya">
    //           <a
    //             className={`${
    //               router.pathname == "/harapanKedepannya"
    //                 ? "bg-red-600 text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-900 hover:text-white"
    //                 : "bg-white text-red-600 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-600 hover:text-white"
    //             }`}
    //           >
    //             Harapan Kedepan
    //           </a>
    //         </Link>
    //         <div>
    //           <a href="#" className="hidden lg:flex items-center py-4 px-2">
    //             <Image
    //               src={LogoAMCROSS}
    //               alt="Logo"
    //               width="100"
    //               height="60"
    //               className="mr-2"
    //             />
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <button
    //     className=" inline-flex p-3 rounded lg:hidden text-red-600 ml-auto hover:text-red-800 outline-none"
    //     onClick={handleClick}
    //   >
    //     <svg
    //       className="w-6 h-6"
    //       fill="none"
    //       stroke="currentColor"
    //       viewBox="0 0 24 24"
    //       xmlns="http://www.w3.org/2000/svg"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth={2}
    //         d="M4 6h16M4 12h16M4 18h16"
    //       />
    //     </svg>
    //   </button>
    //   <div className={`hidden lg:flex lg:max-w-6xl lg:mx-auto lg:px-4`}>
    //     <div className=" lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
    //       <div>
    //         <a href="#" className="hidden lg:flex items-center py-4 px-2">
    //           <Image
    //             src={LogoPMI}
    //             alt="Logo PMI"
    //             width="100"
    //             height="45"
    //             className="mr-2"
    //           />
    //         </a>
    //       </div>
    //       <Link href="/">
    //         <a
    //           className={`${
    //             router.pathname == "/"
    //               ? "bg-red-600 text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-900 hover:text-white"
    //               : "bg-white text-red-600 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-600 hover:text-white"
    //           }`}
    //         >
    //           Latar Belakang
    //         </a>
    //       </Link>
    //       <Link href="peningkatanKapasitas">
    //         <a
    //           className={`${
    //             router.pathname == "/peningkatanKapasitas"
    //               ? "bg-red-600 text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-900 hover:text-white"
    //               : "bg-white text-red-600 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-600 hover:text-white"
    //           }`}
    //         >
    //           Peningkatan Kapasitas
    //         </a>
    //       </Link>
    //       <Link href="harapanKedepannya">
    //         <a
    //           className={`${
    //             router.pathname == "/harapanKedepannya"
    //               ? "bg-red-600 text-white lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-900 hover:text-white"
    //               : "bg-white text-red-600 lg:inline-flex lg:w-auto w-full px-3 py-2 rounded font-bold items-center justify-center hover:bg-red-600 hover:text-white"
    //           }`}
    //         >
    //           Harapan Kedepan
    //         </a>
    //       </Link>
    //       <div>
    //         <a href="#" className="hidden lg:flex items-center py-4 px-2">
    //           <Image
    //             src={LogoAMCROSS}
    //             alt="Logo AMCROSS"
    //             width="100"
    //             height="60"
    //             className="mr-2"
    //           />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    //   {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
    // </nav>
  );
}
