import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartState/cartSlice'
import dropdownProductCategorySlice from './HeaderState/dropdownProductCategorySlice'
import hamburgerMenuSlice from './HeaderState/menuOpenSlice'
import searchBarDropdownSlice from './HeaderState/searchBarDropdownSlice'

const store = configureStore({
    reducer: {
        // NOTE: this is header and navigation state---------------------------
        dropdownProductCategory: dropdownProductCategorySlice,
        isSearchList: searchBarDropdownSlice,
        isOpenHamburgerMenu: hamburgerMenuSlice,
        // NOTE:this is cart items state-------------------------
        getCart: cartSlice,
    },
})

export default store
