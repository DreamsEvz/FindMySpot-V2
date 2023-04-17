import React from 'react'
import { Layout } from '../Layout/Layout'

const Profil = () => {
    return (
        <div className='h-screen bg-red-700'>
            <h1>Profil</h1>
        </div>
    )
}

Profil.layout = page => <Layout children={page} title="profil" />

export default Profil