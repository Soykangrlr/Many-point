import {
    Route,
    Routes,
  } from "react-router-dom";
import ContactPage from "./contactPage";
import GalleryPage from "./GalleryPage";
import HomePage from "./HomePage";
import NewsPage from "./NewsPage";

  function Index() {
    return (
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/news" element={<NewsPage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
      
    )
  }
  export default Index