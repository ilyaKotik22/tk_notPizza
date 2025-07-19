import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addInChange, createFilter, removeFromChange} from "../store/FilterReducer.ts";
import type {RootState} from "../../store/store.ts";
import {MyCheckBox} from "../../components/ui/myCheckBox/MyCheckBox.tsx";

type Slider ={
    min: number,
    max: number,
    default: number,

}

interface Props{
    name: string
    header:string
    options: string[]
    defaultOption: string
    slider?: Slider
    ClassName?: string
}

export const Filter: React.FC<Props> = ({ ClassName,name,options,defaultOption,header }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(createFilter({name: name, changedElements:[defaultOption], allElements: options}))
    }, []);
    const FilterSelect = useSelector((state:RootState)=> state.filter.filters[name]?.allElements)
    const ChangedSelect = useSelector((state:RootState)=> state.filter.filters[name]?.changedElements)
    return (
        <div className={ClassName}>

            <div style={{marginTop:25}}>{header}</div>
            {FilterSelect?.map((el) => {
                if (ChangedSelect.includes(el)) {
                    return (
                        <MyCheckBox onChange={() => dispatch(removeFromChange({name: name, change: el}))} text={el}
                                    changed={true}/>
                    )

                } else {
                    return (
                        <MyCheckBox onChange={() => dispatch(addInChange({name: name, change: el}))} text={el}
                                    changed={false}/>
                    )
                }
            })}
        </div>);
};