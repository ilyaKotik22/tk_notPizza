import React from "react";
import {Filter} from "./FIlter.tsx";
import {Slider} from "./Slider.tsx";
import './FIlter.tsx'
import '../styles/Filter.css'
interface Props{
    ClassName?: string
}

export const FilterBody: React.FC<Props> = ({ ClassName }) => {
    return (
        <div className={ ClassName}>
            <Filter
                    name={'FilterFirst'}
                    header={'пол'}
                    options={['все пола','unisex','female','male']}
                    defaultOption={'все пола'}
            />
            <Filter
                name={'FilterSecond'}
                header={'материал'}
                options={['все материалы','хлопок','кожа','вискоза', 'шерсть','полиэстер']}
                defaultOption={'все материалы'}
            />

            <Slider ClassName={'Slider'} slider={{name: 'sliderFirst',size:{min:0,max:12000},value: 5000}}/>

        </div>);
};