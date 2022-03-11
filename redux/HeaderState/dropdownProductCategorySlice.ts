import { createSlice } from '@reduxjs/toolkit'

interface StateProps {
    open: boolean
}

const INITIAL_STATE = {
    open: false,
}

const dropdownProductCategorySlice = createSlice({
    name: 'dropdown product category',
    initialState: INITIAL_STATE as StateProps,

    reducers: {
        showCategory: (state) => {
            state.open = true
        },
        hideCategory: (state) => {
            state.open = false
        },
    },
})

export const { showCategory, hideCategory } = dropdownProductCategorySlice.actions

export const dropdownProductCategory = (state) => state.dropdownProductCategory.open

export default dropdownProductCategorySlice.reducer
