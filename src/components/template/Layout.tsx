import ProtectedRoute from '../ProtectedRoute';
import Content from './Content';
import Header from './Header';
import SideMenu from './SideMenu';
interface LayoutProps {
    title: string;
    subtitle: string;
    children?: any;
}

const Layout = ({ title, subtitle, children }: LayoutProps) => {
    return (
        <ProtectedRoute>
        <div className='flex h-screen w-screen'>
            <SideMenu />
            <div className='flex flex-col flex-1 p-7 dark:bg-gray-800 bg-gray-300'>
                <Header title={title} subtitle={subtitle} />
                <Content>
                    {children}
                </Content>
            </div>
        </div>
        </ProtectedRoute>
    );
};

export default Layout;