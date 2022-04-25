// import HomePage from "./pages/Home";
// import './index.css'

import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/Contactus";
import HomePage from "./pages/Home";
import ProductPage from "./pages/ProductPage";


const MainFunction=()=>{
  return (
    <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/conctactUs" element={<ContactUs/>}  />
          <Route path="/productPage" element={<ProductPage/>} />
          
      </Routes>
    
  );
}


export default MainFunction;



