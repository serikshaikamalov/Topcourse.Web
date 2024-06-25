import QuizInfo from "pages/Courses/components/QuizInfo/QuizInfo";
import SubmissionInfo from "pages/Courses/components/SubmissionInfo/SubmissionInfo";
import React from "react";

const QuizPage = () => {
  return (
    <div>
      <div className="m-b-32">
        <QuizInfo></QuizInfo>
      </div>
      <SubmissionInfo></SubmissionInfo>
    </div>
  );
};

export default QuizPage;
