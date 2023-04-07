import {Layout} from "../layout/Layout";

const Markers = () => {
    return (
        <div className="bg-red-500">
            <h1>Markers</h1>
        </div>
    );
}

Markers.layout = page => <Layout children={page} title="markers" />

export default Markers;