import { InertiaLink } from '@inertiajs/inertia-react';
import React from 'react';

const Demo = () => {
    return (
        <InertiaLink href='/'>
        <div className='container bg-slate-950 w-100'>
            <h1 className='text-blue-500'>This sis test a demo'</h1>
        </div>
        </InertiaLink>
    )
}

export default Demo