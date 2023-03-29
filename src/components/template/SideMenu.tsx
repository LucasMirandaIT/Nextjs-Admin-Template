import useAuth from "@/data/hook/useAuth";
import { useEffect } from "react";
import { HomeIcon, LogoutIcon, NotificationsIcon, SettingsIcon } from "../icons";
import Tooltip from "../Tooltip";
import Logo from "./Logo";
import MenuItem from "./Menuitem";
import UserAvatar from "./UserAvatar";

interface SideMenuProps {

}
const SideMenu = (props: SideMenuProps) => {
  const { user, logout } = useAuth();

  useEffect(() => {
    console.log('User ::', user);
  }, [user]);

  return (
    <aside className="h-screen flex flex-col">
      <Logo />
      <ul className="flex-grow">
        <MenuItem url="/" label="Home" icon={<HomeIcon />} />
        <MenuItem url="/notifications" label="News" icon={<NotificationsIcon />} />
        <MenuItem url="/settings" label="Settings" icon={<SettingsIcon />} />
      </ul>
      <ul>
        <UserAvatar />
        <MenuItem className="text-red-600 hover:bg-red-400 hover:text-white" onClick={logout} label="Logout" icon={<LogoutIcon />} />
      </ul>
    </aside>
  );
};

export default SideMenu;