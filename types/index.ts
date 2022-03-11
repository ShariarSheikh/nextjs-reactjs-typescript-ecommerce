export interface CartItemProps {
    id: number
    category: string
    title: string
    images: string[]
    available: string
    price: number
    minQuantity: number
    currency: string
    discountOffer: string
    newProduct: boolean
    topSelling: boolean
    description: string
}
