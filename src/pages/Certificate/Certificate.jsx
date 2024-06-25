import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import { certificatesService } from "services/certificatesService";
import "./certificate.scss";

const StudentCertificate = ({ data: certificate }) => {
  return (
    <div className="container mx-auto">
      <div className="certificate text-center">
        <section className="top">
          <div className="certificate__logo">
            <img src="../media/images/logosmall.png" alt="" srcset="" />
          </div>
        </section>
        <section className="certificate__title">Сертификат</section>
        <section>
          <p>Этот сертификат подтверждает, что</p>
          <h1>{certificate.student.name}</h1>
          <p>успешно завершил онлайн-курс</p>
          <h3 className="certificate__course">"{certificate.course.name}"</h3>
          <p>Выдан: {certificate.givenDate}</p>
        </section>
        <footer>
          <h3 className="certificate__school">
            Онлайн школа программирования "Frontends.kz"
          </h3>

          <div>Преподователь: Серик Шайкамалов</div>
        </footer>
      </div>
    </div>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(StudentCertificate, (router) => {
    return useRemoteResource(certificatesService.getCertificate, router.params.id);
  })
);
