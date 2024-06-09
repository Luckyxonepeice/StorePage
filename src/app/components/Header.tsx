"use client"

import React, { useState } from 'react'
import style from '../styles/Header.module.css'
import Top from './Top';
import Slider from './Slider';


export default function Header() {

  const [type , setType] = useState<string>('bag');

  function handleClick (e:any){
    const element = (e.target);
    const id_name : string = element.id;

    if(id_name){
      setType(id_name);
    }

  } 
  return (
    <div className={style.header} >
      <Top></Top>
      <div className={style.option} onClick={handleClick}>
        <div className={style.option1} id='bag'>
          Bags
        </div>
        <div className={style.option1} id='travel'>
          Travel
        </div>
        <div className={style.option1} id='accessory'>
          Accessory
        </div>
        <div className={style.option1} id='gift'>
          Gifting
        </div>
        <div className={style.option1} id='jewellery'>
          Jewellery
        </div>
      </div>
      <Slider type={type}></Slider>
    </div>
  )
}
