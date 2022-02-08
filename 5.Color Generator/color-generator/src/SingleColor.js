import React, { useEffect} from 'react';
import rgbToHex from './utils'
import { useState } from 'react/cjs/react.development';



export default function SingleColor({item, index}) {

    const [showText, SetShowText] = useState(false);

    const color = item.rgb.join(",");
    // console.log(item.rgb[0]);
    const hexColor = rgbToHex(item.rgb[0], item.rgb[1], item.rgb[2])

    useEffect( ()=>{
       const timeOut =  setTimeout(() => {
            SetShowText(false)
        }, 1000);

        return ()=>clearTimeout(timeOut);
    }, [showText])


    const copyClipBoard = ()=>{
        SetShowText(true);
        navigator.clipboard.writeText(hexColor);
    }

  return <article key={index} className={`colorShades ${index>10?"white":""} `} style={{background: `rgb(${color})`}} onClick={()=>copyClipBoard()}>
      <p>{item.weight}%</p>
      <p>{hexColor}</p> 
      <p className={showText?"show":"hide"}>Copy to ClipBoard</p>
  </article>
}
