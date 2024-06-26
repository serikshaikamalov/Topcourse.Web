import AppCard from "components/AppCard/AppCard";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import React from "react";
import { commentsAdminService } from "services/admin/commentsAdminService";

const CourseComments = ({data}) => {
  return (
    <AppCard>
      <div className="bg-light-info text-center" style={{ padding: 30 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <circle cx="20" cy="28" r="16" fill="#3ddab4" />
          <circle cx="31.584" cy="17.478" r="13.449" fill="#f5bc00" />
          <polygon fill="#3ddab4" points="4.07,44 19.909,44 10.922,35.549" />
          <path
            fill="#00b569"
            d="M20,12c-0.239,0-0.471,0.025-0.708,0.036c-0.739,1.665-1.157,3.504-1.157,5.443 c0,7.428,6.021,13.449,13.449,13.449c1.484,0,2.907-0.25,4.242-0.693C35.929,29.502,36,28.76,36,28C36,19.163,28.837,12,20,12z"
          />
          <polygon
            fill="#f5bc00"
            points="44.975,4.029 31.661,4.029 39.215,11.133"
          />
        </svg>
        <h3 className="text-info">Комментарий</h3>
        <h4 className="text-info mt-1">{data}</h4>
      </div>
    </AppCard>
  );
};

export default withRemoteDataAndSpinner(CourseComments, () =>
  useRemoteResource(commentsAdminService.count)
);
