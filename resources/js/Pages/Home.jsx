import Mapbox from "../Components/organisms/Map";
import { Layout } from "../layout/Layout";

const Home = () => {
    return (
        <>
        <Mapbox />
        </>
    );
}

Home.layout = page => <Layout children={page} title="Home" />

export default Home;