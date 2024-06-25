import { BlueButton } from "components/Button/BlueButton";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import QuizService from "services/quizService";

const { default: withRouter } = require("hoc/withRouter");

const QuizInfo = ({
  router: {
    params: { lessonId },
    navigate,
  },
  data,
}) => {
  useEffect(() => {
    if (!data?.length) {
      navigate(-1);
    }
  }, []);

  return (
    data?.length && (
      <div>
        <h1>{data[0].title}</h1>
        <h3>{data[0].text}</h3>
        <Link to={"start"}>
          <BlueButton>Тесті бастау</BlueButton>
        </Link>
      </div>
    )
  );
};

export default withRouter(
  withRemoteDataAndSpinner(QuizInfo, (router) =>
    useRemoteResource(QuizService.getLessonQuizes, router.params.lessonId)
  )
);
