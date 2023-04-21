import React from 'react'
import { Layout } from '../layout/Layout'
import { router } from '@inertiajs/react'

const Profil = (props) => {

    const {name} = props
    
    const disconnect = () => { 
        router.delete('/logout')
    }

    return (
        <div>
            <a href='/' onClick={() => {disconnect()}} type="button" className="rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Déconnexion</a>
            <span>{name}</span>
        </div>
    )
}

Profil.layout = page => <Layout children={page} title="profil" />

export default Profil