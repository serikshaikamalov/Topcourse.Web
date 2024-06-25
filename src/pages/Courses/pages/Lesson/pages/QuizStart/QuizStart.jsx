import { Button } from "@mui/material";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import withRouter from "hoc/withRouter";
import { useRemoteResource } from "hooks/useRemoteResource";
import { useState } from "react";
import QuizService from "services/quizService";

/**
 * Загружаем вопросы
 *
 * @returns
 */
const QuizStart = ({
  data,
  router: {
    params: { lessonId },
    navigate,
  },
}) => {
  const [index, setIndex] = useState(0);
  const { questions } = data;
  const question = questions[index];

  const [selected, setSelected] = useState([]);
  const selectedAnswerId = selected?.find(
    (x) => x.questionId === question.id
  )?.answerId;

  const goNext = () => {
    if (index < questions.length) setIndex(index + 1);
  };
  const goPrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const goFinish = () => {
    QuizService.submitQuiz({
      lessonId,
      answers: selected,
    }).then(() => {
      navigate(-1);
    });
  };

  const onChange = (event) => {
    const questionId = question.id;
    const answerId = +event.target.value;

    const index = selected.findIndex((x) => x.questionId === questionId);
    if (index === -1) {
      setSelected([
        ...selected,
        {
          questionId,
          answerId,
        },
      ]);
    } else {
      let element = selected[index];
      element.answerId = answerId;
      setSelected([...selected], element);
    }
  };

  return (
    <div>
      <div>
        {index + 1}-сұрақ:
        <h3
          className="m-t-16 m-b-8"
          dangerouslySetInnerHTML={{
            __html: question?.title,
          }}
        ></h3>
      </div>
      <div className="quoz__content ">
        <div className="m-t-16">
          {question.answers.map((a, index) => {
            return (
              <div className="answer m-t-8 m-b-8" key={index}>
                <input
                  type="radio"
                  name={question.id}
                  id={index}
                  value={a.id}
                  onChange={onChange}
                  checked={a.id == selectedAnswerId}
                />
                <label className="m-l-4" htmlFor={index}>
                  {a.title}
                </label>
              </div>
            );
          })}
        </div>
        <section className="quiz-buttons m-t-16">
          {index > 0 && <Button onClick={goPrev}>Prev</Button>}
          {index + 1 === questions.length ? (
            <Button onClick={goFinish}>Finish</Button>
          ) : (
            <Button onClick={goNext}>Next</Button>
          )}
        </section>
      </div>
    </div>
  );
};

export default withRouter(
  withRemoteDataAndSpinner(QuizStart, (router) =>
    useRemoteResource(
      QuizService.getQuizWithQAByLessonId,
      router.params.lessonId
    )
  )
);
