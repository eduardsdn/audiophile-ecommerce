import Header from "./components/Header";
import Home from "./pages/Home";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";

import ProductHeadphonesXX992 from "./pages/ProductHeadphonesXX992";

import AppCSS from "./styles/app.module.css";
import { Route, Routes } from "react-router-dom";
import React from "react";

import xx99_2Preview from "./assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99_1Preview from "./assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx59Preview from "./assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";

import zx9Preview from "./assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx7Preview from "./assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";

import yx1Preview from "./assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
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

  const speakersPreviewData = React.useState([
    {
      img: zx9Preview,
      title: "ZX9 SPEAKER",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      isReverse: false,
    },
    {
      img: zx7Preview,
      title: "ZX7 SPEAKER",
      description:
        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      isReverse: true,
    },
  ]);

  const earphonesPreviewData = React.useState([
    {
      img: yx1Preview,
      title: "YX1 WIRELESS EARPHONES",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
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
          <Route
            path="/speakers"
            element={<Speakers speakersPreviewData={speakersPreviewData} />}
          ></Route>
          <Route
            path="/earphones"
            element={<Earphones earphonesPreviewData={earphonesPreviewData} />}
          ></Route>
          <Route
            path="/product/xx992"
            element={<ProductHeadphonesXX992 />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
