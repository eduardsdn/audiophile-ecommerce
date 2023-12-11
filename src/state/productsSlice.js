import { createSlice } from "@reduxjs/toolkit";

import xx99_2Img from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";
import xx99_1Img from "../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg";
import xx59Img from "../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg";
import zx9Img from "../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg";
import zx7Img from "../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg";
import yx1Img from "../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg";

import xx99_2Img_Tablet from "../assets/product-xx99-mark-two-headphones/tablet/image-product.jpg";
import xx99_1Img_Tablet from "../assets/product-xx99-mark-one-headphones/tablet/image-product.jpg";
import xx59Img_Tablet from "../assets/product-xx59-headphones/tablet/image-product.jpg";

import zx9Img_Tablet from "../assets/product-zx9-speaker/tablet/image-product.jpg";
import zx7Img_Tablet from "../assets/product-zx7-speaker/tablet/image-product.jpg";

import yx1Img_Tablet from "../assets/product-yx1-earphones/tablet/image-product.jpg";

import imgDecorXX992_1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import imgDecorXX992_2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import imgDecorXX992_3 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";
import imgDecorXX991_1 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-1.jpg";
import imgDecorXX991_2 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-2.jpg";
import imgDecorXX991_3 from "../assets/product-xx99-mark-one-headphones/desktop/image-gallery-3.jpg";
import imgDecorXX59_1 from "../assets/product-xx59-headphones/desktop/image-gallery-1.jpg";
import imgDecorXX59_2 from "../assets/product-xx59-headphones/desktop/image-gallery-2.jpg";
import imgDecorXX59_3 from "../assets/product-xx59-headphones/desktop/image-gallery-3.jpg";
import imgDecorZX9_1 from "../assets/product-zx9-speaker/desktop/image-gallery-1.jpg";
import imgDecorZX9_2 from "../assets/product-zx9-speaker/desktop/image-gallery-2.jpg";
import imgDecorZX9_3 from "../assets/product-zx9-speaker/desktop/image-gallery-3.jpg";
import imgDecorZX7_1 from "../assets/product-zx7-speaker/desktop/image-gallery-1.jpg";
import imgDecorZX7_2 from "../assets/product-zx7-speaker/desktop/image-gallery-2.jpg";
import imgDecorZX7_3 from "../assets/product-zx7-speaker/desktop/image-gallery-3.jpg";
import imgDecorYX1_1 from "../assets/product-yx1-earphones/desktop/image-gallery-1.jpg";
import imgDecorYX1_2 from "../assets/product-yx1-earphones/desktop/image-gallery-2.jpg";
import imgDecorYX1_3 from "../assets/product-yx1-earphones/desktop/image-gallery-3.jpg";

const initialState = [
  {
    productId: "xx992",
    img: xx99_2Img,
    imgTablet: xx99_2Img_Tablet,
    title: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    isReverse: false,
    price: 2999,
    featuresText:
      "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat.The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
    inTheBox: [
      {
        itemName: "Headphone Unit",
        amount: 1,
      },
      {
        itemName: "Replacement Earcups",
        amount: 2,
      },
      {
        itemName: "User Manual",
        amount: 1,
      },
      {
        itemName: "3.5mm 5m Audio Cable",
        amount: 1,
      },
      {
        itemName: "Travel Bag",
        amount: 1,
      },
    ],
    decorImages: [imgDecorXX992_1, imgDecorXX992_2, imgDecorXX992_3],
  },
  {
    productId: "xx991",
    img: xx99_1Img,
    imgTablet: xx99_1Img_Tablet,
    title: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    isReverse: true,
    price: 1750,
    featuresText:
      "As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.",
    inTheBox: [
      {
        itemName: "Headphone Unit",
        amount: 1,
      },
      {
        itemName: "Replacement Earcups",
        amount: 2,
      },
      {
        itemName: "User Manual",
        amount: 1,
      },
      {
        itemName: "3.5mm 5m Audio Cable",
        amount: 1,
      },
    ],
    decorImages: [imgDecorXX991_1, imgDecorXX991_2, imgDecorXX991_3],
  },
  {
    productId: "xx59",
    img: xx59Img,
    imgTablet: xx59Img_Tablet,
    title: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    isReverse: false,
    price: 899,
    featuresText:
      "These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos. More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.",
    inTheBox: [
      {
        itemName: "Headphone Unit",
        amount: 1,
      },
      {
        itemName: "Replacement Earcups",
        amount: 2,
      },
      {
        itemName: "User Manual",
        amount: 1,
      },
      {
        itemName: "3.5mm 5m Audio Cable",
        amount: 1,
      },
    ],
    decorImages: [imgDecorXX59_1, imgDecorXX59_2, imgDecorXX59_3],
  },
  {
    productId: "zx9",
    img: zx9Img,
    imgTablet: zx9Img_Tablet,
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
    img: zx7Img,
    imgTablet: zx7Img_Tablet,
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
  {
    productId: "yx1",
    img: yx1Img,
    imgTablet: yx1Img_Tablet,
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

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
