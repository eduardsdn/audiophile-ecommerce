import Header from "./components/Header";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import AppCSS from "./styles/app.module.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className={AppCSS.app}>
      <Header></Header>
      <div className={AppCSS.container}>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/headphones" element={<Headphones />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
