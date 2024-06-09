import React from 'react'
import { PiHandbagSimpleLight } from "react-icons/pi";
import style from '../styles/Header.module.css';

const ItemIndex = [0,1,2,3,4];


export default function Slider({type}:{type:string}) {
  return (
    <div>
       {
            ItemIndex.map((val,index)=>{

                return <PiHandbagSimpleLight key={index} className='w-20 h-20 text-white'></PiHandbagSimpleLight>
            })
       }

    </div>
  )
}
