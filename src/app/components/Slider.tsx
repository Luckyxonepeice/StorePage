
import React from 'react'
import { PiHandbagSimpleLight } from "react-icons/pi";
import { GiNecklaceDisplay } from "react-icons/gi";
import { BsLuggage } from "react-icons/bs";
import { GiDiamondRing } from "react-icons/gi";
import { IoDiamondSharp } from "react-icons/io5";



import style from '../styles/Header.module.css';

const ItemIndex = [0,1,2,3,4];


export default function Slider({type}:{type:string}) {

    let value = null

    if(type==='jewellery'){
        value=<GiNecklaceDisplay className={style.type1}></GiNecklaceDisplay>
    }
    else if( type==='bag'){
        value=<PiHandbagSimpleLight className={style.type1}></PiHandbagSimpleLight>
    }
    else if(type === 'travel'){
        value = <BsLuggage className={style.type1}></BsLuggage>
    }
    else if(type==='gift'){
        value = <GiDiamondRing  className={style.type1}></GiDiamondRing>
    }else{
        value = <IoDiamondSharp className={style.type1}></IoDiamondSharp>
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
