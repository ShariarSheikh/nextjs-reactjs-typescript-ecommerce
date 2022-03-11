// -----------------header product search bar component--------------------
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { RiArrowDropDownFill } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import pdCategoryLink from '../../../../db/pdCategoryLink'
import { ProductLinks } from '../../../../db/types'
import useWindowSize from '../../../../hooks/useWindowSize'
import {
    hideSearchList,
    showSearchList,
} from '../../../../redux/HeaderState/searchBarDropdownSlice'
import getSearchProducts from '../../../../utils/getSearchProducts'

// NOTE: ------------------------------------------------------------------
function ProductSearchBar() {
    const size = useWindowSize()
    const [searchResult, setSearchResult] = useState<ProductLinks[]>([])
    const [category, setCategory] = useState<string>('All')
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)
    const dispatch = useDispatch()
    const menuRef = useRef(null)
    const router = useRouter()

    // NOTE: if window scroll then off existing open component in header--------------------|
    useEffect(() => {
        if (isOpenMenu && menuRef.current.focus) {
            window.addEventListener('scroll', () => setIsOpenMenu(false))
        }
    }, [isOpenMenu])

    // NOTE: header search bar link click handler--------------------|
    const clickHandler = (text) => {
        setCategory(text)
        setIsOpenMenu(false)
    }
    // NOTE: header search bar search handler--------------------|
    const searchHandler = (text) => {
        getSearchProducts({ category, text }).then(
            (data) => data && setSearchResult(data)
        )
    }

    // NOTE: check if in product list exits in search bar--------------|
    useEffect(() => {
        if (searchResult.length >= 1) {
            dispatch(showSearchList())
            window.document.body.style.overflowY = 'hidden'
        } else if (searchResult.length === 0) {
            dispatch(hideSearchList())
            window.document.body.style.overflowY = 'auto'
        }
    }, [searchResult])

    return (
        <div className="flex-1">
            <form className="w-full flex justify-between h-[42px] bg-gray-200 z-50">
                {/* NOTE: if width in smaller then 640 then don't show this */}
                {size.width >= 640 && (
                    <div
                        className="relative text-base h-full max-w-[200px] flex items-center justify-center"
                        onClick={() => setIsOpenMenu(!isOpenMenu)}
                        ref={menuRef}
                        onBlur={() => setIsOpenMenu(false)}
                    >
                        <div className="px-2 w-full flex justify-center cursor-pointer items-center border">
                            {category} <RiArrowDropDownFill />
                        </div>

                        <div
                            className="w-[240px] h-auto max-w-[240px] max-h-[520px] text-black absolute left-0 top-12 drop-shadow-xl bg-white pt-2 z-40"
                            hidden={!isOpenMenu}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {pdCategoryLink.map(({ id, category: pdCategory }) => (
                                <p
                                    className="text-sm cursor-pointer h-8 border-b border-gray-200 px-3 flex items-center"
                                    key={id}
                                    onClick={() => clickHandler(pdCategory)}
                                >
                                    {pdCategory}
                                </p>
                            ))}
                        </div>
                    </div>
                )}

                <div className="flex-1 border-t border-b pl-1 sm:pl-3 outline-none relative">
                    <input
                        className="w-full h-full outline-none px-3"
                        type="text"
                        placeholder="Search"
                        onChange={(event) => searchHandler(event.target.value)}
                    />

                    {/* NOTE: this is search result component---------------------------------------NOTE: */}
                    {searchResult.length > 0 && (
                        <div className="flex flex-col justify-between absolute top-[42px] mx-[12px] pt-3 bg-white left-0 z-40 right-0 shadow-lg w-full min-h-[200px] overflow-hidden max-h-[410px]">
                            <div className="w-full max-h-[360px] overflow-hidden">
                                {searchResult
                                    .slice(0, 10)
                                    .map(({ title, id, image, price }) => (
                                        <Link href="/home" passHref>
                                            <div
                                                key={id}
                                                className="h-8 mb-1 px-3 overflow-hidden hover:bg-gray-100 cursor-pointer flex justify-between items-center"
                                            >
                                                <div className="ml-0 sm:ml-6 flex">
                                                    <h1 className="text-[13px] sm:text-base max-w-[65%] sm:w-auto overflow-hidden line-clamp-1">
                                                        {title}
                                                    </h1>
                                                    <span className="ml-10 text-sm font-normal text-yellow-500">
                                                        ৳ {price}
                                                    </span>
                                                </div>
                                                {size.width >= 640 && (
                                                    <Image
                                                        className="overflow-hidden object-cover mr-10"
                                                        src={image}
                                                        alt="product"
                                                        width={40}
                                                        height={40}
                                                        objectFit="cover"
                                                    />
                                                )}
                                            </div>
                                        </Link>
                                    ))}
                            </div>
                            <div>
                                <div
                                    onClick={() =>
                                        router.push(category === 'All' && '/shop')
                                    }
                                    className="w-full h-8 text-center pt-1 bg-[#6bb4ff] text-white cursor-pointer"
                                >
                                    All
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <div className="w-10 flex items-center justify-center border cursor-pointer bg-[#6bb4ff] group">
                    <IoSearchOutline
                        onClick={() => router.push('/shop')}
                        className="text-white font-bold text-xl group-hover:scale-125 transform ease-out transition duration-200"
                    />
                </div>
            </form>
        </div>
    )
}

export default ProductSearchBar
