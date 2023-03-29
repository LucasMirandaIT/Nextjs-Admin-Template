import Link from "next/link";
import { HomeIcon } from "../icons";

interface MenuItemProps {
    label: string;
    url?: string;
    icon: any;
    className?: string;
    onClick?: () => void;
};

const MenuItem = ({ label, url, onClick, className, icon }: MenuItemProps) => {

    const renderLink = () => {
        return (
            <div className={`flex flex-col justify-center items-center h-20 w-20 text-gray-600 dark:text-gray-200 ${className} cursor-pointer`}>
                {icon}
                <span className="text-xs font-light ">{label}</span>
            </div>
        );
    };
    return (
        <li onClick={onClick} className="hover:bg-gray-200 dark:hover:bg-gray-800">
            {url ? <Link className="" href={url}>
                {renderLink()}
            </Link> : renderLink()}
        </li>
    );
};

export default MenuItem;