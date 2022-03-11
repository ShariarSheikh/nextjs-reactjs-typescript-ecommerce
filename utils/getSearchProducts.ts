const filterData = async ({ getCtg, text }: { getCtg: string; text: string }) => {
    const removeWhiteSpace = text.trim() // remove text left right space

    const data =
        removeWhiteSpace.length !== 0
            ? await import(`../db/${getCtg}`).then(({ default: d }) => d)
            : []

    return data.filter((x) =>
        x.title.toLocaleLowerCase().includes(removeWhiteSpace.toLocaleLowerCase())
    )
}
//

const getSearchProducts = async ({
    category,
    text,
}: {
    category: string
    text: string
}) => {
    let getCtg: string = 'all'

    switch (category.toUpperCase()) {
        case 'ALL':
            getCtg = 'allProductLinks'
            break
        case "MEN'S CLOTHES":
            getCtg = 'manProductLinks'
            break

        case "WOMEN'S CLOTHES":
            getCtg = 'womenProductLinks'
            break

        case 'BAGS':
            getCtg = 'bagsProductLinks'
            break

        case 'TOYS':
            getCtg = 'toysProductLinks'
            break

        case 'BABY AND KIDS':
            getCtg = 'babyProductLinks'
            break

        default:
            getCtg = 'ALL'
            break
    }

    // NOTE: search result return
    const result = await filterData({ getCtg, text })
    return result
}

export default getSearchProducts
