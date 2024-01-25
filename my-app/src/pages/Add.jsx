import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import MainContext from '../context/context';
import {Helmet} from "react-helmet";


const Add = () => {
    const {data, setData,deleteHadler}=useContext(MainContext)

    const formik = useFormik({
        initialValues: {
          image: '',
          title: '',
          price: '',
        },
        validationSchema: Yup.object({
            image: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
            title: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
            price: Yup.string().required('Required'),
        }),
        onSubmit:async (values) => {
         ;
        await  axios.post(`http://localhost:9091/backs`,values).then(res=>{
                setData([...data,values])
                alert("item Added")
          })
          formik.resetForm()
        },
       
      });
  return (
    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>add</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <form onSubmit={formik.handleSubmit}>
       <label htmlFor="image">image</label>
       <input
         id="image"
         name=""image
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.image}
       />
       {formik.touched.image && formik.errors.image ? (
         <div>{formik.errors.image}</div>
       ) : null}
 
       <label htmlFor="title">title</label>
       <input
         id="title"
         name="title"
         type="text"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.title}
       />
       {formik.touched.title && formik.errors.title ? (
         <div>{formik.errors.title}</div>
       ) : null}
 
       <label htmlFor="price">price</label>
       <input
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         onBlur={formik.handleBlur}
         value={formik.values.price}
       />
       {formik.touched.price && formik.errors.price ? (
         <div>{formik.errors.price}</div>
       ) : null}
 
       <button type="submit">Submit</button>
     </form>
     <table  class="table">
  <thead>
    <tr>
      <th scope="col">title</th>
      <th scope="col">desc</th>
      <th scope="col">image</th>
      <th scope="col">Price</th>
      <th scope="col">delete</th>
    </tr>
  </thead>
  <tbody>
    {
        data.map((item,index)=>{
            return<tr key={index}>
            <th scope="row">{item.title}</th>
            <td>{item.desc}</td>
            <img style={{height:"200px",width:"200px"}} src={item.image}alt="" />
            <td>{item.price}</td>
            <button onClick={()=>{
                deleteHadler(item._id)
            }}>deltete</button>
          </tr>
        })
    }
    
  </tbody>
</table>
    </div>
  )
}

export default Add
