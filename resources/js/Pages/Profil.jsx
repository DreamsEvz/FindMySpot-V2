import React from 'react'
import { Layout } from '../layout/Layout'

const Profil = () => {
    return (
        <div>
            <h1>Profil</h1>
        </div>
    )
}

Profil.layout = page => <Layout children={page} title="profil" />

export default Profil