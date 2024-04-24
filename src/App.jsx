import "./App.css";
import "./assets/dist/js/bootstrap.bundle.min.js";
import "./assets/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
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
