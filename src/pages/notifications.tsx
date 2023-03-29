import Layout from "@/components/template/Layout";
import useAppData from "@/data/hook/useAppData";


const Notifications = () => {
    const {nome} = useAppData();
    return (
        <Layout title="Notifications" subtitle="Here you're going to see your notifications">
                <h3>{nome}</h3>

        </Layout>
    );
};

export default Notifications;