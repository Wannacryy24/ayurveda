import React, { useEffect, useState } from 'react'

export default function LiComponent({headerList=[]}) {
  return (
    <ul>{
        headerList.map((item)=><li key={item}>{item}</li>)
    }</ul>
  )
}
