"use client"
import React, {useEffect , useState } from 'react'
import style from '../styles/media.module.css'
import Box from './Box';
import axios from 'axios';
export default function Media({type}:{type:string}) {

  const [data, setData ] = useState<Product[]>([]);


  useEffect( ()=>{

    (
      async function(){
        const response = await axios.get('https://fakestoreapi.com/products');

        if(type!=''){
          if(type==='men'){
            const result = response.data.filter((val: Product) => val.category === (`men's clothing`));
            setData(result);

          }else{

            const result = response.data.filter((val: Product) => val.category.includes(type));
            setData(result);
          }

        }else{
          setData(response.data);
        }

      }
    )()

    console.log(type);
   
  },[type])


  
  return (
    <div className={style.media}>

      {
        data.map( (val:Product)=>{
          return <Box key={val.id} val={val}></Box>
        }) 
      }
    </div>
  )
}
