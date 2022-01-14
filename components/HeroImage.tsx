import { useEffect } from "react";
import style from "./css/Header.module.css";

interface Type {
  data : any;
  bg: any;
}
export default function HeroImage(props : Type) {

  return (
    <div>
      {props.bg === 1 ? <div className={style.heroimage}></div> : null }
      {props.bg === 2 ? <div className={style.heroimage2}></div> : null }
      {props.bg === 3 ? <div className={style.heroimage3}></div> : null }
      
      <div className={style.herotext}>
        <h1 style={{ fontFamily: "helveticaNeue" }}>
         {props.data}
        </h1>
      </div>
    </div>
  );
}
