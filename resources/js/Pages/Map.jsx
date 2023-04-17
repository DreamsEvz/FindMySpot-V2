import CircularButton from "../Components/atoms/CircularButton";
import Mapbox from "../Components/organisms/Mapbox";
import { Layout } from "../Layout/Layout";

const Map = () => {
    return (
        <>
        <Mapbox />
        </>
    );
}

Map.layout = page => <Layout children={page} title="map" />

export default Map;