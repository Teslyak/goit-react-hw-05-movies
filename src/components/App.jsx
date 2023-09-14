import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "page/Home";
import { Movies } from "page/Movies";


export const App = () => {

  return (
    <Routes>
      <Route path="/" element={ <Layout/>} />
      <Route path="home" element={<Home />} />
      <Route path="movies" element={<Movies/> }  />
   </Routes> 
  );
};

