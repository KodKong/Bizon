

export const getItemsAC = (items) => 
{
    return {
        type: "GET_ITEMS", 
        items
    }
}


export const getItemPageAC = (item_page) => 
{
    return {
        type: "GET_ITEM_PAGE", 
        item_page
    }
}