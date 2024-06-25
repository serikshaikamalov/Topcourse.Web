import { Helmet } from "react-helmet-async";
import "./roadmap.scss";

const RoadmapPage = () => {
  return (
    <>
      <Helmet>
        <title>Фронтенд разработчиктің даму картасы</title>
        <meta name="description" content="MindMap 2023"></meta>
      </Helmet>
      <div className="roadmap container mx-auto">
        <div className="roadmap__title">
          Фронтенд разработчиктің даму картасы
        </div>
        <div className="roadmap__content">
          <img src="./media/images/roadmap.jpg" alt="Даму картасы" />
        </div>
      </div>
    </>
  );
};

export default RoadmapPage;
