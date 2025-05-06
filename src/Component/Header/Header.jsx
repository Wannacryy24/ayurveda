import React from 'react'
import LiComponent from '../li/LiComponent'
import { headerList } from './headerData'
import Image from '../Image/Image'
import './Header.css'
import Button from '../Button/Button'

export default function Header() {
  
  return (
    <header className='header_main_div'>
      <div className='header_main_inner_div'>
        <div className='header_left_div'>
          <img src="./mainLogo.png" alt=""  className='main_Logo'/>
          
          <button className='menu_toggle'>☰</button>
        </div>
        <div className='header_middle_div'>
          <LiComponent headerList={headerList}/>
        </div>
        <div className='header_right_div'>
          <Button className='header_btn_call'>
            <img src='./phone.png' alt="" className='call_btn_header'/>
            <span>+91 1234567890 </span>
          </Button>
        </div>
      </div>
    </header>
  )
}
