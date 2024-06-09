import React from 'react'
import style from '../styles/Header.module.css'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";

export default function Top() {
  return (
    <>
    <div className={style.trim}>TANN TRIM</div>
      <div className={style.group}>
        <CiSearch className={style.search} ></CiSearch>
        <CiUser className={style.search}/>
        <CiBookmark className={style.bookmark}/>
        <BsHandbag className={style.bag}></BsHandbag>
    </div>
    </>

  )
}
