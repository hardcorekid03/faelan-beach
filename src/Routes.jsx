import {Routes, Route} from "react-router-dom";
import About from "./components/about/About";
import Gallery from "./components/gallery/Gallery";
import Cottages from "./components/cottages/Cottages";
import Contact from "./components/contact/Contact";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/gallery" element= {<Gallery/>} />
            <Route path="/cottages" element= {<Cottages/>} />
            <Route path="/contact" element= {<Contact/>} />
            <Route path="*" element= { <h1>Error 404: Page Not Found</h1>} />
        </Routes>
    )
}
export default AppRoutes;

