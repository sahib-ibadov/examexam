import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import ROUTER from "./router/index.router";
import Home from "./pages/Home";
import MainContext from "./context/context";
import { useEffect, useState } from "react";
import axios from "axios";

const router = createBrowserRouter(ROUTER);
function App() {
  const [search ,setSearch]=useState([])
  const [data, setData] = useState([]);
  const [wishlist, setWishlist] = useState(localStorage.getItem("Sahib")? JSON.parse(localStorage.getItem("Sahib")): []);
  useEffect(() => {
    axios.get("http://localhost:9091/backs").then((res) => {
      console.log(res.data);
      setData(res.data);
      setSearch(res.data)
    });
  }, []);

  const deleteHadler=(id)=>{
    axios.delete(`http://localhost:9091/backs/${id}`).then(res=>{
      const target=data.find(item=>item._id===id)
      data.splice(data.indexOf(target),1)
      setData([...data])
    })
  }

  const AddToWishlist = (id) => {
    const target = data.find((prod) => prod._id === id);
    if (!wishlist.find((item) => item._id === id)) {
      const updateWishlsit = [...wishlist, target];
      setWishlist(updateWishlsit);
      localStorage.setItem("Sahib", JSON.stringify(updateWishlsit));
      alert("Item Wishliste elave olundu");
     }else {
      alert("item movcudur");
    }
  };
 
  const Filterdata=(searchVaule)=>{
    if(searchVaule==""){
      setData([...search])
    }
    else{
      setData([...search.filter(item=>item.title.toLowerCase().trim().includes(searchVaule))])
    }
  }
  const sordted=(e)=>{
    const sordted =e.target.value
    if(sordted=="df"){
      setData([...search])
    }else if(sordted=="az"){
      const sordtedAz=data.sort((a,b)=>a.title.localeCompare(b.title))
      setData([...sordtedAz])
    }
    else if(sordted=="za"){
      const sordtedZA=data.sort((a,b)=>b.title.localeCompare(a.title))
      setData([...sordtedZA])
    }else if(sordted=="09"){
      const sordted09=data.sort((a,b)=>a.price-b.price)
      setData([...sordted09])
    }
    else if(sordted=="90"){
      const sordted90=data.sort((a,b)=>b.price-a.price)
      setData([...sordted90 ])
    }

  }





  const datas = {
    data,
    setData,
    AddToWishlist,
    deleteHadler,
    Filterdata,
    sordted
  };

  return (
    <MainContext.Provider value={datas}>
      <RouterProvider router={router} className="App">
        <Home />
      </RouterProvider>
    </MainContext.Provider>
  );
}

export default App;
