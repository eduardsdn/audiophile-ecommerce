import { createSlice } from "@reduxjs/toolkit";

import zx9_Img_Desktop from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx7_Img_Desktop from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";

import zx9_Img_Tablet from "../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg";
import zx7_Img_Tablet from "../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg";

import imgDecorZX9_1 from "../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import imgDecorZX9_2 from "../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import imgDecorZX9_3 from "../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";

import imgDecorZX7_1 from "../assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
import imgDecorZX7_2 from "../assets/product-zx7-speaker/desktop/image-gallery-2.jpg";
import imgDecorZX7_3 from "../assets/product-zx7-speaker/desktop/image-gallery-3.jpg";

const initialState = [
  {
    productId: "zx9",
    imgDesktop: zx9_Img_Desktop,
    imgTablet: zx9_Img_Tablet,
    title: "ZX9 SPEAKER",
    description:
      "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    isReverse: false,
    price: 4500,
    featuresText:
      "Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.",
    inTheBox: [
      {
        itemName: "Speaker Unit",
        amount: 2,
      },
      {
        itemName: "Speaker Cloth Panel",
        amount: 2,
      },
      {
        itemName: "User Manual",
        amount: 1,
      },
      {
        itemName: "3.5mm 10m Audio Cable",
        amount: 1,
      },
      {
        itemName: "10m Optical Cable",
        amount: 1,
      },
    ],
    decorImages: [imgDecorZX9_1, imgDecorZX9_2, imgDecorZX9_3],
  },
  {
    productId: "zx7",
    imgDesktop: zx7_Img_Desktop,
    imgTablet: zx7_Img_Tablet,
    title: "ZX7 SPEAKER",
    description:
      "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    isReverse: true,
    price: 3500,
    featuresText:
      "Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage. The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.",
    inTheBox: [
      {
        itemName: "Speaker Unit",
        amount: 2,
      },
      {
        itemName: "Speaker Cloth Panel",
        amount: 2,
      },
      {
        itemName: "User Manual",
        amount: 1,
      },
      {
        itemName: "3.5mm 7.5m Audio Cable",
        amount: 1,
      },
    ],
    decorImages: [imgDecorZX7_1, imgDecorZX7_2, imgDecorZX7_3],
  },
];

const speakersProductsSlice = createSlice({
  name: "speakersProducts",
  initialState,
  reducers: {},
});

export default speakersProductsSlice.reducer;
