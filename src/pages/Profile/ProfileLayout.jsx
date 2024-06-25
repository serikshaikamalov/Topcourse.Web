import { withUser } from "hoc/withUser";
import { Outlet } from "react-router-dom";
import ProfileMenu from "./components/ProfileMenu/ProfileMenu";
import './profile-layout.scss';

const ProfileLayout = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row m-3">
      <section className="flex flex-col justify-between w-[20%] mr-3 lg:h-[40rem] lg:block sm:hidden profile-menu">
        <ProfileMenu />
      </section>

      <section className="w-full">
        <Outlet />
      </section>
    </div>
  );
};

export default withUser(ProfileLayout);
