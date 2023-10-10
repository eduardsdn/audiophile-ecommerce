import ProductCSS from "../styles/product.module.css";
import ButtonCSS from "../styles/buttons.module.css";

import prodImg from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg";

import img1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg";
import img2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg";
import img3 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg";

export default function Product(props) {
  return (
    <div className={ProductCSS.container}>
      <div className={ProductCSS.product}>
        <div className={ProductCSS.productCard}>
          <img className={ProductCSS.productCardImg} src={prodImg} alt="" />
          <div className={ProductCSS.productCardContent}>
            <p className={ProductCSS.newProduct}>NEW PRODUCT</p>
            <h1 className={ProductCSS.title}>XX99 Mark II Headphones</h1>
            <p className={ProductCSS.description}>
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <p className={ProductCSS.price}>$ 2,999</p>
            <div className={ProductCSS.productCardInterface}>
              <input type="number" />
              <button className={ButtonCSS.seeProductBtn}>Add to cart</button>
            </div>
          </div>
        </div>
        <div className={ProductCSS.productTextContent}>
          <div className={ProductCSS.productTextContentDescription}>
            <h1 className={ProductCSS.descriptionTitle}>Features</h1>
            <p className={ProductCSS.descriptionText}>
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat. The advanced Active Noise Cancellation
              with built-in equalizer allow you to experience your audio world
              on your terms. It lets you enjoy your audio in peace, but quickly
              interact with your surroundings when you need to. Combined with
              Bluetooth 5. 0 compliant connectivity and 17 hour battery life,
              the XX99 Mark II headphones gives you superior sound, cutting-edge
              technology, and a modern design aesthetic.
            </p>
          </div>
          <div className={ProductCSS.inTheBox}>
            <h1 className={ProductCSS.inTheBoxTitle}>In the Box</h1>
            <ul className={ProductCSS.inTheBoxList}>
              <li className={ProductCSS.inTheBoxItem}>
                <span className={ProductCSS.inTheBoxItemAmount}>1x</span>
                <p className={ProductCSS.inTheBoxItemName}>Headphone Unit</p>
              </li>
              <li className={ProductCSS.inTheBoxItem}>
                <span className={ProductCSS.inTheBoxItemAmount}>2x</span>
                <p className={ProductCSS.inTheBoxItemName}>
                  Replacement Earcups
                </p>
              </li>
              <li className={ProductCSS.inTheBoxItem}>
                <span className={ProductCSS.inTheBoxItemAmount}>1x</span>
                <p className={ProductCSS.inTheBoxItemName}>User Manual</p>
              </li>
              <li className={ProductCSS.inTheBoxItem}>
                <span className={ProductCSS.inTheBoxItemAmount}>1x</span>
                <p className={ProductCSS.inTheBoxItemName}>
                  3.5mm 5m Audio Cable
                </p>
              </li>
              <li className={ProductCSS.inTheBoxItem}>
                <span className={ProductCSS.inTheBoxItemAmount}>1x</span>
                <p className={ProductCSS.inTheBoxItemName}>Travel Bag</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={ProductCSS.productImagesGrid}>
          <div className={ProductCSS.productImagesGridLeft}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
          </div>
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}
