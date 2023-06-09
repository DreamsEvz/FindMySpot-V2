import { Link } from "@inertiajs/react";
import { UserCircleIcon as UserCircleOutline, LocationMarkerIcon as LocationMarkerOutline, UserGroupIcon as UserGroupOutline} from '@heroicons/react/outline'
import { UserCircleIcon as UserCircleSolid, LocationMarkerIcon as LocationMarkerSolid, UserGroupIcon as UserGroupSolid } from '@heroicons/react/solid'


export function Layout({ children, title }) {

        return <>
                <header className="fixed bottom-0 w-full bg-blue-800 z-10 p-3">
                        <div className="w-8/10 grid grid-cols-4 m-auto bg-white rounded-full border-2 border-gray-500 p-1 divide-x">
                                <Link href="/map" className="flex justify-center items-center cursor-pointer">
                                        <span className="hidden lg:block md:block">Carte</span>
                                        {
                                                title == "map" ? <img src="images/logo_sans_banner.svg" className="text-blue-500 w-10 h-auto sm:ml-2 lg:ml-2"/> : <img src="images/logo_sans_banner_outline.svg" className="w-10 h-auto sm:ml-2 lg:ml-2"/>
                                        }
                                </Link>
                                <Link href="/markers" className="flex justify-center items-center cursor-pointer">
                                        <span className="hidden lg:block md:block">Mes points</span>
                                        {
                                                title == "markers" ? <LocationMarkerSolid className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></LocationMarkerSolid> : <LocationMarkerOutline className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></LocationMarkerOutline>
                                        }
                                </Link>
                                <Link href="/friends" className="flex justify-center items-center cursor-pointer">
                                        <span className="hidden lg:block md:block">Mes amis</span>
                                        {
                                                title == "friends" ? <UserGroupSolid className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></UserGroupSolid> : <UserGroupOutline className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></UserGroupOutline>
                                        }
                                </Link>
                                <Link href="/profil" className="flex justify-center items-center cursor-pointer">
                                        <span className="hidden lg:block md:block">Mon profil</span>
                                        {
                                                title == "profil" ? <UserCircleSolid className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></UserCircleSolid> : <UserCircleOutline className="text-blue-800 h-6 sm:ml-2 lg:ml-2"></UserCircleOutline>
                                        }
                                </Link>
                        </div>
                </header>

                {children}
        </>
}