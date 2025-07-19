import React from "react";
import {Filter} from "./FIlter.tsx";
import {Slider} from "./Slider.tsx";
import './FIlter.tsx'
interface Props{
    ClassName?: string
}

export const FilterBody: React.FC<Props> = ({ ClassName }) => {
    return (
        <div className={ ClassName}>
            <Filter
                    name={'FilterFirst'}
                    header={'пол'}
                    options={['sadad','fdasqw','qwreq']}
                    defaultOption={'sadad'}
            />
            <Filter
                name={'FilterSecond'}
                header={'материал'}
                options={['sadad','fdasqw','qwreq']}
                defaultOption={'sadad'}
            />

            <Slider ClassName={'Slider'} slider={{name: 'sliderFirst',size:{min:0,max:12000},value: 5000}}/>
            <button>hgfd</button>
        </div>);
};