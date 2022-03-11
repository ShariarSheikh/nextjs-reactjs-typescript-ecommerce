import { createSlice } from '@reduxjs/toolkit'

interface StateProps {
    open: boolean
}

const INITIAL_STATE = {
    open: false,
}

const hamburgerMenuSlice = createSlice({
    name: 'hamburger menu',
    initialState: INITIAL_STATE as StateProps,

    reducers: {
        openHamburgerMenu: (state) => {
            state.open = !state.open
            window.document.body.style.overflow = state.open ? 'hidden' : 'auto'
        },
    },
})

export const { openHamburgerMenu } = hamburgerMenuSlice.actions

export const isOpenHamburgerMenu = (state) => state.isOpenHamburgerMenu.open

export default hamburgerMenuSlice.reducer
