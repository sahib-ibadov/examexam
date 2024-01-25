import React, { useState } from 'react'
import "./Wishlist.scss"
import {Helmet} from "react-helmet";


const Wishlist = () => {
    const [wishlist, setWishlist] = useState(localStorage.getItem("Sahib")? JSON.parse(localStorage.getItem("Sahib")): []);
    const deletehha=(id)=>{
        const target=wishlist.find(item=>item._id===id)
        wishlist.splice(wishlist.indexOf(target),1)
        setWishlist([...wishlist])
        localStorage.setItem("Sahib",JSON.stringify([...wishlist]))

    }
    const removeAll=()=>{
        setWishlist([])
        localStorage.removeItem("Sahib")
    }
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>wishlist</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <button className='Buuton' onClick={removeAll}>RemovAll</button>
      {
        wishlist.map((item,index)=>{
            return <div className="card" style={{width: "18rem"}}>
            <img class="card-img-top" src={item.image} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title"> {item.title}</h5>
              <p class="card-text">{item.price}</p>
              <a href="#" class="btn btn-primary"  onClick={()=>{
                deletehha(item._id)
              }}>delete</a>
            </div>
          </div>
        })
      }
    </div>
  )
}

export default Wishlist
