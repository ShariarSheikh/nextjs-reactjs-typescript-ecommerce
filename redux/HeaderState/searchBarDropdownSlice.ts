import { createSlice } from '@reduxjs/toolkit'

interface StateProps {
    open: boolean
}

const INITIAL_STATE = {
    open: false,
}

const searchBarDropdownSlice = createSlice({
    name: 'search bar dropdown',
    initialState: INITIAL_STATE as StateProps,

    reducers: {
        showSearchList: (state) => {
            state.open = true
        },
        hideSearchList: (state) => {
            state.open = false
        },
    },
})

export const { showSearchList, hideSearchList } = searchBarDropdownSlice.actions

export const isSearchList = (state) => state.isSearchList.open

export default searchBarDropdownSlice.reducer
