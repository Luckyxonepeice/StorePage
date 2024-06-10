
import React from 'react'
import style from '../styles/media.module.css'
import { FaCartPlus } from "react-icons/fa";

export default function Box({val}:{val:Product}) {

  return (
    <div className={style.card}>
      <img className={style.dp} src={val.image} alt="Item-Image"></img>
      <div className={style.item_title}>{val.title}</div>
      <div className={style.item_price}>{"$"}{val.price}</div>
      <FaCartPlus className={style.item_cart}></FaCartPlus>
    </div>
  )
}
