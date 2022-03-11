import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BsHeart, BsPerson } from 'react-icons/bs'
import { FiShoppingCart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import useWindowSize from '../../../../hooks/useWindowSize'
import { getCart, openCart } from '../../../../redux/cartState/cartSlice'
import {
    isOpenHamburgerMenu,
    openHamburgerMenu,
} from '../../../../redux/HeaderState/menuOpenSlice'

const ProductSearchBar = dynamic(() => import('./ProductSearchBar'))

// -----------------header main logo component--------------------
// ----------------------------------------------------------NOTE:
function LogoComponent() {
    return (
        <div className="lg:pr-5 ml-7 lg:ml-0">
            <p className="cursor-pointer font-bold text-2xl sm:text-[28px] text-blue-400 uppercase ">
                <Link href="/" passHref>
                    DeepBazar
                </Link>
            </p>
        </div>
    )
}

// -----------------Header page language and contact-us--------------------
// ------------------------------------------------------------------NOTE:
function LangAndContact() {
    return (
        <div className="h-full flex items-center">
            <div className="ml-5 cursor-pointer">
                <div className="leading-none text-gray-700 text-[13px]">
                    Language
                </div>
                <div className="leading-none text-gray-700 text-[14px] font-medium">
                    English
                </div>
            </div>
            <div className="ml-5 mr-5 cursor-pointer">
                <div className="leading-none text-gray-700 text-[13px]">
                    017*******
                </div>
                <div className="leading-none text-gray-700 font-medium text-[14px]">
                    <Link href="/customer-services">Contact Us</Link>
                </div>
            </div>
        </div>
    )
}

// -----------------header hamburger menu icons component--------------------
// NOTE:---------------------------------------------------------------------
function HamburgerMenuIcon() {
    const dispatch = useDispatch()
    const isMenu = useSelector(isOpenHamburgerMenu)
    return (
        <div className="none lg:hidden">
            <AiOutlineMenu
                onClick={() => dispatch(openHamburgerMenu())}
                className={`h-7 w-7 text-black cursor-pointer ${
                    isMenu ? 'hidden' : 'visible'
                }`}
            />

            <AiOutlineClose
                onClick={() => dispatch(openHamburgerMenu())}
                className={`h-7 w-7 text-black cursor-pointer ${
                    isMenu ? 'visible' : 'hidden'
                }`}
            />
        </div>
    )
}

// -----------------header right icons--------------------
// --------------------------------------------------NOTE:
function RightIcons() {
    const { cartTotalQuantity } = useSelector(getCart)
    const dispatch = useDispatch()
    return (
        <div className="flex md:space-x-4 space-x-2">
            <div
                onClick={() => dispatch(openCart())}
                className="md:w-12 md:h-12 rounded-full md:border flex justify-center items-center cursor-pointer group relative"
            >
                <FiShoppingCart className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-105 transform ease-out transition duration-200" />
                {cartTotalQuantity > 0 && (
                    <div className="absolute md:right-0 -right-1 md:top-0 -top-2 w-4 md:w-5 h-4 md:h-5 bg-red-500 text-white rounded-full flex justify-center items-center overflow-hidden">
                        <p className="text-[12px]">3</p>
                    </div>
                )}
            </div>
            <div className="md:w-12 md:h-12 rounded-full md:border flex justify-center items-center cursor-pointer group">
                <Link href="/favorite-product" passHref>
                    <BsHeart className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-105 transform ease-out transition duration-200" />
                </Link>
            </div>
            <div className="md:w-12 md:h-12 rounded-full md:border flex justify-center items-center cursor-pointer group overflow-hidden">
                {/* <img
                    className="w-full h-full object-cover"
                    src={Cookies.get('profileImg')}
                    alt={Cookies.get('userName')}
                /> */}

                <BsPerson className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-105 transform ease-out transition duration-200" />
                {/* )} */}

                {/* <div className="w-full h-full bg-yellow-400 flex justify-center items-center">
                    <p>Shariar</p>
                </div> */}
            </div>
        </div>
    )
}

//-------------------------------------------------------------
//-------------------------------------------------------------
// ------------------Header top main function-------------------
function HeaderTopComp() {
    const size = useWindowSize()
    return (
        <div className="w-full flex items-center justify-between px-4 2xl:px-0 transition-all duration-200">
            <HamburgerMenuIcon />

            <LogoComponent />
            {size.width >= 1024 && <ProductSearchBar />}
            {size.width >= 1024 && <LangAndContact />}

            <RightIcons />
        </div>
    )
}

export default HeaderTopComp
