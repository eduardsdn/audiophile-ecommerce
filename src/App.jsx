import Header from "./components/Header";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import AppCSS from "./styles/app.module.css";
import { Route, Routes } from "react-router-dom";
import React from "react";

import xx99_2Preview from "./assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99_1Preview from "./assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx59Preview from "./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

function App() {
  const headphonesPreviewData = React.useState([
    {
      img: xx99_2Preview,
      title: "XX99 Mark II Headphones",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      isReverse: false,
    },
    {
      img: xx99_1Preview,
      title: "XX99 Mark I Headphones",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      isReverse: true,
    },
    {
      img: xx59Preview,
      title: "XX59 Headphones",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      isReverse: false,
    },
  ]);

  return (
    <div className={AppCSS.app}>
      <Header></Header>
      <div className={AppCSS.container}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/headphones"
            element={
              <Headphones headphonesPreviewData={headphonesPreviewData} />
            }
          ></Route>
          {/* <Route
            render={() => <Headphones headphonesPreviewContent={headphones} />}
          ></Route> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
