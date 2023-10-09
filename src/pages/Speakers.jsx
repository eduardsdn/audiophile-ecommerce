import SpeakersCSS from "../styles/speakers.module.css";
import Categories from "../components/Categories";
import ProductPreview from "../components/ProductPreview";
import CompanyDescription from "../components/CompanyDescription";
import Footer from "../components/Footer";

export default function Speakers(props) {
  return (
    <div className={SpeakersCSS.speakersHolder}>
      <div className={SpeakersCSS.pageTitle}>Speakers</div>
      <div className={SpeakersCSS.container}>
        {props.speakersPreviewData[0].map(function (speakersProductPreview) {
          return (
            <ProductPreview
              img={speakersProductPreview.img}
              title={speakersProductPreview.title}
              description={speakersProductPreview.description}
              isReverse={speakersProductPreview.isReverse}
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
