import AppCard from "components/AppCard/AppCard";
import { withRemoteDataAndSpinner } from "hoc/withRemoteDataAndSpinner";
import { useRemoteResource } from "hooks/useRemoteResource";
import { statsAdminService } from "services/admin/statsService";

const UsersCount = ({ data }) => {
  return (
    <AppCard>
      <div className="bg-light-info text-center" style={{ padding: 30 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#ddbaff"
            d="M24,44L24,44c-8.216,0-15.137-6.14-16.116-14.297l-0.797-4.639C5.871,14.924,13.788,6,24,6h0 c10.212,0,18.129,8.924,16.912,19.063l-0.797,4.639C39.137,37.86,32.216,44,24,44z"
          />
          <path
            fill="#6c19ff"
            d="M37.701,10.916c-0.825-1.117-1.787-2.133-2.858-3.017C31.912,5.474,28.145,4.003,24,4.003 c-4.145,0-7.912,1.471-10.844,3.895c-0.554,0.458-1.084,0.951-1.58,1.485c-3.115,3.323-4.903,7.879-4.573,12.777 c3.362-1.449,5.88-4.482,6.615-8.158h20.764c0.735,3.677,3.253,6.709,6.615,8.158C41.278,17.982,40.019,14.053,37.701,10.916z"
          />
          <path
            fill="#ddbaff"
            d="M40,31H8c-1.657,0-3-1.343-3-3s1.343-3,3-3h32c1.657,0,3,1.343,3,3S41.657,31,40,31z"
          />
          <path
            fill="#2100c4"
            d="M37.701,13.913c-0.825-1.117-1.787-2.133-2.858-3.017C31.912,8.471,28.145,7,24,7 c-4.145,0-7.912,1.471-10.844,3.895c-0.554,0.458-1.084,0.951-1.58,1.485c-3.115,3.323-4.903,7.879-4.573,12.777 c3.362-1.449,5.88-4.482,6.615-8.158h20.764c0.735,3.677,3.253,6.709,6.615,8.158C41.278,20.979,40.019,17.05,37.701,13.913z"
          />
        </svg>
        <h3 className="text-info">Студенты</h3>
        <h4 className="text-info mt-1">{data || 0}</h4>
      </div>
    </AppCard>
  );
};

export default withRemoteDataAndSpinner(UsersCount, () =>
  useRemoteResource(statsAdminService.getUsersCount)
);
