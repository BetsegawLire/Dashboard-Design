import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

export const navbarData = [
    {
        routeLink: 'dashboard',
        icon: faHome,
        label: 'Dashboard'
    },
    {
        routeLink: 'products',
        icon: faCoffee,
        label: 'Products'
    },
    {
        routeLink: 'statistics',
        icon: faAdd,
        label: 'Statistics'
    }
];