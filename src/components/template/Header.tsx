import SideMenu from './SideMenu';
interface HeaderProps {
    title: string;
    subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
    return (
        <>
            <h1 className='font-black text-3xl text-gray-800 dark:text-gray-200'>
                {title}
            </h1>
            <h2 className='font-light text-sm text-gray-600 dark:text-gray-400'>
                {subtitle}
            </h2>
        </>
    );
};

export default Header;