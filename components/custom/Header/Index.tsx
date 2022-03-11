import dynamic from 'next/dynamic'
import React from 'react'
import { useSelector } from 'react-redux'
import useWindowSize from '../../../hooks/useWindowSize'
import { isOpenHamburgerMenu } from '../../../redux/HeaderState/menuOpenSlice'
import { isSearchList } from '../../../redux/HeaderState/searchBarDropdownSlice'
import CartPopUp from '../CartPopUp/CartPopUp'
import ProductSearchBar from './component/ProductSearchBar'
import HeaderTopComp from './component/TopComponent'

const BottomComponent = dynamic(() => import('./component/BottomComponent'))
const HamburgerMenu = dynamic(() => import('./component/HamburgerMenu'))

function Header() {
    const isOpenMenu = useSelector(isOpenHamburgerMenu)
    const isSearchListOpen = useSelector(isSearchList)
    const size = useWindowSize()

    return (
        <header className="w-full py-5 flex items-center justify-between font-roboto  transition-all duration-150">
            <div className="max-w-[1440px] w-full m-auto relative">
                <HeaderTopComp />

                {/* this component will only show when menu in open NOTE: */}
                {isOpenMenu && <HamburgerMenu />}

                {/* NOTE: if header search bar open then active this div */}
                {isSearchListOpen && (
                    <div
                        className={`h-[100vh] w-[100vw] z-30 bg-black bg-opacity-20 fixed top-26 left-0 right-0 ${
                            size.width <= 1023 ? 'mt-[56px]' : ' '
                        }`}
                    />
                )}

                {/* if window width in gater then 1024 then show bottom component NOTE: */}
                {size.width >= 1024 && <BottomComponent />}

                {/* NOTE: if window width in smaller then 1024 then show Product search bar component NOTE: */}
                <div className="mt-2 px-4">
                    {size.width <= 1023 && <ProductSearchBar />}
                </div>

                {/* this is shopping NOTE: cart popup component come from right side */}
                <CartPopUp />
            </div>
        </header>
    )
}

export default Header
