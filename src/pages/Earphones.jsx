import EarphonesCSS from "../styles/earphones.module.css";
import Categories from "../components/Categories";
import ProductPreview from "../components/ProductPreview";
import CompanyDescription from "../components/CompanyDescription";
import Footer from "../components/Footer";

export default function Earphones(props) {
  return (
    <div className={EarphonesCSS.earphonesHolder}>
      <div className={EarphonesCSS.pageTitle}>Earphones</div>
      <div className={EarphonesCSS.container}>
        {props.earphonesPreviewData[0].map(function (earphonesProductPreview) {
          return (
            <ProductPreview
              img={earphonesProductPreview.img}
              title={earphonesProductPreview.title}
              description={earphonesProductPreview.description}
              isReverse={earphonesProductPreview.isReverse}
            />
          );
        })}
        <Categories mountedOn={"preview"} />
        <CompanyDescription />
      </div>
      <Footer />
    </div>
  );
}
