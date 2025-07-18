

import pageMenu from "./moduleMenu/pageMenu.tsx";
import {PageBasket} from "./moduleBasket/index.ts";

export const publicRouts =[
    {
        url: '/',
        component: pageMenu
    },
    {
        url: '/basket',
        component: PageBasket
    },

]

