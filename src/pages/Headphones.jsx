import headphonesCSS from "../styles/headphones.module.css";
import Categories from "../components/Categories";
import ProductPreview from "../components/ProductPreview";
import CompanyDescription from "../components/CompanyDescription";
import Footer from "../components/Footer";

export default function Headphones(props) {
  // console.log(props.headphonesPreviewContent[0].xx99_2.img);
  console.log(props);
  return (
    <div className={headphonesCSS.headphonesHolder}>
      <div className={headphonesCSS.pageTitle}>Headphones</div>
      <div className={headphonesCSS.container}>
        {props.headphonesPreviewData[0].map(function (
          headphonesProductPreview
        ) {
          return (
            <ProductPreview
              img={headphonesProductPreview.img}
              title={headphonesProductPreview.title}
              description={headphonesProductPreview.description}
              isReverse={headphonesProductPreview.isReverse}
            />
          );
        })}
        {/* <ProductPreview
          img={props.headphonesPreviewContent[0].xx99_2.img}
          title={props.headphonesPreviewContent[0].xx99_2.title}
          description={props.headphonesPreviewContent[0].xx99_2.description}
        ></ProductPreview> */}
        <Categories mountedOn={"headphones"}></Categories>
        <CompanyDescription></CompanyDescription>
      </div>
      <Footer></Footer>
    </div>
  );
}
