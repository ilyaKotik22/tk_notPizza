import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {FilterActionPayload, FilterEl, FilterSlider, InitialStateFilter, SliderAction} from './types.ts';
const initialState:InitialStateFilter = {
    filters: {},
    sliders:{}
}
const FilterSlice =createSlice({
    name: 'Filter',
    initialState,
    reducers:{
        createFilter(state:InitialStateFilter,action:PayloadAction<FilterEl>){

            state.filters[action.payload.name] = {
                name: action.payload.name,
                allElements: action.payload.allElements,
                changedElements: action.payload.changedElements // Просто присваиваем массив
            };
        },
        createSlider(state: InitialStateFilter,action:PayloadAction<FilterSlider>){
            console.log(action.payload)
            state.sliders[action.payload.name] = {
                name: action.payload.name,
                size: action.payload.size,
                value: action.payload.value
            }
        },
        addInSlider(state:InitialStateFilter,action:PayloadAction<SliderAction>){
            state.sliders[action.payload.name].value = action.payload.value
        },
        addInChange(state,action:PayloadAction<FilterActionPayload>){

            if ( ![...state.filters[action.payload.name].changedElements].includes(action.payload.change)){
                state.filters[action.payload.name]
                    .changedElements.push(action.payload.change)
            }

        },
        removeFromChange(state,action:PayloadAction<FilterActionPayload>){
            state.filters[action.payload.name]
                .changedElements = state.filters[action.payload.name]
                .changedElements
                .filter((el)=> el !== action.payload.change)
        }
    }
})
export const {createFilter, addInChange,removeFromChange,createSlider,addInSlider} = FilterSlice.actions
export default FilterSlice.reducer