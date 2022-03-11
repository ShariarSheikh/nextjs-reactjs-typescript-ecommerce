import { useRouter } from 'next/dist/client/router'
import Link from 'next/link'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import pdCategoryLink from '../../../../db/pdCategoryLink'
import {
    dropdownProductCategory,
    hideCategory,
    showCategory,
} from '../../../../redux/HeaderState/dropdownProductCategorySlice'
import { NavigationLinksArray } from '../types'

// ------------------this array list is navigation link------------------
// NOTE:----------------------------------------------------------------

const links: NavigationLinksArray[] = [
    {
        id: 1,
        name: 'Home',
        link: '/',
    },
    {
        id: 2,
        name: 'All Products',
        link: '/shop',
    },
    {
        id: 3,
        name: 'Customer Services',
        link: '/customer-services',
    },
    {
        id: 4,
        name: 'Help Center',
        link: '/help',
    },
]

// -----------------------------product menu dropdown-----------------------
// --------------------------------------------------------------------NOTE:
function DropdownProductMenu({ isShow }: { isShow: boolean }) {
    const dispatch = useDispatch()

    return (
        <div className="w-full min-w-[1024px] max-w-[1366px] z-40 pr-4 2xl:px-0 absolute top-5 left-0 shadow-md cursor-default">
            <ul
                className={`w-full flex justify-between items-center h-full bg-gray-50 transition-all ${
                    isShow ? 'h-[64px]' : 'h-0'
                } duration-150`}
            >
                {pdCategoryLink
                    ?.slice(1)
                    .map(({ id, category, img, categoryList: subCategoryList }) => (
                        <li
                            className={`flex-grow border-r px-2 group h-full cursor-pointer
               border-gray-200 w-full flex justify-between items-center relative ${
                   isShow ? 'visible' : 'hidden'
               }`}
                            key={id}
                        >
                            <p className="font-roboto">{category}</p>
                            <img src={img} alt="category" className="w-[40px]" />

                            {/* NOTE: subcategory list */}
                            <ul className="absolute top-16 left-0 w-full bg-white shadow-lg cursor-default">
                                {subCategoryList.map(
                                    ({ id: subCtgId, text, link: subCtgLink }) => (
                                        <Link
                                            href={
                                                subCtgLink === '/no'
                                                    ? '/'
                                                    : `${subCtgLink}`
                                            }
                                            passHref
                                            key={subCtgId}
                                        >
                                            <li
                                                className="px-2 py-2 cursor-pointer border-b border-gray-100 hover:bg-gray-100"
                                                onClick={() =>
                                                    dispatch(hideCategory())
                                                }
                                            >
                                                {text}
                                            </li>
                                        </Link>
                                    )
                                )}
                                <Link href={`/shop${subCategoryList}`} passHref>
                                    <li
                                        role="none"
                                        className="text-center px-2 py-2 cursor-pointer border-b border-gray-100 hover:scale-105 duration-200"
                                        onClick={() => dispatch(hideCategory())}
                                    >
                                        All
                                    </li>
                                </Link>
                            </ul>
                        </li>
                    ))}
            </ul>
        </div>
    )
}

//-------------------------------------------------------------
//-------------------------------------------------------------
// ------------------Header bottom main function-------------------
function BottomComp() {
    const router = useRouter()
    const dispatch = useDispatch()
    const openCategory = useSelector(dropdownProductCategory)

    return (
        <nav className="w-full px-4 2xl:px-0 h-10 py-6 border-b border-gray-300">
            <div className="w-full h-full flex items-center justify-between min-w-[600px] relative">
                {/* left navigation div */}
                <div className="flex h-full items-center">
                    {links?.slice(0, 1).map(({ id, name, link }) => (
                        <Link href={link} key={id} passHref>
                            <button
                                type="button"
                                className={`font-roboto font-medium text-sm text-gray-800 cursor-pointer
                             transition duration-200 p-2 hover:border-b-2 border-gray-900 ${
                                 router.pathname === link
                                     ? 'border-b-2 border-gray-900'
                                     : ''
                             }`}
                            >
                                {name}
                            </button>
                        </Link>
                    ))}
                    <div
                        className="flex h-10 items-center font-roboto font-medium text-sm text-gray-800 cursor-pointer p-2"
                        onMouseEnter={() => dispatch(showCategory())}
                        onMouseLeave={() => dispatch(hideCategory())}
                    >
                        Categories <RiArrowDropDownLine className="text-xl" />
                        <DropdownProductMenu isShow={openCategory} />
                    </div>
                    {/* //.... */}
                    {links.slice(1, 4).map(({ id, name, link }) => (
                        <Link href={link} key={id} passHref>
                            <button
                                type="button"
                                className="font-roboto font-medium text-sm text-gray-800 cursor-pointer transition duration-200 p-2"
                            >
                                {name}
                            </button>
                        </Link>
                    ))}
                </div>
                {/* any random things */}
                <div className="font-medium pr-5 md:pr-0 cursor-pointer">
                    Covid-19
                </div>
            </div>
        </nav>
    )
}

export default BottomComp
