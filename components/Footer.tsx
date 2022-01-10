import Link from "next/link";
import React from "react";

interface Type{
  data: any;
  link: any
}

export default function Footer(props: Type) {
  return (
    <div className="relative bg-red-600 w-full h-20 text-white text-xl text-center font-bold pt-6" style={{ fontFamily: "trebuchet" }}>
      <Link href={`${props.link}`}>
       {props.data}
      </Link>
    </div>
  );
}
