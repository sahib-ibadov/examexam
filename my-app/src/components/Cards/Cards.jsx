import React, { useContext } from 'react'
import MainContext from '../../context/context'
import Card from '../Card/Card'
import './Cards.scss'

const Cards = () => {
    const {data,Filterdata,sordted}=useContext(MainContext)
  return (

    <>

      <div className='input__div' ><input  type="text" placeholder='Search'  onChange={(e)=>{
            Filterdata(e.target.value)
        }} /></div>
         <select className='select__div'  name="" id="" onChange={sordted}>
    <option value="df">DF</option>
    <option value="az">Az</option>
    <option value="za">Za</option>
    <option value="09">09</option>
    <option value="90">90</option>
 </select>
    <div className='Cards__div'>

      

      {
            data.map((item,index)=>{
                return <Card item={item} key={index}/>
            })
      }
    </div>
    </>
    
  )
}

export default Cards
