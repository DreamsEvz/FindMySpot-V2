import { InertiaLink } from "@inertiajs/inertia-react";
import { UserCircleIcon as UserCircleOutline, LocationMarkerIcon as LocationMarkerOutline, UserGroupIcon as UserGroupOutline, MapIcon as MapIconOutilne } from '@heroicons/react/outline'
import { UserCircleIcon as UserCircleSolid, LocationMarkerIcon as LocationMarkerSolid, UserGroupIcon as UserGroupSolid, MapIcon as MapIconSolid } from '@heroicons/react/solid'
import { useEffect } from "react";


export function Layout({ children, title }) {

        return <>
                <header className="fixed bottom-0 w-full bg-blue-800 z-10 p-3">
                        <div className="w-8/10 grid grid-cols-4 m-auto bg-white rounded-full border-2 border-gray-500 p-1 divide-x">
                                <InertiaLink href="/map" className="flex justify-center items-center cursor-pointer">
                                        <span className="hidden lg:block md:block">Carte</span>
                                        {
                                                title == "map" ? <MapIconSolid className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></MapIconSolid> : <MapIconOutilne className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></MapIconOutilne>
                                        }
                                </InertiaLink>
                                <InertiaLink href="/markers" className="flex justify-center items-center cursor-pointer">
                                        <span className="hidden lg:block md:block">Mes points</span>
                                        {
                                                title == "markers" ? <LocationMarkerSolid className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></LocationMarkerSolid> : <LocationMarkerOutline className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></LocationMarkerOutline>
                                        }
                                </InertiaLink>
                                <InertiaLink href="/friends" className="flex justify-center items-center cursor-pointer">
                                        <span className="hidden lg:block md:block">Mes amis</span>
                                        {
                                                title == "friends" ? <UserGroupSolid className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></UserGroupSolid> : <UserGroupOutline className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></UserGroupOutline>
                                        }
                                </InertiaLink>
                                <InertiaLink href="/profil" className="flex justify-center items-center cursor-pointer">
                                        <span className="hidden lg:block md:block">Mon profil</span>
                                        {
                                                title == "profil" ? <UserCircleSolid className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></UserCircleSolid> : <UserCircleOutline className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></UserCircleOutline>
                                        }
                                </InertiaLink>
                        </div>
                </header>

                {children}
        </>
}