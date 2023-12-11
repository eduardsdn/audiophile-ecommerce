import { createSlice } from "@reduxjs/toolkit";

import yx1_Img_Desktop from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";
import yx1_Img_Tablet from "../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg";

import imgDecorYX1_1 from "../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import imgDecorYX1_2 from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import imgDecorYX1_3 from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";

const initialState = [
  {
    productId: "yx1",
    imgDesktop: yx1_Img_Desktop,
    imgTablet: yx1_Img_Tablet,
    title: "YX1 WIRELESS EARPHONES",
    description:
      "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
    isReverse: false,
    price: 599,
    featuresText:
      " Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound. The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.",
    inTheBox: [
      {
        itemName: "Earphone Unit",
        amount: 2,
      },
      {
        itemName: "Multi-size Earplugs",
        amount: 6,
      },
      {
        itemName: "User Manual",
        amount: 1,
      },
      {
        itemName: "USB-C Charging Cable",
        amount: 1,
      },
      {
        itemName: "Travel Pouch",
        amount: 1,
      },
    ],
    decorImages: [imgDecorYX1_1, imgDecorYX1_2, imgDecorYX1_3],
  },
];

const earphonesProductsSlice = createSlice({
  name: "earphonesProducts",
  initialState,
  reducers: {},
});

export default earphonesProductsSlice.reducer;
