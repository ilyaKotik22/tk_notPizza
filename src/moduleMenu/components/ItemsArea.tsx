import React, {useEffect} from "react";

import '../styles/ItemsArea.css'
interface Props{
    ClassName?: string
}

import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../../store/store.ts";

import {Item} from "./Item.tsx";
import {fetchDataMenu} from "../store/menuReducer.ts";
export const ItemsArea: React.FC<Props> = ({ ClassName }) => {
    const dispatch = useDispatch<AppDispatch>()
    const {data} = useSelector((state:RootState)=> state.menu)
    const filter1 = useSelector((state:RootState)=> state.filter.filters['FilterFirst']?.changedElements)
    const filter2 = useSelector((state:RootState)=> state.filter.filters['FilterSecond']?.changedElements)
    const filterPrice = useSelector((state:RootState)=> state.filter.sliders['sliderFirst']?.value)
    console.log(filter1)
    console.log(filter2)
    useEffect(() => {
        dispatch(fetchDataMenu())
    }, []);
    return (
        <div className={ ClassName}>
            {data?.items ? data.items.map((el)=>{
                if ((filter1?.includes(el.sex) || filter1?.includes('все пола'))
                    &&
                    (filter2?.includes(el.material) || filter2?.includes('все материалы'))
                    &&
                    el.price <= filterPrice)
                return(
                    <Item ClassName={'Item'}
                          id={el.id}
                          name={el.name}
                          description={el.description}
                          price={el.price}
                          sex={el.sex}
                          material={el.material}
                    />
                )
            }) : <></>}
            {/*{data?.items ? data.items?.map((el)=>{*/}
            {/*    return(*/}
            {/*        <Item ClassName={'Item'}*/}
            {/*            id={el.id}*/}
            {/*            name={el.name}*/}
            {/*            description={el.description}*/}
            {/*            price={el.price}*/}
            {/*            sex={el.sex}*/}
            {/*            material={el.material}*/}
            {/*        />*/}

            {/*}) :*/}
            {/*    <div>*/}
            {/*        loading data...*/}
            {/*    </div>*/}
            {/*    }*/}
        </div>
    );
};