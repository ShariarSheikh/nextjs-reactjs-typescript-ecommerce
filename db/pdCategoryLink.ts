import { ProductsCategoryArray } from '../components/custom/Header/types'

// -------------------product category list--------------------------
// NOTE:-------------------------------------------------------------
const pdCategory: ProductsCategoryArray[] = [
    {
        id: 1,
        category: 'All',
        img: 'https://png.pngtree.com/png-vector/20190703/ourlarge/pngtree-shopping-bag-icon-in-trendy-style-isolated-background-png-image_1536177.jpg',
        link: ' ',
    },
    {
        id: 2,
        category: "Men's Clothes",
        img: 'https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80',
        link: '/men-clothes',
        categoryList: [
            {
                id: 1,
                text: "Men's White T-Shirt",
                link: '/product/1',
            },
            {
                id: 2,
                text: 'Black t-shirt for man',
                link: '/product/8',
            },
            {
                id: 3,
                text: "Men's clothes jackets",
                link: '/product/9',
            },
            {
                id: 4,
                text: 'Shirt blue',
                link: '/product/11',
            },
            {
                id: 5,
                text: "Men's Black clothes",
                link: '/product/19',
            },
        ],
    },
    {
        id: 3,
        category: "Women's Clothes",
        img: 'https://media.istockphoto.com/photos/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-picture-id1257563298?b=1&k=20&m=1257563298&s=170667a&w=0&h=Hhf0-AsQp7Z7k9q8XKHfQUY86uPJvE8vmmGHXihWS_M=',
        link: '/women-clothes',
        categoryList: [
            {
                id: 1,
                text: "Women's Red wedding dress",
                link: '/product/2',
            },
            {
                id: 2,
                text: "Women's Clothes jackets",
                link: '/product/12',
            },
            {
                id: 3,
                text: "Women's Clothes jackets",
                link: '/product/17',
            },
            {
                id: 4,
                text: "Women's Clothes jackets",
                link: '/product/13',
            },
            {
                id: 5,
                text: "Women's Clothes jackets",
                link: '/product/18',
            },
        ],
    },
    {
        id: 4,
        category: 'Bags',
        img: 'https://png.pngitem.com/pimgs/s/297-2978659_pencil-case-in-the-bag-clipart-clipart-school.png',
        link: '/bags',
        categoryList: [
            {
                id: 1,
                text: 'Big tadybear bags',
                link: '/product/5',
            },
            {
                id: 2,
                text: 'Styles bags',
                link: '/product/3',
            },
            {
                id: 3,
                text: 'Pink Bag',
                link: '/product/28',
            },
            {
                id: 4,
                text: 'White bag for child',
                link: '/product/29',
            },
            {
                id: 5,
                text: 'Blue bag',
                link: '/product/30',
            },
        ],
    },
    {
        id: 5,
        category: 'Toys',
        img: 'https://png.pngitem.com/pimgs/s/278-2782298_duck-dog-chew-toy-squeaky-dog-toys-hd.png',
        link: '/toys',
        categoryList: [
            {
                id: 1,
                text: 'Toy',
                link: '/product/32',
            },
            {
                id: 2,
                text: 'Toy 2',
                link: '/product/6',
            },
            {
                id: 3,
                text: 'Toy 3',
                link: '/product/',
            },
            {
                id: 4,
                text: 'No Product',
                link: '/no',
            },
            {
                id: 5,
                text: 'No Product',
                link: '/no',
            },
        ],
    },

    {
        id: 6,
        category: 'Baby and Kids',
        img: 'https://png.pngitem.com/pimgs/s/15-159849_baby-clothes-transparent-images-png-baby-clothes-png.png',
        link: '/baby-and-kids',
        categoryList: [
            {
                id: 1,
                text: "Baby's t-shirt",
                link: '/product/4',
            },
            {
                id: 2,
                text: "Baby's t-shirt 2",
                link: '/product/33',
            },
            {
                id: 3,
                text: "Baby's t-shirt 3",
                link: '/product/34',
            },
            {
                id: 4,
                text: "Baby's t-shirt 4",
                link: '/product/35',
            },
            {
                id: 5,
                text: 'No Product',
                link: '/no',
            },
        ],
    },
]

export default pdCategory
