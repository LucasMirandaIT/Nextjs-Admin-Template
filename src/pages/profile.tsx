import Layout from "@/components/template/Layout";
import useAuth from "@/data/hook/useAuth";

const UserProfile = () => {

    const { user } = useAuth();
    console.log('user ::: ', user);
    return (
        <Layout title="User Profile" subtitle="Manage your user profile informations">
            <img className="w-20 h-20 rounded-full" src={user?.imageURL} alt="" />
            <p>Nome: </p> <span> {user?.name}</span>
            <p>Email: </p> <span> {user?.email}</span>
            <p>Provider: </p> <span> {user?.provider}</span>
        </Layout>
    );
};

export default UserProfile;