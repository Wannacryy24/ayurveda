import React from 'react'

export default function Image({src, className}) {
  return (
    <img 
        src={src} alt="" 
        className={className}
    />
  )
}
