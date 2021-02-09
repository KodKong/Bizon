const InitialState = 
{
    items: null, 
    item_page: 0
}


const items_reducer = (state = InitialState, action) => 
{
    switch (action.type)
    {
        case "GET_ITEMS": 
        {
            return {...state, items: action.items}
        }
        case "GET_ITEM_PAGE":
        {
            return {...state, item_page: action.item_page}
        }
        default: return state
    }
}

export default items_reducer; 