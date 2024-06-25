import SubmissionSingle from "pages/Courses/components/SubmissionSingle/SubmissionSingle";
import SubmissionResult from "pages/Courses/components/SubmissionResult/SubmissionResult";

const SubmissionPage = () => {
  return (
    <div>
      <div className="m-b-16">
        <SubmissionSingle></SubmissionSingle>
      </div>
      <div>
        <SubmissionResult></SubmissionResult>
      </div>
    </div>
  );
};

export default SubmissionPage;
