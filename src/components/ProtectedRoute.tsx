import useAuth from "@/data/hook/useAuth";
import { useRouter } from "next/router";
import Loading from "./Loading";



const ProtectedRoute = ({ children }: any) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    function renderContent() {
        return (
            <>{children}</>
        )
    }
    function renderLoading() {
        return (
            <div className="flex justify-center align-center h-screen w-screen">
                <Loading />
            </div>
        )
    }

    if (loading) {
        return renderLoading();
    } else if (user?.email) {
        return renderContent();
    } else {
        router.push('/login')
        return <></>;
    }
};

export default ProtectedRoute;