

import pageMenu from "./moduleMenu/pageMenu.tsx";
import {PageBasket} from "./moduleBasket/index.ts";
import Auth from "./moduleAuth/Auth.tsx";

export const publicRouts =[
    {
        url: '/',
        component: pageMenu
    },
    {
        url: '/basket',
        component: PageBasket
    },
    {
        url: '/login',
        component: Auth
    }

]

