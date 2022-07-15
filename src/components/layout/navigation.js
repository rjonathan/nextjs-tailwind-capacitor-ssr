import NavigationDesktop from '@/components/layout/navigationDesktop'
import NavigationMobile from '@/components/layout/navigationMobile'
import {
    HomeIcon,
    DocumentIcon
} from '@heroicons/react/outline'

const Navigation = ({ menuCurrent }) => {

    const navigation = [
        {
            name: 'Accueil',
            href: '/',
            current: menuCurrent == 'index' ? true : false,
            icon: HomeIcon,
        },
        {
            name: 'Page 2',
            href: '/page2',
            current: menuCurrent == 'page2' ? true : false,
            icon: DocumentIcon,
        }
    ]

    return (
        <>

            <NavigationDesktop navigation={navigation} />
            <NavigationMobile navigation={navigation} />
            
        </>
    )
}

export default Navigation
