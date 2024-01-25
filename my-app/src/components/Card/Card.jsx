import React, { useContext } from 'react'
import MainContext from '../../context/context'
import { Link } from 'react-router-dom'
import './Card.scss'

const Card = ({item}) => {
    const {  data,setData,AddToWishlist,deleteHadler} =useContext(MainContext)
  return (
    <div>
      <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={item.image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{item.title}</h5>
    <p class="card-text">{item.desc}</p>
    <p class="card-text">{item.price}</p>
<div className='div__umumi'>
<div> <a href="#" class="btn btn-primary" onClick={()=>{
        AddToWishlist(item._id)
    }}>AddtoWishlist</a></div>
<div><button className='btn btn-danger' style={{height:"38px"}}>    <Link style={{textDecoration:"none",borderRadius:"7px",color:"black"}} to={`/${item._id}`}>Detail</Link></button> 
</div> 
<button className='btn btn-danger' onClick={()=>{
    deleteHadler(item._id)
}}>delete</button>
</div>
</div>
</div>
    </div>
  )
}

export default Card
