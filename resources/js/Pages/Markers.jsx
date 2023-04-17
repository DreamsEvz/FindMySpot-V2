import {Layout} from "../Layout/Layout";

const Markers = () => {
    return (
        <div className="bg-red-500 h-screen">
            <h1>Markers</h1>
        </div>
    );
}

Markers.layout = page => <Layout children={page} title="markers" />

export default Markers;