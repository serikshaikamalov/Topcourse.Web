import { withUser } from "hoc/withUser";
import ProfileMe from "../../components/Me/Me";

const ProfilePage = ({ data: courses, user }) => {
  return (
    <>
      <ProfileMe user={user} />
    </>
  );
};

export default withUser(ProfilePage);
