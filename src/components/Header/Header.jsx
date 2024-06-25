import Logo from "../Logo/Logo";
import "./header.scss";
import UserMenu from "components/UserMenu/UserMenu";

export default function Header({ setMobileOpen, user }) {
  return (
    <>
      <header className="w-full">
        <Logo />
        <UserMenu setMobileOpen={setMobileOpen} user={user} />
      </header>
    </>
  );
}
