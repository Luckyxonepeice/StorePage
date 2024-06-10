
import React from 'react'
import { IoShirt } from "react-icons/io5";
import { GiNecklaceDisplay } from "react-icons/gi";
import { GiAmpleDress } from "react-icons/gi";
import { PiTelevisionDuotone } from "react-icons/pi";



import style from '../styles/Header.module.css';

const ItemIndex = [0,1,2,3,4];


export default function Slider({type}:{type:string}) {

    let value = null

    if(type==='jewelery'){
        value=<GiNecklaceDisplay className={style.type1}></GiNecklaceDisplay>
    }
    else if( type==='men'){
        value=<IoShirt className={style.type1}></IoShirt>
    }
    else if(type === 'women'){
        value = <GiAmpleDress className={style.type1}></GiAmpleDress>
    }
    else{
        value = <PiTelevisionDuotone className={style.type1}></PiTelevisionDuotone>
    }

    
  return (
    <div className={style.type}>
       {
            ItemIndex.map((val,index)=>{
                return <div key={index}>
                    {value}
                    <h1 className={style.typeinfo}>{type} {val}</h1>
                </div>
            })
       }

    </div>
  )
}
