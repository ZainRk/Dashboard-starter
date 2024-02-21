import React,{useState} from 'react'
import './Sidebar.css'
import { SidebarData } from '../../Data/Data';


import {UilEstate} from "@iconscout/react-unicons";
const Sidebar = () => {

  const [selected,setSelected]=useState(0)
  return (
    <div className="Sidebar">
        {/* logo */}
        <div className="logo">
            <img src="" alt="img"/>
            <span>Academy</span>
        </div>

        {/* menu */}
        <div className="menu">
          {SidebarData.map((item,index)=>{
            return(
                <div className={selected===index?'menuItem active':'menuItem'}
                key={index}
                onClick={()=>setSelected(index)}
                >
                    <item.icon/>
                    <span>
                        {item.heading}
                    </span>
                </div>
            )
          })}
        </div>
        </div>
    
  )
}

export default Sidebar