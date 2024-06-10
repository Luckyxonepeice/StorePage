
import React from 'react'
import style from '../styles/Header.module.css'
import Top from './Top';
import Slider from './Slider';


export default function Header({type,setType}:{type:string,setType:any}) {


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
        <div className={style.option1} id='men'>
          Men&apos;s Clothing
        </div>
        <div className={style.option1} id='women'>
          Women&apos;s Clothing
        </div>
        <div className={style.option1} id='electronics'>
          Electronics
        </div>
        <div className={style.option1} id='jewelery'>
          Jewellery
        </div>
      </div>
      <Slider type={type}></Slider>
    </div>
  )
}
