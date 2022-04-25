// import HomePage from "./pages/Home";
// import './index.css'

import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/Contactus";
import HomePage from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Test from "./pages/Test";

const MainFunction = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/conctactUs" element={<ContactUs />} />
      <Route path="/productPage" element={<ProductPage />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default MainFunction;
