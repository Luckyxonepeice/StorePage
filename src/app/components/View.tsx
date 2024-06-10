"use client"

import React from 'react'
import Header from './Header';
import Media from './Media';
import { useState } from 'react';

export default function View() {
  const [type , setType] = useState<string>('men');
  return (
    <>
      <Header type={type} setType={setType}/>
      <Media type={type}></Media>

    </>
    
  )
}
