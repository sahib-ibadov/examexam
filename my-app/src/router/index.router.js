import Detail from "../pages/Detail";

const { default: Add } = require("../pages/Add");
const { default: Basket } = require("../pages/Basket");
const { default: Home } = require("../pages/Home");
const { default: SiteRoot } = require("../pages/SiteRoot");
const { default: Wishlist } = require("../pages/Wishlist");

const ROUTER= [{
    path:"/",
    element:<SiteRoot/>,
    children:[{
        path:"",
        element:<Home/>
    },{
        path:"Wishlist",
        element:<Wishlist/>
    },{
        path:"Basket",
        element:<Basket/>
    },{
        path:"Add",
        element:<Add/>
    },{
        path:"/:_id",
        element:<Detail/>
    }]
    
}]
export default ROUTER