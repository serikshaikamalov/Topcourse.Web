import AppCard from "components/AppCard/AppCard";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import coursesAdminService from "services/admin/coursesAdminService";

const CourseCount = ({ data }) => {
  return (
    <AppCard>
      <div className="bg-light-info text-center" style={{ padding: 30 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <polygon fill="#f55376" points="37,6 11,6 11,30 24,36 37,42" />
          <polygon fill="#f55376" points="11,6 37,6 37,30 24,36 11,42" />
          <polygon
            fill="#eb0000"
            points="11,6 11,30 24,36 31.5,32.538 37,25 37,6"
          />
          <g>
            <polygon fill="#fadb00" points="37,29.768 48,21 26,21" />
            <polygon
              fill="#fadb00"
              points="37,29.732 43.957,34 44,34 37,14 30,34 30.044,34"
            />
            <polygon
              fill="#f5bc00"
              points="39.45,21 34.55,21 32.685,26.329 36.974,29.748 37,29.732 37.026,29.748 41.315,26.329"
            />
          </g>
        </svg>
        <h3 className="text-info">Курсы</h3>
        <h4 className="text-info mt-1">{data}</h4>
      </div>
    </AppCard>
  );
};

export default withRemoteDataAndSpinner(CourseCount, () =>
  useRemoteResource(coursesAdminService.count)
);
