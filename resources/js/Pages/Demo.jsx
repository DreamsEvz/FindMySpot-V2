import { InertiaLink } from '@inertiajs/inertia-react';
import {useEffect, useMemo, useState} from 'react';
import Inertia from '@inertiajs/inertia';

const Demo = () => {
    const [transitioning , setTransitioning] = useState(false);

    useEffect(() => {
        Inertia.on('start', () => {
            setTransitioning(true);
        });
        Inertia.on('finish', () => {
            setTransitioning(false);
        });
    }, []);

    const pageTransition = useMemo(() => {
        `transition duration-500 ease-in-out transform ${transitioning ? 'scale-95' : 'scale-100'}`;
    }, [transitioning]);
    return (
        <InertiaLink href='/'>
        <div className='container bg-slate-950 w-100'>
            <h1 className='text-blue-500'>This sis test a demo'</h1>
        </div>
        </InertiaLink>
    )
}

export default Demo