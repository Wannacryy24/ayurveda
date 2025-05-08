import React, { useEffect, useState } from 'react'

export default function TabComponentAbout({aboutData}) {
    const [active , setActive] = useState(0);

    const handleActiveState = (i)=>{
        setActive(i);
    }

  return (
    <>
        <div className='tab_about_data'>
            <div className='tab_btn_div'>
                {aboutData.map((about,i)=>{
                    return (
                        <button 
                        onClick={()=>handleActiveState(i)} 
                        key={i}
                        className = {active===i ? `active_about_section_btn` : `about_section_btn`}
                        >
                            {about.heading}
                    </button>)
                })}
            </div>
            <div
                className='about_para_div'>
                <p>
                    {aboutData[active].data}
                </p>
            </div>
        </div>
    </>
  )
}
