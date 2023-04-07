import { InertiaLink } from "@inertiajs/inertia-react";
import { UserCircleIcon as UserCircleOutline, LocationMarkerIcon as LocationMarkerOutline, UserGroupIcon as UserGroupOutline} from '@heroicons/react/outline'


export function Layout({children, page}) {
    return <>
        <header className="fixed bottom-0 w-full bg-blue-800 z-10 p-3">
                <div className="w-8/10 grid grid-cols-3 m-auto bg-white rounded-full border-2 border-gray-500 p-1">
                <InertiaLink href="/markers" className="flex justify-center items-center cursor-pointer" href="/points"><span className="hidden lg:block md:block">Mes points</span><LocationMarkerOutline className="text-blue-800 h-6 sm:ml-2 lg:ml-2">test</LocationMarkerOutline></InertiaLink>
                <InertiaLink className="border-x-2 flex justify-center items-center cursor-pointer" href="/friends"><span className="hidden lg:block md:block">Mes amis</span><UserGroupOutline className="text-blue-800 h-6 sm:ml-2 lg:ml-2">test</UserGroupOutline></InertiaLink>
                <InertiaLink className="flex justify-center items-center cursor-pointer" href="/profil"><span className="hidden lg:block md:block">Mon profil</span><UserCircleOutline className="text-blue-800 h-6 sm:ml-2 lg:ml-2">test</UserCircleOutline></InertiaLink>
                </div>
        </header>
        
        {children}
        </>
}