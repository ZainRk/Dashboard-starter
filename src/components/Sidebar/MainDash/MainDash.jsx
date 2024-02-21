import React from 'react'
import Cards from '../Cards/Cards';
import './MainDash.css';
import Table from '../Table/Table';
import RightSide from '../../RightSide/RightSide';




const MainDash = () => {
  return (
    <>
     <div className="MainDash">
        <h2>Dashboard</h2>
        <Cards/>
        <Table/>  
    </div>
    <div className="righside">
      <RightSide/>
    </div>
    
    </>
  )
   
}

export default MainDash