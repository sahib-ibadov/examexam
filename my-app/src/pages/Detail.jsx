import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import './Detail.scss'
import {Helmet} from "react-helmet";

const Detail = () => {
    const {_id}=useParams()
    const [detail,setDetail]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:9091/backs/${_id}`).then(res=>{
            setDetail(res.data)
        })
    })
  return (
    <div>
         <Helmet>
                <meta charSet="utf-8" />
                <title>Detail</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>

      <div class="card" className=''  style={{width: "18rem"}}>
            <img class="card-img-top" src={detail.image} alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title"> {detail.title}</h5>
              <p class="card-text">{detail.price}</p>
            </div>
          </div>
    </div>
  )
}

export default Detail
