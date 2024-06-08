import React from 'react'
import style from '../styles/Header.module.css'
import { CiSearch } from "react-icons/ci";


export default function Header() {
  return (
    <div className={style.header}>
      <div className={style.trim}>TANN TRIM</div>
      <div className={style.group}>
        <CiSearch className={style.search} ></CiSearch>
      </div>
    </div>
  )
}
