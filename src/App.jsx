import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./Routes.jsx";
import Header from "./components/header/Header";
import Faelanfooter from "./components/footer/Faelanfooter.jsx";
function App() {
  return (
    <>
      <Router>
        <Header />
        <AppRoutes />
      </Router>
      <Faelanfooter />
    </>
  );
}

export default App;
