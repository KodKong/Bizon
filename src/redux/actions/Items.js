

export const getItemsAC = (items) => 
{
    return {
        type: "GET_ITEMS", 
        items
    }
}

export const getItemsPageAC = (page) => 
{
    return {
        type: "GET_ITEMS_PAGE", 
        page
    }
}