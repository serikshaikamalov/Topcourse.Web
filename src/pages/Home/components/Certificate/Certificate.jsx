import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import "./certificate.scss";

const Certificate = () => {
  return (
    <section className="certifate my-3">
      <div className="container mx-auto">
        <SectionTitle>Курс соңында сертификат табысталады</SectionTitle>
        <div className="certificate__image flex justify-center">
          <img src="./certificate.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Certificate;
