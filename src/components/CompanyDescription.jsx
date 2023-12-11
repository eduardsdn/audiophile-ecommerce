import CompanyDescriptionCSS from "../styles/companyDescription.module.css";
import descriptionImg from "../assets/shared/desktop/image-best-gear.jpg";

export default function CompanyDescription() {
  return (
    <div className={CompanyDescriptionCSS.companyDescription}>
      <div className={CompanyDescriptionCSS.textContent}>
        <h1 className={CompanyDescriptionCSS.textContentTitle}>
          Bringing you the{" "}
          <span className={CompanyDescriptionCSS.textContentTitleHighlight}>
            best
          </span>{" "}
          audio gear
        </h1>
        <p className={CompanyDescriptionCSS.textContentText}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div
        src={descriptionImg}
        className={CompanyDescriptionCSS.descriptionBanner}
        alt=""
      />
    </div>
  );
}
