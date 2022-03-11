// ----------------------------------bottom component types--------------------------------NOTE:
export interface NavigationLinksArray {
    id: number
    name: string
    link: string
}

export interface ProductSubCategory {
    id: number
    text: string
    link: string
}

export interface ProductsCategoryArray {
    id: number
    category: string
    img: string
    link: string
    categoryList?: ProductSubCategory[]
}
