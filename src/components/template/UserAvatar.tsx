import useAuth from "@/data/hook/useAuth";
import Link from "next/link";
import Tooltip from "../Tooltip";
import MenuItem from "./Menuitem";

const UserAvatar = () => {
    const {user} = useAuth();

    return (
        <Link href="/profile">
            <img className="rounded-full w-10 h-10 cursor-pointer" src={user?.imageURL ?? ''} alt="" />
        </Link>
    );
};

export default UserAvatar;